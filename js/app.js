document.addEventListener('DOMContentLoaded', () => {
    console.log("app loaded")

    const PEOPLE = {
        "Presidency": [
            {
                "name": "Raveen Prabhu",
                "role": "President",
                "url": "https://www.linkedin.com/in/raveenprabhu/"
            },
            {
                "name": "Chen Hsiao Ting",
                "role": "General Secretary",
                "url": "https://www.linkedin.com/in/chenhsiaoting/"
            },
            {
                "name": "Jenny Jian Jie",
                "role": "Deputy General Secretary",
                "url": "https://www.linkedin.com/in/jenny-jian-jie/"
            },
            {
                "name": "Rishabh Anand",
                "role": "Tech Lead",
                "url": "http://rish-16.github.io"
            },
            {
                "name": "Megan Wee",
                "role": "Deputy Tech Lead",
                "url": "https://www.linkedin.com/in/megan-wee-rui-en/"
            },
            {
                "name": "Tan Kian Lin",
                "role": "Finance Secretary",
                "url": "https://www.linkedin.com/in/kianlintan"
            },
            {
                "name": "Sophie Ng",
                "role": "Deputy Finance Secretary",
                "url": "https://www.linkedin.com/in/sophiieng"
            }
        ],
        "External Relations": [
            {
                "name": "Abhishek Jain ",
                "role": "Vice President",
                "url": "https://abhishekjainz.me/"
            },
            {
                "name": "Xiang Qingyi",
                "role": "Director, Publicity",
                "url": "https://www.linkedin.com/in/qingyi-xiang/"
            },
            {
                "name": "Alyssa Savier",
                "role": "Deputy Director, Publicity (Content & Graphics)",
                "url": "https://sg.linkedin.com/in/alyssa-savier-b83090160"
            },
            {
                "name": "Yap Teng Chiong",
                "role": "Deputy Director, Publicity (Photos & Video)",
                "url": ""
            },
            {
                "name": "Lo Zhao Wei",
                "role": "Director, Marketing",
                "url": "https://www.linkedin.com/in/zhaoweilo/"
            },
            {
                "name": "Shen Yu Chen",
                "role": "Deputy Director, Marketing (Merchandise)",
                "url": ""
            },
            {
                "name": "Lin Jiayong",
                "role": "Deputy Director, Marketing (Sponsorship)",
                "url": "https://www.linkedin.com/in/jaywhy0309"
            }
        ],
        "Internal Relations": [
            {
                "name": "Roy Chua",
                "role": "Vice President",
                "url": "https://roystal.github.io/"
            },
            {
                "name": "Xiong Jingya",
                "role": "Director, Welfare",
                "url": "https://www.linkedin.com/in/jingya-xiong-5133a6202/"
            },
            {
                "name": "Bryan Ong",
                "role": "Deputy Director, Welfare",
                "url": "https://www.linkedin.com/in/bryan-ong-wx"
            },
            {
                "name": "L Kaushik Rangaraj",
                "role": "Director, Sports",
                "url": "https://linktr.ee/KaushikR"
            },
            {
                "name": "Denise Lam",
                "role": "Deputy Director, Sports",
                "url": ""
            } 
        ],
        "Student Development": [
            {
                "name": "Arnav Gupta",
                "role": "Vice President",
                "url": "https://linktr.ee/arnavg"
            },
            {
                "name": "David Limantara",
                "role": "Director, Academic Liaison",
                "url": "https://www.linkedin.com/in/david-limantara"
            },
            {
                "name": "Joel Toh",
                "role": "Deputy Director, Academic Liaison",
                "url": "https://www.linkedin.com/in/joel-toh/"
            },
            {
                "name": "Cheang Xue Ting",
                "role": "Director, Community Service",
                "url": "http://linkedin.com/in/cheangxueting"
            },
            {
                "name": "Wei Yangken",
                "role": "Deputy Director, Community Service",
                "url": "https://yangkenw.netlify.app/"
            }
        ],
        "Student Life": [
            {
                "name": "Dao Minh Hai",
                "role": "Vice President",
                "url": "https://www.linkedin.com/in/daominhhai/"
            },
            {
                "name": "Tricia Goh",
                "role": "Director, Freshman Orientation Projects",
                "url": "https://www.linkedin.com/in/tricixg/"
            },
            {
                "name": "Summer Thia",
                "role": "Deputy Director, Freshman Orientation Projects",
                "url": "http://www.linkedin.com/in/summerthia"
            },
            {
                "name": "Andrea Loh",
                "role": "Deputy Director, Freshman Orientation Projects",
                "url": "https://www.linkedin.com/in/andrealyh/"
            },
            {
                "name": "Merrick Neo",
                "role": "Director, Student Relations",
                "url": "https://www.linkedin.com/in/merrick-neo-b66bb4201"
            },
            {
                "name": "Low Zan Hao",
                "role": "Deputy Director, Student Relations",
                "url": "https://www.linkedin.com/in/zan-hao-low-1774b7207/"
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
})