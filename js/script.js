const btn = document.getElementById("startBtn");

btn.addEventListener("mouseenter", () => {
    const x = Math.random() * 80 - 40;
    const y = Math.random() * 40 - 20;
    btn.style.transform = `translate(${x}px, ${y}px)`;
});

btn.addEventListener("click", () => {
    window.location.href = "page1.html";
});
