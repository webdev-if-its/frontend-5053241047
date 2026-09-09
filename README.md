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
(tulis di sini)

## Kenapa Union Type untuk Status
(tulis di sini)

## Refleksi
(tulis di sini)
