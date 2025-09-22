
---

## 🚀 Bootstrap Section

### Pertanyaan & Jawaban

**1. Mengapa memilih konfigurasi col tertentu untuk tiap breakpoint?**  
Saya memilih konfigurasi `col-12` untuk mobile, `col-md-6` untuk tablet, dan `col-lg-4` untuk desktop.  
- Mobile → 1 kolom penuh (mudah dibaca).  
- Tablet → 2 kolom (ruang lebih efisien).  
- Desktop → 3 kolom (padat dan mirip grid Instagram).  

Pendekatan ini menjaga tampilan tetap rapi dan responsif.

---

**2. Bagaimana memastikan tombol Follow/Edit Profile tetap mudah dijangkau di mobile?**  
Dengan **Bootstrap Utility Classes**:  
- `d-flex`, `justify-content-center` untuk posisi.  
- `btn-sm` agar proporsional.  
- `w-100` jika butuh tombol full width.  

Pendekatan **mobile-first** memastikan tombol tetap besar, jelas, dan mudah ditekan di layar kecil.

---

**3. Jika postingan bertambah jadi 50, apa potensi masalah dan bagaimana solusi grid mengatasinya?**  
- **Masalah:** halaman jadi panjang, loading berat, user lelah scroll.  
- **Solusi:** Grid Bootstrap tetap konsisten meski jumlah konten bertambah. Untuk performa lebih baik, bisa ditambah **pagination** atau **lazy loading**.

---

## 🌟 Tailwind Section

### Pertanyaan & Jawaban

**1. Jelaskan keputusan grid-cols/gap di tiap breakpoint – kenapa begitu?**  
- `grid-cols-1` di mobile → sederhana dan mudah dibaca.  
- `grid-cols-2` atau `grid-cols-3` di tablet → lebih efisien.  
- `grid-cols-4` di desktop → mirip tampilan Instagram asli.  
- `gap-2` atau `gap-4` menjaga jarak antar foto tetap konsisten.  

---

**2. Bagaimana memanfaatkan utility responsive Tailwind untuk memecahkan masalah layout di mobile?**  
Dengan menggunakan **class responsive** seperti `sm:`, `md:`, `lg:`, `xl:` untuk mengatur grid, spacing, dan ukuran tombol.  
Contoh: `sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

---

**3. Jelaskan trade-off antara memakai banyak utility classes vs membuat component CSS tersendiri.**  
- **Utility classes (inline):** cepat, fleksibel, langsung terlihat efeknya.  
- **Custom component CSS:** lebih bersih untuk kode besar, tetapi butuh file tambahan.  

Komprominya: gunakan **utility classes** untuk styling cepat, dan ekstrak ke **CSS/Component** jika pola sering berulang.

---

## 🔎 Perbandingan Bootstrap vs Tailwind

| Aspek        | Bootstrap                              | Tailwind CSS                         |
|--------------|-----------------------------------------|---------------------------------------|
| Pendekatan   | Component-based (siap pakai)            | Utility-first (class kecil-kecil)     |
| Kecepatan    | Cepat untuk prototyping                 | Cepat untuk custom desain unik         |
| Konsistensi  | UI konsisten, komponen sudah tersedia   | Fleksibel, bisa custom penuh          |
| Learning     | Mudah untuk pemula                      | Butuh waktu untuk terbiasa            |

---

## ✅ Kesimpulan
- **Bootstrap** cocok untuk kebutuhan cepat, konsisten, dan rapi dengan komponen bawaan.  
- **Tailwind** lebih fleksibel untuk desain custom, walau awalnya terlihat penuh dengan banyak class.  
- Keduanya bisa menghasilkan layout yang sama, namun pengalaman coding yang dirasakan berbeda.  



## 👨‍💻 Author / Credits
→ Saifullah Yusuf.
