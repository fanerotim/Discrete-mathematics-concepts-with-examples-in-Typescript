class SetOperations<T> {

    private intersectionSet: Set<T> = new Set();
    getIntersection(setA: Set<T>, setB: Set<T>): any {
        this.intersectionSet = setA.intersection(setB);
        return this.intersectionSet.values();
    }

    private unionSet: Set<T> = new Set();
    getUnion(setA: Set<T>, setB: Set<T>) {
        this.unionSet = setA.union(setB);
        return this.unionSet;
    }
    
    private differenceSet: Set<T> = new Set();
    getDifference(setA: Set<T>, setB: Set<T>) {
        this.differenceSet = setA.difference(setB);
        return this.differenceSet.values();
    }   
}

const interesectionExample = new SetOperations<string>();
console.log(interesectionExample.getIntersection(new Set(['rain', 'sun', 'wind']), new Set(['rain', 'storm', 'wind'])));

const unionExample = new SetOperations<number>();
console.log(unionExample.getUnion(new Set([1, 2, 3, 4]), new Set([1, 2, 5, 6, 7])));

const differenceExample = new SetOperations<string>();
console.log(differenceExample.getDifference(new Set(['One flew over cuckoo`s nest', 'Patch Adams', 'Meet the Fockers', 'The beach']), new Set(['Catch me if you can', 'The beach', 'Reservoir dogs'])))