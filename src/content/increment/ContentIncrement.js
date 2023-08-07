import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, paramsValue } from "src/slices/Increment";

const ContentIncrement = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(3);

  const { value } = useSelector((state) => state.Increment);

  return (
    <>
      <p className="text-3xl">{value}</p>
      <div className="flex justify-center gap-5">
        <button
          className="btn-primary"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          className="btn-warning "
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>

        <div className="grid">
          <input
            className="form-control"
            type="text"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button
            className="btn-secondary"
            onClick={() => {
              dispatch(paramsValue(number));
            }}
          >
            Params Value
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentIncrement;
