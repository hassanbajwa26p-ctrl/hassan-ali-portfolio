export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: 'Ideas to Build' | 'In Prototyping' | 'Active Development' | 'Completed';
  summary: string;
  problem: string;
  approach: string;
  stack: string[];
  imagePath: string;
  githubUrl: string; // placeholder or real link
  demoUrl: string;   // placeholder or real link
  isIdea: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Software & Core CS' | 'Machine Learning & AI' | 'AI Applications & Tools' | 'Product, Growth & Soft Skills';
  status: 'Active Daily Study' | 'Developing Hands-On' | 'Fundamental Focus';
  description: string;
  keyTopics: string[];
}

export interface RoadmapPillar {
  number: string;
  title: string;
  subtitle: string;
  importance: string;
  plannedTopics: string[];
  learningResources: string[];
  status: 'Next in Curriculum' | 'Under Active Study' | 'Planned Phase';
}

export interface GoalStep {
  step: number;
  title: string;
  timeframe: string;
  focus: string;
  description: string;
  status: 'In Active Progress' | 'Upcoming Focus' | 'Future Horizon';
}

export interface JourneyStage {
  id: string;
  phase: string;
  title: string;
  status: 'Current Focus' | 'In Progress' | 'Next Step' | 'Future Ambition';
  period: string;
  summary: string;
  achievements: string[];
}

export const INITIAL_PROFILE = {
  name: "Hassan Ali",
  headline: "Aspiring AI Engineer | AI Student | Future Tech Founder",
  email: "hassanbajwa26p@gmail.com",
  location: "Open to Worldwide Remote & Tech Hub Opportunities",
  educationStatus: "Undergraduate AI / Computer Science Student",
  githubUrl: "https://github.com/hassanali-ai-placeholder",
  linkedinUrl: "https://linkedin.com/in/hassanali-placeholder",
  twitterUrl: "https://x.com/hassanali_placeholder",
  kaggleUrl: "https://kaggle.com/hassanali_placeholder",
  bioShort: "AI student dedicated to learning machine learning engineering, building reliable software systems, and growing into an expert programmer and technology founder.",
  bioFull: "I am an AI student passionate about understanding how intelligent systems work from first principles. Rather than relying on superficial hype, my focus is on building deep foundations in programming, algorithms, machine learning mathematics, and system design. My aim is to become a high-impact AI Engineer in the tech industry and eventually build a venture solving meaningful real-world challenges."
};

export const INITIAL_GOALS: GoalStep[] = [
  {
    step: 1,
    title: "Strong Foundations in CS & Programming",
    timeframe: "Ongoing Foundation",
    focus: "Data Structures, Algorithms, Python & Software Engineering",
    description: "Master computer science fundamentals, clean code patterns, algorithmic problem-solving, and robust software architecture.",
    status: "In Active Progress"
  },
  {
    step: 2,
    title: "Practical AI & Machine Learning by Building",
    timeframe: "Current Sprint",
    focus: "Deep Learning, PyTorch, Model Evaluation & LLM Applications",
    description: "Move from theoretical comprehension to hands-on models: cleaning datasets, training neural networks, evaluating metrics, and deploying APIs.",
    status: "In Active Progress"
  },
  {
    step: 3,
    title: "Industry Collaboration & Product Readiness",
    timeframe: "Next Milestone",
    focus: "Git Workflows, CI/CD, Technical Communication & Cross-functional Sync",
    description: "Learn how modern engineering teams build production systems: version control discipline, automated testing, API documentation, and agile teamwork.",
    status: "Upcoming Focus"
  },
  {
    step: 4,
    title: "Professional Experience in Tech Sector",
    timeframe: "Mid-Term Goal",
    focus: "AI Engineering Roles, Internships & Applied Research",
    description: "Contribute to real engineering teams, solve production-scale data problems, and learn directly from experienced senior software and ML engineers.",
    status: "Upcoming Focus"
  },
  {
    step: 5,
    title: "Launch a Tech Startup Solving Real Problems",
    timeframe: "Long-Term Vision",
    focus: "User Discovery, Lean Prototyping & AI Product Innovation",
    description: "Combine technical AI capability with product thinking and digital marketing to build a sustainable technology company that solves authentic human pain points.",
    status: "Future Horizon"
  }
];

