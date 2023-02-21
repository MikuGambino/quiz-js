export default class Quiz{
    
    constructor(results, ...ways){
        this.ways = ways;
        this.results = results;
        this.scores = new Map();
        this.questions;
        this.step = 0;
        this.imgElement = document.getElementById("quiz-img");
        this.questionElement = document.querySelector("#question");
        this.startButton = document.querySelector('#submit');
        this.listener = this.start.bind(this);
        this.startButton.addEventListener("click", this.listener);
    }

    start(){
        let answerElements = document.getElementsByName("radioLabel");
        for(let i = 0; i < answerElements.length; i++)
            if(answerElements[i].control.checked) this.questions = this.ways[i];
        if(this.questions == undefined) return;
        this.startButton.removeEventListener("click", this.listener);
        this.startButton.addEventListener("click", this.checkAnswer.bind(this)); 
        this.nextQuestion();       
    }

    nextQuestion(){
        if(this.step >= this.questions.length){
            this.showResults(this.calculateResult());
            return;
        }
        let radioContainerElement = document.getElementById("radioContainer");
        radioContainerElement.innerHTML = '';
        this.imgElement.src = this.questions[this.step]["img"];
        this.questionElement.innerHTML = this.questions[this.step]["question"];
        for(let i = 0; i < this.questions[this.step].answers.length; i++){
            radioContainerElement.innerHTML += `<label name="radioLabel" class="container">
            <input required type=\"radio\" name=\"radio\">${this.questions[this.step]["answers"][i].text}</label>`
        }          
    }

    checkAnswer(){
        let answer;
        let answerElements = document.getElementsByName("radioLabel");
        for(let i = 0; i < answerElements.length; i++)
            if(answerElements[i].control.checked) answer = this.questions[this.step]["answers"][i];
        if(answer == undefined) return;
        let effectsMap = new Map(Object.entries(answer.effects));
        effectsMap.forEach((value, key) => {
            if(!this.scores.has(key)) this.scores.set(key, 0);
            this.scores.set(key, this.scores.get(key) + value);
        });
        this.step++;
        this.nextQuestion();
        // todo - das
    }

    showResults(res){
        document.querySelector("#radioContainer").remove();
        document.querySelector("#submit").remove();
        this.imgElement.src = this.results[res].img;
        let description = document.createElement("p");
        description.innerHTML = this.results[res].text;
        this.questionElement.innerHTML = this.results[res].heading;
        this.questionElement.after(description);
    }

    calculateResult(){
        if(this.scores.size == 0) throw new Error("Scores map is empty!");
        if(this.scores.size == 1) return this.scores.keys().next().value;
        return Array.from(this.scores.keys()).reduce((a, b) => this.scores[a] >= this.scores[b] ? a : b);
    }
}
