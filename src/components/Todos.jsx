// Impor 'React' dari library React.
import React from "react";

// Impor komponen 'TodoItem' yang akan digunakan di sini.
import TodoItem from "./TodoItem";

// Komponen 'Todos' menerima prop 'todos' (array daftar tugas).
const Todos = ({ todos }) => {
  return (
    <div>
      {/* Loop melalui setiap item dalam array 'todos' */}
      {todos.map((todo) => (
        // Untuk setiap 'todo', render komponen 'TodoItem'.
        // Berikan data 'todo' sebagai prop ke 'TodoItem'.
        // 'key' adalah properti unik yang membantu React mengidentifikasi setiap elemen.
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

// Ekspor komponen 'Todos' sebagai default export dari file ini.
export default Todos;
