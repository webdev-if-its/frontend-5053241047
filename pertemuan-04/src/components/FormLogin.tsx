// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react"

export function FormLogin(props: { onLogin: (email: string) => void }) {
  const [email, setEmail] = useState('')
  return <form onSubmit={(e) => {e.preventDefault()
  props.onLogin(email)}}>
    <label>Email<input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)} />
    </label>
    <button type="submit">Masuk</button>
  </form>
}
