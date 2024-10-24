document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const wallpaperInput = document.getElementById('wallpaperInput');
    const file = wallpaperInput.files[0];

    if (file) {
        const storageRef = storage.ref('wallpapers/' + file.name);

        // Upload the file to Firebase Storage
        storageRef.put(file).then(function () {
            // Get the download URL after upload
            storageRef.getDownloadURL().then(function (url) {
                displayWallpaper(url);
            });
        });

        // Reset the form
        wallpaperInput.value = '';
    }
});

// Function to display the wallpaper
function displayWallpaper(url) {
    const wallpaperContainer = document.getElementById('wallpaperContainer');

    const wallpaperDiv = document.createElement('div');
    wallpaperDiv.className = 'wallpaper';

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Uploaded Wallpaper';

    wallpaperDiv.appendChild(img);
    wallpaperContainer.appendChild(wallpaperDiv);
}

// Function to load wallpapers from Firebase Storage
function loadWallpapers() {
    const wallpaperContainer = document.getElementById('wallpaperContainer');
    // This part should be adapted based on how you retrieve the list of uploaded images
    // For simplicity, you might want to manually add URLs for testing.
}

// Load wallpapers on page load
document.addEventListener('DOMContentLoaded', loadWallpapers);