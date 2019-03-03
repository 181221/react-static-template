import axios from "axios";
import client from "./src/client";
import { createGenerateClassName } from "@material-ui/core/styles";
import gql from "graphql-tag";
import fs from "fs";
import { markdown } from "markdown";

const marked = require("marked");
const generateClassName = createGenerateClassName();

const GET_USERS = gql`
  {
    users {
      id
      name
      login
    }
  }
`;
export default {
  plugins: [
    [
      "react-static-plugin-jss",
      {
        providerProps: {
          // These props will be passed to the underlying `JssProvider` component instance
          generateClassName
        }
      },
      "react-static-plugin-styled-components"
    ]
  ],

  getSiteData: () => ({
    title: "React Static"
  }),

  getRoutes: async () => {
    const {
      data: { users }
    } = await client.query({
      query: GET_USERS
    });
    return [
      {
        path: "/user",
        component: "src/pages/user",
        getData: () => ({
          users
        }),
        children: users.map(user => ({
          path: `/${user.id}`,
          component: "src/containers/User",
          getData: () => ({
            user
          })
        }))
      },
      {
        path: "/about",
        component: "src/containers/About",
        getData: () => ({
          markdown: markdown.toHTML(fs.readFileSync("./src/test.md", "utf-8"))
        })
      }
    ];
  },

  webpack: config => {
    const renderer = new marked.Renderer();

    config.module.rules[0].oneOf.unshift({
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            renderer
          }
        }
      ]
    });

    return config;
  }
};
