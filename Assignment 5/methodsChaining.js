console.log("This is the example of methods chaining")

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    batting() {
        console.log(this.name + " is going to bat ")
        return this;
    }

    hitFour() {
        console.log(this.name + " hit a four ")
        this.score = this.score + 4;
        console.log(this.name + "'s updated score is : " + this.score)
        return this;
    }

    hitSix() {
        console.log(this.name + " hit a six ")
        this.score = this.score + 6;
        console.log(this.name + "'s updated score is : " + this.score)
        return this;
    }

    gotOut() {
        console.log(this.name + " is got out ")
        return this;
    }

    getFinalScore() {
        console.log(this.name + "'s final score is " + this.score)
        return this;
    }
}

let player1 = new Player('Sachin Tendulkar')
let player2 = new Player('Virat Kohli')
let player3 = new Player('M.S.Dhoni')

//methods chaining
player1.batting().hitFour().hitFour().hitFour().gotOut().getFinalScore()
player2.batting().hitFour().hitSix().gotOut().getFinalScore()
player3.batting().hitFour().hitSix().hitSix().hitSix().hitFour().getFinalScore()