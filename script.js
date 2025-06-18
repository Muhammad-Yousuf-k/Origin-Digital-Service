
// region color logic
let region = document.querySelectorAll('.lead_re')
for (let i = 0; i < region.length; i++) {
    if (region[i].innerHTML === "US-Lead") {
        region[i].style.backgroundColor = 'lightblue'
    }
    else if (region[i].innerHTML === "CA-Lead") {
        region[i].style.backgroundColor = 'lightpink'
    }
    else if (region[i].innerHTML === "UK-Lead") {
        region[i].style.backgroundColor = 'rgb(255, 65, 65)'
    }

}

// Add Buttom logic
let addcanBtn = document.getElementById('acbtn')
addcanBtn.addEventListener("click", () => {
    document.querySelector('.add_mainbox').style.display = "none"
    for (let i = 0; i < 11; i++) {
        let input = document.querySelectorAll('.input')
        input[i].value = ""
    }
})
let addBtnn = document.getElementById('add_btn')
addBtnn.addEventListener("click", () => {
    document.querySelector('.add_mainbox').style.display = "flex"

})



