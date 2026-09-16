// TODO(Level 7): beri tipe props yang benar — { variant: 'primary' |
// 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }.
// Render sebuah <button> yang:
// - memuat children di dalamnya,
// - memanggil onClick saat diklik (kalau diberikan),
// - className-nya BERBEDA untuk tiap nilai variant (pakai Tailwind, mis.
//   warna latar berbeda per variant) — ini komponen REUSABLE: satu
//   komponen, tiga tampilan, diatur lewat props.
// Lihat SOAL.md untuk kontrak lengkap.
import type { ReactNode } from 'react'

export function Button(props: { variant: 'primary' | 'secondary' | 'danger'; children: ReactNode; onClick?: () => void }) {
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-green-600 text-white",
    danger: "bg-red-600 text-white"
  }
  return (
    <button 
      onClick={props.onClick} 
      className={`${variants[props.variant]}`}
    >
      {props.children}
    </button>
  )
}
