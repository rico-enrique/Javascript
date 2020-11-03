let fungsi = function (nama) {
    console.log("Belajar Function " + nama);
}
fungsi("joni");

let contoh = (nama) => {
    console.log("Contoh Function " + nama);
}
contoh("Budi");

let tambah = function (a, b) {
    return a + b;
}
console.log(tambah(2, 3));

let plus = (a, b) => a + b;
console.log(plus(2, 3));

let hasil = (a) => a * 2;
console.log(hasil(4));

let lagi = () => console.log("Coba Lagi");
lagi();

let belajar = () => {
    console.log("Baris Satu");
    console.log("Baris Dua");
    console.log("Baris Tiga");
    console.log("Baris Selanjutnya");
}
belajar();

let nilai = 4;
let uji = nilai < 7 ? () => (predikat = "Gagal") : () => (predikat = "Lulus");
console.log(uji());