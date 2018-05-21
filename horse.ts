
import { Animal } from "./animal";
export class Horse extends Animal{
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters = 45){
        console.log("Galopando...");
        super.move(distanceInMeters);
    }
}