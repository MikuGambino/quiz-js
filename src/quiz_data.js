
export const QuizDataMedia = [{
    "question": "Тебе нравится снимать/монтировать видео?",
    "img": "./src/img/montaj.jpg",
    "answers": [{
        "text" : "Да",
        "effects": {"tlvd": 2, "rklm": 1}},
        {
        "text": "Нет",
        "effects": {}
        }
    ]},
    {
    "question": "Ты любишь писать сочинения/эссе/придумывать свои истории?",
    "img": "./src/img/scenarist.jpg",
    "answers": [{
        "text" : "Да",
        "effects": {"tlvd": 1,}},
        {
        "text": "Нет",
        "effects": {}
        }
    ]},
    {
    "question": "Тебя взяли на работу в компанию по производству пылесосов. Какой деятельностью ты бы хотел заниматься?",
    "img": "./src/img/pilesos.jpg",
    "answers": [{
        "text" : "Придумать дизайн",
        "effects": {"dizn": 2}},
        {
        "text": "Снять рекламный видеоролик",
        "effects": {"rklm": 2, "tlvd": 1}
        }
    ]},
    {
    "question": "Что ты бы посмотрел в свободное время?",
    "img": "./src/img/tv.jpg",
    "answers": [{
        "text" : "Интервью с известным человеком",
        "effects": {"tlvd": 1}},
        {
        "text": "Телеканал 'Реклама на диване'",
        "effects": {"rklm": 3}},
        {
        "text": "Телепередачу про создание дизайна интерьера",
        "effects": {"dizn": 2}},
    ]},
    {
    "question": "Есть ли возможность обучаться платно?",
    "img": "./src/img/money.jpg",
    "answers": [{
        "text" : "Да",
        "effects": {}},
        {
        "text": "Нет",
        "effects": {"tlvd": -7}},
    ]},
    {
    "question": "По какой форме обучения ты бы хотел учиться?",
    "img": "./src/img/lecture.jpg",
    "answers": [{
        "text": "Заочное обучение",
        "effects": {"tlvd": -5}},
        {
        "text": "Очное обучение",
        "effects": {}}
    ]},
    {
    "question": "Предметы на ЕГЭ",
    "img": "./src/img/ege.jpg",
    "answers": [{
        "text": "Литература, история/обществознание",
        "effects": {"rklm": -5}},
        {
        "text": "Обществознание, история/информатика",
        "effects": {"tlvd": -5, "dizn": -5}},
        {
        "text": "Всё из вышеперечисленного",
        "effects": {}},
    ]},
];

export const QuizDataProg =[{
    "question": "Ты любишь играть в компьютерные игры? Если да, то хотел бы их разрабатывать?",
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