import { useContext } from "react";
import { QuizContext } from "../Contexts/quiz";
import Answer from "./Answer";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    return  (
        <div>
        <div className="question">{currentQuestion.question}</div>
        <div className="answers">
            {quizState.answers.map((answer, index) => ( 
                <Answer answerText={answer} key={index} />
            ))}
        </div>
        </div>
    )
};

export default Question;