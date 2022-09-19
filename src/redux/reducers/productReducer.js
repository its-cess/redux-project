import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Cecily",
      category: "programmer"
    }
  ]
};

// Reducers always take two parameters. (type, action). Here we have destructed the action to {type, payload} as we set it up in
//our productActions.js file
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
