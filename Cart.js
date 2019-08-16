class Cart {

    constructor() {
        this.produk = []
    }

    tambahProduk(kodeProduk, kuantitas) {
        let isNewArrival = true;

        for (let i = 0; i < this.produk.length; i++) {
            isNewArrival = kodeProduk.toLowerCase() === this.produk[i].kodeProduk.toLowerCase() ? false : isNewArrival;
        }

        if (isNewArrival) {
            this.produk
                .push({
                    kodeProduk: kodeProduk,
                    kuantitas: kuantitas
                });
        } else {
            for (let j = 0; j < this.produk.length; j++) {
                if (kodeProduk.toLowerCase() === this.produk[j].kodeProduk.toLowerCase()) {
                    this.produk[j].kuantitas += kuantitas;
                }
            }
        }
    }

    hapusProduk(kodeProduk) {
        this.produk = this.produk
            .filter(produk => produk.kodeProduk.toLowerCase() != kodeProduk.toLowerCase())
    }

    tampilkanCart(){
        this.produk.forEach(produk => {
            console.log(`${produk.kodeProduk} (${produk.kuantitas})`)
        });
    }

}

//   export default Cart;

const keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();
