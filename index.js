const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startProgram() {
console.log("====== HIGHER EDUCATION ROADMAP GENERATOR ======\n");

console.log("Available Streams:");
console.log("1. Science");
console.log("2. Commerce");
console.log("3. Arts");
console.log("----------------------------------");

rl.question("Enter your Stream: ", function(stream) {

    console.log("\n----------------------------------");

    if (stream.toLowerCase() === "science") {

        console.log("Available Degrees in Science:");
        console.log("- engineering");
        console.log("- bsc");
        console.log("- bca");
        console.log("- medical");
        console.log("- pure science");

    } 
    else if (stream.toLowerCase() === "commerce") {

        console.log("Available Degrees in Commerce:");
        console.log("- bcom");
        console.log("- bba");
        console.log("- bms");
        console.log("- ca");
        console.log("- baf");
        console.log("- cs");

    } 
    else if (stream.toLowerCase() === "arts") {

        console.log("Available Degrees in Arts:");
        console.log("- ba");
        console.log("- bfa");
        console.log("- bjmc");
        console.log("- llb");

    } 
    else {
        console.log("Invalid Stream Selected.");
        startProgram();
        return;
    }

    console.log("----------------------------------");

    

    rl.question("Enter your Degree: ", function(degree) {

        console.log("\nStream:", stream);
        console.log("Degree:", degree);
        console.log("--------------------------------------------------");

        if (stream.toLowerCase() === "science") {

            switch (degree.toLowerCase()) {

                case "engineering":

                    console.log("After 10th --> Science (PCM) --> Engineering (BTECH/BE)");
                    console.log("\nAvailable Engineering Branches:");
                    console.log("- Computer Science");
                    console.log("- Information Technology");
                    console.log("- Mechanical Engineering");
                    console.log("- Civil Engineering");
                    console.log("- Electronics & Communication");

                    console.log("\nAfter BTech/BE:");
                    console.log("- MTech / MSc");
                    console.log("- MSc Computer Science");
                    console.log("- MSc Data Science");
                    console.log("- MSc Artificial Intelligence");
                    console.log("- MSc Cyber Security");

                    console.log("\nCareer Options:");
                    console.log("- Software Engineer");
                    console.log("- Data Scientist");
                    console.log("- AI Engineer");
                    console.log("- Systems Analyst");
                    console.log("- Government Scientist (ISRO/DRDO/BARC)");
                    console.log("- Research Scientist");
                    console.log("- Professor / Lecturer");
                    console.log("- Quantitative Analyst");
                    break;

                case "bsc":

                    console.log("Available BSc Fields:");
                    console.log("- Physics");
                    console.log("- Chemistry");
                    console.log("- Mathematics");
                    console.log("- Computer Science");

                    console.log("\nAfter BSc:");
                    console.log("- MSc Physics / Chemistry / Mathematics");
                    console.log("- MSc Computer Science");

                    console.log("\nCareer Options:");
                    console.log("- Software Engineer");
                    console.log("- Data Scientist");
                    console.log("- AI Engineer");
                    console.log("- Systems Analyst");
                    console.log("- Government Scientist (ISRO/DRDO/BARC)");
                    console.log("- Research Scientist");
                    console.log("- Professor / Lecturer");
                    console.log("- Quantitative Analyst");
                    break;

                case "bca":

                    console.log("Higher Study Options After BCA:");
                    console.log("- MCA");
                    console.log("- MTech (Computer Science / IT)");
                    console.log("- PhD in Computer Science");
                    console.log("- MSc Data Science");
                    console.log("- MSc Cybersecurity");
                    console.log("- MBA (IT Management)");
                    console.log("- MBA (Business Analytics)");

                    console.log("\nCareer Options:");
                    console.log("- Software Engineer");
                    console.log("- Data Scientist");
                    console.log("- AIML Engineer");
                    console.log("- Systems Analyst");
                    console.log("- Government Scientist (ISRO/DRDO/BARC)");
                    console.log("- Database Administrator");
                    console.log("- Network Administrator");
                    console.log("- Cybersecurity Specialist");
                    break;

                case "medical":

                    console.log("After 10th --> Science (PCB) --> Medical Field");

                    console.log("\nAvailable Courses:");
                    console.log("- MBBS");
                    console.log("- BDS");
                    console.log("- BSc Nursing");
                    console.log("- B.Pharm");

                    console.log("\nMasters Options:");
                    console.log("For MBBS:");
                    console.log("- MD");
                    console.log("- MS");
                    console.log("- DNB");
                    console.log("- MPH");

                    console.log("For BDS:");
                    console.log("- MDS (Master of Dental Surgery)");
                    console.log("- MBA (Hospital Management)");

                    console.log("For BSc Nursing:");
                    console.log("- MSc Nursing");
                    console.log("- MHA (Master of Hospital Administration)");
                    console.log("- MPH");
                    console.log("- MBA Healthcare");

                    console.log("For B-Pharm:");
                    console.log("- M.Pharm");
                    console.log("- Pharm.D");
                    console.log("- MBA (Pharmaceutical Management)");
                    console.log("- MSc Pharmacology");

                    console.log("\nCareer Options:");
                    console.log("- Doctor");
                    console.log("- Surgeon");
                    console.log("- Specialist");
                    console.log("- Medical Professor");
                    console.log("- Dentist");
                    console.log("- ICU Nurse");
                    console.log("- Pharmaceutical Researcher");
                    break;

                case "pure science":

                    console.log("After 10th --> Science (PCM/PCB) --> Pure Science");

                    console.log("\nAvailable Courses:");
                    console.log("- BSc Physics");
                    console.log("- BSc Chemistry");
                    console.log("- BSc Mathematics");
                    console.log("- BSc Statistics");
                    console.log("- BSc Astronomy");
                    console.log("- BSc Geology");
                    console.log("- BSc Environmental Science");
                    console.log("- BSc Biotechnology");

                    console.log("\nHigher Study Options:");
                    console.log("- MSc (Physics / Chemistry / Maths / etc.)");
                    console.log("- Integrated MSc");
                    console.log("- MTech (Specialized Fields)");
                    console.log("- PhD");
                    console.log("- Research Fellowships");
                    console.log("- MSc Data Science (for Maths/Stats students)");

                    console.log("\nCareer Options:");
                    console.log("- Research Scientist");
                    console.log("- Professor / Lecturer");
                    console.log("- Government Scientist (ISRO / DRDO / BARC)");
                    console.log("- Data Analyst");
                    console.log("- Statistician");
                    console.log("- Lab Scientist");
                    console.log("- Environmental Scientist");
                    console.log("- Astronomer");
                    console.log("- Scientific Officer");
                    console.log("- Science Writer");
                    break;

                default:
                    console.log("OOPS!!! No Degree found.");
            }

        }
        else if (stream.toLowerCase() === "commerce") 
        {

        switch (degree.toLowerCase()) {

        case "bcom":

            console.log("After 10th --> Commerce --> " + degree);
            console.log("Bcom --> Accounting & Finance");
            console.log("Bcom --> Banking & Insurance");
            console.log("Bcom --> Financial Markets");
            console.log("Bcom --> Economics");
            console.log("Bcom --> Taxation");
            console.log("Bcom --> Business Management");

            console.log("\nAfter Bcom what to do!!");
            console.log("No worries we have all the options available here!!!!");

            console.log("Higher studies --> Mcom");
            console.log("Higher studies --> MBA");
            console.log("Higher studies --> CA");
            console.log("Higher studies --> Cost & Management Accountant (CMA)");
            console.log("Higher studies --> Company Secretary (CS)");
            console.log("Higher studies --> CFA (Chartered Financial Analyst)");
            console.log("Higher studies --> MFM (Master in Financial Management)");

            console.log("\nCareer option --> Accountant");
            console.log("Career option --> Financial Analyst");
            console.log("Career option --> Auditor");
            console.log("Career option --> Tax Consultant");
            console.log("Career option --> Banking Officer");
            console.log("Career option --> Investment Analyst");
            console.log("Career option --> Finance Manager");
            break;

        case "bba":

            console.log("After 10th --> Commerce --> " + degree);
            console.log("BBA --> Marketing");
            console.log("BBA --> Finance");
            console.log("BBA --> Human resource");
            console.log("BBA --> International Business");
            console.log("BBA --> Opration Management");

            console.log("\nHigher studies --> MBA");
            console.log("Higher studies --> PGDM");
            console.log("Higher studies --> Msc Management");
            console.log("Higher studies --> LLB");
            console.log("Higher studies --> Entrepreneurship Programs");

            console.log("\nCareer option --> Marketing Manager");
            console.log("Career option --> HR Manager");
            console.log("Career option --> Sales Manager");
            console.log("Career option --> Project Manager");
            console.log("Career option --> Entrepreneur / Startup Founder");
            break;

        case "bms":

            console.log("After 10th --> Commerce --> " + degree);
            console.log("BMS --> Marketing");
            console.log("BMS --> Finance");
            console.log("BMS --> Human resource");
            console.log("BMS --> International Business");
            console.log("BMS --> Opration Management");

            console.log("\nHigher studies --> MBA");
            console.log("Higher studies --> PGDM");
            console.log("Higher studies --> Msc Management");
            console.log("Higher studies --> LLB");
            console.log("Higher studies --> Entrepreneurship Programs");
            console.log("Higher studies --> CFA");

            console.log("\nCareer option --> Marketing Manager");
            console.log("Career option --> HR Manager");
            console.log("Career option --> Sales Manager");
            console.log("Career option --> Project Manager");
            console.log("Career option --> Entrepreneur / Startup Founder");
            console.log("Career option --> Strategy Analyst");
            console.log("Career option --> Corporate Executive");
            break;

        case "ca":

            console.log("After 10th --> Commerce --> " + degree);
            console.log("After 10th --> Commerce --> 12th Commerce --> CA (Chartered Accountant)");
            console.log("Level 1 --> CA Foundation");
            console.log("Level 2 --> CA Intermediate");
            console.log("Training --> Articleship (Practical Training)");
            console.log("Level 3 --> CA Final");

            console.log("\nCareer --> Chartered Accountant (Practice)");
            console.log("Career --> Auditor");
            console.log("Career --> Tax Consultant");
            console.log("Career --> Financial Controller");
            console.log("Career --> Chief Financial Officer (CFO)");
            console.log("Career --> Investment Banker");
            console.log("Career --> Finance Manager");
            console.log("Career --> Corporate Advisor");
            break;

        case "baf":

            console.log("After 10th --> Commerce --> 12th Commerce --> BAF (Bachelor of Accounting & Finance)");
            console.log("Focus Area --> Financial Accounting");
            console.log("Focus Area --> Cost Accounting");
            console.log("Focus Area --> Taxation");
            console.log("Focus Area --> Auditing");
            console.log("Focus Area --> Financial Management");
            console.log("Focus Area --> Investment Analysis");

            console.log("\nHigher Studies --> MBA (Finance)");
            console.log("Higher Studies --> MCom");
            console.log("Higher Studies --> CA");
            console.log("Higher Studies --> CMA");
            console.log("Higher Studies --> CFA");
            console.log("Higher Studies --> MSc Finance");
            console.log("Higher Studies --> PGDM in Finance");

            console.log("\nCareer --> Accountant");
            console.log("Career --> Financial Analyst");
            console.log("Career --> Auditor");
            console.log("Career --> Tax Consultant");
            console.log("Career --> Investment Analyst");
            console.log("Career --> Risk Analyst");
            console.log("Career --> Banking Officer");
            console.log("Career --> Finance Executive");
            break;

        case "cs":

            console.log("After 10th --> Commerce --> 12th Commerce --> CS (Company Secretary)");
            console.log("Level 1 --> CS Executive Entrance Test (CSEET)");
            console.log("Level 2 --> CS Executive Programme");
            console.log("Level 3 --> CS Professional Programme");
            console.log("Training --> Practical Training / Internship");

            console.log("\nHigher Studies --> LLB (Corporate Law)");
            console.log("Higher Studies --> MBA (Finance / HR / Business Law)");
            console.log("Higher Studies --> MCom");
            console.log("Higher Studies --> PhD in Commerce / Law");
            console.log("Higher Studies --> International Corporate Governance Programs");

            console.log("\nCareer --> Company Secretary");
            console.log("Career --> Compliance Officer");
            console.log("Career --> Corporate Legal Advisor");
            console.log("Career --> Governance Officer");
            console.log("Career --> Corporate Consultant");
            console.log("Career --> Secretarial Auditor");
            console.log("Career --> Risk & Compliance Manager");
            break;

        default:
            console.log("OOPS!!! No Degree found.");
        }
    }
    else if (stream.toLowerCase() === "arts") 
    {

    switch (degree.toLowerCase()) 
    {

        case "ba":

            console.log("After 10th --> Arts --> 12th Arts --> BA (Bachelor of Arts)");
            console.log("For BA following specializations are available:");

            console.log("Specialization --> English");
            console.log("Specialization --> Psychology");
            console.log("Specialization --> Political Science");
            console.log("Specialization --> Sociology");
            console.log("Specialization --> History");
            console.log("Specialization --> Economics");
            console.log("Specialization --> Journalism & Mass Communication");

            console.log("\nHigher Studies available after BA:");

            console.log("Higher Studies --> MA (Relevant Subject)");
            console.log("Higher Studies --> MBA");
            console.log("Higher Studies --> LLB");
            console.log("Higher Studies --> MSW (Master of Social Work)");
            console.log("Higher Studies --> MPA (Public Administration)");
            console.log("Higher Studies --> PhD");

            console.log("\nCareer Options available after BA:");

            console.log("Career --> Teacher / Professor");
            console.log("Career --> Civil Services (UPSC / State PSC)");
            console.log("Career --> Journalist");
            console.log("Career --> Psychologist");
            console.log("Career --> Social Worker");
            console.log("Career --> Content Writer");
            console.log("Career --> Government Officer");
            break;

        case "bfa":

            console.log("After 10th --> Arts --> 12th Arts --> BFA (Bachelor of Fine Arts)");
            console.log("Specialization --> Painting");
            console.log("Specialization --> Applied Arts");
            console.log("Specialization --> Sculpture");
            console.log("Specialization --> Animation");
            console.log("Specialization --> Visual Communication");

            console.log("\nHigher Studies available after BFA:");

            console.log("Higher Studies --> MFA");
            console.log("Higher Studies --> Animation & VFX Courses");
            console.log("Higher Studies --> Design Programs");

            console.log("\nCareer Options available after BFA:");

            console.log("Career --> Graphic Designer");
            console.log("Career --> Animator");
            console.log("Career --> Art Director");
            console.log("Career --> Illustrator");
            console.log("Career --> Creative Director");
            break;

        case "bjmc":

            console.log("After 10th --> Arts --> 12th Arts --> BJMC");
            console.log("Specialization --> Journalism");
            console.log("Specialization --> Public Relations");
            console.log("Specialization --> Advertising");
            console.log("Specialization --> Digital Media");

            console.log("\nHigher Studies available after BJMC:");

            console.log("Higher Studies --> MJMC");
            console.log("Higher Studies --> MBA Media Management");
            console.log("Higher Studies --> Film Studies");

            console.log("\nCareer Options available after BJMC:");

            console.log("Career --> Journalist");
            console.log("Career --> News Reporter");
            console.log("Career --> Content Creator");
            console.log("Career --> PR Manager");
            console.log("Career --> Media Planner");
            break;

        case "llb":

            console.log("After 10th --> Arts --> 12th Arts --> LLB (5 Year Integrated Law)");

            console.log("\nHigher Studies --> LLM");
            console.log("Higher Studies --> PhD in Law");
            console.log("Higher Studies --> Judicial Services Preparation");

            console.log("\nCareer Options available after LLB:");

            console.log("Career --> Advocate");
            console.log("Career --> Legal Advisor");
            console.log("Career --> Judge (after exams)");
            console.log("Career --> Corporate Lawyer");
            console.log("Career --> Public Prosecutor");
            break;

        default:
            console.log("OOPS!!!,No Degree found");
    }
    }

    else 
        {
            console.log("Currently only Science  commerce & arts stream is supported.");
        }

        rl.question("\nDo you want to try again? (yes/no): ", function(answer) 
        {
            if (answer.toLowerCase() === "yes") 
            {
                console.clear();
                startProgram();   // restart
            } 
            else 
                {
                    console.log("\n====== THANK YOU FOR USING ROADMAP GENERATOR ======");
                    rl.close();
                }
        });

    });

});
}
startProgram();
