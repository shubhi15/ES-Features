function Console(target) {
	console.log('Decorator called up',target);
}

@Console
class ExampleClass {
	constructor() {
  	console.log('Yo!');
  }
}

var exObj = new ExampleClass();