import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  Cpu,
  Database,
  GraduationCap,
  Briefcase,
  Mail,
  ExternalLink,
  FileText,
  Copy,
  Check,
  X,
  ChevronRight,
  Send,
  Code2,
  Globe,
  ShieldCheck,
  Menu
} from 'lucide-react';

// Custom Brand Icon Components for Build Safety
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Animated Rotating Subtitles
const ROTATING_TITLES = [
  "AI & Machine Learning Engineer",
  "Computer Vision Engineer",
  "Backend Systems Engineer",
  "Full Stack Software Developer"
];

export default function MaterialApplePortfolio() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactEmail = "hrishi03512@gmail.com";

  // Cycle Titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Projects Data
  const projectsData = [
    {
        id: "satellite-segmentation",
        title: "Uncertainty-Aware SegFormer for Satellite Imagery",
        category: "Machine Learning",
        subtitle: "IEEE Research Paper • Remote Sensing & Evidential DL",
        badge: "IEEE Research Paper",
        badgeColor: "bg-blue-500/10 text-blue-600 border-blue-200",
        description: "Designed a single-pass Evidential SegFormer architecture for multi-spectral land cover segmentation on DeepGlobe, achieving 65.81% mIoU with explicit epistemic uncertainty estimation.",
        detailedOverview: "Engineered a Dirichlet-based Evidential Deep Learning (EDL) framework integrated with a hierarchical SegFormer transformer backbone for multi-spectral land cover segmentation. Trained on the DeepGlobe Land Cover benchmark using PyTorch and Rasterio, systematically tuning the KL regularization weight to balance pixel-level classification accuracy against out-of-distribution (OOD) uncertainty calibration.",
        metrics: [
            "Achieved 65.81% mIoU on DeepGlobe Land Cover, outperforming evidential U-Net (53.66%) and Swin (45.94%) baselines.",
            "Delivered a 1.5x inference speedup over Monte Carlo Dropout (12.9s vs 19.9s batch latency) via single-pass Dirichlet logic.",
            "Demonstrated superior failure localization with a 0.506 Spearman Rank Correlation between epistemic uncertainty and pixel errors (vs. 0.350 for MC Dropout).",
            "Achieved 0.725 AUROC on synthetic motion blur corruptions for reliable out-of-distribution (OOD) safety detection."
        ],
        architectureDetails: [
            "Hierarchical SegFormer Transformer Encoder paired with a lightweight All-MLP decoder head",
            "Dirichlet Evidential Loss with KL divergence regularization for single-pass epistemic uncertainty estimation",
            "High-throughput multi-spectral spatial raster parsing and pre-processing pipeline using PyTorch & Rasterio"
        ],
        tech: ["PyTorch", "SegFormer", "Evidential DL", "Rasterio", "DeepGlobe", "Python", "LaTeX"],
        github: "https://github.com/hrishidev1/Transformer-based-satellite-segformer",
        isResearchPaper: true
    },
    // Replace the medq-platform object with this:
    {
        id: "documind-ai",
        title: "DocuMind AI – Enterprise Intelligent Document Processing",
        category: "Backend / Web",
        subtitle: "Intelligent PDF Extraction & Document Pipeline",
        badge: "Full Stack / AI",
        badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
        description: "Architected an intelligent document processing engine that extracts structured schemas from complex PDFs with uncertainty-aware validation.",
        detailedOverview: "DocuMind AI automates multi-page PDF and document ingestion using layout-aware parsing, vector chunking, and asynchronous queue workers. Integrated evidential confidence metrics to automatically route low-confidence extractions to a human-in-the-loop verification interface.",
        metrics: [
            "Sub-2s end-to-end multi-page PDF parsing and structured JSON extraction",
            "High extraction precision on multi-column tables and unstructured PDF layouts",
            "Uncertainty-aware review queue to prevent inaccurate data ingestion into target databases"
        ],
        architectureDetails: [
            "FastAPI & Python backend with asynchronous Celery and Redis workers for PDF ingestion",
            "PostgreSQL persistence with vector indexing for dynamic document search",
            "Glassmorphic React dashboard displaying real-time extraction confidence scores"
        ],
        tech: ["Python", "FastAPI", "React", "PostgreSQL", "Celery", "Redis", "Tailwind CSS"],
        github: "https://github.com"
    },
    {
      id: "enterprise-rag",
      title: "Enterprise RAG & Vector Indexing Search Engine",
      category: "Machine Learning",
      subtitle: "Generative AI & Semantic Retrieval",
      badge: "GenAI & Systems",
      badgeColor: "bg-purple-500/10 text-purple-600 border-purple-200",
      description: "Built a low-latency Retrieval-Augmented Generation (RAG) pipeline leveraging custom vector indexing and semantic context chunking.",
      detailedOverview: "Designed to query massive technical knowledge bases with high precision. Implemented context chunking heuristics, embedding distance metrics, and temperature-constrained LLM inference workflows to ensure zero hallucination in safety-critical retrieval tasks.",
      metrics: [
        "Sub-200ms semantic search query latency",
        "Significant reduction in model hallucination rates under context size constraints",
        "Deterministic JSON API output structure for enterprise ingestion"
      ],
      architectureDetails: [
        "Vector Database indexing with cosine similarity search",
        "Custom overlapping sliding-window semantic chunking pipeline",
        "Temperature-constrained LLM prompt routing logic"
      ],
      tech: ["Python", "Vector Databases", "RAG", "Embeddings", "LLM Orchestration", "FastAPI"],
      github: "https://github.com/hrishidev1/Agent-workflow-engine"
    },
    {
      id: "terrawatch-gis",
      title: "TerraWatch – Geospatial Landslide Analytics",
      category: "Systems & Research",
      subtitle: "GIS & Machine Learning Risk Mapping",
      badge: "Geospatial ML",
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-200",
      description: "Machine learning based susceptibility mapping platform utilizing geospatial rasters, spatial clustering, and interactive 3D visualizations.",
      detailedOverview: "TerraWatch transforms raw satellite elevation and rainfall data into actionable landslide vulnerability hazard maps. Designed with custom raster normalization and clustering logic.",
      metrics: [
        "Processes multi-layer spatial TIFF rasters seamlessly",
        "Interactive 3D vulnerability mapping rendering via Plotly",
        "Applied data-driven risk indexing across terrain gradients"
      ],
      architectureDetails: [
        "Geospatial data extraction using Rasterio and Pandas pipelines",
        "Unsupervised spatial clustering combined with supervised risk classifiers",
        "Plotly interactive web visualizer integration"
      ],
      tech: ["Python", "Rasterio", "Plotly", "NumPy", "Pandas", "Scikit-Learn"],
      github: "https://github.com/hrishidev1/Terrawatch2"
    },
    {
      id: "quantum-cryptography",
      title: "Quantum Cryptography & Protocol Simulator",
      category: "Systems & Research",
      subtitle: "Quantum Key Distribution & Security",
      badge: "Quantum Computing",
      badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
      description: "Simulated quantum key distribution (BB84 protocol) to evaluate eavesdropping detection rates in secure financial transactions.",
      detailedOverview: "Engineered quantum state simulation routines to model photon polarization and basis matching. Demonstrates physical-layer security guarantees against eavesdropping interception.",
      metrics: [
        "Accurate detection of quantum bit error rate (QBER) during simulated intercept-resend attacks",
        "Calculated key reconciliation efficiency under noisy channel conditions"
      ],
      architectureDetails: [
        "Quantum circuit generation and qubit state manipulation routines",
        "Statistical error rate calculation module for secret key distillation"
      ],
      tech: ["Python", "Quantum Logic", "Cryptography", "Algorithm Design"],
      github: "https://github.com"
    },
    {
      id: "parking-management",
      title: "Concurrent Smart Parking & Token Architecture",
      category: "Backend / Web",
      subtitle: "Object-Oriented System Architecture",
      badge: "Backend Engineering",
      badgeColor: "bg-slate-500/10 text-slate-700 border-slate-200",
      description: "Automated parking allocation and billing software with thread-safe slot reservation logic and transactional SQL persistence.",
      detailedOverview: "A robust backend application designed for real-time slot occupancy tracking, dynamic pricing, and concurrent user slot reservation without double-booking.",
      metrics: [
        "Thread-safe slot booking persistence under concurrent thread executions",
        "Optimized relational schema queries for instant availability lookup"
      ],
      architectureDetails: [
        "Java OOP design patterns with thread synchronization blocks",
        "Relational SQL schema with transactional integrity"
      ],
      tech: ["Java", "SQL", "OOP Patterns", "Database Design"],
      github: "https://github.com"
    }
  ];

  // Filtered Projects
  const filteredProjects = activeProjectFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeProjectFilter);

  // Skills Categories
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: "Expert", desc: "PyTorch, FastAPI, Data Science, Rasterio" },
        { name: "C++", level: "Proficient", desc: "Data Structures, Algorithms, Memory Mgmt" },
        { name: "Java", level: "Proficient", desc: "OOP, Concurrency, Enterprise Backend" },
        { name: "SQL", level: "Advanced", desc: "Schema Design, Complex Queries, Indexing" }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "PyTorch", level: "Advanced", desc: "Transformers, Custom Datasets, CUDA" },
        { name: "Computer Vision", level: "Advanced", desc: "Semantic Segmentation, OpenCV, Rasterio" },
        { name: "Transformers", level: "Advanced", desc: "SegFormer, Attention Mechanisms, Vision" },
        { name: "Generative AI & RAG", level: "Advanced", desc: "Vector DBs, Semantic Chunking, Embeddings" }
      ]
    },
    {
      title: "Backend & Web Architecture",
      skills: [
        { name: "REST API Design", level: "Advanced", desc: "Middleware, Auth, Token Management" },
        { name: "React / Next.js", level: "Proficient", desc: "Glassmorphism UI, Hooks, State, Tailwind" },
        { name: "PostgreSQL / SQLite", level: "Advanced", desc: "Relational Schemas, Foreign Key Indexing" },
        { name: "System Design", level: "Proficient", desc: "Fault Tolerance, Concurrency, Caching" }
      ]
    },
    {
      title: "Tools & Environments",
      skills: [
        { name: "Git & GitHub", level: "Advanced", desc: "Branching, CI/CD, Collaborative Dev" },
        { name: "Linux / Unix", level: "Proficient", desc: "Shell Scripting, Environment Config" },
        { name: "LaTeX / Overleaf", level: "Advanced", desc: "IEEE Typesetting, Vector Math Formatting" },
        { name: "CUDA & Jupyter", level: "Proficient", desc: "GPU Hardware Acceleration, Prototyping" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111827] font-sans antialiased relative selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Background Organic Blurred Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-[#4285F4]/20 rounded-full filter blur-[130px] animate-pulse" />
        <div className="absolute top-[40%] -left-32 w-[600px] h-[600px] bg-[#34A853]/15 rounded-full filter blur-[140px]" />
        <div className="absolute top-[70%] right-[10%] w-[500px] h-[500px] bg-indigo-400/15 rounded-full filter blur-[130px]" />
        <div className="absolute -bottom-32 left-[30%] w-[550px] h-[550px] bg-[#FBBC05]/15 rounded-full filter blur-[140px]" />
      </div>

      {/* Floating Capsule Navbar */}
      <nav className="fixed top-6 inset-x-0 z-50 max-w-4xl mx-auto px-4">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-6 h-14 flex items-center justify-between transition-all">
          <a href="#" className="font-extrabold text-lg tracking-tight text-slate-900 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4285F4] animate-pulse" />
            HSR<span className="text-[#4285F4]"></span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
            <a href="#about" className="hover:text-[#4285F4] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#4285F4] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#4285F4] transition-colors">Projects</a>
            <a href="#research" className="hover:text-[#4285F4] transition-colors">Research</a>
            <a href="#experience" className="hover:text-[#4285F4] transition-colors">Experience</a>
            <a href="#resume" className="hover:text-[#4285F4] transition-colors">Resume</a>
            <a href="#contact" className="hover:text-[#4285F4] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-full bg-[#4285F4] text-white font-semibold text-xs hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Email Me"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-slate-700 p-1"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-3 bg-white/90 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-xl flex flex-col gap-4 text-sm font-semibold text-slate-700"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#research" onClick={() => setMobileMenuOpen(false)}>Research</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <button
                onClick={() => { handleCopyEmail(); setMobileMenuOpen(false); }}
                className="w-full py-3 bg-[#4285F4] text-white rounded-2xl font-bold text-center"
              >
                {copied ? "Copied Email!" : "Copy Email"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
        <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 space-y-6">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-[#4285F4] text-xs font-bold tracking-wide"
            >
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            B.Tech CSE Graduate @ SRM IST • Open to Roles
            </motion.div>

            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]"
            >
            Hrishikesh S Raj
            </motion.h1>

            {/* Animated Rotating Subtitle */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 flex items-center"
            >
            <AnimatePresence mode="wait">
                <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl font-bold text-[#4285F4] flex items-center gap-2"
                >
                <Sparkles className="w-5 h-5 text-[#FBBC05]" />
                {ROTATING_TITLES[titleIndex]}
                </motion.span>
            </AnimatePresence>
            </motion.div>

            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
            Engineered transformer segmentation models for multi-spectral satellite imagery and resilient backend applications. Combining computer vision research with production software design.
            </motion.p>

            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
            >
            <a 
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#4285F4] text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
                View Projects <ChevronRight className="w-4 h-4" />
            </a>
            <a 
                href="/research-paper.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full bg-white/80 border border-slate-200 text-slate-800 font-bold text-sm hover:bg-white hover:border-slate-300 transition-all shadow-sm flex items-center gap-2"
            >
                <FileText className="w-4 h-4 text-[#4285F4]" /> Research Paper
            </a>
            </motion.div>
        </div>

        {/* Right Column: Rearranged Glass Card with Larger Photo Box */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
        >
            <div className="bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_16px_48px_0_rgba(31,38,135,0.08)] rounded-[36px] p-6 space-y-5">
            
            {/* 1. Prominent Large Image Box */}
            <div className="w-full h-64 sm:h-72 rounded-[24px] bg-gradient-to-tr from-[#4285F4] to-[#34A853] p-1 shadow-inner overflow-hidden relative group">
                <img 
                src="/profile.JPG" 
                alt="Hrishikesh S Raj" 
                className="w-full h-full object-cover rounded-[20px] group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Subtle Status Pill on Top Right of Image */}
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1.5 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                Active
                </div>
            </div>

            {/* 2. Name & Primary Info */}
            <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Hrishikesh S Raj</h2>
                <p className="text-xs font-semibold text-slate-500">Computer Science & Engineering</p>
                <p className="text-xs font-bold text-[#4285F4]">SRM IST • Kattankulathur, Chennai</p>
            </div>

            {/* 3. Details Table */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100/80 text-xs">
                <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Primary Focus</span>
                <span className="font-bold text-slate-800">Transformers, ML & Backend</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Research</span>
                <span className="font-bold text-[#34A853]">IEEE Manuscript Completed</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Location</span>
                <span className="font-bold text-slate-800">Bangalore / Calicut, India</span>
                </div>
            </div>

            {/* 4. Connect Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">CONNECT</span>
                <div className="flex items-center gap-2.5">
                <a href="https://github.com/hrishidev1" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-[#4285F4] hover:bg-white transition-all shadow-sm">
                    <GithubIcon className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/hrishikesh-s-raj-4362a6273/" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-[#4285F4] hover:bg-white transition-all shadow-sm">
                    <LinkedinIcon className="w-4 h-4" />
                </a>
                <button onClick={handleCopyEmail} className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-[#4285F4] hover:bg-white transition-all shadow-sm">
                    <Mail className="w-4 h-4" />
                </button>
                </div>
            </div>

            </div>
        </motion.div>
        </section>

      {/* Stats Highlight Banner */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-[#4285F4]">IEEE</span>
            <span className="text-xs font-semibold text-slate-500 mt-1 block">Satellite Paper</span>
          </div>
          <div className="p-6 rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-[#34A853]">SRM IST</span>
            <span className="text-xs font-semibold text-slate-500 mt-1 block">B.Tech CSE '26</span>
          </div>
          <div className="p-6 rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-[#EA4335]">DocuMind</span>
            <span className="text-xs font-semibold text-slate-500 mt-1 block">Document AI App</span>
          </div>
          <div className="p-6 rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm text-center">
            <span className="block text-3xl font-extrabold text-[#FBBC05]">RAG & CV</span>
            <span className="text-xs font-semibold text-slate-500 mt-1 block">AI Pipelines</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4285F4]">Core Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Technologies & Architecture</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Applied knowledge across deep learning models, software design patterns, and relational data architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-[28px] bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.04)] space-y-5"
            >
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>{cat.title}</span>
                <Code2 className="w-4 h-4 text-[#4285F4]" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((s, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1 hover:border-blue-200 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800 text-sm">{s.name}</span>
                      <span className="text-[10px] font-bold text-[#4285F4] bg-blue-50 px-2 py-0.5 rounded-full">{s.level}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">{s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4285F4]">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Featured Engineering Projects</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Click on any project card to open full architecture specifications and benchmarks.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {['All', 'Machine Learning', 'Backend / Web', 'Systems & Research'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveProjectFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeProjectFilter === filter
                  ? 'bg-[#4285F4] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white/80 border border-slate-200 text-slate-600 hover:bg-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer rounded-[28px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-6 flex flex-col justify-between hover:border-blue-300 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#4285F4] transition-colors" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#4285F4] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">{project.subtitle}</p>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t, i) => (
                    <span key={i} className="text-[10px] font-semibold text-slate-600 px-2.5 py-1 bg-slate-100/80 rounded-lg">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] font-semibold text-[#4285F4] px-2 py-1 bg-blue-50 rounded-lg">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="text-xs font-bold text-[#4285F4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Specifications <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Spotlight Section */}
      <section id="research" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[32px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" /> IEEE Publication Manuscript
            </div>
            <span className="text-xs font-mono text-slate-400">SRM IST Academic Project</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Uncertainty-Aware Transformer-based Semantic Segmentation for Satellite Imagery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Formulated vector mathematics, spatial dataset loading logic, and uncertainty quantification bounds for multi-spectral remote sensing datasets. Formatted to IEEE publication standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block font-semibold">Model Architecture</span>
              <span className="text-white font-bold text-sm">SegFormer / PyTorch</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Spatial Processing</span>
              <span className="text-white font-bold text-sm">Rasterio / Multi-spectral</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Reliability Metric</span>
              <span className="text-white font-bold text-sm">Pixel Uncertainty Map</span>
            </div>
          </div>

          <a
            href="/research-paper.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4285F4] text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20"
          >
            <ExternalLink className="w-4 h-4" /> View Research Paper
          </a>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4285F4]">Background</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Education & Journey</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-8 rounded-[28px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm flex items-start gap-5">
            <div className="p-3 bg-blue-50 text-[#4285F4] rounded-2xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-900">SRM Institute of Science and Technology</h3>
                <span className="text-xs font-bold text-[#4285F4] bg-blue-50 px-3 py-1 rounded-full">2022 – 2026</span>
              </div>
              <p className="text-xs font-bold text-slate-600">B.Tech in Computer Science and Engineering • Kattankulathur, Chennai</p>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Sustained focus on machine learning algorithms, database schema architecture, object-oriented software patterns, and spatial deep learning pipelines.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[28px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm flex items-start gap-5">
            <div className="p-3 bg-emerald-50 text-[#34A853] rounded-2xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-900">Dayapuram Residential School</h3>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Class XII CBSE</span>
              </div>
              <p className="text-xs font-bold text-slate-600">Calicut, Kerala, India</p>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                Completed secondary school education with strong foundations in mathematics and computer science.
              </p>
            </div>
          </div>
        </div>
      </section>
    
        {/* RESUME SECTION */}
        <section id="resume" className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-8">
        <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4285F4]">DOCUMENTATION</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Curriculum Vitae</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Download my complete resume or preview the document below.
            </p>
        </div>

        <div className="p-8 rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-50 text-[#4285F4] rounded-2xl">
                <FileText className="w-8 h-8" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-slate-900">Hrishikesh S Raj - Resume</h3>
                <p className="text-xs text-slate-500">Machine Learning Engineer & Software Developer</p>
            </div>
            </div>

            <div className="flex gap-3">
            <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#4285F4] text-white font-bold text-xs hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20 flex items-center gap-2"
            >
                <ExternalLink className="w-4 h-4" /> View PDF
            </a>
            </div>
        </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4285F4]">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Let's Connect</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Open to Machine Learning Engineering, Computer Vision, and Backend Software Developer positions.
            </p>

            <div className="p-6 rounded-[28px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 text-[#4285F4] rounded-xl">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Email Address</span>
                  <span className="text-xs font-bold text-slate-800">{contactEmail}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 text-[#34A853] rounded-xl">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Location</span>
                  <span className="text-xs font-bold text-slate-800">Banglore / Calicut, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-[32px] bg-white/80 backdrop-blur-2xl border border-white/90 shadow-xl space-y-6">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#34A853] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Message Received!</h3>
                  <p className="text-xs text-slate-500">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form 
                onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    
                    const formData = new FormData(e.target);
                    
                    try {
                    // REPLACE THIS URL WITH YOUR ACTUAL FORMSPREE URL
                    const response = await fetch("https://formspree.io/f/mykrdwzw", {
                        method: "POST",
                        body: formData,
                        headers: {
                        Accept: "application/json",
                        },
                    });

                    if (response.ok) {
                        setFormSubmitted(true);
                    } else {
                        alert("Oops! There was a problem submitting your form.");
                    }
                    } catch (error) {
                    alert("Oops! There was a problem submitting your form.");
                    } finally {
                    setIsSubmitting(false);
                    }
                }}
                className="space-y-4"
                >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                    <input 
                        required 
                        type="text" 
                        name="name"  // <-- IMPORTANT: Added name attribute
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#4285F4] transition-colors"
                    />
                    </div>
                    <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Email</label>
                    <input 
                        required 
                        type="email" 
                        name="email" // <-- IMPORTANT: Added name attribute
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#4285F4] transition-colors"
                    />
                    </div>
                </div>

                <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Subject</label>
                    <input 
                    required 
                    type="text" 
                    name="subject" // <-- IMPORTANT: Added name attribute
                    placeholder="Opportunity / Project Inquiry" 
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#4285F4] transition-colors"
                    />
                </div>

                <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Message</label>
                    <textarea 
                    required 
                    rows={4} 
                    name="message" // <-- IMPORTANT: Added name attribute
                    placeholder="Hi Rishi, I'd like to discuss..." 
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#4285F4] transition-colors"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#4285F4] text-white rounded-2xl font-bold text-xs hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <Send className="w-3.5 h-3.5" /> 
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Project Specification Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white/95 backdrop-blur-2xl border border-white shadow-2xl rounded-[32px] max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto space-y-6 z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${selectedProject.badgeColor}`}>
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 pt-2">{selectedProject.title}</h3>
                <p className="text-xs font-bold text-slate-400">{selectedProject.subtitle}</p>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">Overview</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedProject.detailedOverview}
                </p>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#34A853]">Key Metrics & Highlights</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {selectedProject.metrics.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#34A853] shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">System Architecture</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {selectedProject.architectureDetails.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Terminal className="w-4 h-4 text-[#4285F4] shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-[11px] font-semibold text-slate-700 px-3 py-1 bg-slate-100 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-6 flex items-center gap-3">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 bg-slate-900 text-white font-bold text-xs rounded-2xl text-center hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub Code
                </a>
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-3 bg-[#4285F4] text-white font-bold text-xs rounded-2xl text-center hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Deployment
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-100 py-12 text-center text-slate-400 text-xs space-y-4">
        <p>© {new Date().getFullYear()} Hrishikesh S Raj</p>
        <p>Built with React, Tailwind CSS, and Framer Motion.</p>
      </footer>

    </div>
  );
}