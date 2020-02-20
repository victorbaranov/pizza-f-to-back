import {
    GET_DATA,
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAIL
  } from "../actions/types";
  
  const initialState = {
    orders: [],
    loading: false
  };
  
  const orders = (state = initialState, action) => {
      switch (action.type) {
          case GET_DATA:
              return {
          ...state,
          orders: action.payload,
          loading: false
        };
  
      case ADD_ORDER_REQUEST:
        return {
          ...state,
          loading: true
        };
  
      case ADD_ORDER_SUCCESS:
        return {
          ...state,
          orders: [...state.orders, action.payload],
          loading: false
        };
  
      case ADD_ORDER_FAIL:
        return {
          ...state,
          loading: false
        };
  
      default:
        return state;
    }
  };
  
  export default orders;
