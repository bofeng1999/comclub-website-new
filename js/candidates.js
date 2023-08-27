document.addEventListener('DOMContentLoaded', () => {
    console.log("app loaded")

    const PEOPLE = {
        "Presidency": [
            {
                "name": "Ng Zheng Han Javian",
                "role": "President",
                "course": "Year 2 / Business Analytics",
                "manifesto": "Vote for me as the President of the NUS Computing Club for a year of innovation, collaboration, and growth!<br><br>As the deputy director of publicity during the last year, I have fervently contributed to the club's success by developing a sense of community and bringing together and encouraging students' interest and engagement in the club. As President, I'll take this commitment to the next level. My experience guarantees a seamless transfer, allowing us to hit the ground running.<br><br>I'm committed to increasing the effect of our club by planning exciting events that combines theory and experience. I will be sure to magnify the voices of our members and ensure that every idea is heard and recognised with my demonstrated skills in cooperation and effective communication."
            },
            {
                "name": "Rayson",
                "role": "Tech Lead",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hi, I’m Rayson and I’m running for computing club. You can count on my unwavering dedication—I'm up late and early grinding to help whenever you need it. I'm all about giving my best energy and ideas to the role. I'm vying for the Tech Lead position to make a meaningful impact and foster open dialogues within the club.<br><br>Why vote for me? I genuinely love programming and have a track record of projects, including my portfolio website and a summer-built orbital project. Aside from my technical experience, I will also strive to do my best to give everyone a better student life experience. I'll actively gather input from committees to enhance existing processes and introduce new features to help improve accessibility.<br><br>My experience and passion aim to drive innovations that boost committee productivity. With your vote, I'll work tirelessly to enhance your journey. Thank you for your consideration."
            }
        ],
        "External Relations": [
//            {
//                "name": "Fion Lim Xuan Ning",
//                "role": "Vice President",
//                "course": "Year 2 / Business Analytics",
//                "manifesto": "I am Fion, currently a year 2 BZA student and running for Vice President (External Relations). I am running for VPER because I want to foster more meaningful student engagement and bolster partnerships, be it with other companies, alumni or other organisations. Through my experience with FOPs in 2022, I realized that there was more to be done to guard against companies or external organisations whom may take advantage of students’ information. Hence I decided to run for VPER to ensure the selection of organisations who had expectations and values aligned more closely to SOC’s. Moreover, through thoughtful publicity and establishment of SOC’s image I believe that partnering with external organisations which can bring SOC students greater opportunity is achievable, eliminating the need to sought after companies which may not meet the current needs of SOC students. Ultimately, I envision to better fulfill these needs and create a better SOC."
//            },
//            {
//                "name": "Micaella Deniega Ilagan",
//                "role": "Director, Publicity",
//                "course": "Year 2 / Information Systems",
//                "manifesto": "I am Micaella Deniega Ilagan, a Year 2 Information Systems student, and I am running for the role Director of Publicity in the 25th Computing Club Management Committee (MC). Having been part of many publicity and project committees in my life, I found the ones that let me explore and grow the most in in those in the 24th MC. If given the chance, I will passionately advocate for and encourage creative freedom in the Publicity Cell and create a fun substrate where others may share my fondness and dedication towards design and reaching out to others. I will work with the like-minded individuals of Publicity to continue producing design and publicity work that we as a committee can be proud of. I believe I am the candidate with the experience needed but most importantly the enthusiasm and passion for the area of work that is Publicity."
//            }
        ],
        "Internal Relations": [
            {
                "name": "Lek Kai Hin Joshua",
                "role": "Vice President",
                "course": "Year 1 / Information Systems",
                "manifesto": "2 main reasons why you should vote for me:<br>Firstly, I’m pushing for a digital platform for your academic needs. The platform is essentially a large-scale online library for NUS students to access every module’s content, reviews and detailed guides. This will help prevent situations like (1)choosing the wrong module and (2)falling behind in class. (3)It can help you better prepare for exams by having access to past year questions and lectures, and seniors notes or cheat sheets. Think of the platform as a blend of NUSMODS and Canvas, with all resources stored under one centralised system.<br><br>Secondly, you can expect the internal relations department to alleviate your stress. Other than the usual care packages, buzzfeed personality type quizzes will be curated and released weekly for your entertainment. It also serves as an opportunity to improve student engagement."
            },
            {
                "name": "Koo Jay-Lynn",
                "role": "Director, Welfare",
                "course": "Year 2 / Information Systems",
                "manifesto": "I am running to be your Welfare Director! Being part of Welfare subcomm last AY, I was involved in many welfare activities, ranging from exam welfare packing and distribution to Wellness Carnival. The Welfare Cell’s mission to spread joy and support students’ mental health resonates deeply with me, which is why I would like to take up this role. I am friendly and approachable, so you should not fear approaching me with your issues and concerns. As an empathetic individual, I will listen actively to the concerns and needs of Computing Club members and take new suggestions and ideas into account when coming up with Welfare activities. Furthermore, as someone who values teamwork and working with others, I am committed to working and collaborating with the next Welfare subcommittee and the 26th Management Committee to bring bigger and better things to SoC and create a caring community for all!"
            }
        ],
        "Student Development": [
            {
                "name": "Martin Ng",
                "role": "Vice President",
                "course": "Year 1 / Business Analytics",
                "manifesto": "While us students strive to succeed academically, it is also essential that we do not fail at other aspects of our development. I aim to emphasize the importance of finding the time in our busy lives to stop and reflect, rather than being in an endless pursuit of our own self-gain. Establishing and celebrating a community that can uplift one another will undoubtedly result in a holistic environment for everyone to thrive in."
            },
            {
                "name": "Nathan Loo Enping",
                "role": "Director, Community Engagement",
                "course": "Year 1 / Computer Science",
                "manifesto": "As members of NUS Computing, we have the ability to create a positive impact in society through using technology to benefit the marginalised and those with disabilities. There’s so much we can do, whether it’s developing easy-to-use apps to make lives easier for our ageing population, simplifying processes for frontline and social workers, or educating the next generation on programming-related topics.<br><br>My goal is to create projects and pathways where SoC students can tap on and showcase their unique skillsets, foster a culture of inclusivity, and help our school continue to forge meaningful and lasting partnerships with various organisations whose values match our own.<br><br>Combining service and skills, towards a better community, together."
            },
            {
                "name": "Timothy Soon",
                "role": "Director, Rag & Flag",
                "course": "Year 1 / Computer Science",
                "manifesto": "I am very grateful to the rag and flag programme. It gave me the opportunity to meet new friends in SoC, to familiarise myself with school, and to meet seniors whose advice proved invaluable. I am campaigning for the role of director as I believe that we can, together, create even greater opportunities for the next batch of incoming freshmen. My goal as director is to expand the scale and size of Rag and Flag next year, while mantaining a welcoming, trouble-free experience for both the committee and freshmen, allowing everybody to give their absolute best and take the programme to the next level."
            },
            {
                 "name": "Kong Shi Ting",
                 "role": "Director, Rag & Flag",
                 "course": "Year 1 / Business Analytics",
                 "manifesto": "Being part of ComRag 2023, I have experienced firsthand the change that people can make when they come together to create, give back and elevate. Rag and Flag is so much more than just a orientation activity or a charity project. It is a vibrant community, a lifeline of support, and a family that extends beyond our time together.<br><br>With a history of successfully managing and executing similar charity events, I am excited to see how I can leverage on my own strengths and skillsets to contribute to the Computing Club. My goal is to continue this cycle of Receiving and Giving, and forge a path lined with the same opportunities I had for the next batch of freshmen to fulfil their potential as a collective force for good.<br><br>Let's expand this community and aim for Gold 2024."
            }
        ],
        "Student Life": [
            {
                "name": "Ng Le Xuan",
                "role": "Vice President",
                "course": "Year 2 / Information Systems",
                "manifesto": "My vision for the Computing Club revolves around establishing an inclusive platform where every member has the opportunity to connect and bond with one another. Drawing from my experience as the househead in FSC and as the secretary and OGL in FOW, I have personally observed an issue that arose during these events—numerous freshmen found themselves unable to partake due to insufficient manpower for the camps. Moving forward, I am determined to address this challenge by enhancing the planning process and refining the recruitment of OGLs.<br><br>With this in mind, I firmly believe that my background of working behind the scenes with computing club’s activities before like FLAG, FSC and FOW equips me with a more comprehensive perspective. This perspective will serve as a valuable compass as I strive to bring about meaningful change to the lives of students within the computing community."
            },
            {
                "name": "Sean Kevin Dias",
                "role": "Vice President",
                "course": "Year 1 / Computer Science",
                "manifesto": "I am a driven individual who wants to ensure the best for everyone in SoC. I will use the platform given to sure that student life will be engaging and bring people together. Vote for Sean!"
            },
            {
                "name": "Raeeda Ibnat Hossain",
                "role": "Director, Freshmen Orientation Project",
                "course": "Year 1 / Computer Science",
                "manifesto": "Hi y'all, my name is Raeeda and I'm a year 1 CS major running to be the next Freshman Orientation Programme Director.<br><br>As the FOPD, I plan to empower the subcommittees under me to explore the depths of their own creativity and come up with highly innovative, and engaging programmes to welcome countless incoming students into Computing. More than a basic introduction to our faculty, I would aim to integrate freshmen into the vibrant culture of SoC through the multiple events.<br><br>Additionally, I want all seniors involved to be able to reminisce on and relive their own FOP experience, while also making it better (if they so choose). I promise to be an understanding and accountable middleman between all stakeholders, be it faculty, subcomm or sponsors.<br><br>But if you don't know me at all, why would you vote for me? So here's more info: I'm from NUS College, staying on campus at Cinnamon College at UTown. I can be most commonly found hanging with NUSC friends (so many SoC...) struggling to process 1231S or at the Terrace, making new SoC friends everyday. Next time you see me (I have Very red hair...), do stop me for a quick chat’ Whether or not we cross paths physically, you can always find me on telegram and/or instagram at @fluoraescence. I will reply almost instantly, 24/7!<br><br>I'm looking forward to working with what I can already foresee as a wonderfully passionate Management Comm, if you decide I'm the right person for the job! :)"
            },
        ],
        "NUSSU EXCO Representative": [
            {
                "name": "Ong Hao Yang",
                "role": "NUSSU EXCO Representative",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I am dedicated to serve the SoC population and ensure the welfare of computing students are taken care of. As an exco rep, I will give SoC a voice in NUSSU policies and decisions. I promise to exercise my due diligence and responsibility in pushing for policies that will benefit computing students and resolve issues where necessary. Need someone who takes action, takes care but most importantly listens? Vote for me and let me represent you."
            },
            {
                "name": "Tran Phuoc My",
                "role": "NUSSU EXCO Representative",
                "course": "Year 1 / Computer Science",
                "manifesto": "“If you don’t speak up, others will; and you won’t like what they say”<br><br>People are silent not because they are lazy or indifferent, but because they care too much: they once shouted, yet their voices went unheard, and they went silent out of frustration.<br><br>I can’t be your voice, but only a loudspeaker.<br><br>If elected, I promise two things: one boring and one loud.<br><br><ul style=\"padding-left:1em\"><li>Maintain and improve the mundane stuff: shuttle buses, food quality and prices, venue usage/crowding, printing services, and free welfare stationeries.</li><li>Push to add 3 new NUSSU EXCO Office positions for: International Student (IS) Affairs, Data Analytics, and Student Inquiry.</li></ul><br><br>The reasoning:<br><br><ul style=\"padding-left:1em\"><li>Everyone needs and likes them.</li><li>25% of Undergraduates are International; Data runs the world; and NUSSU should listen more actively, instead of asking students to actively speak.</li></ul><br><br>In exchange: lend me your vote; and in due time, lend me your voice."
            }
            //,
            // {
            //     "name": "Neil Gupta",
            //     "role": "NUSSU EXCO Representative",
            //     "course": "Year 4 / Computer Science",
            //     "manifesto": "Hey! I am Neil, A year 4 Computer Science Student and I am running for the NUSSU EXCO representative position in the upcoming 25th Management Committee Elections under Computing Club. I have 2 goals in mind for the 2 roles that I wish to fulfil in my term should you choose to vote for me. My first goal is through that of a representative for Computing Club, in which I want to ensure that Computing Club students’ voices are heard throughout NUS. The second role I want to pursue is that of the Welfare Secretary and my goal for this role is to enable all NUS students to adjust back to pre-covid university times. Through my role as a welfare secretary I wish to work together with NUS Offices to ensure a smooth transition through this period."
            // }
        ]
    }

    const presBox = document.getElementById("pwing-box")
    const externalBox = document.getElementById("external-box")
    const internalBox = document.getElementById("internal-box")
    const stddevBox = document.getElementById("stddev-box")
    const stdlifeBox = document.getElementById("stdlife-box")
    const nussuBox = document.getElementById("nussu-box")

    const locations = {
        "Presidency": presBox,
        "External Relations": externalBox,
        "Internal Relations": internalBox,
        "Student Development": stddevBox,
        "Student Life": stdlifeBox,
        "NUSSU EXCO Representative": nussuBox,
    }

    function createCard(container, name, position, course, manifesto) {
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

        var nominee_div = document.createElement("div")
        nominee_div.classList += "nominee-div"
        var nominee_title = document.createElement("p")
        nominee_title.innerHTML = "Nominee"
        nominee_title.classList += "nominee-title"
        nominee_div.appendChild(nominee_title)

        var cardImgCont = document.createElement("div")
        cardImgCont.classList += "wing-pic-cont"
        var cardImage = document.createElement("img")
        cardImage.classList += "card-pic"
        cardImage.src = "./assets/elections/candidates/" + name.replace(/ +/g, "").replace(",", "") + ".jpg"
        // cardImage.src = "./assets/RaveenPrabhu.jpg"
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

        card.appendChild(nominee_div)
        card.appendChild(cardImgCont)
        card.appendChild(details)

        if (name.length > 0) {
            card.addEventListener("click", () => {
                // window.open(url, '_blank');
                var popup = document.getElementById("card-popup");

                var popupImg = document.getElementById("card-popup-img");
                popupImg.src = "./assets/elections/candidates/" + name.replace(/ +/g, "").replace(",", "") + ".jpg"
                // popupImg.src = "./assets/RaveenPrabhu.jpg"

                var popupName = document.getElementById("card-popup-name");
                var popupCourse = document.getElementById("card-popup-course");
                var popupRole = document.getElementById("card-popup-role");
                var popupManifesto = document.getElementById("card-popup-manifesto");

                popupName.innerHTML = name;
                popupCourse.innerHTML = course;
                popupRole.innerHTML = position;
                popupManifesto.innerHTML = manifesto;

                popup.style.display = "block";
                popup.scrollTop = 0;
            })
        }

        container.append(card)
    }


    for (const [key, loc] of Object.entries(locations)) {
        var members = PEOPLE[key]
        for (var i = 0; i < members.length; i++) {
            var name = members[i]["name"]
            var role = members[i]["role"]
            var course = members[i]["course"]
            var manifesto = members[i]["manifesto"]
            createCard(loc, name, role, course, manifesto)
        }
    }

    // const toggleFOPButton = document.getElementById('toggle-fop-banner')
    // const fopBanner = document.getElementById('fop-banner')

    // toggleFOPButton.addEventListener("click", () => {
    //     fopBanner.style.display = "none"
    // })


    // Get the modal
    var popup = document.getElementById("card-popup");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        popup.style.display = "none";
    }

    var close_button = document.getElementById("close-web");
    close_button.onclick = function () {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        console.log("Close popup")
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
})