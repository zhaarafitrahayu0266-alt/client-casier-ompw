import { createContext, useContext, useState } from 'react'

const KeranjangContext = createContext(null)

export function KeranjangProvider({ children }) {
  const [items, setItems] = useState([])

  const tambah = (produk) => {
    setItems((prev) => {
      const ada = prev.find((i) => i.produk_id === produk.id)
      if (ada) {
        return prev.map((i) =>
          i.produk_id === produk.id ? { ...i, jumlah: i.jumlah + 1 } : i
        )
      }
      return [
        ...prev,
        { produk_id: produk.id, nama: produk.nama, harga: produk.harga, jumlah: 1 },
      ]
    })
  }

  const kosongkan = () => setItems([])
  const total = items.reduce((s, i) => s + i.harga * i.jumlah, 0)
  const jumlahItem = items.reduce((s, i) => s + i.jumlah, 0)

  return (
    <KeranjangContext.Provider value={{ items, tambah, kosongkan, total, jumlahItem }}>
      {children}
    </KeranjangContext.Provider>
  )
}

export const useKeranjang = () => useContext(KeranjangContext)