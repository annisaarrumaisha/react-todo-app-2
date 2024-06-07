// Impor komponen 'React' dan hook 'useState' dari library React.
import React, { useState } from "react";

// Fungsi 'App' adalah komponen utama aplikasi kita.
function App() {
  // Definisikan state 'todos' dengan menggunakan hook 'useState'.
  // State 'todos' adalah sebuah array yang menyimpan daftar todo.
  // 'setTodos' adalah fungsi untuk mengubah nilai state 'todos'.
  const [todos, setTodos] = useState([
    {
      id: 1, // ID unik untuk todo pertama
      title: "Finish Progate React Course", // Judul dari todo pertama
      completed: false, // Status penyelesaian todo pertama (belum selesai)
    },
    {
      id: 2, // ID unik untuk todo kedua
      title: "Have lunch with Guru Domba", // Judul dari todo kedua
      completed: false, // Status penyelesaian todo kedua (belum selesai)
    },
    {
      id: 3, // ID unik untuk todo ketiga
      title: "Study React with Ninja Ken", // Judul dari todo ketiga
      completed: false, // Status penyelesaian todo ketiga (belum selesai)
    },
  ]);

  // Cetak daftar todos ke console browser untuk keperluan debugging.
  console.log(todos);

  // Render tampilan aplikasi.
  return (
    <div>
      <h1>My Todo List</h1> {/* Judul aplikasi */}
      {/* Looping melalui setiap elemen dalam array 'todos' menggunakan metode 'map'. */}
      {/* Untuk setiap todo, kita membuat elemen <p> untuk menampilkan judulnya. */}
      {/* 'key' digunakan sebagai identifikasi unik untuk setiap elemen yang di-render. */}
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
}

// Ekspor komponen 'App' sebagai komponen default dari file ini, sehingga bisa di-import di file lain.
export default App;
