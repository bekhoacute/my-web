document.addEventListener('DOMContentLoaded', function() {
    const agreeBtn = document.getElementById('agree-btn');
    const disagreeBtn = document.getElementById('disagree-btn');
    const surprise = document.getElementById('surprise');

    agreeBtn.addEventListener('click', function() {
        surprise.classList.remove('hidden');
    });

    disagreeBtn.addEventListener('mouseover', function() {
        const x = Math.floor(Math.random() * (window.innerWidth - disagreeBtn.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - disagreeBtn.clientHeight));

        disagreeBtn.style.position = 'absolute';
        disagreeBtn.style.left = `${x}px`;
        disagreeBtn.style.top = `${y}px`;
    });
});
