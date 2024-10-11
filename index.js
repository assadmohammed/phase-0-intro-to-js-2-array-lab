
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//append at the end
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
console.log(destructivelyAppendCat('Ralph'));
//pre-append
function destructivelyPrependCat (name) {
    cats.unshift(name);
    return cats;
}
console.log(destructivelyPrependCat("Bob"));
//remove last cats
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat())
//remove first cat
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());
//append cat name
function appendCat(name) {
    let newCat = [...cats, name];
    return newCat;
}
console.log(appendCat("Broom"))
//pre-append cat name
function prependCat(name) {
    let newCatArray = [name, ...cats];
    return newCatArray;
}
console.log(prependCat("Arnold"));
//remove last cat
function removeLastCat() {
    let newRemovedArray = cats.slice(0, cats.length-1);
    return newRemovedArray;
}
console.log(removeLastCat());
console.log(cats);
//remove first cat
function removeFirstCat() {
    let newRemoveFirstArray = cats.slice(1);
    return newRemoveFirstArray;
}
console.log(removeFirstCat());
console.log(cats)