import { createContext, useReducer } from "react";

export const initialState = {theme: "light", data: [], favs: []}

export const ContextGlobal = createContext();

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "light":
      return {...state, theme: "dark"};
    case "dark":
      return {...state, theme: "light"};
    case "API_HOME":
      return action.payload;
    case "FAVS":
      return action.payload;
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducerFunction, initialState)

  const store = {
    state, 
    dispatch, 
  }

  return (
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
  );
};
