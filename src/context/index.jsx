import { createContext, useReducer, useContext as ContextHook } from "react";
import { GET_PRODUCTS } from "utilities";

// Actions
export const GET_ALL = (dispatch, payload) => dispatch({ type: "GET_ALL", payload });
export const ADD_ONE = (dispatch, payload) => dispatch({ type: "ADD_ONE", payload });
export const UPDATE_ONE = (dispatch, payload) => dispatch({ type: "UPDATE_ONE", payload });
export const DELETE_ONE = (dispatch, payload) => dispatch({ type: "DELETE_ONE", payload });

// Reducer
const Reducer = async (state, action) => {
	switch (action.type) {
		case "GET_ALL":
			let res = await GET_PRODUCTS();
			state.defaultState = res.data;
			return state;
		default:
			return state;
	}
};

// Context
const initialState = { defaultState: "" };
const context = createContext(initialState);

// Provider
export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return <context.Provider value={[state, dispatch]}>{children}</context.Provider>;
};

// Context Hook
const useContext = () => ContextHook(context);
export default useContext;
