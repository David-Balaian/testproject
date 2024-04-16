// const http = require("http");
// const express = require("express");
// const bodyParams = require("body-parser");

// // get rout
// const routes = require("./routes.js");

// // start express
// const app = express();
// const server = http.createServer(app);

// // add body porser and crors
// app.use(bodyParams.json());
// app.use(bodyParams.urlencoded({ extend: true }));

// // start the server

// try {
//   app.listen(5000, () => {
//     console.log("server run on 5000 port", "color: #f90;");
//   });

//   app.use("/auth", routes);
// } catch (error) {
//   console.log("error >>", error);
// }

// const onClose = () => {
//   process.exit();
// };

// // app.get("/api", (req, res) => {
// //   return res.json({ users: ["user One", "user two", "user three"] });
// // });
