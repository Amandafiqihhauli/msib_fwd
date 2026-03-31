// LIST PRODUK
let produkList = [
    {id: 1, nama: "Laptop", harga: 10000000, stok: 10},
    {id: 2, nama: "Smartphone", harga: 5000000, stok: 20},
    {id: 3, nama: "Tablet", harga: 3000000, stok: 15},
    {id: 4, nama: "Headphones", harga: 500000, stok: 25},
    {id: 5, nama: "Smartwatch", harga: 2000000, stok: 12}
]

// FUNGSI MENAMPILKAN PRODUK
function tampilkanProduk(...produk) {
    const list = document.getElementById("listProduk")
    list.innerHTML = ""

    produk.forEach(({id, nama, harga, stok}) => {
        const li = document.createElement("li")
        li.textContent = `${id}: ${nama} - Harga: ${harga} - Stok: ${stok}`
        list.appendChild(li)
    })
}

// FUNGSI MENAMBAH PRODUK
function tambahProduk(nama, harga, stok) {

    const idBaru = produkList.length + 1

    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    }

    produkList = [...produkList, produkBaru] // spread operator

    tampilkanProduk(...produkList)
}

// FUNGSI MENGHAPUS PRODUK
function hapusProduk(id) {

    produkList = produkList.filter(produk => produk.id != id)

    tampilkanProduk(...produkList)
}

// EVENT HANDLER
const eventHandler = {

    tambahClick() {
        const nama = document.getElementById("namaProduk").value
        tambahProduk(nama)
    },

    hapusClick() {
        const id = document.getElementById("hapusId").value
        hapusProduk(id)
    },

    tampilClick() {
        tampilkanProduk(...produkList)
    }

}

// EVENT LISTENER
document.getElementById("tambahBtn").addEventListener("click", eventHandler.tambahClick)
document.getElementById("hapusBtn").addEventListener("click", eventHandler.hapusClick)
document.getElementById("tampilBtn").addEventListener("click", eventHandler.tampilClick)
