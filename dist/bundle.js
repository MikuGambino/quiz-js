/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Quiz.js":
/*!************************!*\
  !*** ./src/js/Quiz.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Quiz)\n/* harmony export */ });\nclass Quiz{\r\n    \r\n    constructor(results, ...ways){\r\n        this.ways = ways;\r\n        this.results = results;\r\n        this.questions;\r\n        this.answers = [];\r\n        this.step = 0;\r\n        this.imgElement = document.getElementById(\"quiz-img\");\r\n        this.questionElement = document.querySelector(\"#question\");\r\n        this.startButton = document.querySelector('#submit');\r\n        this.listener = this.start.bind(this);\r\n        this.startButton.addEventListener(\"click\", this.listener);\r\n        this.prevButton = document.querySelector('#prev');\r\n        this.prevButton.addEventListener(\"click\", this.prevQuestion.bind(this));\r\n    }\r\n\r\n    start(){\r\n        let answerElements = document.getElementsByName(\"radioLabel\");\r\n        for(let i = 0; i < answerElements.length; i++)\r\n            if(answerElements[i].control.checked) this.questions = this.ways[i];\r\n        if(this.questions == undefined) return;\r\n        this.startButton.removeEventListener(\"click\", this.listener);\r\n        this.startButton.addEventListener(\"click\", this.checkAnswer.bind(this)); \r\n        this.nextQuestion();       \r\n    }\r\n\r\n    nextQuestion(){\r\n        if(this.step >= this.questions.length){\r\n            this.showResults(this.calculateResult());\r\n            return;\r\n        }\r\n        if(this.step == 1) this.prevButton.hidden = false;\r\n        let radioContainerElement = document.getElementById(\"radioContainer\");\r\n        radioContainerElement.innerHTML = '';\r\n        this.imgElement.src = this.questions[this.step][\"img\"];\r\n        this.questionElement.innerHTML = this.questions[this.step][\"question\"];\r\n        for(let i = 0; i < this.questions[this.step].answers.length; i++){\r\n            radioContainerElement.innerHTML += `<label name=\"radioLabel\">\r\n            <input type=\\\"radio\\\" name=\\\"radio\\\">${this.questions[this.step][\"answers\"][i].text}</label>`\r\n        }          \r\n    }\r\n\r\n    prevQuestion(){\r\n        this.answers.pop();\r\n        this.step--;\r\n        if(this.step == 0) this.prevButton.hidden = true;\r\n        this.nextQuestion();\r\n    }\r\n\r\n    checkAnswer(){\r\n        let answer;\r\n        let answerElements = document.getElementsByName(\"radioLabel\");\r\n        for(let i = 0; i < answerElements.length; i++)\r\n            if(answerElements[i].control.checked) answer = this.questions[this.step][\"answers\"][i][\"effects\"];\r\n        if(answer == undefined) return;\r\n        this.answers.push(answer);\r\n        this.step++;\r\n        this.nextQuestion();\r\n    }\r\n\r\n    showResults(res){\r\n        document.querySelector(\"#radioContainer\").remove();\r\n        document.querySelector(\".button-container\").remove();\r\n        this.imgElement.src = this.results[res].img;\r\n        let description = document.createElement(\"p\");\r\n        description.innerHTML = this.results[res].text;\r\n        this.questionElement.innerHTML = this.results[res].heading;\r\n        this.questionElement.after(description);\r\n    }\r\n\r\n    calculateResult(){\r\n        let results = new Map();\r\n        for(let i = 0; i < this.answers.length; i++){\r\n            let effectsMap = new Map(Object.entries(this.answers.at(i)));\r\n            effectsMap.forEach((value, key) => {\r\n                if(!results.has(key)) results.set(key, 0);\r\n                results.set(key, results.get(key) + value);\r\n            });\r\n        }\r\n        if(this.results.size == 0) throw new Error(\"Scores map is empty!\");\r\n        return Array.from(results.keys()).reduce((a, b) => results.get(a) >= results.get(b) ? a : b, -99);\r\n    }\r\n}\n\n//# sourceURL=webpack://careerguidance/./src/js/Quiz.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quiz_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz_data.js */ \"./src/js/quiz_data.js\");\n/* harmony import */ var _result_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result_data.js */ \"./src/js/result_data.js\");\n/* harmony import */ var _Quiz_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quiz.js */ \"./src/js/Quiz.js\");\n\r\n\r\n\r\n\r\nlet quiz = new _Quiz_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_result_data_js__WEBPACK_IMPORTED_MODULE_1__.ResultData, _quiz_data_js__WEBPACK_IMPORTED_MODULE_0__.QuizDataProg, _quiz_data_js__WEBPACK_IMPORTED_MODULE_0__.QuizDataMedia);\n\n//# sourceURL=webpack://careerguidance/./src/js/index.js?");

/***/ }),

