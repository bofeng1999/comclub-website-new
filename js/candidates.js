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
                "name": "Jirafe Aditya Vijay",
                "role": "President",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I am Aditya Jirafe, a Year 2 Business Analytics student running for the role of President for Computing Club’s 25th Management Committee. I am a committed and driven person who wants to help provide the Club with the support, resources, and guidance to enact changes that serve in the best interest of SoC. If elected, I aim to foster a closer relationship within the Club and student body to build the Club as an entity of trust and a listening ear. I strive to deepen the communication between the two, so that the Club’s initiatives are better targeted. My experience as the Project Director of Freshmen Orientation Week 2022 has honed my ability to see the big picture and liaise with various stakeholders to agree on a common goal, a skill essential for the President of Computing Club. Thank you."
            },
            {
                "name": "Nguyen Tan Long",
                "role": "President",
                "course": "Year 1 / Computer Science",
                "manifesto": "Life as a computing student is not a walk in the park. Since I struggled with certain decisions in my academic journey, I understand the frustrations of difficulties students might face. Yet, I always wondered if there was someone who could help, someone out there who could get the professors to listen to our feedback. As a student who has been impressed by the computing area and as a leader involved in several dynamic programs, I will do my best to nurture, inspire, transform, and most importantly, prepare our students to be technically-grounded leaders and innovators. I strive to bridge the gap between students and the school, enhance the university life experience, and open up more opportunities beyond the classroom. Please join me on this remarkable journey to bring the School of Computing (SoC) and NUS to the highest heights of glory through our academic and non-academic endeavors."
            },
            {
                "name": "Varsha Ramkumar",
                "role": "General Secretary",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I am Varsha Ramkumar, a Year 2 Business Analytics student running for the role of General Secretary.<br><br>Learning from my experience as a Freshmen Orientation Week Secretary, I would strive to lead by the 3 Cs, <b>communication</b>, <b>collaboration</b>, and <b>community</b>. I would ensure greater communication and collaboration across cells and wings by providing them opportunities to foster and build strong relationships. In turn, this will help to build a strong bonded community that  provides a safe environment for everyone to voice out their opinions. This allows for a more efficient and open team who respects one another and allowing us to move together in our goals as one Computing Club.  With Computing Club playing a huge role in enriching a SOC students' life, this is important to ensure that the overall operation and conduct of the club runs smoothly."
            },
            {
                "name": "Thia Jean Shuen, Summer",
                "role": "General Secretary",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I'm Summer Thia, a Y2 Bza student running for the role of General Secretary. Previously the FOP Deputy Director in Computing Club, I am extremely grateful for the growth, fun and learning experience I have had in the past year. My constant involvement in the club has very much resulted in me growing an attachment towards it and I cannot imagine myself living a Uni life without being a part of it, without contributing towards it . Being more familiar with the workings of Computing Club MC, I strive to utilize my experience and passion to make the club a comfortable and cohesive home and to provide a fulfilling Uni experience to Computing students. I aim to be a reliable and trustworthy companion to the President and the MC, to facilitate the smooth operations of the club and to be the reason why MC members are motivated to fulfill their responsibilities."
            },
            {
                "name": "Chung Yen Yee, Celine",
                "role": "Deputy General Secretary",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I'm Celine Chung and I hope to empower the 25th MC to serve SoC at its best! I am running for Deputy General Secretary because I believe that people are happiest and most motivated when they feel a sense of belonging to the clubs that they serve (not to mention, of course, my undying love for admin work and unparalleled organizational skills;-)). As Deputy General Secretary, I hope to 1) enable all MC members to find community in Com Club, making every member feel like they have a place in the club, and 2) support them in their duties by keeping all behind-the-scenes work running smoothly so that they can focus on their key responsibilities! So… vote for me for a happy, healthy, well-fed Com Club family that does their best for SoC (and more importantly, to let me fulfill my admin work fantasies)."
            },
            {
                "name": "Tan Qin Xu",
                "role": "Operations Secretary",
                "course": "Year 1 / Computer Science",
                "manifesto": "With the gradual easing of Covid-19 measures, NUS witnesses its student life resuming back to pre-covid times. From the return of physical Freshman Orientation Week to the annual Rag and Flag having its first live audience in years, there are no doubt more exciting events planned for the school in the academic year.<br><br>My job as the Operations Secretary is to serve as the backbone of all the events held by the club, anchoring down resources needed to make the events successful ones, as well as the liaison between the different projects and the school staff.<br><br>I will work to ensure that every event is well-planned out and the welfare of the student population is not compromised due to our oversight. I will go down to the details of every event to ensure that they are well backed up with contingency plans.<br><br>My priority is people. My priority is you."
            },
            {
                "name": "Merrick Neo Kai Jie",
                "role": "Operations Secretary",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hi! My name is Merrick and I am running for the position of Operations Secretary. The Operations Secretary role being a new position introduced this year, I felt that my prior experience as the Director of Student Engagement in the 24th MC would serve me well as to enhance the operational capabilities of the club. As the Operations Secretary, my goal would be to strengthen the logistical and operational needs of the club and effectively support the various initiatives the 25th MC will bring to the student body.<br><br>Do remember to give me your as I promise to do my utmost to bolster the club's processes and enrich the student experience in SoC."
            },
            {
                "name": "Ting Yong Shen Amos",
                "role": "Operations Secretary",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hi, I am Amos Ting, Y2 Computer Science student and I will be running for role of Operations Secretary in the upcoming 25th Management Committee Elections. With my extensive background in logistics from my experience being the Freshman Orientation Week Logistics Head, I believe that I am the best person to take on this role. Being a logistics head has allowed me to understand the physical and administrative processes behind logistics in SOC. This will undoubtedly be useful when trying to coordinate and establish a Standard Operating Procedure for SOC logistics, which is one of main responsibilities of the Operations Secretary. My experience with the management of logistics and people will also come in handy for the inventorising and maintenance of the SOC store which is also a main responsibility of the Operations Secretary. So vote for Amos, and you will be Famous. Then together we can be Famous Amos!"
            },
            {
                "name": "Li Bo Feng Derrick",
                "role": "Tech Lead",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hi! My name is Derrick, and I am running for the position of Tech Lead in NUS Computing Club. I served  as the Vice Project Director for Freshmen Social Camp for School of Computing and as Deputy Director of  student relations for NUS StartIT. Through my participation in Orbital and other case competitions, I am  confident that I would be able to leverage on my skillsets and experiences to contribute to the role of Tech  Lead.<br><br>As Tech Lead, I promise that I will do my best to ensure that all computing club resources are kept up to  date and strive to initiate improvements whenever possible so that all computing students will be able to  get timely updates through different tech channels. I will also ensure that I do my best to proactively support  everyone in School of Computing by being an individual that you can easily reach out to!"
            },
            {
                "name": "Chen Shun",
                "role": "Tech Lead",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hi!! I'm Chen Shun, a year 2 Computer Science student, running to be your Tech Lead. Since we are all students of computing, we are all tech-savvy individuals and are constantly using some form of technology. As Tech Lead, I would like to create websites or applications for SOC students to use, to better connect computing club with students of our faculty and to integrate technology into our events. I would also like to collaborate with various like-minded individuals with passion for coding to brainstorm and bring to fruition new applications that can benefit our peers. After all, what is a school of computing without programmes created by students!"
            }
        ],
        "External Relations": [
            {
                "name": "Fion Lim Xuan Ning",
                "role": "Vice President",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I am Fion, currently a year 2 BZA student and running for Vice President (External Relations). I am running for VPER because I want to foster more meaningful student engagement and bolster partnerships, be it with other companies, alumni or other organisations. Through my experience with FOPs in 2022, I realized that there was more to be done to guard against companies or external organisations whom may take advantage of students’ information. Hence I decided to run for VPER to ensure the selection of organisations who had expectations and values aligned more closely to SOC’s. Moreover, through thoughtful publicity and establishment of SOC’s image I believe that partnering with external organisations which can bring SOC students greater opportunity is achievable, eliminating the need to sought after companies which may not meet the current needs of SOC students. Ultimately, I envision to better fulfill these needs and create a better SOC."
            },
            {
                "name": "Micaella Deniega Ilagan",
                "role": "Director, Publicity",
                "course": "Year 2 / Information Systems",
                "manifesto": "I am Micaella Deniega Ilagan, a Year 2 Information Systems student, and I am running for the role Director of Publicity in the 25th Computing Club Management Committee (MC). Having been part of many publicity and project committees in my life, I found the ones that let me explore and grow the most in in those in the 24th MC. If given the chance, I will passionately advocate for and encourage creative freedom in the Publicity Cell and create a fun substrate where others may share my fondness and dedication towards design and reaching out to others. I will work with the like-minded individuals of Publicity to continue producing design and publicity work that we as a committee can be proud of. I believe I am the candidate with the experience needed but most importantly the enthusiasm and passion for the area of work that is Publicity."
            }
        ],
        "Internal Relations": [
            {
                "name": "Lek Kai Hin Joshua",
                "role": "Vice President",
                "course": "Year 1 / Information Systems",
                "manifesto": "2 main reasons why you should vote for me:<br>Firstly, I’m pushing for a digital platform for your academic needs. The platform is essentially a large-scale online library for NUS students to access every module’s content, reviews and detailed guides. This will help prevent situations like (1)choosing the wrong module and (2)falling behind in class. (3)It can help you better prepare for exams by having access to past year questions and lectures, and seniors notes or cheat sheets. Think of the platform as a blend of NUSMODS and Canvas, with all resources stored under one centralised system.<br><br>Secondly, you can expect the internal relations department to alleviate your stress. Other than the usual care packages, buzzfeed personality type quizzes will be curated and released weekly for your entertainment. It also serves as an opportunity to improve student engagement."
            },
            {
                "name": "Ivan Chin Yue Ze",
                "role": "Vice President",
                "course": "Year 2 / Business Analytics",
                "manifesto": "Hey, I am Ivan Chin, a Y2 Business Analytics Undergraduate, and I will be running for Vice President (Internal Relations) for the 25th Management Committee. I am someone who serves with his heart and is passionate about giving back to communities. With my experience as an IFG Computing Captain, along with being the Vice Project Director of Freshmen Orientation Week 2022, I believe I am capable in managing as well as setting the direction for the internal relations cell. If elected, I am committed to giving my 100% to make your lives in computing better. Your feedback is important to me and I am willing to push for initiatives to cater to what the student population needs and wants."
            },
            {
                "name": "Koo Jay-Lynn",
                "role": "Director, Welfare",
                "course": "Year 2 / Information Systems",
                "manifesto": "I am running to be your Welfare Director! Being part of Welfare subcomm last AY, I was involved in many welfare activities, ranging from exam welfare packing and distribution to Wellness Carnival. The Welfare Cell’s mission to spread joy and support students’ mental health resonates deeply with me, which is why I would like to take up this role. I am friendly and approachable, so you should not fear approaching me with your issues and concerns. As an empathetic individual, I will listen actively to the concerns and needs of Computing Club members and take new suggestions and ideas into account when coming up with Welfare activities. Furthermore, as someone who values teamwork and working with others, I am committed to working and collaborating with the next Welfare subcommittee and the 26th Management Committee to bring bigger and better things to SoC and create a caring community for all!"
            },
            {
                "name": "Tan Sin Chez, Jaron",
                "role": "Director, Sports",
                "course": "Year 2 / Business Analytics",
                "manifesto": "Hi everyone! I am Tan Sin Chez, Jaron, a Y2 Business Analytics student at NUS. I am running for the position of Computing Club Sports Director as I want to share my passion for sports with the rest of the student body. I understand that computing is a rigorous course and we often neglect our physical health in the pursuit of academic excellence. However, if I were to become the Sports director, I would like to create a community for students with similar interests to band together and play sports together, for students who have not tried to learn any sports before to step out of their comfort zone and find computing a safe space to try something new. I will be looking forward to serve everyone and improve the sports scene in computing by being on the management committee."
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
            {
                "name": "Raman Gupta",
                "role": "Director, Student Engagement",
                "course": "Year 1 / Computer Science",
                "manifesto": "<b><u>My Experience</u></b><br><br>Founder(Quiz Club): remotely organized online team-based quizzes in school when lockdown hit.<br><br>Founder(BizCon): organized physical financial simulation event in school during September 2020 (Phase-2 COVID-Reopening), with 130 participants.<br><br>Secretary(Student-Council): Part of 7-member council core team. Drafted safety plan for resumption of physical school events.<br><br><b><u>My Skills</b></u><br><br>Perceptive & Observant: enables me to understand student needs and integrate their ideas and suggestions into Computing Club. <br><br>Articulate Communicator: helps me be a seamless part of the MC, while also enabling me to raise student issues more effectively.<br><br>Fun & Approachable: Reach out to me anytime with fun ideas for Computing events, bowling plans, or just a friendly game of FIFA!<br><br><b><u>I aspire to…</u></b><br><br>build an interactive and collaborative environment at SoC <b>through</b><br><br><ul style=\"padding-left:1em\"><li>Fun-filled enriching events</li><li>Exciting mass challenges</li><li>Academic and Social Mixers</li><li >Inter-year and Inter-major collaboration opportunities</li></ul><br><br>Vote for <b>STUDENTS</b>. Vote for <b>ENGAGEMENT</b>. Vote for <b>RAMAN</b>! "
            }
        ],
        "NUSSU EXCO Representative": [
            {
                "name": "Ong Hao Yang",
                "role": "NUSSU EXCO Representative",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I am dedicated to serve the SoC population and ensure the welfare of computing students are taken care of. As an exco rep, I will give SoC a voice in NUSSU policies and decisions. I promise to exercise my due diligence and responsibility in pushing for policies that will benefit computing students and resolve issues where necessary. Need someone who takes action, takes care but most importantly listens? Vote for me and let me represent you."
            },
            {
                "name": "Lee Yat Bun",
                "role": "NUSSU EXCO Representative",
                "course": "Year 3 / Computer Science",
                "manifesto": "Hi everyone! I'm Yat Bun, a 3rd year Computer Science student and the current Union President. I am once again running for the position of NUSSU EXCO Representative. Within the Union, I will as the rerun as the President of the Union. Through my current term, I discovered areas of improvements and things to change. However, it took me a significant portion of my term to fully understand and devise solutions for them. Moreover, implementing them will definitely take more than a term in office. Therefore, I look to continue in this position to finish what I have started. During my time in Union, I have also managed to identify other capable members that are as dedicated and driven. Having had experience working in NUSSU, I am confident that we would be able to form a good team that will be able to achieve what we set out to do."
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