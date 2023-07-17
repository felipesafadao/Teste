var optionNo = document.querySelector(".option-no");
var hint = document.querySelector(".hint");

var clicks = 0;

optionNo.addEventListener("click", function() {
    clicks++;

    if (clicks >= 3) {
        hint.textContent = "Tenta clicar no 'Sim' dessa vez, talvez algo bem legal te espere...";
    }

    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);

    optionNo.style.position = "absolute";
    optionNo.style.left = x + "px";
    optionNo.style.top = y + "px";
});

var optionYes = document.querySelector(".option-yes");

optionYes.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/shorts/Y4UNestCJYo";
});