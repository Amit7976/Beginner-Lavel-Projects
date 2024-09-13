let img = document.getElementsByTagName("img")[0]
function randomColor() {
    console.log("hi");
    let ranwo = "0123456789ABCDEF"
    let Color = "#"

    for (let i = 0; i < 6; i++) {
        Color += ranwo[Math.floor(Math.random() * 16)];
    }



    document.querySelector("#body").style.backgroundColor = Color
    document.getElementById("color-card").style.backgroundColor = Color
    document.getElementById("hex").innerText = Color
    document.querySelector(".content").style.backgroundColor = Color
}

const button = document.getElementsByTagName("button")[0]

button.addEventListener("click", randomColor);
document.getElementsByTagName("body")[0].addEventListener("onload", randomColor());
