import axios from "axios";

axios
  .post("http://localhost:3000/users", {
    name: "Dex",
    age: 20,
  })
  .then((data) => {
    console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n");
    console.log(data);
    console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n");
  })
  .catch((e) => {
    console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n");
    console.log(e);
    console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n");
  });
