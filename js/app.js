document.addEventListener('DOMContentLoaded', () => {
    console.log("app loaded")

    const PEOPLE = {
        "Presidency": [
            {
                "name": "Matthew Tan",
                "role": "President",
                "url": "https://www.linkedin.com/in/matthew-simon-tan-b2987423b/"
            },
            {
                "name": "Summer Thia",
                "role": "General Secretary",
                "url": "https://www.linkedin.com/in/summerthia/"
            },
            {
                "name": "Celine Chung",
                "role": "Deputy General Secretary",
                "url": "https://www.linkedin.com/in/celinechungyy"
            },
            {
                "name": "Derrick Li",
                "role": "Tech Lead",
                "url": "https://www.linkedin.com/in/derricklibofeng/"
            },
            {
                "name": "Chen Shun",
                "role": "Deputy Tech Lead",
                "url": "https://www.linkedin.com/in/chen-shun-a99631177/"
            },
            {
                "name": "Tricia Goh",
                "role": "Finance Secretary",
                "url": "https://www.linkedin.com/in/triciagxh/"
            },
            {
                "name": "Merrick Neo",
                "role": "Operations Secretary",
                "url": "https://www.linkedin.com/in/merrick-neo-b66bb4201/"
            }
        ],
        "External Relations": [
            {
                "name": "Aditya Jirafe",
                "role": "Vice President",
                "url": "https://www.linkedin.com/in/aditya-jirafe-372a42248"
            },
            {
                "name": "Gui Ling Ling",
                "role": "Director, Publicity",
                "url": "https://www.linkedin.com/in/linglingg/"
            },
            {
                "name": "Wynn Lim",
                "role": "Deputy Director, Publicity (Content & Graphics)",
                "url": "https://www.linkedin.com/in/wynn-l-360035226/"
            },
            {
                "name": "Javian Ng",
                "role": "Deputy Director, Publicity (Photos & Video)",
                "url": "https://www.linkedin.com/in/javianngzh/"
            },
            {
                "name": "Fion Lim",
                "role": "Director, Marketing",
                "url": "https://www.linkedin.com/in/fion-lim-66571324a/"
            },
            {
                "name": "Varsha Ramkumar",
                "role": "Deputy Director, Marketing (Merchandise)",
                "url": "https://www.linkedin.com/in/varsharamkumar"
            },
            {
                "name": "Andre Heng",
                "role": "Deputy Director, Marketing (Sponsorship)",
                "url": "https://www.linkedin.com/in/andre-heng/"
            }
        ],
        "Internal Relations": [
            {
                "name": "Ivan Chin",
                "role": "Vice President",
                "url": "https://www.linkedin.com/in/ivan-chin-86a590189/"
            },
            {
                "name": "Mervyn Seah",
                "role": "Director, Welfare",
                "url": "https://www.linkedin.com/in/mervseah/"
            },
            {
                "name": "Amos Ting",
                "role": "Deputy Director, Welfare",
                "url": ""
            },
            {
                "name": "Vivien He",
                "role": "Director, Sports",
                "url": "https://www.linkedin.com/in/vivienherq/"
            },
            {
                "name": "Jaron Tan",
                "role": "Deputy Director, Sports",
                "url": ""
            } 
        ],
        "Student Development": [
            {
                "name": "Jody Tng",
                "role": "Vice President",
                "url": "https://www.linkedin.com/in/jodytng/"
            },
            {
                "name": "Bryan Ong",
                "role": "Director, Academic Liaison",
                "url": "https://www.linkedin.com/in/bryan-ong-51735a203"
            },
            {
                "name": "Tabriz Pahlavi",
                "role": "Deputy Director, Academic Liaison",
                "url": "https://www.linkedin.com/in/tabriz-pahlavi-4077b7243"
            },
            {
                "name": "Shawn Chew",
                "role": "Director, Community Engagement",
                "url": ""
            },
            {
                "name": "Kenneth Seet",
                "role": "Director, Rag & Flag",
                "url": "https://www.linkedin.com/in/kenneth-seet-b91015233/"
            }
        ],
        "Student Life": [
            {
                "name": "Pearlyn Liu",
                "role": "Vice President",
                "url": "https://www.linkedin.com/in/pearlyn-liu-34b0761b9/"
            },
            {
                "name": "Edric Khiew",
                "role": "Director, Freshman Orientation Projects",
                "url": "https://www.linkedin.com/in/edric-khiew-66442490/"
            },
            {
                "name": "Dionne Leow",
                "role": "Deputy Director, Freshman Orientation Projects",
                "url": "https://www.linkedin.com/in/dionne-leow-03195710b/"
            },
            {
                "name": "Jasper Tan",
                "role": "Deputy Director, Freshman Orientation Projects",
                "url": "https://www.linkedin.com/in/jaspertzx"
            },
            {
                "name": "Cheng Deren",
                "role": "Director, Student Engagement",
                "url": "https://www.linkedin.com/in/DerenC"
            },
            {
                "name": "Raman Gupta",
                "role": "Deputy Director, Student Engagement",
                "url": ""
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

    const toggleFOPButton = document.getElementById('toggle-fop-banner')
    const fopBanner = document.getElementById('fop-banner')

    toggleFOPButton.addEventListener("click", () => {
        fopBanner.style.display = "none"
    })


    const toggleIFGButton = document.getElementById('toggle-ifg-banner')
    const ifgBanner = document.getElementById('ifg-banner')

    toggleIFGButton.addEventListener("click", () => {
        ifgBanner.style.display = "none"
    })
})