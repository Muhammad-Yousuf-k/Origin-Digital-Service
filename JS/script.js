// the container where leads card stored
let mainCon = document.querySelector('.leads_container')
let leadDataNewArr = [];
let savedLeads = localStorage.getItem("leads")
if (savedLeads) {
    leadDataNewArr = JSON.parse(savedLeads)
    leadDataNewArr.forEach(item => renderCard(item)) // render all saved cards
    regionClr()
    dataSetinCard()
    TotalCo()
    LeadClose()
    NewLeadCount()
    updateTimeAgoLoop()
}
let currentEditingId = null



// Add Buttom logic
let addBnn = document.getElementById('add_btn')
addBnn.addEventListener("click", () => {
    document.querySelector('.add_mainbox').style.display = "flex"
    document.getElementById('editbtn').style.display = "none"
    document.getElementById('addbtn').style.display = "block"
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



//  to count leads card logic
function TotalCo() {
    let getcardfortotcunt = document.querySelectorAll('.card')
    let totalArr = Array.from(getcardfortotcunt)
    document.getElementById('totc').innerText = totalArr.length
}
TotalCo()



//  to count Closed leads card logic
function LeadClose() {
    let getcardforclo = document.querySelectorAll('.status-badge')
    let leadClo = Array.from(getcardforclo)
    let clocuu = 0;
    for (let i = 0; i < leadClo.length; i++) {
        let getcardforclo = document.querySelectorAll('.status-badge')
        if (getcardforclo[i].innerText === "Closed") {
            clocuu++
            document.getElementById('cloe').innerHTML = clocuu
        }
    }
    // console.log("close");

}
LeadClose()



// New Lead Count Logic
function NewLeadCount() {
    let timeElements = document.querySelectorAll('.status-badge')
    let NewtimeElements = Array.from(timeElements)
    let newCount = 0;
    for (let i = 0; i < timeElements.length; i++) {
        let timeElements = document.querySelectorAll('.status-badge')
        // console.log(timeElements[i].innerText);
        if (timeElements[i].innerText === "none") {
            newCount++
            // console.log(newCount);
            document.getElementById('newtract').innerText = newCount

        } else {

        }

    }
}
NewLeadCount()



// region color logic=============================================
function regionClr() {
    let region = document.querySelectorAll('.lead_re')
    for (let i = 0; i < region.length; i++) {
        if (region[i].innerHTML === "US-Lead") {
            region[i].style.backgroundColor = 'blue'
            // console.log("us");

        } else if (region[i].innerHTML === "CA-Lead") {
            region[i].style.backgroundColor = 'pink'
        } else if (region[i].innerHTML === "UK-Lead") {
            region[i].style.backgroundColor = 'red'
        } else {
            region[i].style.backgroundColor = 'grey'
        }
    }
}



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



// add lead summit btn 
let addbtn = document.getElementById('addbtn')



// After add lead all input data reset to none
function inputDateReset() {
    for (let i = 0; i < 11; i++) {
        let input = document.querySelectorAll('.input')
        input[i].value = "none"
    }
}



// After add lead it close lead add box
function leadAddBoxClose() {
    document.querySelector('.add_mainbox').style.display = "none"
}



// add lead card id as dataset-id logic=============================================
function dataSetinCard() {
    document.getElementById("leadbox").addEventListener("click", function (e) {
        const card = e.target.closest(".card") // get the card clicked
        if (!card) return // if no card found, stop

        const leadId = card.dataset.id // get card's unique id

        if (e.target.classList.contains("btn-view")) {
            console.log("view lead id:", leadId)
            document.getElementById('viewModal').style.display = "flex"

            // get clicked card
            const clickedCard = e.target.closest(".card")

            // get data from that card
            const cname = clickedCard.querySelector("#CliName")?.dataset.id || ""
            const contact = clickedCard.querySelector("#conti")?.dataset.id || ""
            const email = clickedCard.querySelector("#emai")?.dataset.id || ""
            const agent = clickedCard.querySelector("#Agname")?.dataset.id || ""
            const location = clickedCard.querySelector("#locai")?.dataset.id || ""
            const link = clickedCard.querySelector("a")?.href || ""
            const description = clickedCard.querySelector("#descripo")?.dataset.id || ""
            const date = clickedCard.querySelector("#datenotshow")?.innerText || ""
            const region = clickedCard.querySelector("#regtype")?.dataset.id || ""
            const status = clickedCard.querySelector("#status")?.dataset.id || ""
            const service = clickedCard.querySelector("#servy")?.dataset.id || ""

            // now update the view modal
            document.getElementById('viewName').innerText = "👤 Client: " + cname
            document.getElementById('viewContact').innerText = "📞 Phone: " + contact
            document.getElementById('viewEmail').innerText = "📧 Email: " + email
            document.getElementById('viewAgent').innerText = "👤 Agent: " + agent
            document.getElementById('viewLocation').innerText = "📍 Location: " + location
            document.getElementById('viewLink').innerText = "🔗 Link: " + link
            document.getElementById('viewDescription').innerText = "⚫ Description: " + description
            document.getElementById('viewDate').innerText = "📅 Date: " + date
            document.getElementById('viewType').innerText = "🌍 Type: " + region
            document.getElementById('viewStatus').innerText = "⚫ Status: " + status
            document.getElementById('viewService').innerText = "🛠️ Service: " + service
        }


        if (e.target.classList.contains("btn-edit")) {
            const clickedCard = e.target.closest(".card")
            currentEditingId = clickedCard.dataset.id // store the id

            document.querySelector('.add_mainbox').style.display = "flex"
            document.getElementById('editbtn').style.display = "block"
            document.getElementById('addbtn').style.display = "none"

            // fill the inputs
            reg.value = clickedCard.querySelector("#regtype").dataset.id
            aname.value = clickedCard.querySelector("#Agname").dataset.id
            cname.value = clickedCard.querySelector("#CliName").dataset.id
            con.value = clickedCard.querySelector("#conti").dataset.id
            ser.value = clickedCard.querySelector("#servy").dataset.id
            email.value = clickedCard.querySelector("#emai").dataset.id
            loca.value = clickedCard.querySelector("#locai").dataset.id
            descri.value = clickedCard.querySelector("#descripo").dataset.id
            stat.value = clickedCard.querySelector("#status").dataset.id
            lin.value = clickedCard.querySelector("a").href
        }


        if (e.target.classList.contains("btn-dele")) {
            let deleteDiv = document.querySelector(`[data-id="${leadId}"]`)
            deleteDiv.remove()

            // remove from array
            leadDataNewArr = leadDataNewArr.filter(item => item.did !== leadId)
            localStorage.setItem("leads", JSON.stringify(leadDataNewArr)) // save it

            TotalCo()
            LeadClose()
        }

    })
}



function addCard(leadDataNewArr) {
    const newCard = {
        date: `${date.value}`,
        did: "lead-" + Date.now(),
        timeAgo: new Date().toISOString(),
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
    }

    leadDataNewArr.push(newCard)
    renderCard(newCard) // use helper to render it
    localStorage.setItem("leads", JSON.stringify(leadDataNewArr)) // <-- add this

}



function renderCard(data) {
    let div = document.createElement('div')
    div.className = "card"
    div.dataset.id = data.did
    div.innerHTML = `
    <div class="card-header">
        <h3 id="CliName" data-id="${data.cname}">${data.cname}</h3>
        <div id="regtype" data-id="${data.region}" class="lead_re lead-type">${data.region}</div>
    </div>
    <div id="conti" data-id="${data.contact}" class="lead-info"><strong>📞 phone:</strong><span class="card_wit">${data.contact}</span></div>
    <div id="emai" data-id="${data.email}" class="lead-info"><strong>📧 email:</strong>${data.email}</div>
    <div id="servy" data-id="${data.service}" class="lead-info"><strong>🛠️ service:</strong>${data.service}</div>
    <div id="Agname" data-id="${data.aname}" class="lead-info"><strong>👤 agent:</strong>${data.aname}</div>
    <div id="locai" data-id="${data.location}" class="lead-info"><strong>📍 location:</strong>${data.location}</div>
    <div class="lead-info"><strong>🔗 link:</strong> <a target="_blank" href="${data.link}">${data.link}</a></div>
    <div id="status" data-id="${data.status}" class="status-badge">${data.status}</div>
    <div class="action-buttons">
        <h1 data-time="${data.timeAgo}" class="timeagorecode">0</h1>
        <button id="viewbtn" class="btn btn-view">view</button>
        <button class="btn btn-edit">edit</button>
        <button class="btn btn-dele">Delete</button>
        <h1 class="datenotsho" id="datenotshow">${data.date}</h1>
        <h1 class="timeago" id="timeAgo">${data.timeAgo}</h1>
        <h1 data-id="${data.description}" class="descripope" id="descripo">${data.description}</h1>
    </div>`
    mainCon.appendChild(div)
}



// show lead card time ago logic
function timeAgo(inputDate) {
    const now = new Date()
    const date = new Date(inputDate)
    const seconds = Math.floor((now - date) / 1000)

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    }
    for (let key in intervals) {
        const value = Math.floor(seconds / intervals[key])
        if (value >= 1) {
            return `${value} ${key}${value > 1 ? 's' : ''} ago`
        }
    }
    // if less than a minute
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`
}



function updateTimeAgoLoop() {
    let timeElements = document.querySelectorAll('.timeagorecode')

    timeElements.forEach(el => {
        let time = el.dataset.time
        el.innerText = timeAgo(time)
    })
}
// run initially
updateTimeAgoLoop()

// run every 60 seconds
setInterval(updateTimeAgoLoop, 6000)



let editBtn = document.getElementById('editbtn')
editbtn.addEventListener("click", () => {
    if (!currentEditingId) return

    let cardIndex = leadDataNewArr.findIndex(x => x.did === currentEditingId)
    if (cardIndex === -1) return

    // update the object in array
    leadDataNewArr[cardIndex] = {
        ...leadDataNewArr[cardIndex],
        date: date.value,
        region: reg.value,
        aname: aname.value,
        cname: cname.value,
        contact: con.value,
        service: ser.value,
        email: email.value,
        location: loca.value,
        description: descri.value,
        status: stat.value,
        link: lin.value,
    }

    // clear and re-render all cards
    mainCon.innerHTML = ""
    leadDataNewArr.forEach(item => renderCard(item)) // ✅ only render, don't push again
    dataSetinCard()
    regionClr()
    TotalCo()
    LeadClose()
    NewLeadCount()
    updateTimeAgoLoop()
    inputDateReset()
    leadAddBoxClose()

    currentEditingId = null
    localStorage.setItem("leads", JSON.stringify(leadDataNewArr))

})



addbtn.addEventListener('click', () => {

    // add lead card logic
    addCard(leadDataNewArr)

    // region color logic=============================================
    regionClr()

    // add lead card id as dataset-id logic=============================================
    dataSetinCard()

    // after add lead main lead box close Logic
    leadAddBoxClose()

    // After add lead all input data reset to none
    inputDateReset()

    // total lead count logic
    TotalCo()

    // closed lead count logic
    LeadClose()

    // show lead time ago logic
    updateTimeAgoLoop()


    // New Lead Count Logic
    NewLeadCount()

    localStorage.setItem("leads", JSON.stringify(leadDataNewArr))
})

