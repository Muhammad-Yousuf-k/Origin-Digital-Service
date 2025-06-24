


// Add Buttom logic
let addBnn = document.getElementById('add_btn')
addBnn.addEventListener("click", () => {
    document.querySelector('.add_mainbox').style.display = "flex"
})



// Add cancel Buttom logic
let addcanBtn = document.getElementById('acbtn')
addcanBtn.addEventListener("click", () => {
    document.querySelector('.add_mainbox').style.display = "none"
    for (let i = 0; i < 11; i++) {
        let input = document.querySelectorAll('.input')
        input[i].value = "none"
    }
})



// Burger btn logic
let burger = document.getElementById('burger')
burger.addEventListener("click", () => {
    let slider = document.querySelector('.header_mainbox')
    console.log("click");

    if (slider.style.display === "none") {
        slider.style.display = "block";
        slider.style.position = "absolute";
        slider.style.width = "100%";
    } else {
        slider.style.display = "none";
    }
});



// side header logic
let dashli = document.getElementById("dashli")
let leadli = document.getElementById("leadli")
dashli.addEventListener("click", () => {
    let con1 = document.getElementById("dash");
    let con2 = document.getElementById("leadss");

    if (con1.style.display === "none") {
        con1.style.display = "flex";
        con2.style.display = "none";
    }
});
leadli.addEventListener("click", () => {
    let con2 = document.getElementById("leadss");
    let con1 = document.getElementById("dash");

    if (con2.style.display === "none") {
        con1.style.display = "none";
        con2.style.display = "flex";
    }

});



// view window close Buttom logic
let viewcloss = document.getElementById('viewcloss')
viewcloss.addEventListener("click", () => {
    document.getElementById('viewModal').style.display = "none"
})


// get input tags for get data
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


// the container where leads card stored
let mainCon = document.querySelector('.leads_container')


// add lead summit btn 
let addbtn = document.getElementById('addbtn')














addbtn.addEventListener('click', () => {
    // lead content Arry=============================================
    let leadDataNewArr = [];
    leadDataNewArr.push({
        date: `${date.value}`,
        did: "lead-" + Date.now(),
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
            div.dataset.id = leadDataNewArr.did
            div.innerHTML = `<div class="card-header">
      <h3>${leadDataNewArr.cname}</h3>
      <div class="lead_re lead-type">${leadDataNewArr.region}</div>
    </div>
    <div class="lead-info"><strong>📞 phone:</strong><span class="card_wit">${leadDataNewArr.contact}</span></div>
    <div class="lead-info"><strong>📧 email:</strong>${leadDataNewArr.email}</div>
    <div class="lead-info"><strong>🛠️ service:</strong>${leadDataNewArr.service}</div>
    <div class="lead-info"><strong>👤 agent:</strong>${leadDataNewArr.aname}</div>
    <div class="lead-info"><strong>📍 location:</strong>${leadDataNewArr.location}</div>
    <div class="lead-info"><strong>🔗 link:</strong> <a target="_blank" href="${leadDataNewArr.link}">${leadDataNewArr.link}</a></div>
    <div id="status" class="status-badge">${leadDataNewArr.status}</div>
    <div class="action-buttons">
      <button id="viewbtn" class="btn btn-view">view</button>
      <button class="btn btn-edit">edit</button>
      <button class="btn btn-dele">Delete</button>
    </div>`
            document.getElementById('viewName').innerText = "👤 Client: " + leadDataNewArr.cname
            document.getElementById('viewContact').innerText = "📞 Phone: " + leadDataNewArr.contact
            document.getElementById('viewEmail').innerText = "📧 Email: " + leadDataNewArr.email
            document.getElementById('viewAgent').innerText = "👤 agent: " + leadDataNewArr.aname
            document.getElementById('viewLocation').innerText = "📍 location: " + leadDataNewArr.location
            document.getElementById('viewLink').innerText = "🔗 link: " + leadDataNewArr.link
            document.getElementById('viewDescription').innerText = "⚫ Description: " + leadDataNewArr.description
            document.getElementById('viewDate').innerText = "📅 Date: " + leadDataNewArr.date
            document.getElementById('viewType').innerText = "🌍 Type: " + leadDataNewArr.region
            document.getElementById('viewStatus').innerText = "⚫ Status: " + leadDataNewArr.status
            document.getElementById('viewService').innerText = "🛠️ Service: " + leadDataNewArr.service
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
        } else if (region[i].innerHTML === "UK-Lead") {
            region[i].style.backgroundColor = 'red'
        } else {
            region[i].style.backgroundColor = 'grey'
        }
    }

    document.getElementById("leadbox").addEventListener("click", function (e) {
        const card = e.target.closest(".card") // get the card clicked
        if (!card) return // if no card found, stop

        const leadId = card.dataset.id // get card's unique id

        if (e.target.classList.contains("btn-view")) {
            console.log("view lead id:", leadId)
            document.getElementById('viewModal').style.display = "flex"
        }

        if (e.target.classList.contains("btn-edit")) {
            console.log("edit lead id:", leadId)
        }
        if (e.target.classList.contains("btn-dele")) {
            let deleteDiv = document.querySelector(`[data-id="${leadId}"]`)
            deleteDiv.remove()
        }
    })


    // after add lead main lead box close Logic
    document.querySelector('.add_mainbox').style.display = "none"


    // After add lead all input data reset to none
    for (let i = 0; i < 11; i++) {
        let input = document.querySelectorAll('.input')
        input[i].value = "none"
    }

    // total lead count logic
    let getcardfortotcunt = document.querySelectorAll('.card')
    let totalArr = Array.from(getcardfortotcunt)
    document.getElementById('totc').innerText = totalArr.length
    
    
    
    // closed lead count logic
    let getcardforclo = document.querySelectorAll('.status-badge')
    let leadClo = Array.from(getcardforclo)
    let clocuu = 0;
    for (let i = 0; i < leadClo.length; i++) {
        let getcardforclo = document.querySelectorAll('.status-badge')
        if (getcardforclo[i].innerText === "Closed") {
            clocuu++
            document.getElementById('cloe').innerHTML = clocuu
        }

        let today = new Date();
        let month = today.getMonth() + 1;
        let Newmonth = "0"+month;
        console.log(Newmonth);

        let dateMon = document.getElementById('viewDate').innerText
        let NewdateMon = dateMon.slice(14,16)
        
        console.log(NewdateMon);
        
        // if () {
            
        // }            
    }
})