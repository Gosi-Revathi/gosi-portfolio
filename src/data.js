export const NAV = ['Skills', 'Experience', 'Projects', 'Education', 'Contact']

// Place your actual PDF as public/Gosi_Revathi_Resume.pdf for the download button
export const RESUME_URL = '/Gosi_Revathi_Resume.pdf'

export const SKILLS = [
  { icon: '⚙️', cat: 'Languages',      tags: ['Node.js', 'Python', 'Java'] },
  { icon: '🔗', cat: 'Backend',        tags: ['Express.js', 'REST APIs', 'Microservices'] },
  { icon: '🗄️', cat: 'Databases',      tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Sequelize'] },
  { icon: '☁️', cat: 'DevOps & Cloud', tags: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure', 'CI/CD'] },
  { icon: '🔐', cat: 'Security',       tags: ['JWT Auth', 'API Security', 'RBAC'] },
  { icon: '🛠️', cat: 'Tools',          tags: ['Git', 'Linux', 'Postman'] },
]

export const EXPERIENCE = [
  {
    title: 'Backend Developer | Deployment Engineer',
    company: 'E-S-Genius Tech Solutions',
    period: 'Jul 2025 – Present',
    accent: '#00e5ff',
    pts: [
      'Engineered scalable REST APIs using Node.js & Express.js for approval workflows and compliance systems.',
      'Integrated real-time safety alerts using weather, health, and geopolitical advisory APIs.',
      'Built SOS modules and traveler safety features for corporate travel management systems.',
      'Planned and maintained CI/CD pipelines and Docker-based container deployment processes.',
      'Improved backend performance by 32% through API and database query optimization.',
    ],
  },
  {
    title: 'ESG Dashboard',
    company: 'Backend & Deployment Engineer — Company Project',
    period: 'Internal Project',
    accent: '#7c3aed',
    pts: [
      'Established backend modules for emissions, energy, waste, and compliance tracking.',
      'Constructed secure API endpoints using Node.js, PostgreSQL, and Sequelize ORM.',
      'Applied JWT authentication and role-based access control mechanisms.',
      'Automated service containerization and deployment using Docker.',
    ],
  },
]

export const PROJECTS = [
  {
    n: '00',
    title: 'ESG Dashboard',
    desc: 'Full-stack ESG reporting platform with compliance tracking, data entry workflows, and regulatory reporting modules.',
    metric: '🌱 Production App',
    accent: '#10b981',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT', 'Docker', 'REST API'],
    detail: 'Built the complete backend and deployment infrastructure for a production ESG (Environmental, Social, Governance) platform used by corporate clients. The system handles multi-step data entry workflows, compliance document management, regulatory reporting, and role-based access for Super Admin, Company Admin, and Viewer roles.',
    outcome: 'Deployed to production serving real corporate clients. Achieved 32% improvement in API response time through query optimisation. Zero downtime deployments via Docker containerisation.',
    github: null,
    screenshots: [
      { img: '/projects/esg/esg-login.jpg',      caption: 'Login — Role-based access with Super Admin, Company Admin & Viewer roles' },
      { img: '/projects/esg/esg-data-entry.jpg', caption: 'Data Entry — 5-step ESG data collection wizard with GRI Standards framework' },
      { img: '/projects/esg/esg-compliance.jpg', caption: 'Compliance — Document tracking with status indicators (Approved, Pending, Overdue)' },
    ],
  },
  {
    n: '01',
    title: 'AI Healthcare Chatbot',
    desc: 'ML system predicting 50+ diseases with facial recognition and voice authentication.',
    metric: '🧠 50+ Disease Predictions',
    accent: '#00e5ff',
    tech: ['Python', 'Machine Learning', 'OpenCV', 'Voice Auth', 'REST API'],
    detail: 'Built an end-to-end intelligent healthcare assistant predicting 50+ diseases from user-reported symptoms. Integrated OpenCV-based facial recognition and voice authentication to gate access to sensitive health data. The ML model was trained on a curated medical dataset and served via a REST API.',
    outcome: 'Achieved 85%+ symptom-to-disease prediction accuracy. Facial recognition reduced unauthorised access attempts to near zero during testing.',
    github: 'https://github.com/Gosi-Revathi/AI-Chatbot',
  },
  {
    n: '02',
    title: 'E-Commerce Platform',
    desc: 'Full-featured backend with optimised queries for a dramatic performance improvement.',
    metric: '⚡ +40% Performance',
    accent: '#f59e0b',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'JWT'],
    detail: 'Designed and built a complete e-commerce backend including catalogue, cart, order processing and payment flow. Identified N+1 query bottlenecks via profiling, replaced with batch queries and indexed columns. Introduced Redis caching for high-traffic product listing endpoints.',
    outcome: '40% reduction in average API response time. Database query count per request dropped 60% post-optimisation.',
    github: 'https://github.com/Gosi-Revathi/e-commerce-store',
  },
  {
    n: '03',
    title: 'Movie Recommendation System',
    desc: 'Similarity-based recommendation engine with improved prediction accuracy.',
    metric: '🎯 +30% Accuracy',
    accent: '#7c3aed',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Cosine Similarity', 'Flask'],
    detail: 'Hybrid recommendation engine combining content-based filtering (genre, cast, director TF-IDF) with collaborative filtering (user behaviour). Served via a lightweight Flask API with paginated results.',
    outcome: 'Improved recommendation relevance by 30% over the baseline popularity model. Reduced cold-start problem by blending content signals for new users.',
    github: 'https://github.com/Gosi-Revathi',
  },
  {
    n: '04',
    title: 'Bank Management System',
    desc: 'Secure auth module with encrypted transaction processing for financial data safety.',
    metric: '🔒 Encrypted Transactions',
    accent: '#10b981',
    tech: ['Java', 'MySQL', 'AES-256', 'JDBC', 'Swing UI'],
    detail: 'Desktop bank management app with full CRUD for accounts, transactions and customers. AES-256 encryption applied to all financial records. Role-based access ensures tellers cannot reach admin functions. Session timeout enforced after inactivity.',
    outcome: 'Zero plaintext financial data in database. Secure hashed password login with full audit trail on every transaction.',
    github: 'https://github.com/Gosi-Revathi',
  },
]

export const CERTS = [
  { icon: '🐍', name: 'Python Programming',    issuer: 'NPTEL' },
  { icon: '☕', name: 'Java Programming',       issuer: 'NPTEL' },
  { icon: '📊', name: 'Data Analytics',         issuer: 'NASSCOM' },
  { icon: '🚀', name: 'DevOps',                 issuer: 'Seminar Room' },
  { icon: '💻', name: 'Full Stack Development', issuer: 'Seminar Room' },
]

export const STATS = [
  { val: 8.71, dec: 2, suffix: '',  prefix: '',  label: 'MCA CGPA' },
  { val: 32,   dec: 0, suffix: '%', prefix: '+', label: 'API Performance' },
  { val: 4,    dec: 0, suffix: '+', prefix: '',  label: 'Projects Built' },
  { val: 8,    dec: 0, suffix: "",  prefix: "",  label: "Certifications" },
  { val: 2,    dec: 0, suffix: "",  prefix: "",  label: "Awards Won" },
]

export const PUB_ABSTRACT = "Artificial Intelligence is increasingly recognised as a tool that can revolutionise mental healthcare by assisting clinicians in diagnosing, treating, and monitoring psychiatric disorders. This paper explores AI's role in mental healthcare, reviewing current research on diagnostic and therapeutic applications, key challenges, and the emerging concept of artificial wisdom — enabling AI to make ethically and contextually appropriate decisions." 

export const PUB_FINDINGS = [
  { label: 'Depression prediction', value: '85%', note: 'accuracy via ML on patient chat logs' },
  { label: 'Anxiety detection', value: '90%', note: 'accuracy via wearable physiological signals' },
  { label: 'Emotional state classification', value: '80%', note: 'accuracy via NLP on therapy transcripts' },
]

export const PUB_POINTS = [
  'NLP & ML models for early psychiatric disorder detection.',
  'Ethical concerns: algorithmic bias & patient data privacy.',
  'AI-driven personalised treatment & real-time monitoring.',
  'Barriers to clinical adoption & facilitator strategies.',
  'Future: Artificial Wisdom for context-aware AI decisions.',
  'Hybrid AI-human collaboration models for patient care.',
]

export const PUB_KEYWORDS = ['AI in Mental Health', 'NLP', 'Psychiatric Diagnosis', 'Artificial Wisdom', 'Clinical Ethics']

export const LANGUAGES = [
  { name: 'Kannada', level: 'Native',  pct: 100 },
  { name: 'English', level: 'Fluent',  pct: 95  },
  { name: 'Hindi',   level: 'Fluent',  pct: 85  },
]

export const EXTRA = [
  { icon: '🎓', text: 'Volunteered for Campus Placement Drive & College Fest' },
  { icon: '🏆', text: '2nd Prize in Web Development Competition' },
  { icon: '🏅', text: 'Participated in Taluka-level Sports Competitions' },
  { icon: '🎤', text: 'Presented research at National Conferences' },
]

// ── Grouped certifications (Option C layout) ─────────────────────────────────
export const CERT_GROUPS = [
  {
    cat: 'Programming & Development',
    icon: '⚙️',
    items: [
      { name: 'The Joy of Computing using Python', issuer: 'NPTEL Elite — IIT Madras', date: 'Jan–Apr 2025', badge: 'Elite' },
      { name: 'Programming in Java',               issuer: 'NPTEL — IIT Kharagpur',   date: 'Jul–Oct 2024', badge: null },
      { name: 'Full Stack Development',            issuer: 'Seminarroom × Nagarjuna DC', date: 'Aug–Nov 2024', badge: null },
    ],
  },
  {
    cat: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      { name: 'DevOps',                    issuer: 'Seminar Room', date: '2024', badge: null },
    ],
  },
  {
    cat: 'Data & Analytics',
    icon: '📊',
    items: [
      { name: 'Fundamentals of Data Analytics', issuer: 'NASSCOM FutureSkills Prime', date: 'Feb 2025', badge: 'Silver' },
    ],
  },
]

