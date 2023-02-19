export default class Quiz{
    results = {};
    questionElement = document.querySelector("#question");
    startButton = document.querySelector('#submit');
    answerElements = [
        document.querySelector("#a1"),
        document.querySelector("#a2"),
    ];

    constructor(questions){
        this.questions = questions;
        this.step = 0;
        this.startButton.addEventListener("click", this.nextQuestion());
    }

    nextQuestion(){
        console.log("next");
        if(this.step == this.questions.length){
            // todo - final
        }
        this.questionElement.innerHTML = this.questions[this.step]["question"];
        this.answerElements.forEach((el, index) => {
            el.innerHTML = `<label id=\"a${index}\" class=\"container\"> <input type=\"radio\" name=\"radio\">${this.questions[this.step]["answers"][index].text}</label>`
        });
    }
}
