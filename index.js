// Optional Chaining
const user = {
    address: {
        city: "Solo",
    },
};

const city = user?.address?.city;
if (!city) {
    console.log("Kota tidak ditemukan");
} else {
    console.log(city)
}

//nullish coalescing
const newCity = city ?? "Online";
console.log("Kota ", newCity);


// Recursive Function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));


// Matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}