const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mouseover", ()=> {
        boxes.forEach((box) => {
            box.style.border = "none";
        })
        box.style.border = "2px solid purple";
    })
})

// console.log(window.innerWidth)
