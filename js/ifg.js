function EventCard(logs) {
    this.logs = logs
}

EventCard.prototype.addCard = function(container) {
    var card = document.createElement('div')
    card.classList += 'event-card'

    var cardCont = document.createElement('div')
    cardCont.classList += 'event-cont'

    var cardLeft = document.createElement('div')
    cardLeft.classList += 'event-left'

    var title = document.createElement('p')
    title.innerHTML = this.logs['title']
    title.classList += 'event-title'

    var venue = document.createElement('p')
    venue.innerHTML = this.logs['venue']
    venue.classList += 'event-venue'

    var cardRight = document.createElement('div')
    cardRight.classList += 'event-right'

    var time = document.createElement('p')
    time.innerHTML = this.logs['time']
    time.classList += 'event-time'

    var date = document.createElement('p')
    date.innerHTML = this.logs['date']
    date.classList += 'event-date'

    var cardBtm = document.createElement('div')
    cardBtm.classList += 'event-bottom'

    colorMap = {
        "1": "#ff6b6b",
        "2": "#ff9ff3",
        "3": "#ff9f43",
        "4": "#00d2d3",
        "5": "#feca57",
    }

    function isDigit(str) {
        // if (typeof str != "string") return false
        return !isNaN(str) && !isNaN(parseFloat(str))
    }

    if ((this.logs['tags']).length > 0) {
        this.logs['tags'].forEach(tagName => {
            var tag = document.createElement('p')
    
            if (tagName == "men's") {
                tag.style.backgroundColor = "#1dd1a1"
                tag.style.color = "white"
                tag.innerHTML = tagName
            } else if (tagName == "women's") {
                tag.style.backgroundColor = "#5f27cd"
                tag.style.color = "white"
                tag.innerHTML = tagName
            } else if (isDigit(tagName)) {
                tag.style.backgroundColor = colorMap[tagName]
                tag.innerHTML = "week " + tagName
            } else {
                tag.style.backgroundColor = "#686de0"
                tag.style.color = "white"
                tag.innerHTML = tagName
            }

            tag.classList += 'event-tag'
    
            cardBtm.appendChild(tag)
        })
    
        cardLeft.appendChild(title)
        cardLeft.appendChild(venue)
    
        cardRight.appendChild(time)
        cardRight.appendChild(date)
    
        cardCont.appendChild(cardLeft)
        cardCont.appendChild(cardRight)
    
        card.appendChild(cardCont)
        card.appendChild(cardBtm)
    
        container.appendChild(card)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("App loaded")

    EVENTS_JSON = [
        {
            "title": "Handball",
            "tags": [
                "women's",
                1
            ],
            "time": "0900-1600",
            "date": "Saturday, 13-8-2022",
            "venue": "MPSH5"
        },
        {
            "title": "Valorant",
            "tags": [
                "men's",
                "women's",
                1
            ],
            "time": "1300-1900",
            "date": "Saturday, 13-8-2022",
            "venue": "Com Lab"
        },
        {
            "title": "Volleyball",
            "tags": [
                "women's",
                1
            ],
            "time": "1200-1900",
            "date": "Saturday, 13-8-2022",
            "venue": "UTSH2"
        },
        {
            "title": "Volleyball",
            "tags": [
                "women's",
                1
            ],
            "time": "1200-1900",
            "date": "Saturday, 13-8-2022",
            "venue": "UTSH2"
        },
        {
            "title": "Handball",
            "tags": [
                "men's",
                1
            ],
            "time": "0900-1600",
            "date": "Sunday, 14-8-2022",
            "venue": "MPSH5"
        },
        {
            "title": "Contract Bridge",
            "tags": [
                "men's",
                "women's",
                1
            ],
            "time": "0900-1900",
            "date": "Sunday, 14-8-2022",
            "venue": "MPSH4"
        },
        {
            "title": "Tennis",
            "tags": [
                "men's",
                "women's",
                1
            ],
            "time": "0900-1900",
            "date": "Sunday, 14-8-2022",
            "venue": "Tennis Courts 9-13 (5 courts)"
        },
        {
            "title": "Volleyball",
            "tags": [
                "men's",
                1
            ],
            "time": "0900-1900",
            "date": "Sunday, 14-8-2022",
            "venue": "UTSH1"
        },
        {
            "title": "Basketball",
            "tags": [
                "men's",
                1
            ],
            "time": "0900-1200",
            "date": "Sunday, 14-8-2022",
            "venue": "USC"
        },
        {
            "title": "Touch Football",
            "tags": [
                "men's",
                "women's",
                1
            ],
            "time": "0900-1400",
            "date": "Sunday, 14-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Touch Football",
            "tags": [
                "men's",
                "women's",
                1
            ],
            "time": "0900-1400",
            "date": "Sunday, 14-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Touch Football",
            "tags": [
                "men's",
                "women's",
                1
            ],
            "time": "0900-1400",
            "date": "Sunday, 14-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Handball",
            "tags": [
                "women's",
                2
            ],
            "time": "1600 - 1930",
            "date": "Saturday, 20-8-2022",
            "venue": "MPSH5"
        },
        {
            "title": "Tennis",
            "tags": [
                "men's",
                "women's",
                2
            ],
            "time": "0900-1900",
            "date": "Saturday, 20-8-2022",
            "venue": "Tennis Courts 4-11 (8 courts)"
        },
        {
            "title": "Tchoukball",
            "tags": [
                "men's",
                "women's",
                2
            ],
            "time": "0900-1600",
            "date": "Saturday, 20-8-2022",
            "venue": "YNC Court"
        },
        {
            "title": "Valorant",
            "tags": [
                "men's",
                "women's",
                2
            ],
            "time": "1300-1900",
            "date": "Saturday, 20-8-2022",
            "venue": "Com Lab"
        },
        {
            "title": "International Chess",
            "tags": [
                "men's",
                "women's",
                2
            ],
            "time": "0900-1700",
            "date": "Sunday, 21-8-2022",
            "venue": "MPSH4"
        },
        {
            "title": "Table Tennis",
            "tags": [
                "men's",
                "women's",
                2
            ],
            "time": "1200-1900",
            "date": "Sunday, 21-8-2022",
            "venue": "MPSH2"
        },
        {
            "title": "Tchoukball",
            "tags": [
                "men's",
                "women's",
                2
            ],
            "time": "0900-1700",
            "date": "Sunday, 21-8-2022",
            "venue": "YNC Court"
        },
        {
            "title": "Football",
            "tags": [
                "men's",
                2
            ],
            "time": "0900-1500",
            "date": "Sunday, 21-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Football",
            "tags": [
                "men's",
                2
            ],
            "time": "1500-1900",
            "date": "Sunday, 21-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Handball",
            "tags": [
                "men's",
                3
            ],
            "time": "1020-1900",
            "date": "Saturday, 27-8-2022",
            "venue": "MPSH5"
        },
        {
            "title": "Floorball",
            "tags": [
                "women's",
                3
            ],
            "time": "0900-1430",
            "date": "Saturday, 27-8-2022",
            "venue": "MPSH6 "
        },
        {
            "title": "Basketball",
            "tags": [
                "men's",
                3
            ],
            "time": "0900-1200",
            "date": "Saturday, 27-8-2022",
            "venue": "UTSH2 "
        },
        {
            "title": "League of Legends",
            "tags": [
                "men's",
                "women's",
                3
            ],
            "time": "0900-1700",
            "date": "Saturday, 27-8-2022",
            "venue": "Com Seminar Room"
        },
        {
            "title": "Football",
            "tags": [
                "men's",
                3
            ],
            "time": " 1700-1800",
            "date": "Saturday, 27-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Football",
            "tags": [
                "men's",
                3
            ],
            "time": "1800-1900",
            "date": "Saturday, 27-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Tennis",
            "tags": [
                "men's",
                "women's",
                3
            ],
            "time": "0900-1900",
            "date": "Saturday, 27-8-2022",
            "venue": "Tennis Courts 4-11 (8 courts)"
        },
        {
            "title": "League of Legends",
            "tags": [
                "men's",
                "women's",
                3
            ],
            "time": " 0900-1300",
            "date": "Sunday, 28-8-2022",
            "venue": "COM Lab"
        },
        {
            "title": "Badminton",
            "tags": [
                "men's",
                "women's",
                3
            ],
            "time": "0900-1800",
            "date": "Sunday, 28-8-2022",
            "venue": "MPSH5"
        },
        {
            "title": "Table Tennis",
            "tags": [
                "men's",
                "women's",
                3
            ],
            "time": " 1400-1600",
            "date": "Sunday, 28-8-2022",
            "venue": "MPSH2 Table (4-7)"
        },
        {
            "title": "Football",
            "tags": [
                "men's",
                3
            ],
            "time": "1100-1300",
            "date": "Sunday, 28-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Touch Football",
            "tags": [
                "men's",
                "women's",
                3
            ],
            "time": "1300 - 1430",
            "date": "Sunday, 28-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Touch Football",
            "tags": [
                "men's",
                "women's",
                3
            ],
            "time": "1430 - 1600",
            "date": "Sunday, 28-8-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Ultimate Frisbee",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "1200-1900",
            "date": "Saturday, 3-9-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Badminton",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "0900-1300",
            "date": "Saturday, 3-9-2022",
            "venue": "MPSH5"
        },
        {
            "title": "Basketball",
            "tags": [
                "women's",
                4
            ],
            "time": " 1500-1930",
            "date": "Saturday, 3-9-2022",
            "venue": "USC Sports Hall"
        },
        {
            "title": "Table Tennis",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "0900-1600",
            "date": "Saturday, 3-9-2022",
            "venue": "MPSH2 Table (4-7)"
        },
        {
            "title": "Volleyball",
            "tags": [
                "women's",
                4
            ],
            "time": "0900-1900",
            "date": "Saturday, 3-9-2022",
            "venue": "UTSH1"
        },
        {
            "title": "Tennis",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "0900-1900",
            "date": "Saturday, 3-9-2022",
            "venue": "Tennis Courts 4-11 (8 courts)"
        },
        {
            "title": "Contract Bridge",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "0900-1900",
            "date": "Saturday, 3-9-2022",
            "venue": "MPSH4"
        },
        {
            "title": "Floorball",
            "tags": [
                "men's",
                4
            ],
            "time": "0900-1900",
            "date": "Sunday, 4-9-2022",
            "venue": "MPSH6"
        },
        {
            "title": "Badminton",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "0900-1400",
            "date": "Sunday, 4-9-2022",
            "venue": "MPSH5"
        },
        {
            "title": "Table Tennis",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "0900-1600",
            "date": "Sunday, 4-9-2022",
            "venue": "MPSH2 Table (4,5,6,10) "
        },
        {
            "title": "Dodgeball",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "0900-1700",
            "date": "Sunday, 4-9-2022",
            "venue": "YNC Courts "
        },
        {
            "title": "Volleyball",
            "tags": [
                "men's",
                "women's",
                4
            ],
            "time": "0900-1900",
            "date": "Sunday, 4-9-2022",
            "venue": "UTSH1"
        },
        {
            "title": "Football",
            "tags": [
                "men's",
                4
            ],
            "time": "1300-1600",
            "date": "Sunday, 4-9-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Basketball",
            "tags": [
                "women's",
                5
            ],
            "time": "1200-1600",
            "date": "Saturday, 10-9-2022",
            "venue": "UTSH1"
        },
        {
            "title": "Dodgeball",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "1600 - 1900",
            "date": "Saturday, 10-9-2022",
            "venue": "UTSH1"
        },
        {
            "title": "Floorball",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "0900-1900",
            "date": "Saturday, 10-9-2022",
            "venue": "MPSH6"
        },
        {
            "title": "Badminton",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "0900-1600",
            "date": "Saturday, 10-9-2022",
            "venue": "MPSH5"
        },
        {
            "title": "Tennis",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "0900-1900",
            "date": "Saturday, 10-9-2022",
            "venue": "Tennis Courts 4-6, 10-11 (5 courts)"
        },
        {
            "title": "Ultimate Frisbee",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "1200 -1500",
            "date": "Saturday, 10-9-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Ultimate Frisbee",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "1500 -1900",
            "date": "Saturday, 10-9-2022",
            "venue": "Astro Field"
        },
        {
            "title": "Reversi",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "0900-1900",
            "date": "Sunday, 11-9-2022",
            "venue": "MPSH4"
        },
        {
            "title": "Volleyball",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "0900-1900",
            "date": "Sunday, 11-9-2022",
            "venue": "UTSH2"
        },
        {
            "title": "Basketball",
            "tags": [
                "men's",
                "women's",
                5
            ],
            "time": "1430-1900",
            "date": "Sunday, 11-9-2022",
            "venue": "USC"
        },
        {
            "title": "Swimming",
            "tags": [
                "men's",
                5
            ],
            "time": "1400-1500",
            "date": "Sunday, 11-9-2022",
            "venue": "Indoor Pool"
        },
        {
            "title": "Swimming",
            "tags": [
                "women's",
                5
            ],
            "time": "1500-1600",
            "date": "Sunday, 11-9-2022",
            "venue": "Indoor Pool"
        }
    ]

    const dateInfo = document.getElementById('date-info')
    const cardContainer = document.getElementById('cards-container')

    var today = new Date()
    var dayIdx = today.getDay()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = today.getMonth()
    var yyyy = today.getFullYear()
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    
    today = weekday[dayIdx] + ', ' + dd + ' ' + months[mm] + ' ' + yyyy
    dateInfo.innerHTML += `<span style="font-size: 23px; font-weight: bold; color: #4a69bd;">${today}</span>`

    function isInThePast(date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return date < today;
    }

    var c = 0

    EVENTS_JSON.forEach(record => {
        var date = record['date'].split(",")[1].trim().split("-")
        var yy = date[2]
        var mm = date[1]
        var dd = date[0].padStart(2, '0')
        
        var curDate = new Date(`${yy}-${mm.padStart(2, '0')}-${dd}`)
        record['date'] = record['date'].split(",")[0] + ", " + `${dd} ${months[mm-1]} ${yy}`
        
        if (!isInThePast(curDate)) {
            var card = new EventCard(record)
            card.addCard(cardContainer)
            c += 1
        }
    })

    console.log(c)
})

