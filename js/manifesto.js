document.addEventListener('DOMContentLoaded', () => {
    console.log("app loaded")

    const PEOPLE = {
        "Presidency": [
            {
                "name": "Tan Kian Lin",
                "role": "Returning Officer",
                "url": "https://www.linkedin.com/in/kianlintan"
            },
            {
                "name": "Cheang Xue Ting",
                "role": "Elections Officer",
                "url": "http://linkedin.com/in/cheangxueting"
            },
            {
                "name": "Bryan Ong",
                "role": "Elections Officer",
                "url": "https://www.linkedin.com/in/bryan-ong-wx"
            }
        ]
    }

    const presBox = document.getElementById("pwing-box")

    const locations = {
        "Presidency": presBox,
    }

    function createCard(container, name, position, url) {
        /*
            <div class="wing-card">
                <!-- <img src="" class="wing-pic"> -->
                <div class="card-pic"></div>
                <div class="card-details">
                    <p class="card-name">Raveen Prabhu</p>
                        <p class="card-position">President</p>
                </div>
            </div>
         */

        var card = document.createElement("div")
        card.classList += "wing-card"

        var cardImgCont = document.createElement("div")
        cardImgCont.classList += "wing-pic-cont"
        var cardImage = document.createElement("img")
        cardImage.classList += "card-pic"
        cardImage.src = "./assets/" + name.replace(/ +/g, "") + ".jpg"
        cardImgCont.appendChild(cardImage)

        var details = document.createElement("div")
        details.classList += "card-details"

        var mmbrname = document.createElement("p")
        mmbrname.classList += 'card-name'
        mmbrname.innerHTML = name

        var mmbrpos = document.createElement("p")
        mmbrpos.classList += 'card-position'
        if (position.includes(",")) {
            position = position.split(",")
            var role0 = position[0]
            var role1 = position[1]

            position = role0 + ",<br>" + role1
        }
        mmbrpos.innerHTML = position

        details.appendChild(mmbrname)
        details.appendChild(mmbrpos)

        card.appendChild(cardImgCont)
        card.appendChild(details)

        if (url.length > 0) {
            card.addEventListener("click", () => {
                window.open(url, '_blank');
            })

            // cardImage.addEventListener("click", () => {
            //     window.open(url, '_blank');
            // })

            // details.addEventListener("click", () => {
            //     window.open(url, '_blank');
            // })
        }

        container.append(card)
    }

    for (const [key, loc] of Object.entries(locations)) {
        var members = PEOPLE[key]
        for (var i =0; i < members.length; i++) {
            var name = members[i]["name"]
            var role = members[i]["role"]
            var url = members[i]["url"]
            createCard(loc, name, role, url)
        }
    }
})