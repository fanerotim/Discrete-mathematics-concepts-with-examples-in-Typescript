"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SymmetricDifference {
    symmetricDifference = new Set();
    getSymmetricDifference(setA, setB) {
        this.symmetricDifference = setA.symmetricDifference(setB);
        return this.symmetricDifference.values();
    }
}
// has symmetric difference
const example = new SymmetricDifference();
console.log(example.getSymmetricDifference(new Set(['cats', 'dogs', 'horses', 'fish']), new Set(['birds', 'fish', 'big cats', 'dogs', 'snakes'])));
// does not have symmetric difference
// const exampleTwo = new SymmetricDifference<number>();
// console.log(exampleTwo.getSymmetricDifference(new Set([1, 2, 3, 4]), new Set([1, 2, 3, 4])))
//# sourceMappingURL=index.js.map