const ball = document.getElementById("ball");
    const colors = ["red", "blue", "green","yellow",
        "purple", "orange", "brown", "black", "white"];
    let index = 0;

ball.addEventListener("click", function() {
    index = (index + 1) % colors.length;
    ball.style.backgroundColor = colors[index];
});