/***/ "./src/js/quiz_data.js":
/*!*****************************!*\
  !*** ./src/js/quiz_data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuizDataMedia\": () => (/* binding */ QuizDataMedia),\n/* harmony export */   \"QuizDataProg\": () => (/* binding */ QuizDataProg)\n/* harmony export */ });\n\r\nconst QuizDataMedia = [{\r\n    \"question\": \"Тебе нравится снимать/монтировать видео?\",\r\n    \"img\": \"src/img/montaj.jpg\",\r\n    \"answers\": [{\r\n        \"text\" : \"Да\",\r\n        \"effects\": {\"tlvd\": 2, \"rklm\": 1, \"dizn\": 0}},\r\n        {\r\n        \"text\": \"Нет\",\r\n        \"effects\": {\"tlvd\": 0, \"rklm\": 0, \"dizn\": 0}\r\n        }\r\n    ]},\r\n    {\r\n    \"question\": \"Ты любишь писать сочинения/эссе/придумывать свои истории?\",\r\n    \"img\": \"src/img/scenarist.jpg\",\r\n    \"answers\": [{\r\n        \"text\" : \"Да\",\r\n        \"effects\": {\"tlvd\": 1,}},\r\n        {\r\n        \"text\": \"Нет\",\r\n        \"effects\": {}\r\n        }\r\n    ]},\r\n    {\r\n    \"question\": \"Тебя взяли на работу в компанию по производству пылесосов. Какой деятельностью ты бы хотел заниматься?\",\r\n    \"img\": \"src/img/pilesos.jpg\",\r\n    \"answers\": [{\r\n        \"text\" : \"Придумать дизайн\",\r\n        \"effects\": {\"dizn\": 2}},\r\n        {\r\n        \"text\": \"Снять рекламный видеоролик\",\r\n        \"effects\": {\"rklm\": 2, \"tlvd\": 1}\r\n        }\r\n    ]},\r\n    {\r\n    \"question\": \"Что ты бы посмотрел в свободное время?\",\r\n    \"img\": \"src/img/tv.jpg\",\r\n    \"answers\": [{\r\n        \"text\" : \"Интервью с известным человеком\",\r\n        \"effects\": {\"tlvd\": 1}},\r\n        {\r\n        \"text\": \"Телеканал 'Реклама на диване'\",\r\n        \"effects\": {\"rklm\": 3}},\r\n        {\r\n        \"text\": \"Телепередачу про создание дизайна интерьера\",\r\n        \"effects\": {\"dizn\": 2}},\r\n    ]},\r\n    {\r\n    \"question\": \"Есть ли возможность обучаться платно?\",\r\n    \"img\": \"src/img/money.jpg\",\r\n    \"answers\": [{\r\n        \"text\" : \"Да\",\r\n        \"effects\": {}},\r\n        {\r\n        \"text\": \"Нет\",\r\n        \"effects\": {\"tlvd\": -7}},\r\n    ]},\r\n    {\r\n    \"question\": \"По какой форме обучения ты бы хотел учиться?\",\r\n    \"img\": \"src/img/lecture.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Заочное обучение\",\r\n        \"effects\": {\"tlvd\": -5}},\r\n        {\r\n        \"text\": \"Очное обучение\",\r\n        \"effects\": {}}\r\n    ]},\r\n    {\r\n    \"question\": \"Предметы на ЕГЭ\",\r\n    \"img\": \"src/img/ege.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Литература, история/обществознание\",\r\n        \"effects\": {\"rklm\": -5}},\r\n        {\r\n        \"text\": \"Обществознание, история/информатика\",\r\n        \"effects\": {\"tlvd\": -5, \"dizn\": -5}},\r\n        {\r\n        \"text\": \"Всё из вышеперечисленного\",\r\n        \"effects\": {}},\r\n    ]},\r\n];\r\n\r\nconst QuizDataProg =[{\r\n    \"question\": \"Ты любишь играть в компьютерные игры? Если да, то хотел бы их разрабатывать?\",\r\n    \"img\": \"src/img/game.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Да\",\r\n        \"effects\": {\"ifst\": 3, \"pinf\": 0, \"pinj\": 0, \"ivcht\": 0}},\r\n        {\r\n        \"text\": \"Нет\",\r\n        \"effects\": {\"ivcht\": 0, \"pinf\": 0, \"pinj\": 0, \"ifst\": 0}}\r\n    ]},\r\n    {\r\n    \"question\": \"Тебе нравится математика?\",\r\n    \"img\": \"src/img/math.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Да\",\r\n        \"effects\": {\"ivcht\": 1, \"pinj\": 1}},\r\n        {\r\n        \"text\": \"Нет\",\r\n        \"effects\": {\"ivcht\": -1}},\r\n        {\r\n        \"text\": \"Это мой самый любимый предмет\",\r\n        \"effects\": {\"ivcht\": 3, \"pinj\": 2}}\r\n    ]},\r\n    {\r\n    \"question\": \"Ты бы хотел уметь создавать и обрабатывать анимации и видеоизображения?\",\r\n    \"img\": \"src/img/monkey.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Да\",\r\n        \"effects\": {\"ifst\": 1}},\r\n        {\r\n        \"text\": \"Нет\",\r\n        \"effects\": {}}\r\n    ]},\r\n    {\r\n    \"question\": \"Предполагаемые баллы ЕГЭ, коммерция/бюджетное обучение\",\r\n    \"img\": \"src/img/ege.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Больше 235, я хочу на бюджет\",\r\n        \"effects\": {}},\r\n        {\r\n        \"text\": \"Меньше 235, я хочу на бюджет\",\r\n        \"effects\": {\"ifst\": -5, \"pinj\": -5}},\r\n        {\r\n        \"text\": \"Больше 150, я хочу на коммерцию\",\r\n        \"effects\": {}},\r\n        {\r\n        \"text\": \"Меньше 150, я хочу на коммерцию\",\r\n        \"effects\": {\"pinj\": -5, \"pinf\": -5}\r\n        }\r\n    ]},\r\n    {\r\n    \"question\": \"Ты бы хотел изучать экономику?\",\r\n    \"img\": \"src/img/ekonomika.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Да\",\r\n        \"effects\": {\"pinf\": 1, \"pinj\": 1}},\r\n        {\r\n        \"text\": \"Нет\",\r\n        \"effects\": {\"pinf\": -2}},\r\n        {\r\n        \"text\": \"Обожаю экономику!\",\r\n        \"effects\": {\"pinf\": 3, \"pinj\": 2}\r\n        }\r\n    ]},\r\n    {\r\n    \"question\": \"Ты бы хотел овладеть навыками управления проектами и командами?\",\r\n    \"img\": \"src/img/teamlead.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Да\",\r\n        \"effects\": {\"pinj\": 3}},\r\n        {\r\n        \"text\": \"Нет\",\r\n        \"effects\": {}}\r\n    ]},\r\n    {\r\n    \"question\": \"По какой форме обучения ты бы хотел учиться?\",\r\n    \"img\": \"src/img/lecture.jpg\",\r\n    \"answers\": [{\r\n        \"text\": \"Заочное обучение\",\r\n        \"effects\": {\"pinj\": -5, \"pinf\": -5}},\r\n        {\r\n        \"text\": \"Очное обучение\",\r\n        \"effects\": {}}\r\n    ]},\r\n];\n\n//# sourceURL=webpack://careerguidance/./src/js/quiz_data.js?");

