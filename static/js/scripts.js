document.getElementById('search-input').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const episodes = document.querySelectorAll('#episode-list .episode-item');

    episodes.forEach(function(episode) {
        const text = episode.textContent.toLowerCase();
        if (text.includes(filter)) {
            episode.style.display = '';
        } else {
            episode.style.display = 'none';
        }
    });
});

