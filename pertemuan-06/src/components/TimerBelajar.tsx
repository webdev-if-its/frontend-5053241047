// TODO(Level 10): beri tipe props yang benar — { detikAwal: number }.
// Gabungkan semua materi pertemuan ini jadi timer belajar:
// - teks "Sisa: {n} detik" (mulai dari detikAwal), tombol "Mulai"/"Jeda"
//   (bergantian) dan tombol "Reset",
// - saat berjalan, sisa berkurang tiap detik; "Jeda" menghentikan timer
//   (tidak ada timer tersisa); "Reset" mengembalikan sisa ke detikAwal
//   dan berhenti,
// - saat sisa = 0: tampil teks "Selesai!", timer berhenti otomatis, dan
//   tombol "Mulai" dinonaktifkan (disabled),
// - judul tab (document.title) selalu "Sisa: {n} detik" selama komponen
//   terpasang, dan KEMBALI ke judul semula saat komponen dilepas
//   (cleanup).
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from "react";

export function TimerBelajar(props: { detikAwal: number }) {
  const [sisa, setSisa] = useState(props.detikAwal)
  const [jalan, setJalan] = useState(false)

  useEffect(() => {
    const judulLama = document.title
    return () => {
      document.title = judulLama
    }
  }, [])

  useEffect(() => {
    document.title = `Sisa: ${sisa} detik`
  }, [sisa])

  useEffect(() => {
    if (sisa === 0) {
      setJalan(false)
      return
    }

    if (!jalan) return

    const timer = setInterval(() => {
      setSisa((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [jalan, sisa])

  const handleReset = () => {
    setSisa(props.detikAwal)
    setJalan(false)
  }

  return (
    <div>
      <p>Sisa: {sisa} detik</p>
      {sisa === 0 && <p>Selesai!</p>}
      <button onClick={() => setJalan(!jalan)} disabled={sisa === 0}>
        {jalan ? "Jeda" : "Mulai"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
