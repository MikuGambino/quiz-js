export default class Quiz{
    
    constructor(questions){
        this.answerElements = [
            document.querySelector('[value="0"]'),
            document.querySelector('[value="1"]'),
        ];
        this.results = new Map();
        this.questions = questions;
        this.step = 0;
        this.questionElement = document.querySelector("#question");
        this.startButton = document.querySelector('#submit');
        this.startButton.addEventListener("click", this.checkAnswer.bind(this));
    }

    nextQuestion(){
        console.log("next");
        if(this.step == this.questions.length){
            // todo - final
        }
        this.questionElement.innerHTML = this.questions[this.step]["question"];
        this.answerElements.forEach((el, index) => {
            el.innerHTML = `<input required type=\"radio\" name=\"radio\">${this.questions[this.step]["answers"][index].text}`});
    }

    checkAnswer(){
        let answer;
        if(this.answerElements[0].control.checked) answer = this.questions[this.step]["answers"][0];
        else if(this.answerElements[1].control.checked) answer = this.questions[this.step]["answers"][1];
        if(answer == undefined) return;
        answer.effects.forEach((value, key) => {
            if(!this.results.has(key)) this.results.set(key, 0);
            this.results.set(key, this.results.get(key) + value);
        });
    }
}
