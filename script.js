document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const wallpaperInput = document.getElementById('wallpaperInput');
    const file = wallpaperInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const wallpaperContainer = document.getElementById('wallpaperContainer');

            const wallpaperDiv = document.createElement('div');
            wallpaperDiv.className = 'wallpaper';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Uploaded Wallpaper';

            wallpaperDiv.appendChild(img);
            wallpaperContainer.appendChild(wallpaperDiv);

            // Reset the form
            wallpaperInput.value = '';
        };

        reader.readAsDataURL(file);
    }
});
