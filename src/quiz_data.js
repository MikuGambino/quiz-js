import Answer from "./answer.js"

export const QuizDataMedia = [{
    "question": "Тебе нравится рисование?",
    "answers": [
        new Answer("Да", {"dizn": 5, "tlvd": 5}),
        new Answer("Нет", {"dizn": -5})
    ]
}];

export const QuizDataProg =[{
    "question": "Тебе нравится программирование?",
    "answers": [
        new Answer("Да", {"dizn": 5, "tlvd": 5}),
        new Answer("Нет", {"dizn": -5})
    ]
}];