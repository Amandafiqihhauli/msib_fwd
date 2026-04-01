import { index, store, destroy } from "./controller.mjs";

const main = () => {
    //tambah 2 data baru dengan Push
    store({ nama: "Dewi", umur: 28, alamat: "Jl. Melati No. 5", email: "dewi@example.com" });
    store({ nama: "Budi", umur: 30, alamat: "Jl. Mawar No. 10", email: "budi@example.com" });
    
    console.log("\n");

    //tampilkan data
    index();

    console.log("\n");

    //hapus data
    destroy(0);

    console.log("\n");
    console.log("Setelah data dihapus:");
    index();
};
main();