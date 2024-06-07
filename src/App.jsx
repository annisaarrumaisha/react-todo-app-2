// Impor 'React' dan hook 'useState' dari library React.
import React, { useState } from "react";

// Impor komponen 'Todos' yang digunakan untuk menampilkan daftar tugas.
import Todos from "./components/Todos";

// Komponen utama aplikasi kita, 'App'.
function App() {
  // Definisikan state 'todos' yang berisi daftar tugas.
  // 'todos' adalah array dari objek-objek tugas.
  // 'setTodos' adalah fungsi untuk memperbarui state 'todos'.
  const [todos, setTodos] = useState([
    {
      id: 1, // ID unik untuk tugas pertama.
      title: "Finish Progate React Course", // Judul dari tugas pertama.
      completed: false, // Status penyelesaian tugas pertama (belum selesai).
    },
    {
      id: 2, // ID unik untuk tugas kedua.
      title: "Have lunch with Guru Domba", // Judul dari tugas kedua.
      completed: false, // Status penyelesaian tugas kedua (belum selesai).
    },
    {
      id: 3, // ID unik untuk tugas ketiga.
      title: "Study React with Ninja Ken", // Judul dari tugas ketiga.
      completed: false, // Status penyelesaian tugas ketiga (belum selesai).
    },
  ]);

  // Fungsi untuk mengganti status 'completed' pada tugas.
  // 'todoId' adalah ID dari tugas yang akan diubah statusnya.
  const toggleCompleted = (todoId) => {
    // Peta ulang array 'todos' untuk membuat array tugas yang baru.
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        // Ubah status 'completed' pada tugas yang sesuai dengan 'todoId'.
        todo.completed = !todo.completed;
      }
      return todo;
    });
    // Perbarui state 'todos' dengan array tugas yang baru.
    setTodos(updatedTodos);
  };

  // Fungsi untuk menghapus tugas dari daftar.
  // 'todoId' adalah ID dari tugas yang akan dihapus.
  const deleteTodo = (todoId) => {
    // Gunakan metode 'filter' untuk membuat array tugas yang tidak termasuk tugas yang akan dihapus.
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // Perbarui state 'todos' dengan array tugas yang telah dihapus.
    setTodos(updatedTodos);
  };

  // Render tampilan aplikasi.
  return (
    <div style={styles.container}>
      {" "}
      {/* Gunakan CSS-in-JS untuk styling container utama */}
      <h1 style={styles.title}>My Todo List</h1>{" "}
      {/* Gunakan CSS-in-JS untuk styling judul */}
      {/* Teruskan data 'todos', fungsi 'toggleCompleted', dan 'deleteTodo' ke komponen 'Todos' */}
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

// Definisikan objek 'styles' untuk menyimpan gaya CSS menggunakan CSS-in-JS.
const styles = {
  container: {
    textAlign: "center", // Atur teks agar berada di tengah.
    padding: "12px", // Beri padding di sekitar container.
  },
  title: {
    fontSize: "36px", // Ukuran font untuk judul.
  },
};

// Ekspor komponen 'App' sebagai default export dari file ini, sehingga dapat digunakan di file lain.
export default App;
