import axios from "axios";
import client from "./src/client";
import { createGenerateClassName } from "@material-ui/core/styles";
import gql from "graphql-tag";
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
      }
    ];
  }
};
