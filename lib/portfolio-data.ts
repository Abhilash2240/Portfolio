export const portfolioData = {
  personal: {
    name:      'Gundelli Abhilash',
    initials:  'GA',
    title:     'Computer Science Undergraduate & AI/ML Developer',
    tagline:   'Building analytical systems, automation frameworks, and data-driven solutions',
    bio:       'Computer Science undergraduate at SR University, Warangal, with hands-on experience in data science, predictive analytics, backend systems, and cloud technologies. Proficient in Python, SQL, ML frameworks, and Azure cloud services — focused on building solutions that surface actionable insights and automate complex workflows.',
    summary:   'I focus on building end-to-end data systems and ML-enabled services: from data ingestion and ETL pipelines, through model training and evaluation, to production orchestration and observability. I enjoy turning ambiguous problems into reliable, testable systems.',
    email:     'abhilashgundelli830@gmail.com',
    phone:     '+91 8309262384',
    location:  'Warangal, Telangana, India',
    github:    '#',
    linkedin:  '#',
    personalSite: 'https://abhilash.dev',
    resumeUrl: '/assets/resume.pdf',
  },

  stats: [
    { label: 'Projects Built',     value: 6,    suffix: '+' },
    { label: 'Certifications',     value: 3,    suffix: ''  },
    { label: 'Technologies',       value: 20,   suffix: '+' },
  ],

  skills: [
    {
      category: 'Languages',
      accent: 'prussianBlue' as const,
      icon: '{ }',
      items: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript', 'Shell Scripting'],
    },
    {
      category: 'ML / AI',
      accent: 'vintageGreen' as const,
      icon: '⊕',
      items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Model Evaluation', 'Feature Engineering'],
    },
    {
      category: 'Cloud / DevOps',
      accent: 'agedGold' as const,
      icon: '☁',
      items: ['Azure (AI + App Services)', 'AWS (core services)', 'Docker', 'Kubernetes (familiar)', 'Git', 'CI/CD'],
    },
    {
      category: 'Data & Systems',
      accent: 'stampRed' as const,
      icon: '▦',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'ElasticSearch', 'REST APIs', 'Microservices', 'Linux', 'ETL Pipelines'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Portfolio Website (this site)',
      year: '2026',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      points: [
        'Designed and migrated the homepage from a Stitch iframe to a native React implementation with accessible sections and smooth anchor navigation.',
        'Implemented responsive navigation with active-section tracking using IntersectionObserver and a mobile drawer with keyboard accessibility.',
        'Added a modular projects and certifications client to fetch and render data from a central `portfolio-data` module.',
      ],
      githubUrl: '#',
      liveUrl: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Adaptive Stock Trading System',
      year: '2025 – Present',
      tags: ['Python', 'SQL', 'ETL'],
      points: [
        'Designed ETL pipelines to ingest and normalise market data from multiple feeds and public sources.',
        'Built a backtesting engine with risk metrics (Sharpe, drawdown) and automated parameter sweeps to evaluate strategies.',
        'Exposed results via dashboards backed by a relational database and scheduled nightly batch jobs.',
      ],
      githubUrl: 'https://github.com/Abhilash2240/Adaptive-Stock-Trading',
      liveUrl: '#',
      github: 'https://github.com/Abhilash2240/Adaptive-Stock-Trading',
    },
    {
      id: 3,
      title: 'AI Agent Automation Framework',
      year: '2024 – Present',
      tags: ['Python', 'Async', 'APIs'],
      points: [
        'Implemented an orchestration layer for multi-step AI agents including retry logic, task routing, and state persistence.',
        'Integrated logging, observability, and a pluggable adapter layer to connect to external services and microservices.',
        'Optimised concurrency using Python async patterns to increase throughput for parallel agent tasks.',
      ],
      githubUrl: 'https://github.com/Abhilash2240/ai-agent',
      liveUrl: '#',
      github: 'https://github.com/Abhilash2240/ai-agent',
    },
  ],

  experience: [
    {
      role:    'AI/ML Educational Program Participant',
      org:     'Google Developers',
      company: 'Google Developers',
      year:    '2024',
      period:  '2024',
      type:    'Program',
      points: [
        'Completed curriculum covering supervised & unsupervised learning including regression, classification and clustering.',
        'Implemented and fine-tuned models using PyTorch and TensorFlow, and evaluated performance using F1-score and ROC-AUC.',
        'Gained hands-on exposure to model deployment and ML engineering best practices.',
      ],
      bullets: [
        'Covered model selection, evaluation metrics, feature engineering, and basic deployment patterns.',
      ],
    },
    {
      role:    'Student Project Lead',
      company: 'SR University',
      year:    '2023 – Present',
      period:  'Ongoing',
      type:    'Academic',
      points: [
        'Led a small team to build full-stack proof-of-concept systems for data ingestion, processing and visualisation.',
        'Collaborated with teammates on design, version control, and testing practices to deliver production-ready demos.',
      ],
      bullets: [
        'Mentored junior contributors on code organisation and testing.',
      ],
    },
  ],

  certifications: [
    {
      name:     'Microsoft Certified – Azure AI Fundamentals',
      initials: 'MS',
      issuer:   'Microsoft',
      desc:     'Azure AI Fundamentals (AI-900) covering core AI concepts and Microsoft Azure services for AI.',
      link:     '#',
      url:      '#',
      color:    'prussianBlue' as const,
    },
    {
      name:     'AWS Academy Graduate – Cloud Foundations',
      initials: 'AWS',
      issuer:   'AWS',
      desc:     'Cloud foundations course covering core cloud concepts and AWS services.',
      link:     '#',
      url:      '#',
      color:    'agedGold' as const,
    },
    {
      name:     'Software Engineering Essentials',
      initials: 'SE',
      issuer:   'IBM / Coursera',
      desc:     'Software engineering fundamentals with practical exercises on testing and collaboration.',
      link:     '#',
      url:      '#',
      color:    'vintageGreen' as const,
    },
  ],

  education: [
    {
      degree:     'B.Tech in Computer Science',
      institution: 'SR University',
      location:    'Warangal, Telangana',
      period:      '2023 – 2027',
      coursework: [
        'Data Structures & Algorithms',
        'DBMS',
        'Operating Systems',
        'Distributed Systems',
        'Machine Learning',
        'Software Engineering',
      ],
      highlights: [
        'Maintained 3+ course projects demonstrating backend APIs, data modelling, and basic ML pipelines.',
      ],
    },
  ],
} as const

export type Skill    = typeof portfolioData.skills[number]
export type Project  = typeof portfolioData.projects[number]
export type Cert     = typeof portfolioData.certifications[number]
