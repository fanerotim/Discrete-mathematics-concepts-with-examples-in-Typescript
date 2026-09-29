"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// printer / helper
const printer = (output) => {
    output.forEach(p => console.log(p.name));
};
// example of an intersection fn; returns A ∩ B
const intersectionFilter = (tagA, tagB) => {
    const outputSet = new Set();
    const cache = new Set();
    shopProducts.forEach(prod => {
        if (prod.tags.includes(tagA) && prod.tags.includes(tagB)) {
            if (!cache.has(prod.name)) {
                cache.add(prod.name);
                outputSet.add(prod);
            }
        }
    });
    return outputSet;
};
const unionFilter = (tagA, tagB) => {
    const output = new Set();
    const cache = new Set();
    shopProducts.forEach(prod => {
        if (prod.tags.includes(tagA) || prod.tags.includes(tagB)) {
            if (!cache.has(prod.name)) {
                output.add(prod);
                cache.add(prod.name);
            }
        }
    });
    return output;
};
const differenceFilter = (tagA, tagB) => {
    const output = new Set();
    const cache = new Set();
    const lcTagA = tagA.toLowerCase();
    const lcTagB = tagB.toLowerCase();
    shopProducts.forEach(prod => {
        if (prod.tags.includes(lcTagA) && !prod.tags.includes(lcTagB)) {
            if (!cache.has(prod.name)) {
                cache.add(prod.name);
                output.add(prod);
            }
        }
    });
    return output;
};
const shopProducts = [
    { id: 1, name: "MacBook Pro", category: "laptop", tags: ["apple", "premium", "m3"] },
    { id: 2, name: "Asus ROG", category: "laptop", tags: ["gaming", "premium", "windows"] },
    { id: 3, name: "iPhone 15", category: "phone", tags: ["apple", "sale"] },
    { id: 4, name: "Galaxy S24", category: "phone", tags: ["samsung", "sale", "premium"] },
    { id: 5, name: "iPad Air", category: "tablet", tags: ["apple", "tablet", "sale"] },
    { id: 6, name: "iPad Air", category: "tablet", tags: ["apple", "tablet", "sale"] }, // duplicate on purpose, Sets should not inclued duplicates
    { id: 7, name: "dummy product 1", category: "phone", tags: ["apple", "tablet", "sale"] },
    { id: 9, name: "dummy product 2", category: "desktop computer", tags: ["samsung", "tablet", "sale", 'premium'] },
    { id: 8, name: "dummy product 3", category: "laptop", tags: ["samsung", "tablet", "premium"] },
    { id: 10, name: "dummy product 4", category: "phone", tags: ["apple", "tablet", "premium"] },
    { id: 11, name: "dummy product 5", category: "phone", tags: ["apple", "tablet", "premium"] },
    { id: 12, name: "dummy product 6", category: "desktop computer", tags: ["samsung", "tablet", "sale"] },
    { id: 13, name: "dummy product 7", category: "table", tags: ["apple", "tablet", "sale"] },
    { id: 14, name: "dummy product 2", category: "desktop computer", tags: ["samsung", "tablet", "sale", 'premium'] }, // duplicate (with prod id: 2) on purpose for test reasons
    { id: 15, name: "dummy product 9", category: "desktop computer", tags: ["samsung", "tablet", "sale", 'premium'] }
];
//1. INTERSECTION EXAMPLES
// get the intersection of products that have the following tags: 'apple' and 'sale'
const appleProdSale = intersectionFilter('apple', 'sale');
// printer(appleProdSale)
// get the intersection of all products with tags: premium and sale
const premiumProdSale = intersectionFilter('premium', 'sale');
// printer(premiumProdSale)
// get the intersection of all products with tags: samsung and tablet
const samsungTablets = intersectionFilter('samsung', 'tablet');
// printer(samsungTablets);
//2. UNION EXAMPLES
const appleAndSamsung = unionFilter('apple', 'samsung');
// printer(appleAndSamsung);
const saleAndPremium = unionFilter('sale', 'filter');
// printer(saleAndPremium);
//3. DIFFERENCE EXAMPLES
const appleDifferenceSamsung = differenceFilter('apple', 'samsung');
// printer(appleDifferenceSamsung);
const samsungDifferenceApple = differenceFilter('samsung', 'apple');
// printer(samsungDifferenceApple)
//# sourceMappingURL=sets-intersection-union-difference.js.map