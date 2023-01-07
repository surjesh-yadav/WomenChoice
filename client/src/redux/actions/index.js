import axios from "axios";
export const GET_DATA = "GET_DATA";
export const GET_DATA_KURTIS = "GET_DATA_KURTIS";
export const GET_DATA_TOP = "GET_DATA_TOP";
export const GET_PROD_DETAILS = "GET_PROD_DETAILS";
export const LOADING = "LOADING";
export const CART = "CART";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

//Products
export const getProduct = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getProductTop = (payload) => ({
  type: GET_DATA_TOP,
  payload,
});

export const getProductKurtis = (payload) => ({
  type: GET_DATA_KURTIS,
  payload,
});
export const cart = (payload) => ({
  type: CART,
  payload,
});

export const getProductDetails = (payload) => ({
  type: GET_PROD_DETAILS,
  payload,
});

//Cart

export const addItem = (data) => {
  return {
    type: "ADDITEM",
    payload: data,
  };
};
export const delItem = (data) => {
  return {
    type: "DELITEM",
    payload: data,
  };
};
export const updateadd = (data) => {
  return {
    type: "UPDATEADD",
    payload: data,
  };
};

export const deletecart = (data) => {
  return {
    type: "DELETECART",
    payload: data,
  };
};

//LOGIN
export const loginRequest = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const signupRequest = (user) => {
  return {
    type: SIGNUP,
    payload: user,
  };
};

//Increment decrement
export const updateaddd = (cartItem, state, value) => (dispatch) => {
  let x = state.map((e) => {
    if (e.id === cartItem.id) {
      if (e.quantity === 1 && value === -1) {
        e.quantity = e.quantity;
      } else {
        e.quantity = e.quantity + value;
      }
    }
  });
  dispatch(updateadd(x));
};
export const loading = () => {
  return {
    type: LOADING,
  };
};

//Products api
export const jeans_api = () => (dispatch) => {
  dispatch(loading());
  axios.get("https://women-choice.cyclic.app/jeans").then((res) => {
    dispatch(getProduct(res.data));
  });
};
export const get_cart_data = () => (dispatch) => {
  dispatch(loading());
  axios.get("https://women-choice.cyclic.app/cart").then((res) => {
    console.log("cart", res.data);
    dispatch(cart(res.data));
  });
};

export const top_api = () => (dispatch) => {
  dispatch(loading());
  axios.get("https://women-choice.cyclic.app/tops").then((res) => {
    dispatch(getProductTop(res.data));
  });
};
export const kurti_api = () => (dispatch) => {
  dispatch(loading());
  axios.get("https://women-choice.cyclic.app/kurtis").then((res) => {
    dispatch(getProductKurtis(res.data));
  });
};

//SingleProduct Api

export const jeans_id = (id) => (dispatch) => {
  axios.get(`https://women-choice.cyclic.app/jeans/${id}`).then((res) => {
    dispatch(getProductDetails(res.data));
  });
};
export const top_id = (id) => (dispatch) => {
  axios.get(`https://women-choice.cyclic.app/tops/${id}`).then((res) => {
    dispatch(getProductDetails(res.data));
  });
};
export const kurti_id = (id) => (dispatch) => {
  axios.get(`https://women-choice.cyclic.app/kurtis/${id}`).then((res) => {
    dispatch(getProductDetails(res.data));
  });
};
