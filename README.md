# frontend-nrp

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project
main.tsx adalah pintu masuk paling awal ketika suatu project dibuka di browser. File ini akan menghubungkan React ke file HTML dan merendernya sehingga dimengerti oleh sistem browser. Sementara App.tsx, ini adalah file yang menjadi induk dari sebuah project. Fungsinya untuk menyatukan semua elemen website yang terpisah di berbagai file dalam project dan mengarahkan website untuk menampilkan bagian elemen yang benar.

## Identitas
- Nama: Fathiya Haya Shafa Kamila Setiadi
- NRP: 5053241047
- Kelas: Pengembangan Frontend Dasar (M)

## Commit vs Push
Git commit adalah ketika pengerjaan kode terbaru ditandai perubahannya dan tersimpan di repository lokal, lalu git push adalah proses penyimpanan atau penetapan kode terbaru tersebut di repositori jaringan git. Jika seseorang melakukan commit tanpa melakukan push, maka pembaruan kode tidak akan tersimpan dan tidak dapat diakses atau dilihat oleh tim secara online.

## JSX vs TSX
File .jsx adalah file yang menggunakan Javascript biasa untuk menulis sintaksnya, sementara .tsx adalah file yang menggunakan Typescript atau versi Javascript yang dilengkapi dengan type-checking otomatis. Project ini memakai .tsx atau Typescript agar lebih memudahkan pengerjaan kode karena error akan langsung terdeteksi jika sewaktu-waktu muncul dalam penulisan. Selain itu, dengan auto-compile dan saran editor yang lebih lengkap, tentunya akan lebih memudahkan proses pengerjaan kode tersebut.

## Kenapa Union Type untuk Status
Penggunaan union type di sini berguna salah satunya untuk meminimalisir kesalahan dari pihak developer. Dalam union type, daftar pilihan kata yang valid akan terkunci sehingga ketika ada typo saat penulisan, akan langsung ada pemberitahuan. Karena penggunaan string biasa tidak bisa melakukan ini sehingga rawan error, union type menjadi pilihan yang cocok digunakan. Selain itu, dalam penulisan kodenya, akan ada fitur auto-complete yang langsung menampilkan pilihan kata valid sehingga developer tidak perlu menulis ulang. Hal ini tentu akan lebih memudahkan proses penulisan.

## Refleksi
Konsep komponen yang berkesan bagi saya adalah konsep props yang sebenarnya mirip attribut di HTML namun lebih bebas dan leluasa. Menurut saya, props membuat pengiriman data antar komponen menjadi lebih mudah karena kita bisa mengatur sendiri nama serta tipe datanya tanpa batasan.

## Refleksi Pertemuan 3
Saya terkesan dengan bagaimana penggunaan Tailwind memudahkan kita sehingga tidak perlu bolak-balik antara file berisi kode yang sedang dikerjakan dengan file berisi styling dari setiap bagian kode seperti yang terjadi jika kita menggunakan HTML + CSS biasa. Selain itu, saya juga terkesan dengan bagaimana kita bisa mengontrol elemen yang muncul di layar dengan conditional rendering.