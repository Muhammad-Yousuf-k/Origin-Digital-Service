// Add Buttom logic
let addcanBtn = document.getElementById('acbtn')
addcanBtn.addEventListener("click", () => {
    document.querySelector('.add_mainbox').style.display = "none"
    for (let i = 0; i < 11; i++) {
        let input = document.querySelectorAll('.input')
        input[i].value = "none"
    }
})
let addBtnn = document.getElementById('add_btn')
addBtnn.addEventListener("click", () => {
    document.querySelector('.add_mainbox').style.display = "flex"

})

let date = document.getElementById('date')
let reg = document.getElementById('reg')
let aname = document.getElementById('Aname')
let cname = document.getElementById('Cname')
let con = document.getElementById('Con')
let ser = document.getElementById('ser')
let email = document.getElementById('email')
let loca = document.getElementById('loca')
let descri = document.getElementById('descri')
let stat = document.getElementById('stat')
let lin = document.getElementById('lin')


let mainCon = document.querySelector('.leads_container')
let addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click', () => {
    // lead content Arry logic=============================================
    let leadDataNewArr = [];
    leadDataNewArr.push({
        date: `${date.value}`,
        region: `${reg.value}`,
        aname: `${aname.value}`,
        cname: `${cname.value}`,
        contact: `${con.value}`,
        service: `${ser.value}`,
        email: `${email.value}`,
        location: `${loca.value}`,
        description: `${descri.value}`,
        status: `${stat.value}`,
        link: `${lin.value}`,
    },)
    // lead cardbox append logic=============================================
    leadDataNewArr.forEach(
        (leadDataNewArr) => {
            let div = document.createElement('div')
            div.className = "lead_mainbox"
            div.innerHTML = `<h1 class="lead_re">${leadDataNewArr.region}</h1>
                        <div class="leadtx">
                            <h1 class="lead_tx" >${leadDataNewArr.date}</h1>
                            <h1 class="lead_tx" >${leadDataNewArr.aname}</h1>
                            <h1 class="lead_tx" >${leadDataNewArr.cname}</h1>
                        </div>
                        <h1 class="lead_service">${leadDataNewArr.service}</h1>
                        <p class="lead_para">${leadDataNewArr.description}</p>`
            mainCon.appendChild(div)
        }
    )
    // region color logic=============================================
    let region = document.querySelectorAll('.lead_re')
    for (let i = 0; i < region.length; i++) {
        if (region[i].innerHTML === "US-Lead") {
            region[i].style.backgroundColor = 'lightblue'
            console.log("us");

        } else if (region[i].innerHTML === "CA-Lead") {
            region[i].style.backgroundColor = 'lightpink'
            console.log("CA");
        } else if (region[i].innerHTML === "UK-Lead") {
            region[i].style.backgroundColor = 'rgb(255, 65, 65)'
            console.log("UK");
        } else {
            region[i].style.backgroundColor = 'rgb(126, 126, 126)'
            console.log("etc");

        }
    }

    document.querySelector('.add_mainbox').style.display = "none"
    for (let i = 0; i < 11; i++) {
        let input = document.querySelectorAll('.input')
        input[i].value = "none"
    }

})



