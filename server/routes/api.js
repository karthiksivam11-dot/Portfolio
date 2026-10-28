import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Portfolio data (in production, this could come from a database)
const portfolioData = {
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
      category: "Power BI",
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

// GET /api/portfolio - Get all portfolio data
router.get('/portfolio', (req, res) => {
  res.json(portfolioData);
});

// GET /api/health - Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// POST /api/contact - Submit contact form
const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }).withMessage('Name too long'),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 200 }).withMessage('Subject too long'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }).withMessage('Message too long')
];

router.post('/contact', contactValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  // In production, send email or save to database
  console.log('Contact form submission:', { name, email, subject, message });

  res.json({
    success: true,
    message: 'Thank you for your message! I will get back to you soon.'
  });
});

export default router;