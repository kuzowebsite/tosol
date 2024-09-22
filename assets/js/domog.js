// Бүх контентыг харуулах функц
function showAll() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('hidden'));
}

// Зөвхөн бичлэгүүдийг харуулах функц
function showVideos() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.add('hidden'));
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => video.classList.remove('hidden'));
}

// Зөвхөн аудиог харуулах функц
function showAudios() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.add('hidden'));
    const audios = document.querySelectorAll('.audio');
    audios.forEach(audio => audio.classList.remove('hidden'));
}

// Зөвхөн текстийг харуулах функц
function showTexts() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.add('hidden'));
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => text.classList.remove('hidden'));
}
