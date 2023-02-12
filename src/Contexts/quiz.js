import { createContext, useReducer } from "react";

const intialState = {};

const reducer = (state, action) => {
    return state;
};
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, intialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};