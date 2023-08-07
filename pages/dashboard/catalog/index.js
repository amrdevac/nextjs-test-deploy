import CatalogContent from "src/content/Catalog/CatalogContent";
import Drawer from "src/components/Drawer";

const Catalog = () => {
  return (
    <>
      <Drawer mainTitle="List Catalog">
        <CatalogContent></CatalogContent>
      </Drawer>
    </>
  );
};

export default Catalog;
