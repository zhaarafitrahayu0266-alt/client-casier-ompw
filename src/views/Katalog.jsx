import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db'
import { rupiah } from '../utils/format'
import { useKeranjang } from '../stores/KeranjangContext'
import './Katalog.css'

export default function Katalog() {
    const produk =
        useLiveQuery(() => db.produk.where('aktif').equals(1).toArray(), []) ?? []
    const [kategori, setKategori] = useState('Semua')
    const [cari, setCari] = useState('')
    const { tambah, total, jumlahItem } = useKeranjang()

    const daftarKategori = ['Semua', ...new Set(produk.map((p) => p.kategori))]

    const tampil = produk.filter(
        (p) =>
        (kategori === 'Semua' || p.kategori === kategori) &&
        p.nama.toLowerCase().includes(cari.toLowerCase())
    )

    return(
        <div className="katalog">
      <input
        value={cari}
        onChange={(e) => setCari(e.target.value)}
        placeholder="Cari menu..."
      />

      <div className="kategori">
        {daftarKategori.map((k) => (
          <button key={k} onClick={() => setKategori(k)}>
            {k}
          </button>
        ))}
      </div>

      <div className="grid">
        {tampil.map((p) => (
          <button key={p.id} className="kartu" onClick={() => tambah(p)}>
            <strong>{p.nama}</strong>
            <span>{rupiah(p.harga)}</span>
          </button>
        ))}
      </div>

      <div className="bar">
        {jumlahItem} item · {rupiah(total)}
        <button disabled={jumlahItem === 0}>Checkout</button>
      </div>
    </div>
    )
}