import { kit } from "./kits";
import { Part } from "./Part";

console.log("Ejercicio C");

var part1 = new Part(1, "Motor", 200, 4);
var part2 = new Part(2, "Rueda", 2000, 3);
var part3 = new Part(3, "Puerta", 9000, 3);

var arrayParts: Part[] = [part1, part2, part3]

var kit1 = new kit(3, "Kit básico");

kit1.addpieza(part1);
kit1.addpieza(part2);
kit1.addpieza(part3);


console.log(`El precio del kit con descuento del 10% es: ${kit1.CalculatePrice()}`);
console.log(`El timepo del mano de obra del kid es: ${kit1.CalculateTime()}`);