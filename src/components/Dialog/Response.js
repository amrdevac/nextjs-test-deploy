import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Response = () => {
  const { responseMessage, responseStatus } = useSelector(
    (state) => state.LoginClass
  );
  return (
    <>
      <dialog id="response_modal" className="modal">
        <form method="dialog" className="modal-box text-center">
          <h3 className="font-bold text-lg">Response</h3>
          <p className="py-4">
            <FontAwesomeIcon
              icon={responseStatus ? faCheckCircle : faTimesCircle}
              color={responseStatus ? "green" : "red"}
              size="2x"
              className="shadow-xl"
            />
          </p>
          <h3 className=" text-lg">{responseMessage}</h3>
          <div className="mt-4 text-center">
            <button className="btn bg-gray-400 shadow-md text-white btn-sm">
              Ok
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Response;
