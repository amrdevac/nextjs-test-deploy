import { useSelector } from "react-redux";

const ValidationParse = ({ inputName }) => {
  const { validation } = useSelector((state) => state.Validate);

  return (
    <>
      <div className="mx-1 mb-2">
        {validation &&
          validation[inputName] &&
          validation[inputName].map((element, key) => (
            <div key={key} className="text-red-500">
              {element}
              <br />
            </div>
          ))}
      </div>
    </>
  );
};

export default ValidationParse;
