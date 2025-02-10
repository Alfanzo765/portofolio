// Fungsi untuk membuat efek hujan
function createRain() {
  const rainContainer = document.createElement("div");
  rainContainer.classList.add("rain-background");
  document.body.appendChild(rainContainer);

  const rainDropsCount = 100; // Jumlah tetesan hujan

  for (let i = 0; i < rainDropsCount; i++) {
    const rainDrop = document.createElement("div");
    rainDrop.classList.add("rain-drop");
    rainDrop.style.left = `${Math.random() * 100}vw`; // Posisi horizontal acak
    rainDrop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`; // Kecepatan jatuh acak
    rainDrop.style.animationDelay = `${Math.random() * 2}s`; // Delay acak
    rainContainer.appendChild(rainDrop);
  }
}

// Animasi Scroll
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));

  // Panggil fungsi untuk membuat efek hujan
  createRain();
});

// Animasi Mengikuti Tanda Panah
const movingObject = document.getElementById("moving-object");
let posX = 50; // Posisi horizontal (persentase)
let posY = 50; // Posisi vertikal (persentase)

function moveObject(event) {
  const step = 1; // Jarak pergerakan per langkah

  switch (event.key) {
    case "ArrowUp": // Panah atas
      posY = Math.max(0, posY - step);
      break;
    case "ArrowDown": // Panah bawah
      posY = Math.min(100, posY + step);
      break;
    case "ArrowLeft": // Panah kiri
      posX = Math.max(0, posX - step);
      break;
    case "ArrowRight": // Panah kanan
      posX = Math.min(100, posX + step);
      break;
    default:
      return; // Keluar jika tombol lain ditekan
  }

  // Update posisi elemen
  movingObject.style.left = `${posX}%`;
  movingObject.style.top = `${posY}%`;
}

// Tambahkan event listener untuk tombol panah
document.addEventListener("keydown", moveObject);