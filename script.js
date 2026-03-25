AOS.init({ duration: 1000, once: true });

const btnOpen = document.getElementById('open-invitation');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const backsound = document.getElementById('backsound');

btnOpen.addEventListener('click', () => {
    // Play audio LANGSUNG saat diklik
    try { 
        backsound.play(); 
    } catch(e) { 
        console.log("Audio dicegah browser"); 
    }

    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.classList.remove('hidden');
        document.body.classList.remove('lock-scroll');
        AOS.refresh();
    }, 1000);
});

// Hitung Mundur Elegan
const targetDate = new Date("June 6, 2026 07:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("hari-val").innerText = days;
        document.getElementById("jam-val").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("mnt-val").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("dtk-val").innerText = seconds < 10 ? "0" + seconds : seconds;
    } else {
        document.getElementById("hari-val").innerText = "00";
        document.getElementById("jam-val").innerText = "00";
        document.getElementById("mnt-val").innerText = "00";
        document.getElementById("dtk-val").innerText = "00";
    }
}, 1000);