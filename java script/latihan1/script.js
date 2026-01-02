function suwit(p) {
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    
    console.log(comp);

    // let hasil = '';
    // if (comp == p) {
    //   hasil = 'Hasilnya seri!'
    // } else {
    //     switch (p) {
    //         case 'gajah':
    //             hasil = (comp == 'orang') ? 'Yeeah Menaaang!!!':'Yaaah Kalaah!!!';
    //             break;
    //         case 'orang':
    //             hasil = (comp == 'gajah') ? 'Yaaah Kalaah!!!':'Yeeah Menaaang!!!';
    //             break;
    //         case 'semut':
    //             hasil = (comp == 'gajah') ? 'Yeaah Menaaang!!!':'Yaaah Kalaah!!!';
    //             break;
    //         default:
    //             hasil = 'memasukkan pilihan yg salah!';
    //             break;
    //     }
    // }
    // return hasil;
};

while (true) {
    alert('Main game yuk!');
    var pilihan = prompt('pilih Gajah, Orang, Semut (Ketik stop untuk berhenti): ');
    let hasil = suwit(pilihan);
    alert(hasil);
};
