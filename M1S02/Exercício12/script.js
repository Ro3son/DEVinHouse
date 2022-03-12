//Exercício12
var arr = [12, 67, 23, 32];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (var x of arr) {
    console.log(x);
}

var y = 0;
while (y < arr.length) {
    console.log(arr[y]);
    y++;
}

var i = 0;
do {
    console.log(arr[i]);
    i++;
} while (i < arr.length);
