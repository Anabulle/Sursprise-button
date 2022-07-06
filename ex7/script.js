let button = document.querySelector('button');
let p = document.querySelector("p");
let fig = document.querySelector("figure");


button.addEventListener("click", function() {
    let time = 10;
    p.style.display = 'block';
    let clear = setInterval(() => {
        p.textContent = time;
        time--;
    }, 1000);
    button.classList.add("pressed");
    setTimeout(function() {
        clearInterval(clear);
        button.classList.remove("pressed");
        var audio = new Audio('surprise.mp3');
        audio.play();
        var img = document.createElement("img");
        img.src = "rickroll-rick.gif";
        fig.prepend(img);
        p.style.display = 'none';
        setTimeout(function() {
            audio.pause();
        }, 18500);
    }, 12000);

})