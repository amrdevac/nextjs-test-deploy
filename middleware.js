import { NextResponse } from "next/server";
import { useDispatch } from "react-redux";
import {
  setRequest,
  setRequestForCookies,
  getRequestFromCookies,
} from "src/utils/request";

import { decrypt } from "src/utils/encryption";
const CheckCookies = (cookiesValue, request) => {
  const response = NextResponse.next();
  response.cookies.set({
    name: "authorize",
    value: cookiesValue,
    httpOnly: true,
    sameSite: "strict",
  });
  response.cookies.delete("auth-result");
  return response;
};

const getAuthorize = (request) => {
  const getAuthorize = request.cookies.get("authorize");
  if (getAuthorize) {
    return true;
  }
  return false;
};

const deleteCurrentAuth = () => {
  const response = NextResponse.next();
  response.cookies.delete("authorize");
  response.cookies.delete("auth-result");
  return response;
};
const ls = require("local-storage");
export default middleware = async (req, res, next) => {
  // const response = NextResponse.next();
  const url = req.url;
  // if (url.includes("/login")) {
  //   return deleteCurrentAuth();
  // }
  // if (req.cookies.get("token")) {
  //   ls.set("token", decrypt(req.cookies.get("token").value));
  //   response.cookies.delete("token");
  // }
  if (url.includes("/token")) {
    const refToken = req.nextUrl.search.split("ref=")[1];
    const objToken = decrypt(decodeURIComponent(refToken));

    const currentTime = new Date().getTime();
    // console.log("expiredTime", objToken.token);
    // console.log("currentTime", currentTime);
    if (objToken.expired < currentTime) {
      console.log(" expired");
      return NextResponse.redirect("http://127.0.0.1:3000/login");
    } else {
      ls.set("token", objToken.token);
      // console.log(ls.get("token"));
      // return NextResponse.next();
      return NextResponse.redirect("http://127.0.0.1:3000/dashboard");
    }
  }

  // ls.get("token") == null &&
  if ( url.includes("/dashboard")) {
    const userAgent = req.headers.get("user-agent");

    // console.log(req["headers"]["user-agent"]);
    
    // const userAgent = req.headers;
    console.log("=========");
    console.log(userAgent);
    console.log("=========");

    // const reqhned = req["headers"];
      
    // console.log(12313123);
    // const userAgent = req.headers['user-agent'];


    // console.log(userAgent);

    // console.log(ls.get("token"));
    // return NextResponse.redirect("http://127.0.0.1:3000/login");
  }
  // return response;
  // const hasil = localStorage.getItem("login_responses");
  // if (url.includes("/api/auth")) {
  //   const response = NextResponse.next();
  //   console.log(response);
  //   // return response.formData();
  //   return response;
  //   // return NextResponse.json(
  //   //   { data: "Ga bisa eui, hampura ieu mah" },
  //   //   { status: 400 }
  //   // );
  // }
};
