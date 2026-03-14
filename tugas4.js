const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Kendaraan {
    constructor(nama, jenis, platNomor, tarifPerHari) {
        this.nama = nama;
        this.jenis = jenis;
        this.platNomor = platNomor;
        this.tarifPerHari = tarifPerHari;
        this.tersedia = true;
    }

    info() {
        return `${this.nama} (${this.jenis}) - Plat: ${this.platNomor} - Tarif: Rp${this.tarifPerHari.toLocaleString()}/hari - Status: ${this.tersedia ? 'Tersedia' : 'Disewa'}`;
    }
}

//CLASS MOBIL
class Mobil extends Kendaraan {
    constructor(nama, platNomor, tarifPerHari, jumlahKursi) {
        super(nama, 'Mobil', platNomor, tarifPerHari);
        this.jumlahKursi = jumlahKursi;
    }

    info() {
        return super.info() + ` - Kursi: ${this.jumlahKursi}`;
    }
}

//CLASS MOTOR
class Motor extends Kendaraan {
    constructor(nama, platNomor, tarifPerHari, tipeMotor) {
        super(nama, 'Motor', platNomor, tarifPerHari);
        this.tipeMotor = tipeMotor;
    }

    info() {
        return super.info() + ` - Tipe: ${this.tipeMotor}`;
    }
}
//CLASS BUS
class Bus extends Kendaraan {
    constructor(nama, platNomor, tarifPerHari, kapasitas) {
        super(nama, 'Bus', platNomor, tarifPerHari);
        this.kapasitas = kapasitas;
    }

    info() {
        return super.info() + ` - Kapasitas: ${this.kapasitas} orang`;
    }
}

//CLASS PELANGGAN
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    info() {
        let sewaan = this.kendaraanDisewa
            ? `${this.kendaraanDisewa.nama} (${this.kendaraanDisewa.jenis})`
            : 'Tidak ada';
        return `Nama: ${this.nama} | Telp: ${this.nomorTelepon} | Kendaraan: ${sewaan}`;
    }
}

//CLASS SISTEM MANAJEMEN TRANSPORTASI
class SistemTransportasi {
    constructor() {
        this.daftarKendaraan = [];
        this.daftarPelanggan = [];
        this.riwayatTransaksi = [];
    }

    // Tambah kendaraan ke sistem
    tambahKendaraan(kendaraan) {
        this.daftarKendaraan.push(kendaraan);
        console.log(`[+] Kendaraan "${kendaraan.nama}" berhasil ditambahkan.`);
    }

    // Tambah pelanggan ke sistem
    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
        console.log(`[+] Pelanggan "${pelanggan.nama}" berhasil didaftarkan.`);
    }

    // Catat transaksi penyewaan kendaraan
    sewaKendaraan(pelanggan, kendaraan, lamaHari) {
        if (!kendaraan.tersedia) {
            console.log(`[!] Gagal: Kendaraan "${kendaraan.nama}" sedang disewa pelanggan lain.`);
            return;
        }

        if (pelanggan.kendaraanDisewa) {
            console.log(`[!] Gagal: Pelanggan "${pelanggan.nama}" masih menyewa kendaraan lain.`);
            return;
        }

        // Proses penyewaan
        kendaraan.tersedia = false;
        pelanggan.kendaraanDisewa = kendaraan;

        let totalBiaya = kendaraan.tarifPerHari * lamaHari;

        let transaksi = {
            pelanggan: pelanggan.nama,
            kendaraan: kendaraan.nama,
            jenis: kendaraan.jenis,
            lamaHari: lamaHari,
            totalBiaya: totalBiaya,
            tanggal: new Date().toLocaleDateString('id-ID')
        };

        this.riwayatTransaksi.push(transaksi);

        console.log(`\n=== TRANSAKSI PENYEWAAN ===`);
        console.log(`Pelanggan : ${pelanggan.nama}`);
        console.log(`Kendaraan : ${kendaraan.nama} (${kendaraan.jenis})`);
        console.log(`Lama Sewa : ${lamaHari} hari`);
        console.log(`Total     : Rp${totalBiaya.toLocaleString()}`);
        console.log(`Tanggal   : ${transaksi.tanggal}`);
        console.log(`===========================\n`);
    }

    // Kembalikan kendaraan
    kembalikanKendaraan(pelanggan) {
        if (!pelanggan.kendaraanDisewa) {
            console.log(`[!] Pelanggan "${pelanggan.nama}" tidak sedang menyewa kendaraan.`);
            return;
        }

        let kendaraan = pelanggan.kendaraanDisewa;
        kendaraan.tersedia = true;
        pelanggan.kendaraanDisewa = null;

        console.log(`[✓] Kendaraan "${kendaraan.nama}" berhasil dikembalikan oleh "${pelanggan.nama}".`);
    }

    // Tampilkan daftar pelanggan yang sedang menyewa
    tampilkanPelangganAktif() {
        let pelangganAktif = this.daftarPelanggan.filter(function (p) {
            return p.kendaraanDisewa !== null;
        });

        console.log('\n== DAFTAR PELANGGAN YANG SEDANG MENYEWA ==');

        if (pelangganAktif.length === 0) {
            console.log('Tidak ada pelanggan yang sedang menyewa.');
        } else {
            pelangganAktif.forEach(function (p, i) {
                console.log(`${i + 1}. ${p.info()}`);
            });
        }

        console.log('============================================\n');
    }

    // Tampilkan semua kendaraan
    tampilkanSemuaKendaraan() {
        console.log('\n== DAFTAR KENDARAAN ==');
        this.daftarKendaraan.forEach(function (k, i) {
            console.log(`${i + 1}. ${k.info()}`);
        });
        console.log('======================\n');
    }

    // Tampilkan riwayat transaksi
    tampilkanRiwayatTransaksi() {
        console.log('\n== RIWAYAT TRANSAKSI ==');

        if (this.riwayatTransaksi.length === 0) {
            console.log('Belum ada transaksi.');
        } else {
            this.riwayatTransaksi.forEach(function (t, i) {
                console.log(`${i + 1}. ${t.pelanggan} -> ${t.kendaraan} (${t.jenis}) | ${t.lamaHari} hari | Rp${t.totalBiaya.toLocaleString()}`);
            });
        }

        console.log('========================\n');
    }
}


