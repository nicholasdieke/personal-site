const initialState = {
  theme: "dark",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}
