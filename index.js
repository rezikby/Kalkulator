// ambil elemen untuk nampilin angka
const layar = document.getElementById("isi-angka");

// Variabel penampung input
let input = "";

// Fungsi menampilkan ke layar
function updateLayar() {
    layar.innerText = input;
}


//     input angkaa

function inputAngka(angka) {
    input += angka;
    updateLayar();
}


//     OPERASi perhitungan
function Tambah() {
    input += "+";
    updateLayar();
}

function Kurang() {
    input += "-";
    updateLayar();
}

function Kali() {
    input += "*";  
    updateLayar();
}

function Bagi() {
    input += "/";  
    updateLayar();
}

function Persen() {
    input += "%";
    updateLayar();
}

function Titik() {
    input += ".";
    updateLayar();
}


//   fungsi sama dengan
function SamaDengan() {
    try {
        input = eval(input).toString();   // hasil jadi string
        updateLayar();
    } catch (err) {
        input = "Error";
        updateLayar();
        setTimeout(() => {
            input = "";
            updateLayar();
        }, 1000);
    }
}


//   FUNGSI KHUSUS
function AC() {
    input = "";
    updateLayar();
}

function Hapus() {
    input = input.slice(0, -1);  
    updateLayar();
}

function NambehBanyak() {
    alert("tolong masuka angka");
}
