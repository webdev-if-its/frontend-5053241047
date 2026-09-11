// TODO(Level 8): beri tipe props yang benar — { judul: string; children: ReactNode }
// (impor tipe ReactNode dari 'react'). Render <section> berisi judul (mis.
// di <h3>) DAN {children} di dalamnya. Lihat SOAL.md untuk kontrak lengkap.
import type { ReactNode } from 'react'

export function Panel(props: { judul: string; children: ReactNode }) {
  return <section>
    <h3>{props.judul}</h3>
    {props.children}
  </section>
}
