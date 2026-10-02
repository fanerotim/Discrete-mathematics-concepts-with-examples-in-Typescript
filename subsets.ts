const isSubset = <T>(setA: T[], setB: T[]): boolean => {
    for (let el of setA)
        if (!setB.includes(el)) {
            return false
        }
    
    return true;
}

// const subset = [1, 2, 3];
// const superSet = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(isSubset(subset, superSet));

const animalSubset = ['mouse', 'elephant', 'cat', 'dog']; //true
const notAnAnimalSubset = ['elk', 'spider', 'wolf', 'bear']; //false
const animalSuperset = ['giraffe', 'ant', 'mouse', 'elephant', 'cat', 'dog', 'horse'];

// console.log(isSubset(animalSubset, animalSuperset));
console.log(isSubset(notAnAnimalSubset, animalSuperset));