import { decrypt, encrypt } from "./encryption";
const isEncrypted = process.env.NEXT_PUBLIC_IS_ENCRYPTED ?? true;

export const setRequest = (request) => {
  if (isEncrypted == "true") {
    return { data: encrypt(request) };
  }
  return request;
};

export const getRequest = (request) => {
  if (isEncrypted == "true") {
    let decode;
    try {
      decode = decodeURI(request);
      request = JSON.parse(decode);
    } catch (error) {}
    return decrypt(request.data);
  }
  return request;
};

export const getRequestFromCookies = (request) => {
  if (isEncrypted == "true") {
    let decode;
    try {
      decode = decodeURI(request);
      request = JSON.parse(decode);
    } catch (error) {}
    return decrypt(request.data);
  }
  return request;
};
