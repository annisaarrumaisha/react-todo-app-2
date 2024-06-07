// Impor 'React' dari library React.
import React from "react";

// Impor komponen 'TodoItem' yang digunakan untuk menampilkan setiap tugas.
import TodoItem from "./TodoItem";

// Komponen 'Todos' menerima tiga props: 'todos' (array daftar tugas), 'toggleCompleted' (fungsi untuk mengubah status tugas), dan 'deleteTodo' (fungsi untuk menghapus tugas).
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {" "}
      {/* Gunakan CSS-in-JS untuk styling container */}
      {/* Loop melalui setiap tugas dalam array 'todos' */}
      {todos.map((todo) => (
        // Untuk setiap tugas, render komponen 'TodoItem'.
        // 'key' adalah properti unik untuk membantu React mengidentifikasi elemen ini.
        <TodoItem
          key={todo.id}
          todo={todo}
          // Teruskan fungsi 'toggleCompleted' dan 'deleteTodo' ke komponen 'TodoItem'.
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
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
