"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SetOperations {
    intersectionSet = new Set();
    getIntersection(setA, setB) {
        this.intersectionSet = setA.intersection(setB);
        return this.intersectionSet.values();
    }
    unionSet = new Set();
    getUnion(setA, setB) {
        this.unionSet = setA.union(setB);
        return this.unionSet;
    }
    differenceSet = new Set();
    getDifference(setA, setB) {
        this.differenceSet = setA.difference(setB);
        return this.differenceSet.values();
    }
}
const interesectionExample = new SetOperations();
console.log(interesectionExample.getIntersection(new Set(['rain', 'sun', 'wind']), new Set(['rain', 'storm', 'wind'])));
const unionExample = new SetOperations();
console.log(unionExample.getUnion(new Set([1, 2, 3, 4]), new Set([1, 2, 5, 6, 7])));
const differenceExample = new SetOperations();
console.log(differenceExample.getDifference(new Set(['One flew over cuckoo`s nest', 'Patch Adams', 'Meet the Fockers', 'The beach']), new Set(['Catch me if you can', 'The beach', 'Reservoir dogs'])));
//# sourceMappingURL=index.js.map