// Impor 'React' dari library React.
import React from "react";

// Komponen 'TodoItem' menerima prop 'todo' yang merupakan objek tugas individu.
const TodoItem = ({ todo }) => {
  return (
    <div style={styles.todoItem}>
      {" "}
      {/* Gunakan CSS-in-JS untuk styling item tugas */}
      <p>{todo.title}</p> {/* Tampilkan judul tugas */}
    </div>
  );
};

// Definisikan objek 'styles' untuk menyimpan gaya CSS menggunakan CSS-in-JS.
const styles = {
  todoItem: {
    border: "2px solid #f4f4f4", // Garis batas (border) untuk setiap item tugas.
    fontSize: "24px", // Ukuran font untuk teks tugas.
  },
};

// Ekspor komponen 'TodoItem' sebagai default export dari file ini.
export default TodoItem;
