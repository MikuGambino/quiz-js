import Answer from "./answer.js"

export const QuizDataMedia = [{
    "question": "Тебе нравится рисование?",
    "answers": [
        new Answer("Да", {"dizn": 5, "tlvd": 5}),
        new Answer("Нет", {"dizn": -5})
    ]
}];

export const QuizDataProg =[{
    "question": "Ты любишь играть в компьютерные игры? Если да, хотел бы их разрабатывать?",
    "answers": [
        new Answer("Да", {"ifst": 3}),
        new Answer("Нет", {"ivcht": 0, "pinf": 0, "pinj": 0})
    ]},
    {
    "question": "Тебе нравится математика?",
    "answers": [
        new Answer("Да", {"ivcht": 1, "pinj": 1}),
        new Answer("Нет", {"ivcht": -1}),
        new Answer("Этой мой самый любимый предмет", {"ivcht": 3, "pinj": 2})
    ]},
    {
    "question": "Ты бы хотел уметь создавать и обрабатывать анимации и видеоизображения?",
    "answers": [
        new Answer("Да", {"ifst": 1}),
        new Answer("Нет", {})
    ]},
    {
    "question": "Преполагаемые баллы ЕГЭ, бюджетная/коммерческая основа обучения",
    "answers": [
        new Answer("Больше 235, я хочу на бюджет", {}),
        new Answer("Меньше 235, я хочу на бюджет", {"ifst": -5, "pinj": -5}),
        new Answer("Больше 150, я хочу на коммерцию", {}),
        new Answer("Меньше 150, я хочу на коммерцию", {"pinj": -5, "pinf": -5}),
    ]},
    {
    "question": "Ты бы хотел изучать экономику?",
    "answers": [
        new Answer("Да", {"pinf": 1, "pinj": 1}),
        new Answer("Нет", {"pinf": -2}),
        new Answer("Обожаю экономику!", {"pinf": 3, "pinj": 2})
    ]},
    {
    "question": "Ты бы хотел овладеть навыками управления проектами и командами?",
    "answers": [
        new Answer("Да", {"pinj": 3}),
        new Answer("Нет", {}),
    ]},
    {
    "question": "По какой форме обучения ты бы хотел учиться?",
    "answers": [
        new Answer("Заочное обучение", {"pinj": -3, "pinj": -3}),
        new Answer("Очное обучение", {}),
    ]},
];