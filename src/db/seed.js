import {db} from './index'

const menuAwal = [
    { nama: 'Nasi Goreng Biasa', harga: 13000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Nasi Goreng Jumbo', harga: 16000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Nasi Goreng Udang', harga: 18000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Nasi Goreng Jeroan', harga: 18000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Nasi Goreng Mawut', harga: 18000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Nasi Goreng Ayam Krispi', harga: 21000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Nasi Goreng Jumbo Ayam Krispi', harga: 24000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Nasi Goreng Mawut Ayam Krispi', harga: 26000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Bakmie Biasa', harga: 13000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Bakmie Nyemek', harga: 13000, kategori: 'Makanan', aktif: 1 }, 
    { nama: 'Bakmie Jumbo', harga: 16000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Bakmie Udang', harga: 18000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Bakmie Jeroan', harga: 18000, kategori: 'Makanan', aktif: 1 }, 
    { nama: 'Bakmie Spesial', harga: 18000, kategori: 'Makanan', aktif: 1 },    
    { nama: 'Bakmie Ayam Krispi', harga: 21000, kategori: 'Makanan', aktif: 1 },    
    { nama: 'Capcay Goreng', harga: 18000, kategori: 'Makanan', aktif: 1 }, 
    { nama: 'Capcay Kuah', harga: 18000, kategori: 'Makanan', aktif: 1 },   
    { nama: 'Capcay Jumbo Goreng/Kuah', harga: 22000, kategori: 'Makanan', aktif: 1 },  
    { nama: 'Ayam Geprek', harga: 12000, kategori: 'Makanan', aktif: 1 },   
    { nama: 'Jeroan Geprek', harga: 12000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Udang Geprek', harga: 15000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Ayam Geprek + Nasi', harga: 14000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Jeroan Geprek + Nasi', harga: 14000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Udang Geprek + Nasi', harga: 17000, kategori: 'Makanan', aktif: 1 },
    { nama: 'Es Teh', harga: 4000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Es Jeruk', harga: 5000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Es Susu', harga: 5000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Es Soda Gembira', harga: 10000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Es Joshua', harga: 6000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Es Lemon Tea', harga: 5000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Air Mineral', harga: 3000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Teh Hangat', harga: 3000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Jeruk Hangat', harga: 4000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Susu Hangat', harga: 4000, kategori: 'Minuman', aktif: 1 },
    { nama: 'Kopi Hitam', harga: 4000, kategori: 'Minuman', aktif: 1 }, 
    { nama: 'Kopi Susu', harga: 5000, kategori: 'Minuman', aktif: 1 },  
]

export async function isiMenuAwal() {
    if ((await db.produk.count()) === 0) {
        await db.produk.bulkAdd(menuAwal)
    }
}
