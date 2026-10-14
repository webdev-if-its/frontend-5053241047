// TODO(Level 8-10): komponen TANPA props — aplikasi todo yang tersambung ke
// API lewat fungsi di '../api/todos' (JANGAN memanggil fetch() langsung di
// sini):
// - saat pertama tampil: ambil daftar (getTodos) dan tampilkan sebagai <li>,
//   tiap <li> berisi checkbox berlabel title + tombol "Hapus",
// - form dengan input berlabel "Todo baru" + tombol "Tambah": panggil
//   addTodo(title), lalu tambahkan todo HASIL RESPONS ke akhir daftar dan
//   kosongkan input,
// - klik checkbox: panggil updateTodo(id, !completed), lalu ganti todo itu di
//   state dengan HASIL RESPONS,
// - klik "Hapus": panggil hapusTodo(id), lalu buang todo itu dari state.
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from 'react'
import { getTodos, addTodo } from '../api/todos'
import type { Todo } from '../types'

export function AplikasiTodoApi() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputTitle, setInputTitle] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getTodos()
      .then((data) => {
        setTodos(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message || String(error))
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Memuat...</p>
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (inputTitle.trim() === '') return

          addTodo(inputTitle)
            .then((newTodo) => {
              setTodos((prevTodos) => [...prevTodos, newTodo])
              setInputTitle('')
            })
        }}
      >
        <label>
          Todo baru:
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
        </label>
        <button type="submit">Tambah</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                readOnly />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
