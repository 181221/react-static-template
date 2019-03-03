import React from "react";
import { withRouteData } from "react-static";
const ReactMarkdown = require("react-markdown");
export default withRouteData(({ pets, markdown }) => {
  console.log(pets);
  if (pets) {
    console.log("asdsad", pets[0]);

    const input = "# This is a header\n\nAnd this is a paragraph";

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: markdown }} />
        <br />
        <ReactMarkdown source={pets[0].description} />
      </div>
    );
  }
  return (
    <div>
      <p>loading</p>
    </div>
  );
});
