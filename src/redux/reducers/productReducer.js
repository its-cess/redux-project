import { Action } from "@remix-run/router";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: []
};

// Reducers always take two parameters. (type, action). Here we have destructed the action to {type, payload} as we set it up in
//our productActions.js file
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
