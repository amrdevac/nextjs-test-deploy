import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doingLoginApp } from "src/slices/Login/LoginClass";
import Loading from "src/components/Dialog/Loading";
import Response from "src/components/Dialog/Response";
import { validateInput } from "src/utils/validateInput";
import ValidationParse from "src/components/validateParse";
import { getRequest } from "src/utils/request";
import { useRouter } from "next/router";
import { encrypt } from "src/utils/encryption";

const LoginContent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { validation } = useSelector((state) => state.Validate);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const validation = {
      username: "required|alpha_dash",
    };
    const request = { username, password };
    validateInput(request, validation, dispatch);
    dispatch(doingLoginApp(request)).then((res) => {
      const response = getRequest(res.payload.data);
      const ass = Date.now();
      const expiredTime = parseInt(ass) + 1000;
      const token = encrypt({
        token: response.data.token,
        expired: expiredTime,
      });

      router.push({
        pathname: "/token",
        query: { ref: token },
      });
    });
  };

  useEffect(() => {}, []);

  return (
    <>
      <Loading></Loading>
      <Response></Response>
      {/* {session} */}
      <div className="grid">
        <div className="flex justify-center items-center h-screen w-[27em]  sm:w-[30em] md:w-[30em] mx-auto break-all">
          <div className="bg-gray-100 border rounded-sm p-4 shadow-lg">
            <div className="text-lg text-center flex justify-center">
              <Image
                src="/images/zzz.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <form
              onSubmit={(e) => {
                handleLogin(e);
              }}
              className="mt-5 grid gap-3"
            >
              <div className="bg-yellow-100 p-3 rounded-lg grid gap-3">
                <div className="font-bold">Peringatan</div>
                Jika salah password 3 kali maka IP akan di block <br />
                selama 30 menit
              </div>
              <div className="grid gap-2">
                <label className="px-2">Username</label>
                <input
                  type="text"
                  className={
                    validation?.username
                      ? "p-2 border rounded-lg focus:outline-blue-200 input-bordered input-error"
                      : "p-2 border rounded-lg focus:outline-blue-200"
                  }
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <ValidationParse inputName="username" />
              </div>
              <div className="grid gap-2">
                <label className="px-2">Password</label>
                <input
                  type="password"
                  className="p-2 border rounded-lg focus:outline-blue-200"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="grid rounded-lg my-2">
                <button
                  type="submit"
                  className="p-2 roudned-lg bg-red-500 text-white font-bold"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContent;
