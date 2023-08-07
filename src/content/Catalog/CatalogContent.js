import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRightButton } from "src/slices/DrawerClass";
import { DashboardPush } from "src/utils/CustomRouter";

const CatalogContent = () => {
  const router = useRouter();
  const addButton = (
    <button
      className="btn btn-sm  btn-success text-white font-semibold"
      onClick={() => DashboardPush(router, "catalog/add")}
    >
      Add Catalog
    </button>
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRightButton(addButton));
  });
  return (
    <>
      <div>jadi harus childern</div>
    </>
  );
};

export default CatalogContent;
