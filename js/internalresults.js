document.addEventListener('DOMContentLoaded', () => {
    console.log("app loaded")

    const PEOPLE = {
        "Presidency": [
            {
                "name": "Tan Matthew Simon Castaneda",
                "role": "President",
            },
            {
                "name": "Thia Jean Shuen, Summer",
                "role": "General Secretary",
            },
            {
                "name": "Chung Yen Yee, Celine",
                "role": "Deputy General Secretary",
            },
            {
                "name": "Li Bo Feng Derrick",
                "role": "Tech Lead",
            },
            {
                "name": "Chen Shun",
                "role": "Deputy Tech Lead",
            },
            {
                "name": "Goh Pei Shan, Tricia",
                "role": "Finance Secretary",
            },
            {
                "name": "Merrick Neo Kai Jie",
                "role": "Operations Secretary",
            },
        ],
        "External Relations": [
            {
                "name": "Jirafe Aditya Vijay",
                "role": "Vice President",
            },
            {
                "name": "Fion Lim Xuan Ning",
                "role": "Director, Marketing",
            },
            {
                "name": "Varsha Ramkumar",
                "role": "Deputy Director, Marketing (Merchandise)",
            },
            {
                "name": "Ng Zheng Han Javian",
                "role": "Deputy Director, Publicity (Photo & Video)",
            },
        ],
        "Internal Relations": [
            {
                "name": "Ivan Chin Yue Ze",
                "role": "Vice President",
            },
            {
                "name": "He Ruoqing, Vivien",
                "role": "Director, Sports",
            },
            {
                "name": "Tan Sin Chez, Jaron",
                "role": "Deputy Director, Sports",
            },
            {
                "name": "Ting Yong Shen Amos",
                "role": "Deputy Director, Welfare",
            },
        ],
        "Student Development": [
            {
                "name": "Jody Tng Jin Zi",
                "role": "Vice President",
            },
            {
                "name": "Ong Jin Xiang, Bryan",
                "role": "Director, Academic Liaison",
            },
            {
                "name": "Tabriz Pahlavi",
                "role": "Deputy Director, Academic Liaison",
            }
        ],
        "Student Life": [
            {
                "name": "Pearlyn Liu Xiaoxuan",
                "role": "Vice President",
            },
            {
                "name": "Cheng Deren",
                "role": "Director, Student Engagement",
            },
            {
                "name": "Raman Gupta",
                "role": "Deputy Director, Student Engagement",
            }
        ]
    }

    const presBox = document.getElementById("pwing-box")
    const externalBox = document.getElementById("external-box")
    const internalBox = document.getElementById("internal-box")
    const stddevBox = document.getElementById("stddev-box")
    const stdlifeBox = document.getElementById("stdlife-box")

    const locations = {
        "Presidency": presBox,
        "External Relations": externalBox,
        "Internal Relations": internalBox,
        "Student Development": stddevBox,
        "Student Life": stdlifeBox,
    }

    function createCard(container, name, position) {
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
        cardImage.src = "./assets/elections/candidates/" + name.replace(/ +/g, "").replace(",", "") + ".jpg"
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

        container.append(card)
    }


    for (const [key, loc] of Object.entries(locations)) {
        var members = PEOPLE[key]
        for (var i = 0; i < members.length; i++) {
            var name = members[i]["name"]
            var role = members[i]["role"]
            createCard(loc, name, role)
        }
    }

})