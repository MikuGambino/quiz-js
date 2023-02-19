import {QuizData} from "./quiz_data.js";
import Quiz from "./quiz.js";
import { ResultData } from "./result_data.js";

let quiz = new Quiz(QuizData, ResultData);
quiz.nextQuestion();