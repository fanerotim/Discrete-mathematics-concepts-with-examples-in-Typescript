class SymmetricDifference<T> {
    private symmetricDifference: Set<T> = new Set();

    getSymmetricDifference(setA: Set<T>, setB: Set<T>) {
        this.symmetricDifference = setA.symmetricDifference(setB)
        return this.symmetricDifference.values()
    }
}

// has symmetric difference
const example = new SymmetricDifference<string>();
console.log(example.getSymmetricDifference(new Set(['cats', 'dogs', 'horses', 'fish']), new Set(['birds', 'fish', 'big cats', 'dogs', 'snakes'])));

// does not have symmetric difference
// const exampleTwo = new SymmetricDifference<number>();
// console.log(exampleTwo.getSymmetricDifference(new Set([1, 2, 3, 4]), new Set([1, 2, 3, 4])))