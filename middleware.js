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
  const url = req.url;
  if (url.includes("/token")) {
    const refToken = req.nextUrl.search.split("ref=")[1];
    const objToken = decrypt(decodeURIComponent(refToken));

    const currentTime = new Date().getTime();
    if (objToken.expired < currentTime) {
      return NextResponse.redirect("http://127.0.0.1:3000/login");
    } else {
      ls.set("token", objToken.token);
      return NextResponse.redirect("http://127.0.0.1:3000/dashboard");
    }
  }

  // ls.get("token") == null &&
  if ( url.includes("/dashboard")) {
    const userAgent = req.headers.get("user-agent");
  }
};
