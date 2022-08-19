document.addEventListener('DOMContentLoaded', () => {
    console.log("app loaded")

    const PEOPLE = {
        "Presidency": [
            {
                "name": "Tan Matthew Simon Castaneda",
                "role": "President",
                "course": "Year 2 / Computer Science",
                "manifesto": "Engagement and inclusivity are buzzwords we hear all the time.<br><br>But all this cannot be put in place without the proper internal systems.<br><br>My overall objectives during my term as president would be achieved in 2 phases. The first phase would be to optimize/automate internal processes. This will include tapping on our existing student body, both to provide novice programmers with simple projects that they could achieve, and to increase their engagement with Computing Club. The second will be to continue the inter-cell communications already established by the outgoing 24th MC.<br><br>The next phase would be to streamline initiatives to target the student’s needs more. Any initiative should be one that was demanded by the student population, even implicitly. On the inclusivity aspect, I believe that social events on a large scale should not stop at orientation. Stay tuned for what is going to be my pet event : <b>discoTECH</b>!!!!"
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
                "name": "Ng Zheng Han Javian",
                "role": "Vice President",
                "course": "Year 1 / Business Analytics",
                "manifesto": "My name is Javian Ng, a year 1 Business Analytics student with a passion to lead, and to build audiences through specific narratives and public interest.<br><br>Having the experience of leading teams and networking with companies, I believe that I can best serve this club and the student body as Vice President of External Relations.<br><ul style=\"padding-left:1em\"><li>Converge and promote student’s interest and involvement in Computing Club activities while portraying a positive image.</li><li>Promote the existence of Computing Club by enhancing our brand, attracting more sponsorships which translates to increased welfare to be used for giveaways as publicity material.</li><li>To enforce better outreach and create a stronger graduating community. </li><li>Initiate new partnerships with different stakeholders which also contributes to the value add of Computing Club in different dimensions.</li><li>Engage in public media through our various activities or conferences to broaden our online outreach and enhance our online presence.</li><ul style=\"padding-left:1em\"><li>Creating a strong sense of identity</li><li>Promoting student interest</li><li>Forging bonds with corporate</li></ul>"
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
                "name": "Goh Pei Shan, Tricia",
                "role": "Vice President",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hi, I'm Tricia, and I am running for Vice President Internal Relations. Having been in the 24th management committee as the FOP Director, I have grown attached to SoC and would like to continue to serve the computing student body. I will strive to instil a sense of pride and identity in the computing student body. Through listening to feedback, the internal relations wing will provide welfare and sports events tailor-made with Computing students in mind. Besides tangible welfare such as welfare packs and refreshments, we will provide free and fun workshops such as clay making etc. for students to unwind from their hectic computing workload. For Sports, we will strive to ensure that our student-athletes are given the support they need to excel. Furthermore, allow computing students to step out of their comfort zone to try out sports through our sports clinics. Vote Tricia for VPIR, be Happy :)"
            },
            {
                "name": "Ivan Chin Yue Ze",
                "role": "Vice President",
                "course": "Year 2 / Business Analytics",
                "manifesto": "Hey, I am Ivan Chin, a Y2 Business Analytics Undergraduate, and I will be running for Vice President (Internal Relations) for the 25th Management Committee. I am someone who serves with his heart and is passionate about giving back to communities. With my experience as an IFG Computing Captain, along with being the Vice Project Director of Freshmen Orientation Week 2022, I believe I am capable in managing as well as setting the direction for the internal relations cell. If elected, I am committed to giving my 100% to make your lives in computing better. Your feedback is important to me and I am willing to push for initiatives to cater to what the student population needs and wants."
            },
            {
                "name": "He Ruoqing, Vivien",
                "role": "Director, Sports",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hello! I am Vivien, a year 2 computer science student, with a passion for sports. As NUS has given me the opportunity to try a variety of sports, I want to give back by planning many more sports events for SOC students. I would like to make our faculty more active and vibrant, and give everyone the opportunity to make new friends, through sports. Especially since everyone is now returning to school, and many have missed the chance to participate in school events, it is important to plan more events that can reach out to all students, enriching student life and also our physical wellbeing! I will do my best to plan and liaise with everyone to roll out some enjoyable events and I hope everyone will get the opportunity to try out some new sports and also meet some new people!"
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
                "name": "Jody Tng Jin Zi",
                "role": "Vice President",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I'm Jody Tng, a Y2 Business Analytics Student and I will be running for Vice-President (Student Development) in the upcoming elections.<br><br>If elected, my plans for the term are:<br><br><ol style=\"padding-left:1em\"><li>Continue working on the existing projects, and in particular aim for double gold awards for Rag and Flag 2023.</li><li>Continue the development on new initiatives such as Pilot projects from the Academic Liaison cell.</li><li> Connect with the student populace and encourage more students to take part in our initiatives. </li><li> Coordinate and work with the various publicity heads to have a centralised platform to publicise the student development cell initiatives. </li></ol><br>As the Flag Project Director in the previous academic year, with the leadership and decision-making skills picked up, I believe this makes me an ideal candidate. <br><br>Thank you for reading my manifesto and feel free to contact me to ask questions about my plans via telegram @jodytng."
            },
            {
                "name": "Ong Jin Xiang, Bryan",
                "role": "Director, Academic Liaison",
                "course": "Year 2 / Computer Science",
                "manifesto": "Vision: Creating a bridge between students and academic opportunities & development<br>Key Focus Areas: Academic opportunities & development<br><br>Manifesto:<br><ol style=\"padding-left:1em\"><li><b>Ease of access to academic opportunities</b><br>I aim to create a system / platform for students to readily look up any upcoming academic events like hackathons / workshops and career talks at a single glance. This will supplement the traditional email blasts</li><li>Internship Opportunities<br>I pledge to do my upmost best to bring in tech experts & hiring managers from top companies. This provides students with opportunities to put themselves out there.</li><li>Lifehack / Careerlaunch pad<br>I will be focusing on the student’s development in these 2 events. For career launchpad, I will ideate through a rigid curriculum that educates students on the necessary skills for the computing industry. For Lifehack, I will continue the hackathon with a new theme, exciting competition & better ideas.</li></ol>"
            },
            {
                "name": "Tabriz Pahlavi",
                "role": "Deputy Director, Academic Liaison",
                "course": "Year 2 / Computer Science",
                "manifesto": "What does academics in SoC entail? Academics in SoC to me is one that is enriching - it is challenging yourself, value-adding to yourself, improving yourself and ultimately emerging a better version of yourself. This is the experience I hope to deliver to the students of SoC as the Vice President of Academic Liaison. <br><br>In order to do so, I strive to organize activities like hackathons and software engineering projects that will help students better themselves. These activities should not only better our students on a technical level, but also ignite their passion for technology.<br><br>I also believe academic life in SoC should not be a lonely one. I will bring students together and facilitate the forging of friendships between them. While my activities aim to nurture students, helping students grow together an aspect that I will focus on."
            }
        ],
        "Student Life": [
            {
                "name": "Andre Heng Zhe Hau",
                "role": "Vice President",
                "course": "Year 2 / Information Systems",
                "manifesto": "Hello Friends of SOC, I am Andre Heng a Year 2 Information Systems Student, and I will be running for Vice President (Student Life) in the Computing Club 25th MC.<br><br>Having been part of the FOW 2022 O’Comm, I had the wonderful opportunity to interact and connect with many wonderful and interesting people from SOC. This lovely experience has ignited my desire to serve the Computing Community within NUS.<br><br>I am filled with gratitude and thanks for those who have given me the opportunity to share, learn and grow.<br><br>Below you will find my Mission, Vision and Value for the Student Life wing.<br><br>Mission: Create Opportunities for all SOC members to bond and connect.<br>Vision: To create a strong and united SOC family.<br>Value: Be brave.<br><br>With that, I humbly seek your vote of confidence to be given the opportunity to become your Vice president of Student Life."
            },
            {
                "name": "Pearlyn Liu Xiaoxuan",
                "role": "Vice President",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I am Pearlyn and I was the RAG Vice-Project Director of AY21/22. I was also involved in the Freshmen Social Camp as a House-head and the Freshmen Orientation Week as an Orientation Group Leader. Through the orientation programs, I have witnessed many of the freshmen who seemed hesitant to open up to others when they first entered the School of Computing, and it was very heartening to see that most of them still make the effort to keep in contact with their new friends and make the most of their student life. I really enjoyed being able to help bond with the first-year students and my meaningful interactions with them motivated me to continue contributing to the school by playing a supportive role in the student life of SoC as a Vice President. Vote for PEARLyn and let the world be your oyster!"
            },
            {
                "name": "Chew Yew Keng",
                "role": "Vice President",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hello! I am Yew Keng. I am a Year 2 Computer Science Student, intent on running for the role of Vice President (Student Life).<br><br>I am passionate in organising meaningful and engaging events for my peers; and I will be priviledged to be given the opportunity to do the same for my fellow computing peers! I have prior experience in organising similar events as I have taken up similar roles such as Vice Project Director of BASH, and OGL in eFOP, whilst in NUS. I was also a House Captain in my JC’s Student Council, and the Head of School Spirit in my Secondary School.<br><br>My aspiration is to provide all of you opportunities to be involved in our Student Life events, especially major events such as Orientation, as the SoC freshmen population increases.<br><br>Do me the honours and vote me in to be your next Vice President (Student Life)!"
            },
            {
                "name": "Cheng Deren",
                "role": "Vice President",
                "course": "Year 2 / Computer Science",
                "manifesto": "Hi, I am Cheng Deren, a Y2 Computer Science. I am running for the Vice President (Student Life) of the 25th Management Committee of CompClub.<br><br>With my vast experiences in planning and executing all 3 computing camps, my vision is to make SoC:<br><ul style=\"padding-left:1em\"><li>a place where students staying off-campus need not worry about having no friends nor feeling lonely,</li><li>a place where foreign students feel welcomed and accepted, thus integrating into the computing community,</li><li>a place that celebrates vibrant, fun and enjoyable student lives</li></ul><br>Want to see all these come true, vote me, Deren Cheng for The Real Change. Vote COMrade Cheng for a CompClub change."
            },
            {
                "name": "Seah Zhi Han Mervyn",
                "role": "Vice President",
                "course": "Year 2 / Business Analytics",
                "manifesto": "I am Mervyn Seah, a Year 2 Business Analytics Undergraduate and I am running for Vice President (Student Life) this election.<br><br>VP (SL) has two main priorities -- the Student Engagement and Freshman Orientation Programmes cells. Not only does VP (SL) ensure the events are executed successfully, but they also provide assistance to the Project Directors and their respective Organising Committees. VP (SL) works closely with the MC members and SoC’s advisors in caring for SoC students’ well-being as well. As a member of Computing Club, VP (SL) is crucial in the SoC community and family.<br><br>Running for this role is personal to me, having participated in many of the programmes planned by the Student Life cell. With both first-hand experience in these events and past leadership experiences, I believe that I can excel and am a prime candidate for the VP (SL) position."
            },
            {
                "name": "Rungrawin Chowiwattana",
                "role": "Director, Freshmen Orientation Project",
                "course": "Year 3 / Computer Science",
                "manifesto": "Coming to Singapore just 3 weeks ago, without any friends and knowing how life was, I found the immense importance of all Freshmen Orientation Projects. I understand all the uneasiness as both a freshman and an international student. I am willing to help all the freshmen feel at ease in a new environment and reassure any worries they have. Not only will I create bonds between the freshmen, but also promote interactions between the freshmen and seniors while being the voice of international students.<br><br>Lastly, I value communities and interactions. My important life lessons always come from interacting with people. And I am sure that I will learn much more from SoC people who are so inspiring. So, adapting all the skills I gained from my management experience, I want to create a close-knit community where people are not afraid to voice their opinions and learn from each other."
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
                "name": "Raveen Prahbu",
                "role": "NUSSU EXCO Representative",
                "course": "Year 3 / Computer Science",
                "manifesto": "Hi everyone, Raveen here! Over the past 2 years in Computing Club, as the Director of FOP in Year 1 & The President of the 24th Management Committee in Year 2, I have had the pleasure of interacting with all of you through our events and initiatives. I also had the opportunity to work closely with the school management to address some of the issues you may have experienced. As I approach the end of my term, I want to use all my experience and knowledge to continue serving the Computing population, by representing you and being your voice at NUSSU. I will ensure that you are fairly represented in the union and your interests are safeguarded.<br>\“Always putting you first!\” This is not just a slogan, but also my <b>PROMISE</b> to all of you."
            },
            {
                "name": "Lee Yat Bun",
                "role": "NUSSU EXCO Representative",
                "course": "Year 3 / Computer Science",
                "manifesto": "Hi everyone! I'm Yat Bun, a 3rd year Computer Science student and the current Union President. I am once again running for the position of NUSSU EXCO Representative. Within the Union, I will as the rerun as the President of the Union. Through my current term, I discovered areas of improvements and things to change. However, it took me a significant portion of my term to fully understand and devise solutions for them. Moreover, implementing them will definitely take more than a term in office. Therefore, I look to continue in this position to finish what I have started. During my time in Union, I have also managed to identify other capable members that are as dedicated and driven. Having had experience working in NUSSU, I am confident that we would be able to form a good team that will be able to achieve what we set out to do."
            },
            {
                "name": "Neil Gupta",
                "role": "NUSSU EXCO Representative",
                "course": "Year 4 / Computer Science",
                "manifesto": "Hey! I am Neil, A year 4 Computer Science Student and I am running for the NUSSU EXCO representative position in the upcoming 25th Management Committee Elections under Computing Club. I have 2 goals in mind for the 2 roles that I wish to fulfil in my term should you choose to vote for me. My first goal is through that of a representative for Computing Club, in which I want to ensure that Computing Club students’ voices are heard throughout NUS. The second role I want to pursue is that of the Welfare Secretary and my goal for this role is to enable all NUS students to adjust back to pre-covid university times. Through my role as a welfare secretary I wish to work together with NUS Offices to ensure a smooth transition through this period."
            }
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
                popupRole.innerHTML = role;
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