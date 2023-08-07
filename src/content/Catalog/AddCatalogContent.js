import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetButton, setRightButton } from "src/slices/DrawerClass";
import PushRouter, { DashboardPush } from "src/utils/CustomRouter";

const CatalogContent = () => {
  // const { reset } = useSelector((state) => state.DrawerClass);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetButton());
  });
  return (
    <>
      <i className="fa fa-user"></i>
      <div>jadi harus childern</div>
    </>
  );
};

export default CatalogContent;
