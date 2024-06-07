// Impor 'React' dan hook 'useState' dari library React.
import React, { useState } from "react";

// Komponen 'TodoForm' menerima satu prop: 'addTodo' (fungsi untuk menambahkan tugas baru).
const TodoForm = ({ addTodo }) => {
  // Definisikan state 'title' untuk menyimpan judul tugas baru.
  // 'title' adalah string yang menyimpan input dari pengguna.
  // 'setTitle' adalah fungsi untuk memperbarui state 'title'.
  const [title, setTitle] = useState("");

  // Fungsi untuk menangani submit form.
  // 'event' adalah objek event dari form.
  const handleSubmit = (event) => {
    // Mencegah form dari pengiriman default (refresh halaman).
    event.preventDefault();
    // Panggil fungsi 'addTodo' dengan judul tugas baru.
    addTodo(title);
    // Reset state 'title' menjadi string kosong setelah tugas ditambahkan.
    setTitle("");
  };

  // Fungsi untuk menangani perubahan pada input teks.
  // 'event' adalah objek event dari input.
  const handleChangeTitle = (event) => {
    // Perbarui state 'title' dengan nilai dari input teks.
    setTitle(event.target.value);
  };

  // Render tampilan form untuk menambahkan tugas baru.
  return (
    <div style={styles.container}>
      {/* Gunakan CSS-in-JS untuk styling container form */}
      <form
        onSubmit={(event) => {
          handleSubmit(event); // Panggil fungsi 'handleSubmit' saat form di-submit.
        }}
      >
        <input
          type="text" // Tipe input adalah teks.
          placeholder="Add your Todo" // Placeholder untuk input teks.
          style={styles.formInput} // Gunakan CSS-in-JS untuk styling input teks.
          onChange={(event) => {
            handleChangeTitle(event); // Panggil fungsi 'handleChangeTitle' saat nilai input berubah.
          }}
          value={title} // Atur nilai dari input sesuai dengan state 'title'.
        />
        <button style={styles.button}>Add Todo</button>{" "}
        {/* Tombol untuk submit form */}
      </form>
    </div>
  );
};

// Definisikan objek 'styles' untuk menyimpan gaya CSS menggunakan CSS-in-JS.
const styles = {
  container: {
    marginBottom: "32px", // Beri jarak margin bawah.
  },
  formInput: {
    height: "66px", // Tinggi input teks.
    width: "40%", // Lebar input teks 40% dari lebar container.
    fontSize: "16px", // Ukuran font untuk teks di dalam input.
    padding: "0 16px", // Beri padding di sisi kiri dan kanan input.
  },
  button: {
    height: "72px", // Tinggi tombol.
    fontSize: "16px", // Ukuran font untuk teks di dalam tombol.
  },
};

// Ekspor komponen 'TodoForm' sebagai default export dari file ini.
export default TodoForm;
