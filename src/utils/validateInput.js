import { setValidation, resetValidation } from "src/slices/validation/validate";

const validationParam = [];
let arrValidationResult = [];
let validateType, InputValue, InputName;

export const validateInput = (input, validation, dispatch) => {
  dispatch(resetValidation());
  const validationResponse = {};
  validationParam["required"] = "this field cannot be empty";
  validationParam["numeric"] = "this field must be a numeric value";
  validationParam["alpha_dash"] =
    "this field value must be a numeric,string and special character without white space";

  // melakuaknv validasi berdasarkan spesifikasi yang di kirimkan
  Object.entries(input).forEach(([keyInput, valInput]) => {
    arrValidationResult[keyInput] = [];
    if (
      validation[keyInput] != undefined &&
      validation[keyInput].includes("|")
    ) {
      validation[keyInput].split("|").forEach((valValidate, keyValidate) => {
        validationRun(valValidate, valInput, keyInput);
      });
    } else {
      validationRun(validation[keyInput], valInput, keyInput);
    }
  });

  // cek apakah terdapat array dengan value []  /kosong
  Object.entries(arrValidationResult).forEach(
    ([keyValidationResult, validationResult]) => {
      if (!validationResult.length) {
        delete arrValidationResult[keyValidationResult];
      }
    }
  );

  const convertArrToObject = { ...arrValidationResult };
  if (Object.keys(convertArrToObject).length > 0) {
    validationResponse.error = true;
    dispatch(setValidation({ validation: convertArrToObject }));
    throw "Validation Error";
  }
};

const _requiredValidation = () => {
  if (validateType == "required") {
    if (
      InputValue == undefined ||
      InputValue === "" ||
      InputValue === " " ||
      InputValue.length == 0
    ) {
      arrValidationResult[InputName].push(validationParam[validateType]);
    }
  }
};

const _numericValidation = () => {
  if (validateType == "numeric") {
    if (isNaN(InputValue)) {
      arrValidationResult[InputName].push(validationParam[validateType]);
    }
  }
};

const _alphaDash = () => {
  if (validateType == "alpha_dash") {
    var regex = /^[a-zA-Z0-9!@#$%^&*()_.-]+$/;

    if (!regex.test(InputValue)) {
      arrValidationResult[InputName].push(validationParam[validateType]);
    }
  }
};

const validationRun = (argValValidate, argValInput, argKeyInput) => {
  validateType = argValValidate;
  InputValue = argValInput;
  InputName = argKeyInput;

  _requiredValidation();
  _numericValidation();
  _alphaDash();
};