// Buat sistem transportasi kosong
let sistem = new SistemTransportasi();

function menu() {

    console.log("1. Tambah Kendaraan");
    console.log("2. Tambah Pelanggan");
    console.log("3. Tampilkan Kendaraan");
    console.log("4. Sewa Kendaraan");
    console.log("5. Kembalikan Kendaraan");
    console.log("6. Pelanggan Sedang Menyewa");
    console.log("7. Riwayat Transaksi");
    console.log("8. Keluar");

    rl.question("Pilih menu: ", function (pilih) {

        if (pilih == 1) {

            rl.question("Nama kendaraan: ", function (nama) {
                rl.question("Plat nomor: ", function (plat) {
                    rl.question("Tarif per hari: ", function (tarif) {

                        let mobil = new Mobil(nama, plat, parseInt(tarif), 5);

                        sistem.tambahKendaraan(mobil);

                        menu();

                    });
                });
            });

        }

        else if (pilih == 2) {

            rl.question("Nama pelanggan: ", function (nama) {
                rl.question("Nomor telepon: ", function (telp) {

                    let pelanggan = new Pelanggan(nama, telp);

                    sistem.tambahPelanggan(pelanggan);

                    menu();

                });
            });

        }

        else if (pilih == 3) {

            sistem.tampilkanSemuaKendaraan();
            menu();

        }

        else if (pilih == 4) {

            rl.question("Nama pelanggan: ", function (nama) {

                let pelanggan = sistem.daftarPelanggan.find(function (p) {
                    return p.nama.toLowerCase() === nama.toLowerCase();
                });

                if (!pelanggan) {
                    console.log("Pelanggan tidak ditemukan.");
                    menu();
                    return;
                }

                rl.question("Nama kendaraan yang ingin disewa: ", function (namaKendaraan) {

                    let kendaraan = sistem.daftarKendaraan.find(function (k) {
                        return k.nama.toLowerCase() === namaKendaraan.toLowerCase();
                    });

                    if (!kendaraan) {
                        console.log("Kendaraan tidak ditemukan.");
                        menu();
                        return;
                    }

                    rl.question("Lama sewa (hari): ", function (hari) {

                        sistem.sewaKendaraan(pelanggan, kendaraan, parseInt(hari));

                        menu();

                    });

                });

            });

        }

        else if (pilih == 5) {

            rl.question("Nama pelanggan yang mengembalikan kendaraan: ", function (nama) {

                let pelanggan = sistem.daftarPelanggan.find(function (p) {
                    return p.nama.toLowerCase() === nama.toLowerCase();
                });

                if (!pelanggan) {
                    console.log("Pelanggan tidak ditemukan.");
                } else {
                    sistem.kembalikanKendaraan(pelanggan);
                }

                menu();

            });

        }


        else if (pilih == 6) {
            sistem.tampilkanPelangganAktif();
            menu();
        }


        else if (pilih == 7) {
            sistem.tampilkanRiwayatTransaksi();
            menu();
        }

        else if (pilih == 8) {
            console.log("Program selesai");
            rl.close();
        }
    });
}

menu();