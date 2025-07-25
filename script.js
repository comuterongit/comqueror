// Hello. This script was sadly made using AI because I suck at javascript. deal with it. (dw tho, im still in the process of learning it, whi knows, some day i may come back to this)
const searchInput = document.querySelector('input');

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = encodeURIComponent(searchInput.value.trim());
        if (query) {
            window.location.href = `https://duckduckgo.com/?q=${query}`;
        }
    }
});
