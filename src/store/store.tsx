import { configureStore } from "@reduxjs/toolkit";
import * as consts from "./consts";

export interface State {
  custom: string;
  footer: string;
  copyright: string;
  logo?: string;
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case consts.SET_CUSTOM:
      return { ...state, custom: action.payload };
    case consts.SET_FOOTER:
      return { ...state, footer: action.payload };
    case consts.SET_LOGO:
      return { ...state, logo: action.payload };
    case consts.SET_COPYRIGHT:
      return { ...state, copyright: action.payload };
    default:
      return state;
  }
};

const preloadedState: State = {
  custom: "#20b076",
  footer: "#e9f7f1",
  copyright: "Your company copyright here!",
};

const store = configureStore({ reducer, preloadedState });
export default store;
