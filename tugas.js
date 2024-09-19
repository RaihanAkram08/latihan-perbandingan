const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const password = "123456"; // Password tetap
let orders = []; // Array untuk menyimpan pesanan

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function login() {

  let userPassword = await askQuestion('Masukkan password: ');

  if (userPassword === password) {
    console.log("Login berhasil!\n");
    showMenu();
  } else {
    console.log("Password salah, coba lagi.");
    rl.close();
  }
}

async function showMenu() {
  console.log("===== MENU UTAMA =====");
  console.log("1. Buat pesanan baru");
  console.log("2. Lihat semua pesanan");
  console.log("3. Perbarui pesanan");
  console.log("4. Hapus pesanan");
  console.log("5. Keluar");
  console.log("======================");

  const choice = await askQuestion('Pilih opsi: ');
  handleMenu(choice);
}

async function handleMenu(choice) {
  switch (choice) {
    case '1':
        let addOrder = await askQuestion('Tambahkan Pesanan Baru: ');
        if (addOrder) {
            orders.push(addOrder);
            console.log("Pesanan Anda Berhasil Di tambahkan"); 
            showMenu();
        } else {
            console.log("Anda tidak jadi menambah pesanan"); // Output
            showMenu();
        }
      break;
    case '2':
        console.log(`Pesanan Anda adalah ${orders[addOrder]}`); // Output Pesanan Anda adalah , ,
        showMenu()
      break;
    case '3':
      // Tambahkan logika perbarui pesanan
      break;
    case '4':
      // Tambahkan logika hapus pesanan
      break;
    case '5':
      console.log("Keluar dari aplikasi...");
      rl.close();
      break;
    default:
      console.log("Pilihan tidak valid.");
      showMenu();
  }
}

login();


/*
- Masukkan Password 123456
- pilih menu 1 untuk menambah pesanan
- jika sudah di tambah kembali ke menu
- pilih menu 2 untuk melihat pesanan
 */