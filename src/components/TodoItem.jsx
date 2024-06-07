// Impor 'React' dari library React.
import React from "react";

// Komponen 'TodoItem' menerima prop 'todo' yang merupakan objek todo.
const TodoItem = ({ todo }) => {
  // Render elemen <p> yang menampilkan judul todo.
  return <p>{todo.title}</p>;
};

// Ekspor komponen 'TodoItem' sebagai default export dari file ini.
export default TodoItem;
