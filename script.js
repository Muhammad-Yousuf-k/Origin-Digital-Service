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
            div.className = "card"
            div.innerHTML = `    <div class="card-header">
      <h3>${leadDataNewArr.cname}</h3>
      <div class="lead_re lead-type">${leadDataNewArr.region}</div>
    </div>

    <div class="lead-info"><strong>📞 phone:</strong><span class="card_wit">${leadDataNewArr.contact}</span></div>
    <div class="lead-info"><strong>📧 email:</strong>${leadDataNewArr.email}</div>
    <div class="lead-info"><strong>🛠️ service:</strong>${leadDataNewArr.service}</div>
    <div class="lead-info"><strong>👤 agent:</strong>${leadDataNewArr.aname}</div>
    <div class="lead-info"><strong>📍 location:</strong>${leadDataNewArr.location}</div>
    <div class="lead-info"><strong>🔗 link:</strong> <a target="_blank" href="${leadDataNewArr.link}">${leadDataNewArr.link}</a></div>
    <div class="status-badge">${leadDataNewArr.status}</div>

    <div class="action-buttons">
      <button id="viewbtn" class="btn btn-view">view</button>
      <button class="btn btn-edit">edit</button>
    </div>`
            mainCon.appendChild(div)
        }
    )
    // region color logic=============================================
    let region = document.querySelectorAll('.lead_re')
    for (let i = 0; i < region.length; i++) {
        if (region[i].innerHTML === "US-Lead") {
            region[i].style.backgroundColor = 'blue'
            console.log("us");

        } else if (region[i].innerHTML === "CA-Lead") {
            region[i].style.backgroundColor = 'pink'
            console.log("CA");
        } else if (region[i].innerHTML === "UK-Lead") {
            region[i].style.backgroundColor = 'red'
            console.log("UK");
        } else {
            region[i].style.backgroundColor = 'grey'
            console.log("etc");

        }
    }

    document.querySelector('.add_mainbox').style.display = "none"
    for (let i = 0; i < 11; i++) {
        let input = document.querySelectorAll('.input')
        input[i].value = "none"
    }


})
