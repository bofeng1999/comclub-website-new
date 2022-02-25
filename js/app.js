document.addEventListener('DOMContentLoaded', () => {
    console.log("app loaded")

    const PEOPLE = {
        "Presidency": [
            {
                "name": "Raveen Prabhu",
                "role": "President"
            },
            {
                "name": "Chen Hsiao Ting",
                "role": "General Secretary"
            },
            {
                "name": "Jenny Jian Jie",
                "role": "Asst. General Secretary"
            },
            {
                "name": "Rishabh Anand",
                "role": "Tech Lead"
            },
            {
                "name": "Megan Wee",
                "role": "Asst. Tech Lead"
            },
            {
                "name": "Tan Kian Lin",
                "role": "Finance Secretary"
            },
            {
                "name": "Sophie Ng",
                "role": "Asst. Finance Secretary"
            }
        ],
        "External Relations": [
            {
                "name": "Abhishek Jain ",
                "role": "Vice President"
            },
            {
                "name": "Xiang Qingyi",
                "role": "Director, Publicity"
            },
            {
                "name": "Alyssa Savier",
                "role": "Deputy Director, Publicity (Graphics & Content)"
            },
            {
                "name": "Yap Teng Chiong",
                "role": "Deputy Director, Publicity (Photos & Video)"
            },
            {
                "name": "Lo Zhao Wei",
                "role": "Director, Marketing"
            },
            {
                "name": "Shen Yu Chen",
                "role": "Deputy Director, Marketing (Merchandise)"
            },
            {
                "name": "Lin Jiayong",
                "role": "Deputy Director, Marketing (Sponsorship)"
            }
        ],
        "Internal Relations": [
            {
                "name": "Roy Chua",
                "role": "Vice President"
            },
            {
                "name": "Xiong Jingya",
                "role": "Director, Welfare"
            },
            {
                "name": "Bryan Ong",
                "role": "Deputy Director, Welfare"
            },
            {
                "name": "L Kaushik Rangaraj",
                "role": "Director, Sports"
            },
            {
                "name": "Denise Lam",
                "role": "Deputy Director, Sports"
            } 
        ],
        "Student Development": [
            {
                "name": "Arnav Gupta",
                "role": "Vice President"
            },
            {
                "name": "David Limantara",
                "role": "Director, Academics"
            },
            {
                "name": "Joel Toh",
                "role": "Deputy Director, Academics"
            },
            {
                "name": "Cheang Xue Ting",
                "role": "Director, Comm. Service"
            },
            {
                "name": "Wei Yangken",
                "role": "Deputy Director, Comm. Service"
            }
        ],
        "Student Life": [
            {
                "name": "Dao Minh Hai",
                "role": "Vice President"
            },
            {
                "name": "Tricia Goh",
                "role": "Director, FOP"
            },
            {
                "name": "Summer Thia",
                "role": "Deputy Director, FOP"
            },
            {
                "name": "Andrea Loh",
                "role": "Deputy Director, FOP"
            },
            {
                "name": "Merrick Neo",
                "role": "Director, Student Relations"
            },
            {
                "name": "Low Zan Hao",
                "role": "Deputy Director, Student Relations"
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
        "Student Life": stdlifeBox
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
        var cardImage = document.createElement("div")
        cardImage.classList += "card-pic"

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

        card.appendChild(cardImage)
        card.appendChild(details)

        container.append(card)
    }

    for (const [key, loc] of Object.entries(locations)) {
        var members = PEOPLE[key]
        for (var i =0; i < members.length; i++) {
            var name = members[i]["name"]
            var role = members[i]["role"]
            createCard(loc, name, role)
        }
    }
})