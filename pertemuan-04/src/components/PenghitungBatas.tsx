// TODO(Level 6): beri tipe props yang benar — { min: number; max: number }.
// Angka dimulai dari min, ditampilkan sebagai "Nilai: {angka}", dengan tombol
// "+" dan "-". Tombol "+" harus disabled saat angka sudah = max, tombol "-"
// harus disabled saat angka sudah = min.
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react"

export function PenghitungBatas(props: { min: number; max: number }) {
  const [angka, setAngka] = useState(props.min)
  return (
  <div>
  <p>Nilai: {angka}</p>
  <button disabled={angka === props.min} onClick={() => setAngka(angka - 1)}>-</button>
  <button disabled={angka === props.max} onClick={() => setAngka(angka + 1)}>+</button>
  </div>)
}
