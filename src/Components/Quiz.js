import { useContext } from "react";
import { QuizContext } from "../Contexts/quiz";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log('quizState' , quizState);
    return <div>Quiz</div>;
};

export default Quiz;