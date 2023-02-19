export default class Quiz{
    
    constructor(questions, results){
        this.answerElements = [
            document.querySelector('[value="0"]'),
            document.querySelector('[value="1"]'),
        ];
        this.results = results;
        this.scores = new Map();
        this.questions = questions;
        this.step = 0;
        this.questionElement = document.querySelector("#question");
        this.startButton = document.querySelector('#submit');
        this.startButton.addEventListener("click", this.checkAnswer.bind(this));
    }

    nextQuestion(){
        console.log(this.step);
        if(this.step == this.questions.length)
            this.showResults(this.calculateResult());
        this.questionElement.innerHTML = this.questions[this.step]["question"];
        this.answerElements.forEach((el, index) => {
            el.innerHTML = `<input required type=\"radio\" name=\"radio\">${this.questions[this.step]["answers"][index].text}`
        });            
    }

    checkAnswer(){
        let answer;
        if(this.answerElements[0].control.checked) answer = this.questions[this.step]["answers"][0];
        else if(this.answerElements[1].control.checked) answer = this.questions[this.step]["answers"][1];
        if(answer == undefined) return;
        answer.effects.forEach((value, key) => {
            if(!this.scores.has(key)) this.scores.set(key, 0);
            this.scores.set(key, this.scores.get(key) + value);
        });
        this.step++;
        this.nextQuestion();
    }

    showResults(res){
        document.querySelector(".radioContainer").remove();
        document.querySelector("#submit").remove();
        let resImg = document.createElement("img");
        resImg.src = this.results[res].img;
        let description = document.createElement("p");
        description.innerHTML = this.results[res].text;
        this.questionElement.innerHTML = this.results[res].heading;
        this.questionElement.after(description);
        description.after(resImg);
    }

    calculateResult(){
        if(this.scores.size == 0) throw new Error("Scores map is empty!");
        if(this.scores.size == 1) return this.scores.keys().next().value;
        return Object.keys(this.scores).reduce((acc, el) => obj[acc] >= obj[el] ? a : b, "");
    }
}
