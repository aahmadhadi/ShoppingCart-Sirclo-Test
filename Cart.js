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
