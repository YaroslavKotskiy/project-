//  const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     },
//  };

//  let descriptor = Object.getOwnPropertyDescriptor(options, 'name');
//  console.log(descriptor);

//  const {border,bg} = options.colors;

//  console.log(border);
//  console.log(bg);
//  console.log(String.prototype);

//  options.makeTest();
//  for (let key in options) {
//      if (typeof(options[key]) === 'object') {
//          for (let i in options[key]) {
//             console.log(`Свовойство ${i} в Объекте ${options[key]} имеет значения ${options[key][i]}`)
//          }
//      } else {
//         console.log(`Свовойство ${key} имеет значения ${options[key]}`);
//      }

//  }

//  options.length = -1;

//  for (let key in options) {
//      options.length += 1;
//  }

//  console.log(options.length);
//  console.log(Object.entries(options));

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.sort((a, b) => b - a));

// const mainObj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: 4,
//     },
// };

// const inObj = {
//     f: 5,
//     g: 6,
// };

// console.log(Object.assign(mainObj, inObj));

const Car = {
    go:function() {
    },
    have4wheels: true,
};

const BMW = Object.create(Car);

BMW.premium = true;

console.log(BMW);
console.log(Car);