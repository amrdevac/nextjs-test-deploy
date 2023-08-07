import CryptoJS from "crypto-js";
const secretKeyDefault = process.env.NEXT_PUBLIC_SELF_API_KEY;

export const encrypt = (data, secretKey = null) => {
  let key = secretKey;
  if (secretKey == null) {
    key = secretKeyDefault;
  }
  const result = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  return result;
};

export const decrypt = (data, secretKey) => {
  let key = secretKey;
  if (secretKey == null) {
    key = secretKeyDefault;
  }
  try {
    const bytes = CryptoJS.AES.decrypt(data, key);
    const result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return result;
  } catch (error) {
    console.warn(error);
    return false;
  }
};
