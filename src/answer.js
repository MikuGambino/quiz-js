export default class Answer{
    constructor(text, effects){
        this.text = text;
        this.effects = new Map(Object.entries(effects));
    }
}