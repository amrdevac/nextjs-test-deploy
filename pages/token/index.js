import { useRouter } from "next/router";
import { useEffect } from "react";

const Token = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("dashboard");
  });
  return <></>;
};

export default Token;
