<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 1 PHP</title>
</head>
<body>
    <h2>Form Nilai Ujian</h2>

    <form method="POST">
        Nama: <br>
        <input type="text" name="nama"><br><br>

        Email: <br>
        <input type="email" name="email"><br><br>

        Nilai Ujian: <br>
        <input type="number" name="nilai"><br><br>

        <button type="submit">Submit</button>
    </form>

    <?php
    // Cek apakah tombol submit sudah ditekan
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Ambil data dari form
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        // Struktur kendali (if)
        if ($nilai > 70) {
            $hasil = "Lulus";
        } else {
            $hasil = "Remedial";
        }

        // Tampilkan hasil
        echo "<h3>Hasil:</h3>";
        echo "Nama: " . $nama . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Nilai: " . $nilai . "<br>";
        echo "Keterangan: " . $hasil;
    }
    ?>
</body>
</html>