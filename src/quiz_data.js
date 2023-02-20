
export const QuizDataMedia = [{
    "question": "Тебе нравится рисование?",
    "answers": [{
        "text" : "da",
        "effects": {"dizn": 5}
    },
]
}];

export const QuizDataProg =[{
    "question": "Ты любишь играть в компьютерные игры? Если да, хотел бы их разрабатывать?",
    "img": "./src/img/game.jpg",
    "answers": [{
        "text": "Да",
        "effects": {"ifst": 3}},
        {
        "text": "Нет",
        "effects": {"ivcht": 0, "pinf": 0, "pinj": 0}}
    ]},
    {
    "question": "Тебе нравится математика?",
    "img": "./src/img/math.jpg",
    "answers": [{
        "text": "Да",
        "effects": {"ivcht": 1, "pinj": 1}},
        {
        "text": "Нет",
        "effects": {"ivcht": -1}},
        {
        "text": "Этой мой самый любимый предмет",
        "effects": {"ivcht": 3, "pinj": 2}}
    ]},
    {
    "question": "Ты бы хотел уметь создавать и обрабатывать анимации и видеоизображения?",
    "img": "./src/img/monkey.jpg",
    "answers": [{
        "text": "Да",
        "effects": {"ifst": 1}},
        {
        "text": "Нет",
        "effects": {}}
    ]},
    {
    "question": "Преполагаемые баллы ЕГЭ, коммерция/бюджетное обучение",
    "img": "./src/img/ege.jpg",
    "answers": [{
        "text": "Больше 235, я хочу на бюджет",
        "effects": {}},
        {
        "text": "Меньше 235, я хочу на бюджет",
        "effects": {"ifst": -5, "pinj": -5}},
        {
        "text": "Больше 150, я хочу на коммерцию",
        "effects": {}},
        {
        "text": "Меньше 150, я хочу на коммерцию",
        "effects": {"pinj": -5, "pinf": -5}
        }
    ]},
    {
    "question": "Ты бы хотел изучать экономику?",
    "img": "./src/img/ekonomika.jpg",
    "answers": [{
        "text": "Да",
        "effects": {"pinf": 1, "pinj": 1}},
        {
        "text": "Нет",
        "effects": {"pinf": -2}},
        {
        "text": "Обожаю экономику!",
        "effects": {"pinf": 3, "pinj": 2}
        }
    ]},
    {
    "question": "Ты бы хотел овладеть навыками управления проектами и командами?",
    "img": "./src/img/teamlead.jpg",
    "answers": [{
        "text": "Да",
        "effects": {"pinj": 3}},
        {
        "text": "Нет",
        "effects": {}}
    ]},
    {
    "question": "По какой форме обучения ты бы хотел учиться?",
    "img": "./src/img/lecture.jpg",
    "answers": [{
        "text": "Заочное обучение",
        "effects": {"pinj": -5, "pinj": -5}},
        {
        "text": "Очное обучение",
        "effects": {}}
    ]},
];