export const INITIAL_SKILLS: SkillItem[] = [
  {
    name: "Programming & Software Development",
    category: "Software & Core CS",
    status: "Active Daily Study",
    description: "Writing clean, modular, and maintainable code adhering to software engineering best practices.",
    keyTopics: ["Object-Oriented Programming", "Modular Architecture", "Refactoring", "Clean Code Principles"]
  },
  {
    name: "Python & Data Structures / Algorithms",
    category: "Software & Core CS",
    status: "Active Daily Study",
    description: "Solving algorithmic problems with optimal space and time complexities using Python.",
    keyTopics: ["Arrays & Hashmaps", "Trees & Graphs", "Dynamic Programming", "Big-O Time/Space Complexity"]
  },
  {
    name: "Machine Learning & Deep Learning",
    category: "Machine Learning & AI",
    status: "Developing Hands-On",
    description: "Studying supervised/unsupervised algorithms, neural networks, loss optimization, and gradient descent.",
    keyTopics: ["Linear & Logistic Regression", "Feedforward Networks", "PyTorch Basics", "Backpropagation"]
  },
  {
    name: "Generative AI & Large Language Models",
    category: "Machine Learning & AI",
    status: "Developing Hands-On",
    description: "Understanding Transformer architectures, attention mechanisms, tokenization, and vector embeddings.",
    keyTopics: ["Self-Attention Mechanics", "RAG (Retrieval-Augmented Generation)", "Fine-Tuning Concepts", "Context Management"]
  },
  {
    name: "Data Analysis & Visualization",
    category: "Machine Learning & AI",
    status: "Developing Hands-On",
    description: "Inspecting, cleaning, and visualizing real-world tabular data to extract actionable statistical patterns.",
    keyTopics: ["Pandas & NumPy", "Matplotlib & Seaborn", "Feature Scaling", "Outlier Treatment"]
  },
  {
    name: "Prompt Engineering & AI Application Dev",
    category: "AI Applications & Tools",
    status: "Developing Hands-On",
    description: "Designing reliable structured prompts, multi-step chains, tool integrations, and AI system evaluation.",
    keyTopics: ["Few-Shot Prompting", "Chain-of-Thought (CoT)", "JSON Output Validation", "Agent Tool Declarations"]
  },
  {
    name: "Digital Marketing, Content & Analytics",
    category: "Product, Growth & Soft Skills",
    status: "Fundamental Focus",
    description: "Understanding audience intent, technical content creation, organic SEO, and campaign metrics.",
    keyTopics: ["Audience Segmentation", "Data-Driven Content Strategy", "Search Engine Optimization", "Funnel Analytics"]
  },
  {
    name: "Communication, Teamwork & Problem-Solving",
    category: "Product, Growth & Soft Skills",
    status: "Active Daily Study",
    description: "Explaining complex technical concepts clearly, welcoming constructive critique, and collaborative workflows.",
    keyTopics: ["Technical Documentation", "Active Listening", "Problem Decomposition", "Git Collaboration"]
  }
];

