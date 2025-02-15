
// let likes = 0
// let like = document.getElementById("likes")
// let btn_like = document.getElementById("btn")
// let btn_dislike = document.getElementById("dislike")
// btn_like.addEventListener("click", function(){
//     likes++
//     like.innerText = likes
// })

// btn_dislike.addEventListener("click", function(){
//     if(likes > 0) {
//         likes--  
//     }
    
//     like.innerText = likes
    
// })
let red = document.getElementById("red")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
let body = document.getElementById("body")
blue.addEventListener("click", function(){
    body.style.backgroundColor = "lightblue"
})
red.addEventListener("click", function(){
    body.style.backgroundColor = "lightpink"
})
green.addEventListener("click", function(){
    body.style.backgroundColor = "lightgreen"
})