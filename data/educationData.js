const educationData = {

    science: {
        availableDegrees: ["Engineering", "BSc", "BCA", "Medical", "Pure Science"],

        engineering: {
            path: "After 10th → Science (PCM) → 12th → Engineering",
            specializations: [
                "Computer Science Engineering",
                "Information Technology",
                "Mechanical Engineering",
                "Civil Engineering",
                "Electronics & Communication",
                "Electrical Engineering"
            ],
            higherStudies: [
                "MTech",
                "MBA",
                "MS (Abroad)",
                "PhD",
                "PG Diploma in Specialized Technologies"
            ],
            careers: [
                "Software Engineer",
                "Mechanical Engineer",
                "Civil Engineer",
                "Data Scientist",
                "Government Engineer",
                "Project Manager"
            ]
        },

        bsc: {
            path: "After 10th → Science → 12th → BSc",
            specializations: [
                "Physics",
                "Chemistry",
                "Mathematics",
                "Biotechnology",
                "Microbiology",
                "Computer Science"
            ],
            higherStudies: [
                "MSc",
                "MBA",
                "MCA",
                "PhD",
                "Research Programs"
            ],
            careers: [
                "Research Scientist",
                "Lab Technician",
                "Professor",
                "Quality Analyst",
                "Data Analyst"
            ]
        },

        bca: {
            path: "After 10th → Science → 12th → BCA",
            specializations: [
                "Software Development",
                "Web Development",
                "Cyber Security",
                "Artificial Intelligence",
                "Data Science"
            ],
            higherStudies: [
                "MCA",
                "MBA IT",
                "MS Computer Science",
                "PhD"
            ],
            careers: [
                "Software Developer",
                "Web Developer",
                "System Analyst",
                "Cyber Security Analyst",
                "App Developer"
            ]
        },

        medical: {
            path: "After 10th → Science (PCB) → 12th → Medical (MBBS/BDS/BAMS)",
            higherStudies: [
                "MD",
                "MS",
                "DM",
                "MCh",
                "Hospital Administration"
            ],
            careers: [
                "Doctor",
                "Surgeon",
                "Dentist",
                "Medical Officer",
                "Hospital Administrator"
            ]
        },

        "pure science": {
            path: "After 10th → Science → 12th → Pure Science",
            specializations: [
                "Theoretical Physics",
                "Astrophysics",
                "Organic Chemistry",
                "Applied Mathematics",
                "Environmental Science"
            ],
            higherStudies: [
                "MSc",
                "PhD",
                "Research Fellowships"
            ],
            careers: [
                "Scientist",
                "Research Analyst",
                "Lab Researcher",
                "Professor"
            ]
        }
    },

    commerce: {
        availableDegrees: ["BCom", "BBA", "BMS", "CA", "BAF", "CS"],

        bcom: {
            path: "After 10th → Commerce → 12th → BCom",
            specializations: [
                "Accounting & Finance",
                "Banking & Insurance",
                "Taxation",
                "Business Management",
                "Economics"
            ],
            higherStudies: [
                "MCom",
                "MBA",
                "CA",
                "CMA",
                "CS"
            ],
            careers: [
                "Accountant",
                "Auditor",
                "Financial Analyst",
                "Tax Consultant",
                "Bank Officer"
            ]
        },

        bba: {
            path: "After 10th → Commerce → 12th → BBA",
            specializations: [
                "Marketing",
                "Finance",
                "Human Resource",
                "International Business",
                "Entrepreneurship"
            ],
            higherStudies: [
                "MBA",
                "PGDM",
                "MMS"
            ],
            careers: [
                "Business Manager",
                "Marketing Executive",
                "HR Manager",
                "Entrepreneur"
            ]
        },

        bms: {
            path: "After 10th → Commerce → 12th → BMS",
            specializations: [
                "Finance",
                "Marketing",
                "Operations",
                "Human Resource"
            ],
            higherStudies: [
                "MBA",
                "PGDM",
                "MMS"
            ],
            careers: [
                "Operations Manager",
                "Business Analyst",
                "Marketing Manager"
            ]
        },

        ca: {
            path: "After 10th → Commerce → CA (Chartered Accountant)",
            higherStudies: [
                "CPA",
                "CFA",
                "Advanced Financial Management"
            ],
            careers: [
                "Chartered Accountant",
                "Auditor",
                "Tax Consultant",
                "Finance Manager"
            ]
        },

        baf: {
            path: "After 10th → Commerce → 12th → BAF",
            specializations: [
                "Accounting",
                "Financial Analysis",
                "Investment Banking"
            ],
            higherStudies: [
                "MBA Finance",
                "MCom",
                "CFA"
            ],
            careers: [
                "Financial Analyst",
                "Investment Banker",
                "Account Executive"
            ]
        },

        cs: {
            path: "After 10th → Commerce → CS (Company Secretary)",
            higherStudies: [
                "LLB",
                "MBA",
                "Corporate Law Specialization"
            ],
            careers: [
                "Company Secretary",
                "Corporate Advisor",
                "Compliance Officer"
            ]
        }
    },

    arts: {
        availableDegrees: ["BA", "BFA", "BJMC", "LLB"],

        ba: {
            path: "After 10th → Arts → 12th → BA",
            specializations: [
                "English",
                "Psychology",
                "Political Science",
                "Sociology",
                "History",
                "Economics"
            ],
            higherStudies: [
                "MA",
                "MBA",
                "LLB",
                "PhD"
            ],
            careers: [
                "Teacher",
                "Civil Services",
                "Journalist",
                "Psychologist",
                "Social Worker"
            ]
        },

        bfa: {
            path: "After 10th → Arts → 12th → BFA",
            specializations: [
                "Painting",
                "Applied Arts",
                "Sculpture",
                "Animation",
                "Visual Communication"
            ],
            higherStudies: [
                "MFA",
                "Animation & VFX",
                "Design Programs"
            ],
            careers: [
                "Graphic Designer",
                "Animator",
                "Art Director",
                "Illustrator"
            ]
        },

        bjmc: {
            path: "After 10th → Arts → 12th → BJMC",
            specializations: [
                "Journalism",
                "Public Relations",
                "Advertising",
                "Digital Media"
            ],
            higherStudies: [
                "MJMC",
                "MBA Media Management",
                "Film Studies"
            ],
            careers: [
                "Journalist",
                "News Reporter",
                "Content Creator",
                "PR Manager",
                "Media Planner"
            ]
        },

        llb: {
            path: "After 10th → Arts → 12th → LLB (5 Year Integrated Law)",
            higherStudies: [
                "LLM",
                "PhD in Law",
                "Judicial Services Preparation"
            ],
            careers: [
                "Advocate",
                "Legal Advisor",
                "Judge (after exams)",
                "Corporate Lawyer",
                "Public Prosecutor"
            ]
        }
    }
};

module.exports = educationData;