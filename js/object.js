const objek = {
    nama: "Mochammad Enrique",
    telp: 12345678,

    buah: ['Apel', 'Mangga', 'Jeruk'],

    coba: function () {
        return "Coba function dalam objek";
    },

    boleh: true,
    "tulis aja": 12345600,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis aja"]);