export const ROADMAP_PILLARS: RoadmapPillar[] = [
  {
    number: "01",
    title: "Mathematics & Statistics for ML",
    subtitle: "The mathematical backbone of intelligent algorithms",
    importance: "Understanding the math behind loss functions, weight optimization, and probabilistic inferences separates an AI engineer from a simple API wrapper builder.",
    plannedTopics: [
      "Linear Algebra: Matrices, eigenvectors, singular value decomposition (SVD)",
      "Multivariate Calculus: Partial derivatives, gradients, chain rule in backpropagation",
      "Probability & Statistics: Bayes' theorem, standard distributions, hypothesis testing",
      "Optimization: Stochastic Gradient Descent (SGD), Adam, momentum, learning rate schedules"
    ],
    learningResources: [
      "Gilbert Strang's Linear Algebra",
      "3Blue1Brown Essence of Linear Algebra & Calculus",
      "Mathematics for Machine Learning (Deisenroth, Faisal, Ong)"
    ],
    status: "Under Active Study"
  },
  {
    number: "02",
    title: "Data Preparation, Evaluation & Responsible AI",
    subtitle: "High-integrity pipelines and robust model validation",
    importance: "Real-world models fail because of dirty data, data leakage, and flawed evaluation. Learning rigorous testing and ethical guidelines is mandatory.",
    plannedTopics: [
      "Exploratory Data Analysis (EDA) and handling missing values / outliers",
      "Data splitting: Train/Validation/Test stratification and preventing data leakage",
      "Evaluation Metrics: Precision, Recall, F1-Score, ROC-AUC, Mean Squared Error",
      "Responsible AI: Fairness auditing, mitigating demographic bias, explainability"
    ],
    learningResources: [
      "Google Responsible AI Practices",
      "Kaggle Data Preprocessing micro-courses",
      "Scikit-Learn Model Selection & Evaluation documentation"
    ],
    status: "Under Active Study"
  },
  {
    number: "03",
    title: "APIs, Databases, Git, Testing & Deployment",
    subtitle: "Building software that actually runs in production",
    importance: "An AI model is only valuable when integrated into a reliable, well-tested, and secure software system with proper versioning and APIs.",
    plannedTopics: [
      "RESTful API design & async request handling with FastAPI / Express",
      "Relational & Vector databases: PostgreSQL, schema modeling, vector indexing",
      "Git version control: Feature branching, pull requests, conventional commits",
      "Automated testing: Unit tests, edge case assertions, mock fixtures"
    ],
    learningResources: [
      "FastAPI official production guidelines",
      "Pro Git by Scott Chacon",
      "Full Stack Deep Learning Course"
    ],
    status: "Next in Curriculum"
  },
  {
    number: "04",
    title: "Cloud Platforms, MLOps & Monitoring AI Systems",
    subtitle: "Sustaining reliability, scaling, and managing drift",
    importance: "Modern AI engineers ensure models don't degrade over time, deployment latencies remain low, and pipelines scale gracefully on cloud infrastructure.",
    plannedTopics: [
      "Docker containerization for reproducible model environments",
      "Cloud basics: Virtual machines, serverless containers, storage buckets",
      "CI/CD workflows for automated build, lint, and test execution",
      "Model monitoring: Tracking inference latency, data drift, and cost budgeting"
    ],
    learningResources: [
      "Made With ML by Goku Mohandas",
      "Docker & Kubernetes fundamentals",
      "Google Cloud Architecture Framework"
    ],
    status: "Planned Phase"
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Student-Focused AI Study Assistant",
    category: "Generative AI & EdTech",
    status: "Ideas to Build",
    isIdea: true,
    imagePath: "./images/project_ai_study_assistant_1791976167638.jpg",
    summary: "An interactive learning companion designed to turn dense lecture slides and textbook PDFs into structured conceptual summaries, active recall questions, and dynamic mind maps.",
    problem: "University students frequently struggle with cognitive overload when reviewing hundreds of pages of lecture slides, leading to passive re-reading rather than active synthesis.",
    approach: "Utilizing document parsing, vector chunking, and contextual prompting to produce topic-based flashcards, self-quizzing drills, and step-by-step concept explanations.",
    stack: ["Python", "FastAPI", "React", "Vector Embeddings", "LLM APIs"],
    githubUrl: "https://github.com/hassanali-placeholder/ai-study-assistant",
    demoUrl: "https://study-assistant-demo-placeholder.app"
  },
  {
    id: "proj-2",
    title: "ML Exploration on Public Datasets",
    category: "Classical Machine Learning & EDA",
    status: "Ideas to Build",
    isIdea: true,
    imagePath: "./images/project_ml_public_dataset_1791976167509.jpg",
    summary: "An end-to-end data science project demonstrating structured hypothesis testing, data cleaning, feature engineering, and model benchmarking on an open-access Kaggle dataset.",
    problem: "Beginners often jump straight into training complex neural nets without understanding exploratory data analysis, class imbalance, or baseline metric comparisons.",
    approach: "Conducting rigorous EDA, comparing baseline linear/tree models (Random Forest, XGBoost), analyzing confusion matrices, and documenting error analysis.",
    stack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/hassanali-placeholder/ml-public-dataset-benchmark",
    demoUrl: "https://kaggle-analysis-placeholder.org"
  },
  {
    id: "proj-3",
    title: "AI-Powered Content & Analytics Assistant",
    category: "AI & Digital Marketing",
    status: "Ideas to Build",
    isIdea: true,
    imagePath: "./images/project_ai_marketing_analytics_1791976169772.jpg",
    summary: "A practical tool that analyzes marketing copy, assesses clarity and tone, and generates data-backed headlines tailored for specific target audience personas.",
    problem: "Early-stage founders and small creators struggle to craft clear value propositions and understand what headlines resonate with their intended reader demographic.",
    approach: "Building a lightweight dashboard that evaluates copy readability scores, suggests variant hooks, and displays hypothetical audience engagement metrics.",
    stack: ["Python", "TypeScript", "Tailwind CSS", "OpenAI / Gemini API", "FastAPI"],
    githubUrl: "https://github.com/hassanali-placeholder/marketing-analytics-tool",
    demoUrl: "https://marketing-analytics-placeholder.app"
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "stage-1",
    phase: "Phase 1",
    title: "Foundations & Core CS",
    status: "Current Focus",
    period: "Ongoing (Semester 1–2)",
    summary: "Mastering fundamental programming syntax, algorithmic problem solving, calculus, linear algebra, and data structures.",
    achievements: [
      "Consistent Python programming practice solving algorithmic challenges",
      "Understanding object-oriented design and clean code separation",
      "Studying linear algebra, matrix operations, and multivariate derivatives",
      "Learning Git version control and command-line development environments"
    ]
  },
  {
    id: "stage-2",
    phase: "Phase 2",
    title: "Practical AI & Machine Learning Projects",
    status: "In Progress",
    period: "Target: Coming Months",
    summary: "Building hands-on projects, exploring public datasets, training basic neural networks, and creating prototype web applications.",
    achievements: [
      "Implementing baseline regression, classification, and clustering models",
      "Training first neural network models using PyTorch & TensorFlow",
      "Building the Student AI Study Assistant prototype",
      "Publishing documented code repositories and technical write-ups"
    ]
  },
  {
    id: "stage-3",
    phase: "Phase 3",
    title: "Industry Readiness & Collaborative Engineering",
    status: "Next Step",
    period: "Future Milestone",
    summary: "Transitioning from individual learner to production-ready engineer capable of contributing to software and AI teams.",
    achievements: [
      "Contributing to open-source software and collaborating in teams",
      "Mastering Docker containerization, REST APIs, and automated test suites",
      "Securing engineering internships or junior technical roles in tech",
      "Honing technical communication, product empathy, and agile workflows"
    ]
  },
  {
    id: "stage-4",
    phase: "Phase 4",
    title: "Tech Founder & Startup Building",
    status: "Future Ambition",
    period: "Long-Term Horizon",
    summary: "Synthesizing deep AI engineering mastery, digital marketing insights, and customer problem discovery to build an impactful startup.",
    achievements: [
      "Identifying unaddressed industry friction points through user interviews",
      "Architecting scalable, ethical, and defensible AI products",
      "Applying data-driven marketing to achieve product-market fit",
      "Building a dedicated team focused on solving meaningful human challenges"
    ]
  }
];
