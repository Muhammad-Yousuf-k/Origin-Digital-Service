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
    let leadDataNewArr = [];
    leadDataNewArr.push({
        // date: `${n}`,
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
    leadDataNewArr.forEach(
        (leadDataNewArr) => {
            let div = document.createElement('div')
            div.className = "lead_mainbox"
            div.innerHTML = `<h1 class="lead_re">${leadDataNewArr.region}</h1>
                        <div class="leadtx">
                            <h1 class="lead_tx" >${leadDataNewArr.aname}</h1>
                            <h1 class="lead_tx" >${leadDataNewArr.aname}</h1>
                            <h1 class="lead_tx" >${leadDataNewArr.cname}</h1>
                        </div>
                        <h1 class="lead_service">${leadDataNewArr.service}</h1>
                        <p class="lead_para">${leadDataNewArr.description}</p>`
            mainCon.appendChild(div)
        }
    )
    document.querySelector('.add_mainbox').style.display = "none"

})

