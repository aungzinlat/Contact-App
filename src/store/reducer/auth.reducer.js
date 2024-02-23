const initialState = {
  auth: false,
  data: null,
  loading: false,
  error: null,
};

export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process": {
      return (store = { loading: true, ...store });
    }
    case "error": {
      return (store = { loading: false, error: action.payload, ...store });
    }
    case "register": {
      return (store = {
        ...store,
        data: action.payload,
      });
    }
    case "login": {
      return (store = {
        loading: false,
        auth: true,
        data: action.payload,
        error: null,
      });
    }

    case "logout": {
      return (store = { auth: false, data: null, ...store });
    }

    default:
      return store;
  }
};
export const registerReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process": {
      return (store = { loading: true, ...store });
    }
    case "error": {
      return (store = { loading: false, error: action.payload, ...store });
    }
    case "register": {
      return (store = {
        loading: false,
        auth: true,
        data: action.payload,
        error: null,
      });
    }

    case "logout": {
      return (store = { auth: false, data: null, ...store });
    }

    default:
      return store;
  }
};