/***/ }),

/***/ "./src/js/result_data.js":
/*!*******************************!*\
  !*** ./src/js/result_data.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ResultData\": () => (/* binding */ ResultData)\n/* harmony export */ });\nconst ResultData = {\r\n    \"dizn\" : {\r\n        \"heading\": \"Дизайн (ДИЗН)\",\r\n        \"text\": \"Ты творческая личность, поэтому тебе подходит дизайн! Масерство дизайнера-графика позволит выпускнику разрабатывать концепт-арт компьютерных игр, макетировать сайты, разрабатывать рекламные макеты для веб-пространства и полиграфии, создавать иллюстрации, видеозаставки, трехмерные модели пространств и персонажей, анимацию, обрабатывать фотографии.\",\r\n        \"img\": \"src/img/dizn.jpg\" \r\n    },\r\n    \"tlvd\" : {\r\n        \"heading\": \"Телевидение (ТЛВД)\",\r\n        \"text\": \"Студенты изучают операторское искусство, технологии видеомонтажа, тележурналистику, теле- и кинорежиссуру, сценаристику и редактуру телепрограмм. Стать успешным специалистом в сфере видеоиндустрии выпускникам помогают навыки создания мультимедийных проектов и прохождение практики в ведущих телекомпаниях региона.\",\r\n        \"img\": \"src/img/tlvd.jpg\" \r\n    },\r\n    \"rklm\" : {\r\n        \"heading\": \"Реклама и связи с общественностью (РКЛМ)\",\r\n        \"text\": \"Студенты учатся создавать полный цикл рекламной кампании - от разработки концепции до создания цифровых рекламных медийных продуктов (графика, видео, трехмерная визуализация). Выпускники успешно работают специалистами по рекламе и связям с общественностью, маркетологами, разработчиками рекламных графических, видео и аудио-продуктов, дизайнерами, копирайтерами и др.\",\r\n        \"img\": \"src/img/rklm.jpg\" \r\n    },\r\n    \"ifst\" : {\r\n        \"heading\": \"Информационные системы и технологии (ИФСТ)\",\r\n        \"text\": \"Высокопрофессиональное обучение программированию, разработке компьютерных игр и мобильных приложений, облачными вычислениям, базам данных, интернет-технологиям, технологиям искусственного интеллекта, виртуальной и дополненной реальности, мультимедийным технологиям.\",\r\n        \"img\": \"src/img/ifst.jpg\" \r\n    },\r\n    \"ivcht\" : {\r\n        \"heading\": \"Информатика и вычислительная техника (ИВЧТ)\",\r\n        \"text\": \"Изучение современных информационных технологий, облачных технологий, языков программирования, математических основ информатики. Отдельное внимание уделяется аппаратному обеспечению компьютерных систем, администрированию операционных систем и компьютерных сетей.\",\r\n        \"img\": \"src/img/ivcht.jpg\" \r\n    },\r\n    \"pinf\" : {\r\n        \"heading\": \"Прикладная информатика (ПИНФ)\",\r\n        \"text\": \"Изучение средств разработки прикладного программного обеспечения, моделирования информационных процессов в целях разрешения конкрутных практических проблем, проектрирования информационных систем. Отдельное внимание уделяется проведению тестирования программного обеспечения, осуществлению анализа качества тестового покрытия, разработке технического задания на систему, оцениванию соответствия требованиям существующих систем и их аналогов\",\r\n        \"img\": \"src/img/pinf.jpg\" \r\n    },\r\n    \"pinj\" : {\r\n        \"heading\": \"Программная инженерия (ПИНЖ)\",\r\n        \"text\": \"Программа обучения преполагает детальное изучение всех этапов создания программного продукта. Особое внимание уделяется освоению инструментов проектирования, разработки, тестирования программного обеспечения, изучаются технологии управления программными проектами и IT-услугами.\",\r\n        \"img\": \"src/img/teamlead.jpg\" \r\n    },\r\n};\r\n\r\n    \r\n\n\n//# sourceURL=webpack://careerguidance/./src/js/result_data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;