import { KeranjangProvider } from './stores/KeranjangContext'
import Katalog from './views/Katalog'

export default function App() {
  return (
    <KeranjangProvider>
      <Katalog />
    </KeranjangProvider>
  )
}