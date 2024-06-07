// Impor 'React' dari library React.
import React from "react";

// Komponen 'TodoItem' menerima tiga props: 'todo' (objek tugas individu), 'toggleCompleted' (fungsi untuk mengubah status tugas), dan 'deleteTodo' (fungsi untuk menghapus tugas).
const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
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
      {/* Tombol untuk menghapus tugas dari daftar */}
      <button
        style={styles.button} // Gunakan CSS-in-JS untuk styling tombol hapus.
        // Panggil fungsi 'deleteTodo' dengan ID tugas saat tombol ditekan.
        onClick={() => deleteTodo(todo.id)}
      >
        x
      </button>
    </div>
  );
};

// Definisikan objek 'styles' untuk menyimpan gaya CSS menggunakan CSS-in-JS.
const styles = {
  todoItem: {
    border: "2px solid #f4f4f4", // Garis batas (border) untuk setiap item tugas.
    fontSize: "24px", // Ukuran font untuk teks tugas.
    display: "flex", // Gunakan flexbox untuk mengatur layout.
    justifyContent: "space-between", // Atur elemen anak agar tersebar secara merata.
    alignItems: "center", // Pusatkan konten secara vertikal.
    padding: "0 20px", // Beri padding di sisi kiri dan kanan container.
  },
  checkbox: {
    height: "18px", // Tinggi checkbox.
    width: "18px", // Lebar checkbox.
  },
  button: {
    backgroundColor: "#BB0000", // Warna latar belakang tombol (merah).
    color: "#fff", // Warna teks tombol (putih).
    height: "30px", // Tinggi tombol.
    width: "30px", // Lebar tombol.
    borderRadius: "100%", // Bentuk tombol menjadi lingkaran.
    border: "none", // Hapus border default pada tombol.
    cursor: "pointer", // Ubah kursor menjadi pointer saat dihover.
    fontSize: "16px", // Ukuran font untuk tombol.
  },
};

// Ekspor komponen 'TodoItem' sebagai default export dari file ini.
export default TodoItem;
