const circle = document.querySelector(".container");

circle.addEventListener("click", () => {
    for (let i = 0; i < 50; i++) {
        
        let ball = document.createElement("span");
        ball.classList.add("ball");
        document.body.appendChild(ball);

        let randomX = (Math.random() - 0.5) * window.innerWidth;
        let randomY = (Math.random() - 0.5) * window.innerHeight;
        ball.style.setProperty("--x", randomX+"px");
        ball.style.setProperty("--y", randomY+"px");

        let randomSize = Math.random() * 60 + 10;

        ball.style.width = randomSize + "px";
        ball.style.height = randomSize + "px";

        let duration = Math.random() * 3 + 2;

        ball.style.animation = ` ballMove ${duration}s ease`;

        setTimeout(() => {
            ball.remove();
        },5000);
    }
    console.log(Math.random() * 60 + 10);
});