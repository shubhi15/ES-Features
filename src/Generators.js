import "babel-polyfill";
function *generatorDemo() {
    const x = yield 1;
 
    const y = yield 2;
  
    console.log('End');
}
let generator = generatorDemo();
console.log(generator);
console.log(generator.next());
console.log(generator);
console.log(generator.next());

