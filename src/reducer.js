export const initialState = {
  email: "",
  password: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.value,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.value,
      };
  }
};
