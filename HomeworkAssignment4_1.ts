class student {
    name : string ;
    id : number ;
    scores : number []=[67,75,90];

    constructor( n: string , i: number , s : number[]){
        this.name = n ;
        this.id = i ;
        this.scores = s ;

    }
    show():void{
        console.log(`Student scorse: ${this.scores}`);
    } 

    addScore(scores: number):void{
        this.scores.push(scores);
    }

    getAverage(): number {
        let sum = 0;
        for (let s of this.scores) {
            sum = sum + s;
        }
        return sum / this.scores.length;
    }


}
const john = new student("John", 1, []);
john.addScore(67);
john.addScore(75);
john.addScore(90);

john.show();
console.log(`John's average: ${john.getAverage()}`);