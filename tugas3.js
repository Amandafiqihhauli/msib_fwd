
            let produkToko = [
                {id:1,nama:"Laptop",harga:7000000,stok:5},
                {id:2,nama:"Mouse",harga:200000,stok:10},
                {id:3,nama:"Keyboard",harga:350000,stok:7}
            ];

            // TAMBAH PRODUK
            function tambahProduk(nama,harga,stok){

                let idBaru = produkToko.length + 1;

                let produkBaru = {
                    id:idBaru,
                    nama:nama,
                    harga:harga,
                    stok:stok
                };
                produkToko.push(produkBaru);
                console.log('Produk berhasil ditambahkan');
            };

            // HAPUS PRODUK
            function hapusProduk(id){

                produkToko = produkToko.filter(function(p){
                    return p.id !== id;
                });

                console.log('Produk berhasil dihapus');
                }

            // TAMPILKAN PRODUK
            function tampilkanProduk(){
                console.log('== DAFTAR PRODUK ==')

                produkToko.forEach(function(p){
                    console.log(
                        'ID:',p.id,
                        'Nama:',p.nama,
                        'Harga',p.harga,
                        'Stok:',p.stok,
                    )
                });
                }   

                // MENAMPILKAN
                tampilkanProduk();
                tambahProduk('Headset',500000,4);
                hapusProduk(2);
                tampilkanProduk();