// ── Awards & Honours ─────────────────────────────────────────────────────────
export const AWARDS = [
  {
    title: 'Best Researcher',
    event: 'Samvarthana 2025',
    org: 'Nagarjuna Degree College',
    date: '2025',
    desc: 'Awarded for paper presentation on AI in Mental Health Care Research at the annual academic convocation.',
    icon: '🏅',
    accent: '#f59e0b',
  },
  {
    title: 'Academic Excellence Award',
    event: 'Samvarthana 2025',
    org: 'Nagarjuna Degree College',
    date: '2025',
    desc: 'Recognised for outstanding academic performance in MCA for the academic year 2024–25.',
    icon: '🎓',
    accent: '#00e5ff',
  },
  {
    title: 'Runner-up — Web Designing',
    event: 'NDC Fest 2024',
    org: 'Nagarjuna Degree College',
    date: 'Jun 2024',
    desc: 'Won I/II prize in the Web Designing competition at the Techno, Commerce, Management & Cultural Intra-Collegiate Fest.',
    icon: '🥈',
    accent: '#7c3aed',
  },
  {
    title: 'IT Manager — Volunteer',
    event: 'Prajna Fest 2025',
    org: 'Nagarjuna Degree College',
    date: 'Apr 2025',
    desc: 'Led the IT committee for the intercollegiate fest covering technical, cultural, and live music events.',
    icon: '💼',
    accent: '#10b981',
  },
]

// ── Tech Fest Participations ─────────────────────────────────────────────────
export const PARTICIPATIONS = [
  { event: 'Code Asura', fest: 'APRAMEYA Tech Fest', org: 'NMIT Bengaluru', date: 'Feb 2025' },
  { event: 'Code of Phoenix', fest: 'TECHNIX 6.0', org: 'BMS Institute of Technology', date: 'Feb 2025' },
  { event: 'Code Prodigies', fest: 'TREDGE 2k23', org: 'Shree Medha Degree College', date: 'Jul 2023' },
]
