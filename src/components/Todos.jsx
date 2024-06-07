// Impor 'React' dari library React.
import React from "react";
// Impor komponen 'TodoItem' yang digunakan untuk menampilkan setiap tugas.
import TodoItem from "./TodoItem";

// Komponen 'Todos' menerima satu prop: 'todos' (array daftar tugas).
const Todos = ({ todos }) => {
  // Render tampilan daftar tugas.
  return (
    <div style={styles.container}>
      {/* Loop melalui setiap tugas dalam array 'todos' */}
      {todos.map((todo) => (
        // Untuk setiap tugas, render komponen 'TodoItem'.
        // 'key' adalah properti unik untuk membantu React mengidentifikasi elemen ini.
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

// Definisikan objek 'styles' untuk menyimpan gaya CSS menggunakan CSS-in-JS.
const styles = {
  container: {
    width: "40%", // Lebar container adalah 40% dari lebar layar.
    margin: "0 auto", // Pusatkan container secara horizontal.
  },
};

// Ekspor komponen 'Todos' sebagai default export dari file ini.
export default Todos;
