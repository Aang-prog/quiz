import { useContext } from "react";
import { QuizContext } from "../Contexts/quiz";
import Question from "./Question";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log('quizState' , quizState);
    return (
        <div className="quiz">
            {quizState.showResults && (
            <div className="results">
                <div className="Congratulations">Congratulations!</div>
                <div className="results-info">
                    <div>You have completed the quiz.</div>
                    <div>
                        You got {quizState.correctAnswerCount} out of {quizState.questions.length} correct.
                    </div>
                    <div className="next-button" onClick={() => dispatch({type: "RESTART"})} >Restart</div>
                    </div>
            </div>)}
            {!quizState.showResults && (
                <div>
                    <div className="title">Māori to English Quiz</div>
       <div className="score">
               
                Question {quizState.currentQuestionIndex + 1}/
                {quizState.questions.length}
            </div>
            <div className="setup">What does this word mean in english?</div>
            <Question />
            <div className="next-button" onClick={() => dispatch({type: 'NEXT_QUESTION'})}
            >
                Next Question
                </div>
                </div>
            )}
        </div>
    )
};

export default Quiz;