process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner2 = function(arr) {
let timeIncrease = 0;
//let arrs = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, timeIncrease);
  timeIncrease += 100;
}
};

spinner2(['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|']);
