let mainImg = document.querySelector(".main-img")

let imgGrenn = document.querySelector(".img-green")
let imgYellow = document.querySelector(".img-yellow")
let imgPink = document.querySelector(".img-pink")

imgGrenn.addEventListener("click", () => {
    mainImg.src = "./img/img1.png"
    document.querySelector(".circle").style.backgroundColor = "#017143"
})

imgYellow.addEventListener("click", () => {
    mainImg.src = "./img/img2.png"
    document.querySelector(".circle").style.backgroundColor = "#eb7495" 
})

imgPink.addEventListener("click", () => {
    mainImg.src = "./img/img3.png"
    document.querySelector(".circle").style.backgroundColor = "#d752b1" 
})

