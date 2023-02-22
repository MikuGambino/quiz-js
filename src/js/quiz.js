export default class Quiz{
    
    constructor(results, ...ways){
        this.ways = ways;
        this.results = results;
        this.questions;
        this.answers = [];
        this.step = 0;
        this.imgElement = document.getElementById("quiz-img");
        this.questionElement = document.querySelector("#question");
        this.startButton = document.querySelector('#submit');
        this.listener = this.start.bind(this);
        this.startButton.addEventListener("click", this.listener);
        this.prevButton = document.querySelector('#prev');
        this.prevButton.addEventListener("click", this.prevQuestion.bind(this));
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
        if(this.step == 1) this.prevButton.hidden = false;
        let radioContainerElement = document.getElementById("radioContainer");
        radioContainerElement.innerHTML = '';
        this.imgElement.src = this.questions[this.step]["img"];
        this.questionElement.innerHTML = this.questions[this.step]["question"];
        for(let i = 0; i < this.questions[this.step].answers.length; i++){
            radioContainerElement.innerHTML += `<label name="radioLabel">
            <input type=\"radio\" name=\"radio\">${this.questions[this.step]["answers"][i].text}</label>`
        }          
    }

    prevQuestion(){
        this.answers.pop();
        this.step--;
        if(this.step == 0) this.prevButton.hidden = true;
        this.nextQuestion();
    }

    checkAnswer(){
        let answer;
        let answerElements = document.getElementsByName("radioLabel");
        for(let i = 0; i < answerElements.length; i++)
            if(answerElements[i].control.checked) answer = this.questions[this.step]["answers"][i]["effects"];
        if(answer == undefined) return;
        this.answers.push(answer);
        this.step++;
        this.nextQuestion();
    }

    showResults(res){
        document.querySelector("#radioContainer").remove();
        document.querySelector(".button-container").remove();
        this.imgElement.src = this.results[res].img;
        let description = document.createElement("p");
        description.innerHTML = this.results[res].text;
        this.questionElement.innerHTML = this.results[res].heading;
        this.questionElement.after(description);
    }

    calculateResult(){
        let results = new Map();
        for(let i = 0; i < this.answers.length; i++){
            let effectsMap = new Map(Object.entries(this.answers.at(i)));
            effectsMap.forEach((value, key) => {
                if(!results.has(key)) results.set(key, 0);
                results.set(key, results.get(key) + value);
            });
        }
        if(this.results.size == 0) throw new Error("Scores map is empty!");
        return Array.from(results.keys()).reduce((a, b) => results.get(a) >= results.get(b) ? a : b, -99);
    }
}