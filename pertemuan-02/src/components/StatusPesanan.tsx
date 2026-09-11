// TODO(Level 6): beri tipe props yang benar — { status: Status } (impor
// `Status` dari '../types', jangan tulis ulang union-nya di sini). Lalu
// render teks berbeda sesuai status: pending -> "Menunggu", selesai ->
// "Selesai", batal -> "Dibatalkan". Lihat SOAL.md untuk kontrak lengkap.
import { type Status } from '../types';

export function StatusPesanan(props: { status: Status }) {
  const teks = {
    pending: 'Menunggu',
    selesai: 'Selesai',
    batal: 'Dibatalkan'
  }

  return <p>{teks[props.status]}</p>
}
