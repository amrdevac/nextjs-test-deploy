import { combineReducers } from "@reduxjs/toolkit";
import { reducer as masterService } from "src/slices/masterService";
import { reducer as Increment } from "src/slices/Increment";
import { reducer as LoginClass } from "src/slices/Login/LoginClass";
import { reducer as Validate } from "src/slices/validation/validate";
import { reducer as DrawerClass } from "src/slices/DrawerClass";

export const rootReducer = combineReducers({
  masterService: masterService,
  Increment: Increment,
  LoginClass: LoginClass,
  Validate: Validate,
  DrawerClass: DrawerClass,
});
