// const uploadForm = document.getElementById('uploadForm');
// const fileList = document.getElementById('fileList');

// // Upload file
// uploadForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const fileInput = document.getElementById('fileInput');
//   const formData = new FormData();
//   formData.append('file', fileInput.files[0]);

//   const response = await fetch('http://localhost:3001/upload', { method: 'POST', body: formData });
//   if (response.ok) {
//     alert('File uploaded successfully!');
//     loadFiles();
//   } else {
//     alert('File upload failed.');
//   }
// });

// // Load files
// async function loadFiles() {
//   const response = await fetch('http://localhost:3001/files');
//   const files = await response.json();
//   fileList.innerHTML = '';
//   files.forEach((file) => {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `<a href="http://localhost:3001/download/${file}" target="_blank">${file}</a>`;
//     fileList.appendChild(listItem);
//   });
// }

// // Initialize file list
// loadFiles();

const uploadForm = document.getElementById('uploadForm');
const fileList = document.getElementById('fileList');

// Upload file
uploadForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById('fileInput');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  const response = await fetch('http://localhost:3001/upload', { method: 'POST', body: formData });
  if (response.ok) {
    alert('File uploaded successfully!');
    loadFiles();
  } else {
    alert('File upload failed.');
  }
});

// Load files
async function loadFiles() {
  const response = await fetch('http://localhost:3001/files');
  const files = await response.json();
  fileList.innerHTML = '';
  files.forEach((file) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="http://localhost:3001/download/${file}" target="_blank">${file}</a>
      <button class="delete-btn" onclick="deleteFile('${file}')">
        <i class="fas fa-trash-alt"></i> <!-- Trashcan Icon -->
      </button>
    `;
    fileList.appendChild(listItem);
  });
}

// Delete file
async function deleteFile(filename) {
  const response = await fetch(`http://localhost:3001/delete/${filename}`, { method: 'DELETE' });
  if (response.ok) {
    alert('File deleted successfully!');
    loadFiles();
  } else {
    alert('Failed to delete file.');
  }
}

// Initialize file list
loadFiles();
