import Dexie from 'dexie'

export const db = new Dexie('kasir-pw')

db.version(1).stores({
    produk: '++id, nama, kategori, aktif',
    transaksi: '++id, waktu, metode_bayar',
    item_transaksi: '++id, transaksi_id, produk_id'
})
