// Impor 'React' dari library React.
import React from "react";

// Komponen 'TodoItem' menerima dua props: 'todo' (objek tugas individu) dan 'toggleCompleted' (fungsi untuk mengubah status tugas).
const TodoItem = ({ todo, toggleCompleted }) => {
  // Fungsi untuk menentukan gaya judul berdasarkan status 'completed'.
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      // Jika 'completed' adalah true, gunakan gaya teks dengan coretan.
      return { textDecoration: "line-through" };
    } else {
      // Jika 'completed' adalah false, tidak ada coretan pada teks.
      return { textDecoration: "none" };
    }
  };

  // Render tampilan item tugas.
  return (
    <div style={styles.todoItem}>
      {" "}
      {/* Gunakan CSS-in-JS untuk styling item tugas */}
      <input
        type="checkbox" // Tambahkan checkbox untuk mengubah status tugas.
        style={styles.checkbox} // Gunakan CSS-in-JS untuk styling checkbox.
        // Panggil fungsi 'toggleCompleted' dengan ID tugas saat status checkbox berubah.
        onChange={() => toggleCompleted(todo.id)}
        // Set checkbox untuk dicentang berdasarkan status 'completed'.
        checked={todo.completed}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>{" "}
      {/* Tampilkan judul tugas dengan gaya dinamis */}
    </div>
  );
};

// Definisikan objek 'styles' untuk menyimpan gaya CSS menggunakan CSS-in-JS.
const styles = {
  todoItem: {
    border: "2px solid #f4f4f4", // Garis batas (border) untuk setiap item tugas.
    fontSize: "24px", // Ukuran font untuk teks tugas.
    display: "flex", // Gunakan flexbox untuk mengatur layout.
    justifyContent: "center", // Pusatkan konten secara horizontal.
    alignItems: "center", // Pusatkan konten secara vertikal.
  },
  checkbox: {
    marginRight: "10px", // Beri jarak antara checkbox dan teks.
    height: "18px", // Tinggi checkbox.
    width: "18px", // Lebar checkbox.
  },
};

// Ekspor komponen 'TodoItem' sebagai default export dari file ini.
export default TodoItem;
