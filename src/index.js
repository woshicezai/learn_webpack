import React from "react";
import ReactDom from "react-dom";
import Search from "./search";

// if (module.hot) {
//   module.hot.accept(() => {
//     // alert('work')
//     const NextApp = require("./Name").default;
//     renderWithHotReload(NextApp);
//   });
// }
 
ReactDom.render(<Search />, document.getElementById("root"));
