import { createContext, useReducer } from "react";
import questions from "../data";

const intialState = {
questions,
currentQuestionIndex: 0,
};

const reducer = (state, action) => {
    return state;
};
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, intialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};