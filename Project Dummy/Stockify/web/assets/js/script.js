function tampilkanJam() {
    const elJam = document.getElementById('jam-realtime');
    if(elJam) {
        const waktu = new Date();
        elJam.innerText = `Waktu ${waktu.getHours().toString().padStart(2, '0')}:${waktu.getMinutes().toString().padStart(2, '0')}`;
    }
}

setInterval(tampilkanJam, 1000);
tampilkanJam();

const btnLogout = document.getElementById('btn-logout');
if(btnLogout) {
    btnLogout.addEventListener('click', (e) => {
        e.preventDefault();
        if(confirm("Yakin ingin keluar dari Stockify?")) {
            window.location.href = "login.html"
        }
    });
}

const modal = document.getElementById('form-modal');
const btnBukaModal = document.getElementById('btn-tambah-data');
const btnTutupModal = document.getElementById('btn-tutup-modal')

if(btnBukaModal && modal) {
    btnBukaModal.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
}

if(btnTutupModal && modal) {
    btnTutupModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});