import { Part } from "./Part";

export class kit extends Part {
    parts: Part[] = [];

    constructor(kitId: number, name: string) {

        super(kitId, name, 0, 0);

    }

    addpieza = (pieza: Part): void => {
        this.parts.push(pieza)
    }


    CalculatePrice(): number {

        const suma = this.parts.reduce((total, part) => total + part.getPartPrice(), 0);
        const discount = suma * 0.9;

        return discount;


    }
    CalculateTime(): number {
        const time = this.parts.reduce((total, part) => total + part.getPartTime(), 0);
        return time;
    }
}
