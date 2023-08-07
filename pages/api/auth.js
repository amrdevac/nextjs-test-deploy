import axios from "axios";
const request = require("src/utils/request");
export default async function handler(req, res) {
  if (req.method === "POST") {
    let isError = false;
    let httpStatusCode = 0;
    

    const url = "http://127.0.0.1:9002/login";
    const config = {
      method: "POST",
      url: url,
      data: {
        username :"admin",
        password :"password",
      },
    };

    const result = await axios(config)
      .then(function (response) {
        return request.setRequest(response.data);
      })
      .catch(function (error) {
        httpStatusCode = error.response.status;
        isError = true;
        return error;
      });

    if (isError) {
      return res.status(httpStatusCode).json(result.response.data);
    }
    return res.status(200).json(result);
  }
}
