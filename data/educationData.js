const educationData = {
  Science: {
    engineering: {
      path: "After 10th --> Science (PCM) --> Engineering (BTECH/BE)",
      branches: ["Computer Science", "Information Technology", "Mechanical Engineering", "Civil Engineering", "Electronics & Communication"],
      higherStudies: ["MTech / MSc", "MSc Computer Science", "MSc Data Science", "MSc Artificial Intelligence", "MSc Cyber Security"],
      careers: ["Software Engineer", "Data Scientist", "AI Engineer", "Systems Analyst", "Government Scientist (ISRO/DRDO/BARC)", "Research Scientist", "Professor / Lecturer", "Quantitative Analyst"]
    },
    bsc: {
      path: "After 10th --> Science --> BSc",
      fields: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      higherStudies: ["MSc Physics / Chemistry / Mathematics", "MSc Computer Science"],
      careers: ["Software Engineer", "Data Scientist", "AI Engineer", "Systems Analyst", "Government Scientist (ISRO/DRDO/BARC)", "Research Scientist", "Professor / Lecturer", "Quantitative Analyst"]
    },
    bca: {
      path: "After 10th --> Science --> BCA",
      higherStudies: ["MCA", "MTech (Computer Science / IT)", "PhD in Computer Science", "MSc Data Science", "MSc Cybersecurity", "MBA (IT Management)", "MBA (Business Analytics)"],
      careers: ["Software Engineer", "Data Scientist", "AIML Engineer", "Systems Analyst", "Government Scientist (ISRO/DRDO/BARC)", "Database Administrator", "Network Administrator", "Cybersecurity Specialist"]
    },
    medical: {
      path: "After 10th --> Science (PCB) --> Medical Field",
      courses: ["MBBS", "BDS", "BSc Nursing", "B.Pharm"],
      higherStudies: ["MD / MS / DNB / MPH", "MDS / MBA (Hospital Management)", "MSc Nursing / MHA / MPH / MBA Healthcare", "M.Pharm / Pharm.D / MBA (Pharmaceutical Management) / MSc Pharmacology"],
      careers: ["Doctor", "Surgeon", "Specialist", "Medical Professor", "Dentist", "ICU Nurse", "Pharmaceutical Researcher"]
    },
    "pure science": {
      path: "After 10th --> Science (PCM/PCB) --> Pure Science",
      courses: ["BSc Physics", "BSc Chemistry", "BSc Mathematics", "BSc Statistics", "BSc Astronomy", "BSc Geology", "BSc Environmental Science", "BSc Biotechnology"],
      higherStudies: ["MSc", "Integrated MSc", "MTech", "PhD", "Research Fellowships", "MSc Data Science (for Maths/Stats students)"],
      careers: ["Research Scientist", "Professor / Lecturer", "Government Scientist (ISRO / DRDO / BARC)", "Data Analyst", "Statistician", "Lab Scientist", "Environmental Scientist", "Astronomer", "Scientific Officer", "Science Writer"]
    }
  },
  Commerce: {
    bcom: {
      path: "After 10th --> Commerce --> BCom",
      fields: ["Accounting & Finance", "Banking & Insurance", "Financial Markets", "Economics", "Taxation", "Business Management"],
      higherStudies: ["MCom", "MBA", "CA", "CMA", "CS", "CFA", "MFM"],
      careers: ["Accountant", "Financial Analyst", "Auditor", "Tax Consultant", "Banking Officer", "Investment Analyst", "Finance Manager"]
    },
    bba: {
      path: "After 10th --> Commerce --> BBA",
      fields: ["Marketing", "Finance", "Human Resource", "International Business", "Operation Management"],
      higherStudies: ["MBA", "PGDM", "MSc Management", "LLB", "Entrepreneurship Programs"],
      careers: ["Marketing Manager", "HR Manager", "Sales Manager", "Project Manager", "Entrepreneur / Startup Founder"]
    },
    bms: {
      path: "After 10th --> Commerce --> BMS",
      fields: ["Marketing", "Finance", "Human Resource", "International Business", "Operation Management"],
      higherStudies: ["MBA", "PGDM", "MSc Management", "LLB", "Entrepreneurship Programs", "CFA"],
      careers: ["Marketing Manager", "HR Manager", "Sales Manager", "Project Manager", "Entrepreneur / Startup Founder", "Strategy Analyst", "Corporate Executive"]
    },
    ca: {
      path: "After 10th --> Commerce --> CA",
      levels: ["CA Foundation", "CA Intermediate", "Articleship", "CA Final"],
      careers: ["Chartered Accountant (Practice)", "Auditor", "Tax Consultant", "Financial Controller", "CFO", "Investment Banker", "Finance Manager", "Corporate Advisor"]
    },
    baf: {
      path: "After 10th --> Commerce --> BAF",
      focusAreas: ["Financial Accounting", "Cost Accounting", "Taxation", "Auditing", "Financial Management", "Investment Analysis"],
      higherStudies: ["MBA (Finance)", "MCom", "CA", "CMA", "CFA", "MSc Finance", "PGDM in Finance"],
      careers: ["Accountant", "Financial Analyst", "Auditor", "Tax Consultant", "Investment Analyst", "Risk Analyst", "Banking Officer", "Finance Executive"]
    },
    cs: {
      path: "After 10th --> Commerce --> CS",
      levels: ["CS Executive Entrance Test (CSEET)", "CS Executive Programme", "CS Professional Programme", "Practical Training / Internship"],
      higherStudies: ["LLB (Corporate Law)", "MBA (Finance / HR / Business Law)", "MCom", "PhD in Commerce / Law", "International Corporate Governance Programs"],
      careers: ["Company Secretary", "Compliance Officer", "Corporate Legal Advisor", "Governance Officer", "Corporate Consultant", "Secretarial Auditor", "Risk & Compliance Manager"]
    }
  },
  Arts: {
    ba: {
      path: "After 10th --> Arts --> BA",
      specializations: ["English","Psychology","Political Science","Sociology","History","Economics","Journalism & Mass Communication"],
      higherStudies: ["MA","MBA","LLB","MSW","MPA","PhD"],
      careers: ["Teacher / Professor","Civil Services","Journalist","Psychologist","Social Worker","Content Writer","Government Officer"]
    },
    bfa: {
      path: "After 10th --> Arts --> BFA",
      specializations: ["Painting","Applied Arts","Sculpture","Animation","Visual Communication"],
      higherStudies: ["MFA","Animation & VFX Courses","Design Programs"],
      careers: ["Graphic Designer","Animator","Art Director","Illustrator","Creative Director"]
    },
    bjmc: {
      path: "After 10th --> Arts --> BJMC",
      specializations: ["Journalism","Public Relations","Advertising","Digital Media"],
      higherStudies: ["MJMC","MBA Media Management","Film Studies"],
      careers: ["Journalist","News Reporter","Content Creator","PR Manager","Media Planner"]
    },
    llb: {
      path: "After 10th --> Arts --> LLB",
      higherStudies: ["LLM","PhD in Law","Judicial Services Preparation"],
      careers: ["Advocate","Legal Advisor","Judge","Corporate Lawyer","Public Prosecutor"]
    }
  }
};

module.exports = educationData;