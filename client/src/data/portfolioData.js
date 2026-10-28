// Portfolio Data - Single Source of Truth
export const portfolioData = {
  personal: {
    name: "KARTHIK P",
    title: "JUNIOR DATA ANALYST",
    location: "Karur, Tamil Nadu",
    phone: "(91+) 9360094946",
    email: "karthiksivam11@gmail.com",
    linkedin: "https://www.linkedin.com/in/karthik-sivam",
    summary: "Junior Analyst with experience in NLP-based document processing using Amazon Textract (AWS), including data review, validation, and quality checks. Skilled in Python, SQL, Excel, Power BI, Tableau, statistics, and data visualization, with a Power BI project focused on sales performance and profitability analysis. Seeking to apply analytical and reporting skills to support data-driven decision-making in a Data Analyst role."
  },
  skills: {
    "Programming & Querying": ["Python", "SQL"],
    "Data Analysis": ["Data Cleaning", "Data Validation", "Exploratory Data Analysis (EDA)"],
    "Excel": ["PivotTables", "VLOOKUP", "XLOOKUP", "Power Query", "Dashboard and Charts"],
    "Data Visualization": ["Power BI", "Tableau", "KPI Reporting"],
    "Cloud & Document Processing": ["AWS", "Amazon Textract", "Document AI"],
    "Other Software": ["AutoCAD", "Tekla Structures"]
  },
  experience: [
    {
      id: 1,
      title: "Junior Analyst – AWS Project",
      company: "Objectways Technologies",
      location: "Chennai",
      period: "AUG 2024 - Present",
      description: [
        "Supported NLP-based document processing using AWS Amazon Textract and Document AI.",
        "Reviewed and validated extracted data to ensure accuracy, completeness, and quality.",
        "Identified data discrepancies through systematic data quality checks.",
        "Collaborated with team members to meet project quality standards and productivity targets."
      ],
      technologies: ["AWS", "Amazon Textract", "Document AI", "Python", "Data Quality"]
    },
    {
      id: 2,
      title: "Design Engineer Intern",
      company: "AES Private Limited",
      location: "Chennai",
      period: "JUN 2025 - DEC 2025",
      description: [
        "Assisted in mechanical design and drafting using Tekla Structures and AutoCAD.",
        "Prepared technical documentation, design reports, and project records.",
        "Supported project execution through design reviews and team collaboration."
      ],
      technologies: ["Tekla Structures", "AutoCAD", "Technical Documentation", "Mechanical Design"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Sales Performance and Profitability Analysis",
      category: "Power BI Dashboard",
      description: "Cleaned and analyzed retail sales data using Excel, SQL, and Python. Identified sales trends, product profitability, and regional performance through exploratory data analysis. Developed an interactive Power BI dashboard to visualize key performance indicators and business trends. Presented data-driven insights and recommendations to support business decision-making.",
      technologies: ["Power BI", "Excel", "SQL", "Python", "Data Visualization"],
      highlights: [
        "Interactive dashboard with KPI tracking",
        "Sales trend analysis and forecasting",
        "Product profitability insights",
        "Regional performance comparison"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.E Mechanical",
      institution: "KSR Institute for Engineering and Technology, Namakkal",
      period: "2021-2025",
      score: "CGPA: 7.5/10"
    },
    {
      id: 2,
      degree: "HSC",
      institution: "Cheran Matriculation Higher Secondary School, Karur",
      period: "2020-2021",
      score: "Percentage: 79.67%"
    },
    {
      id: 3,
      degree: "SSLC",
      institution: "Cheran Matriculation Higher Secondary School, Karur",
      period: "2018-2019",
      score: "Percentage: 70.00%"
    }
  ],
  certificates: [
    {
      id: 1,
      name: "TCS iON Career Edge – Young Professional",
      issuer: "Tata Consultancy Services (TCS)",
      description: "Completed the Three-month TCS iON Career Edge – Young Professional development course."
    },
    {
      id: 2,
      name: "30 Days MasterClass in Data Analytics",
      issuer: "NoviTech R&D Private Limited",
      description: "Completed the 30 Days MasterClass in Data Analytics offered by NoviTech R&D Private Limited."
    },
    {
      id: 3,
      name: "Design Thinking and Product Design",
      issuer: "SKEP",
      description: "Participated in Design Thinking and Product Design Process workshop conducted by SKEP."
    }
  ]
};

// Skill categories with icons
export const skillIcons = {
  "Programming & Querying": "💻",
  "Data Analysis": "📊",
  "Excel": "📈",
  "Data Visualization": "📉",
  "Cloud & Document Processing": "☁️",
  "Other Software": "🔧"
};

// Tech stack colors for tags
export const techColors = {
  "Python": "#3776AB",
  "SQL": "#4479A1",
  "Data Cleaning": "#FF6B6B",
  "Data Validation": "#4ECDC4",
  "Exploratory Data Analysis (EDA)": "#45B7D1",
  "PivotTables": "#217346",
  "VLOOKUP": "#217346",
  "XLOOKUP": "#217346",
  "Power Query": "#217346",
  "Dashboard and Charts": "#217346",
  "Power BI": "#F2C811",
  "Power BI Dashboard": "#F2C811",
  "Tableau": "#E97627",
  "KPI Reporting": "#FF9F1C",
  "AWS": "#FF9900",
  "Amazon Textract": "#FF9900",
  "Document AI": "#4285F4",
  "AutoCAD": "#E31E24",
  "Tekla Structures": "#0052CC"
};