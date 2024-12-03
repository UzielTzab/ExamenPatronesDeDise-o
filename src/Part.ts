export class Part {
    partId !: number;
    name !: string;
    price !: number;
    time !: number;

    constructor(partId: number, name: string, price: number, time: number) {
        this.partId = partId;
        this.name = name;
        this.price = price;
        this.time = time
    };

    getPartId(): number {
        return this.partId;
    }

    getPartName(): string {
        return this.name;
    }

    getPartPrice(): number {
        return this.price;
    }

    getPartTime(): number {
        return this.time;
    }

    updatePrice = (newPrice: number): number => {
        return this.price = newPrice
    }





}