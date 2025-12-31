const cursor = document.querySelector(".cursor-trail");
const cat = document.querySelector(".cat-guide img");

document.addEventListener("mousemove", (e) => {

    if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    if (cat) {
        const rect = cat.getBoundingClientRect();

        const catX = rect.left + rect.width / 2;
        const catY = rect.top + rect.height / 2;

        const dx = e.clientX - catX;
        const dy = e.clientY - catY;

        const rotateY = Math.max(-8, Math.min(8, dx / 25));
        const rotateX = Math.max(-8, Math.min(8, -dy / 25));

        cat.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
});
