const mongoose = require('mongoose');
require('dotenv').config();
const Project = require('./models/Project');

const projects = [
  {
    title: "Resume Intelligence Screener",
    description: "Engineered a full-stack automated recruitment workspace supporting concurrent multi-file PDF resume uploads via Multer middleware and pdf-parse text extraction.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500",
    githubLink: "https://github.com/rohith0303-rit/resume-screener",
    liveDemoLink: "https://github.com/rohith0303-rit/resume-screener",
    techStack: ["Node.js", "Express.js", "Multer", "pdf-parse"]
  },
  {
    title: "ResQByte",
    description: "Engineering a full-stack web application linking food merchants with consumers using real-time inventory tracking and dynamic closing-time pricing tiers.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500",
    liveDemoLink: "https://drive.google.com/file/d/1XOGWTKyA9EMcOCdARUASCkOPjtHWDjJ2/view",
    githubLink: "https://github.com/rohith0303-rit/resume-screener",
    techStack: ["React.js", "Node.js", "Supabase", "SQL"]
  },
  {
    title: "WedPass (Event Management System)",
    description: "Developed an automated event management platform featuring guest RSVP tracking, QR code security verification, and catering headcount management.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500",
    githubLink: "https://github.com/rohith0303-rit/LOGIN-PAGE",
    liveDemoLink:"https://drive.google.com/file/d/1LFRSQeBVODZRP5qGEa-SiJ0iBrcxAAyB/view?usp=drivesdk",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js"]
  },
  {
    title: "Daily News Curator & Emailer",
    description: "Engineered an automated background utility to ingest and parse multi-category global RSS feeds using feedparser, compiled structured PDF digests via ReportLab, and scheduled cloud execution via GitHub Actions and SMTP.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500",
    githubLink: "https://github.com/rohith0303-rit/tech-curator-bot",
    liveDemoLink : "https://drive.google.com/file/d/1XOGWTKyA9EMcOCdARUASCkOPjtHWDjJ2/view",
    techStack: ["Python", "ReportLab", "GitHub Actions", "SMTP", "feedparser"]
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB Atlas for seeding...');
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('All 4 resume projects seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('Seeding error:', err);
    process.exit(1);
  });