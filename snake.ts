
import { Animal } from "./animal";
export class Snake extends Animal{
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters = 5){
        console.log(`Sssss`);
        super.move(distanceInMeters);
    }
}