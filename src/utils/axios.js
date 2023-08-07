const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseUrlUpload = process.env.NEXT_PUBLIC_MEDIA_UPLOAD;
const username = process.env.NEXT_PUBLIC_MEDIA_USERNAME;
const password = process.env.NEXT_PUBLIC_MEDIA_PASSWORD;
var axios = require("axios");

exports.request = (method, path, body, token = null) => {
  const url = baseUrl + path;
  var config = {
    method: method,
    url: url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(body),
  };

  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

exports.privateAPI = (method, path, body) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/${path}`;
  var config = {
    method: method,
    url: url,

    data: JSON.stringify(body),
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

  return asdfasd;
};

exports.RequestHCAPIbaru = () => {
  const url = "http://localhost:1116/connection";
  var config = {
    method: "POST",
    url: url,
    data: JSON.stringify({ data: "hello" }),
    headers: {
      nama: "sutisno",
    },
  };
  const asdfasd = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return 123123;
    });
  return asdfasd;
};

exports.download = (method, path, body, token = null, filename) => {
  const url = baseUrl + path;
  var config = {
    method: method,
    url: url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    responseType: "blob",
    data: JSON.stringify(body),
  };

  return axios(config)
    .then(function (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename + ".csv");
      document.body.appendChild(link);
      link.click();
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

exports.url = process.env.NEXT_PUBLIC_BASE_URL;
