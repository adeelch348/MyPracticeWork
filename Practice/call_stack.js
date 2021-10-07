//A simple event loop explanation

// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   bar()
//   baz()
// }

// foo()

//Queuing function execution

// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   setTimeout(bar, 0)
//   baz()
// }

// foo()

//Job Queue using Promises

const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  new Promise((resolve, reject) =>
    resolve("should be right after baz, before bar")
  ).then((resolve) => console.log(resolve));
  baz();
};

foo();
