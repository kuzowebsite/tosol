// Видео тоглуулах/зогсоох
document.querySelectorAll('.playPauseBtn').forEach(button => {
    button.addEventListener('click', () => {
        const video = document.getElementById(button.getAttribute('data-video'));
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Дэлгэц дүүргэх функц
document.querySelectorAll('.fullScreenBtn').forEach(button => {
    button.addEventListener('click', () => {
        const video = document.getElementById(button.getAttribute('data-video'));
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari, Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    });
});

// Дууг ихэсгэж багасгах функц
document.querySelectorAll('.volumeSlider').forEach(slider => {
    slider.addEventListener('input', () => {
        const video = document.getElementById(slider.getAttribute('data-video'));
        video.volume = slider.value;
    });
});
