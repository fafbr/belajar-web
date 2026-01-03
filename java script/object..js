// membuat objek 
// objek literal
var mhs1 = {
    nama : 'anddika',
    nrp : '234124141',
    email : 'asfa@goo.com',
    jurusan : 'Data Sains'
};

// function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
};

var mhs3 = buatObjectMahasiswa('fafa', '3242331', 'adsda@yahoo.com', 'Teknologi Informasi');

// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
};

var mhs4 = new Mahasiswa('Erik', '34141141', 'erika@afas.com', 'Teknik Nguli');

