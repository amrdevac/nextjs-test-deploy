const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const baseUrlUpload = process.env.NEXT_PUBLIC_MEDIA_UPLOAD
const username = process.env.NEXT_PUBLIC_MEDIA_USERNAME
const password = process.env.NEXT_PUBLIC_MEDIA_PASSWORD
var axios = require('axios');



exports.request = (method, path, body, token = null) => {

    const url = baseUrl + path
    var config = {
        method: method,
        url: url,
        headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(body)
    };

    return axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
            return error
        });

};

exports.privateAPI = (method, path, body,) => {
    // const url = "http://localhost:1116/" + path
    // fetch(url, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     data: JSON.stringify("")
    // }).then((resp) => {
    //     console.log("resp");
    //     // state.isPending = false;
    //     // history.push("/")
    // })

    // console.log("------");
    // console.log(process.env.NEXT_PUBLIC_HCAPI_CLIENT_ID);
    // console.log("------");
    // const authResult = axios({
    //     method: "POST",
    //     url: "https://ccp7.dev.bri.co.id/hcauth/oauth2/token",
    //     headers: { 
    //         "Content-Type": "application/json",
    //         "Origin": "http://fahmi.com"
    //  },
    //     data: JSON.stringify({
    //         // client_id: process.env.HCAPI_CLIENT_ID,
    //         client_id: "process.env.HCAPI_CLIENT_ID",
    //         client_secret: "process.env.HCAPI_CLIENT_SECRET",
    //     })
    // })
    //     .then(function (response) {
    //         console.log(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         return error
    //     });

    // return authResult;
    // Belum setup Authorisasi Scope
    // Belum setup User Info untuk get pernr
    const url = `${process.env.NEXT_PUBLIC_HOST}/api/${path}`
    // console.log( typeof body);
    var config = {
        method: method,
        url: url,
        
        data: JSON.stringify(body)
    };

    return axios(config)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
            return error
        });

    return asdfasd;
};


// exports.RequestHCAPIbaru = (path, body, token = null) => {
exports.RequestHCAPIbaru = () => {
    const url = "http://localhost:1116/connection"
    var config = {
        method: "POST",
        url: url,
        data: JSON.stringify({ data: "hello" }),
        headers: {
            nama: "sutisno"
        }
    };
    const asdfasd = axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return 123123
        });
    return asdfasd;

};

exports.download = (method, path, body, token = null, filename) => {
    const url = baseUrl + path
    var config = {
        method: method,
        url: url,
        headers: {
            "Authorization": "Bearer " + token,
            'Content-Type': 'application/json'
        },
        responseType: 'blob',
        data: JSON.stringify(body)

    };

    return axios(config)
        .then(function (response) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename + '.csv');
            document.body.appendChild(link);
            link.click();
        })
        .catch(function (error) {
            console.log(error);
            return error
        });
};

exports.url = process.env.NEXT_PUBLIC_BASE_URL