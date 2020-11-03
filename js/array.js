let coba = function () {
    return "Coba Function";
}

let buah = ["Apel", "Mangga", "Jeruk", 10, coba(), (tes = () => "Hasil dari Arrow Function"),function name() {
    return "Cak Lul Official Website";
}];

console.log(buah);

console.log(buah[0]);

for (let i in buah) {
    console.log(buah[i]);
}

console.log(buah[5]());
console.log(buah[6]());