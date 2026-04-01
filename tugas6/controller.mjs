import users from "./data.mjs";

const index = () => {
    console.log("Daftar Pengguna:");
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    })
};

const store = (user) => {
    users.push(user);
    console.log(`Pengguna berhasil ditambahkan: ${user.nama}`);
};

const destroy = (indexData) => {
    if (users[indexData]) {
        const deleted = users.splice(indexData, 1);
        console.log(`Pengguna berhasil dihapus: ${deleted[0].nama}`);
    } else {
        console.log("Data tidak ditemukan.");
    }
};

export { index, store, destroy };