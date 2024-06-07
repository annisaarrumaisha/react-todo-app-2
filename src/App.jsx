// Impor 'React' dan hook 'useState' dari library React.
import React, { useState } from "react";

// Impor komponen 'Todos' yang akan digunakan di sini.
import Todos from "./components/Todos";

// Komponen 'App' adalah komponen utama dari aplikasi kita.
function App() {
  // Definisikan state 'todos' dengan hook 'useState'.
  // 'todos' adalah sebuah array yang menyimpan daftar tugas (todo).
  // 'setTodos' adalah fungsi untuk memperbarui state 'todos'.
  const [todos, setTodos] = useState([
    {
      id: 1, // ID unik untuk todo pertama.
      title: "Finish Progate React Course", // Judul dari todo pertama.
      completed: false, // Status penyelesaian todo pertama (belum selesai).
    },
    {
      id: 2, // ID unik untuk todo kedua.
      title: "Have lunch with Guru Domba", // Judul dari todo kedua.
      completed: false, // Status penyelesaian todo kedua (belum selesai).
    },
    {
      id: 3, // ID unik untuk todo ketiga.
      title: "Study React with Ninja Ken", // Judul dari todo ketiga.
      completed: false, // Status penyelesaian todo ketiga (belum selesai).
    },
  ]);

  // Cetak daftar 'todos' ke konsol untuk tujuan debugging.
  console.log(todos);

  // Render tampilan aplikasi.
  return (
    <div>
      <h1>My Todo List</h1> {/* Judul aplikasi */}
      {/* Berikan data 'todos' ke komponen 'Todos' sebagai prop */}
      <Todos todos={todos} />
    </div>
  );
}

// Ekspor komponen 'App' sebagai default export dari file ini, sehingga bisa diimpor dan digunakan di file lain.
export default App;
