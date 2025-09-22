const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");
const postCount = document.getElementById("postCount");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

let photos = JSON.parse(localStorage.getItem("stogram_photos")) || [];
renderGallery();

// Upload lewat input
fileInput.addEventListener("change", (e) => {
  handleFiles(e.target.files);
});

// Drag & drop
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("border-pink-400");
});
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("border-pink-400");
});
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("border-pink-400");
  handleFiles(e.dataTransfer.files);
});

// Handle files
function handleFiles(files) {
  for (let file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      photos.push(e.target.result);
      savePhotos();
      renderGallery();
    };
    reader.readAsDataURL(file);
  }
}

// Render gallery
function renderGallery() {
  gallery.innerHTML = "";
  photos.forEach((src, index) => {
    const div = document.createElement("div");
    div.className = "photo relative group";
    div.innerHTML = `
      <img src="${src}" class="w-full h-48 object-cover rounded-lg shadow cursor-pointer" onclick="openModal('${src}')">
      <button class="remove hidden group-hover:flex" onclick="removePhoto(${index})">×</button>
    `;
    gallery.appendChild(div);
  });
  postCount.textContent = photos.length;
}

// Hapus foto
function removePhoto(index) {
  photos.splice(index, 1);
  savePhotos();
  renderGallery();
}

// Simpan ke localStorage
function savePhotos() {
  localStorage.setItem("stogram_photos", JSON.stringify(photos));
}

// Modal
function openModal(src) {
  modal.classList.remove("hidden");
  modalImg.src = src;
}
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

