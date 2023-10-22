import axios from "axios";

const Option = {
  // body: {
  username: "sina9062",
  // },
};

const data = axios.get("http://localhost:3000/api/v1/user/sina9062");
data
  .then((res) => console.log(res.data))
  .catch((err) => {
    // PROBLEM ON ERROR MSG
    // console.error(err.data);
    console.log("hi error");
  });
