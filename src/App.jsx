import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const resumeLinks = [
  {
    label: "AI/ML & GenAI Resume",
    navLabel: "AI/ML Resume",
    href: "/Adamya_Kumar_AI_ML_GenAI_Resume_.pdf",
  },
  {
    label: "SDE & Full Stack Resume",
    navLabel: "SDE Resume",
    href: "/Adamya_Kumar_SDE_FullStack_Resume.pdf",
  },
];

const projects = [
  {
    number: "01",
    slug: "spark-commerce",
    displayName: "Spark Commerce",
    shortLabel: "SPARK COMMERCE",
    categories: ["fullstack"],
    tags: ["Full stack", "E-commerce"],
    title: <>Spark<br className="hidden md:block" /> Commerce</>,
    description:
      "A full-stack storefront and admin panel with product browsing, a shopping cart, Cash on Delivery checkout, and order management.",
    notes:
      "Customer and admin access use httpOnly-cookie JWT authentication. Zod validates requests, while prices are stored as integer paise and shipping is calculated server-side (free above ₹999, ₹49 otherwise). The React client, Express API, and Python shopping assistant are separate services; an Express proxy streams assistant responses over SSE. Admins can manage the catalog and upload images through Cloudinary.",
    stack:
      "React · Vite · React Router · TanStack Query · Tailwind CSS · Node.js · Express · MongoDB · Mongoose · Zod · FastAPI · LangGraph · Gemini · FAISS · Cloudinary",
    url: "https://www.carteer.space/",
    linkLabel: "Visit live store",
    repoUrl:
      "https://github.com/Adamya-Kumar/E-commerce-website-with-an-integrated-RAG",
    repoName: "E-commerce-website-with-an-integrated-RAG",
    aiSkills: ["FastAPI", "LangGraph", "Gemini", "FAISS", "Server-Sent Events"],
    highlights: [
      "Built a multi-category storefront and admin panel with product browsing, cart, Cash on Delivery checkout, and order management.",
      "Added httpOnly-cookie JWT authentication with customer and admin roles, plus Zod request validation.",
      "Kept prices in integer paise and applied ₹999 free-shipping / ₹49 shipping rules on the server.",
      "Separated the React storefront, Express API, and Python AI assistant into independently owned services.",
      "Proxied the FastAPI and LangGraph shopping assistant over Server-Sent Events; added Cloudinary catalog image uploads.",
    ],
    artwork: "commerce",
  },
  {
    number: "02",
    slug: "production-rag-bot",
    displayName: "Production RAG Bot",
    shortLabel: "PRODUCTION RAG",
    categories: ["rag", "genai"],
    tags: ["RAG", "PDF question answering"],
    title: <>Production<br className="hidden md:block" /> RAG bot</>,
    description:
      "A deployed chatbot for uploading multiple PDFs, asking questions about their contents, and exploring the retrieved document chunks.",
    notes:
      "The app parses PDFs with pypdf, chunks and embeds their contents, then retrieves relevant context for answers. It supports Groq (Llama 3.1 and Llama 3 70B) with sentence-transformer embeddings and Google Gemini 2.0/2.5 Flash with Google embeddings. ChromaDB reuses stored vectors and appends newly uploaded documents, so existing PDFs do not need to be reprocessed. Chat history export, clear/reset/undo controls, and a developer view for inspecting chunks are included.",
    stack:
      "Python · LangChain · ChromaDB · Groq · Google Gemini · Hugging Face · pypdf · Streamlit",
    url: "https://pro-rag-chatbot.streamlit.app/",
    linkLabel: "Open live RAG bot",
    repoUrl: "https://github.com/Adamya-Kumar/Production-RAG-Bot",
    repoName: "Production-RAG-Bot",
    highlights: [
      "Upload multiple PDFs and ask questions grounded in their contents.",
      "Parse PDFs with pypdf, split and embed documents, and retrieve relevant context for responses.",
      "Switch between Groq-hosted Llama models and Google Gemini models with provider-specific embeddings.",
      "Persist and reuse ChromaDB vectors; append new uploads without reprocessing existing documents.",
      "Use chat history export, clear/reset/undo controls, and a developer view of retrieved chunks.",
    ],
    artwork: "retrieval",
  },
  {
    number: "03",
    slug: "researchmind",
    displayName: "ResearchMind",
    shortLabel: "RESEARCHMIND",
    categories: ["agentic", "genai"],
    tags: ["Agentic AI", "Research"],
    title: <>ResearchMind</>,
    description:
      "A four-stage multi-agent research pipeline that searches for recent sources, reads and scrapes them, drafts a report, and reviews the result.",
    notes:
      "A Tavily Search agent finds recent sources, a Reader agent scrapes pages with BeautifulSoup, a Writer chain drafts the report, and a Critic chain reviews and scores it. The Streamlit interface displays each stage in real time and lets users download the final report as Markdown. The app is containerized with Docker and deployed on Render; API keys are supplied through environment variables.",
    stack: "Python · LangChain · Streamlit · Docker · Tavily · BeautifulSoup · OpenRouter",
    url: "https://researchmind-multi-agent-ai-research.onrender.com/",
    linkLabel: "Open ResearchMind",
    repoUrl:
      "https://github.com/Adamya-Kumar/ResearchMind-Multi-Agent-AI-Research-System",
    repoName: "ResearchMind-Multi-Agent-AI-Research-System",
    highlights: [
      "Search agent discovers recent sources using Tavily.",
      "Reader agent scrapes source pages with BeautifulSoup.",
      "Writer drafts a report and Critic reviews and scores the result.",
      "Streamlit displays each research stage in real time.",
      "Download the completed research report as Markdown.",
      "Dockerized deployment with API keys supplied through environment variables.",
    ],
    artwork: "agents",
  },
];

const githubLiveProjects = [
  {
    name: "Three-way-match-engine",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/Three-way-match-engine",
    demoUrl: "https://three-way-match-engine.vercel.app",
  },
  {
    name: "Prompter",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/Prompter",
    demoUrl: "https://prompter-indol.vercel.app",
  },
  {
    name: "backend",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/backend",
    demoUrl: "https://backend-dusky-one-93.vercel.app",
  },
  {
    name: "backend-myntra",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/backend-myntra",
    demoUrl: "https://backend-myntra.vercel.app",
  },
  {
    name: "QuickAI",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/QuickAI",
    demoUrl: "https://quick-ai-three.vercel.app/",
  },
  {
    name: "WhiteBoard",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/WhiteBoard",
    demoUrl: "https://white-board-six-psi.vercel.app",
  },
  {
    name: "next-dashboard",
    language: "TypeScript",
    repoUrl: "https://github.com/Adamya-Kumar/next-dashboard",
    demoUrl: "https://next-dashboard-ashy-seven.vercel.app",
  },
  {
    name: "Eatoes-The-Digital-Diner",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/Eatoes-The-Digital-Diner",
    demoUrl: "https://eatoes-the-digital-diner.netlify.app/",
  },
  {
    name: "Converso_AI_Trainer",
    language: "TypeScript",
    repoUrl: "https://github.com/Adamya-Kumar/Converso_AI_Trainer",
    demoUrl: "https://conversoai-neon.vercel.app",
  },
  {
    name: "ai_mock_interview",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/ai_mock_interview",
    demoUrl: "https://ai-mock-interview-silk-eight.vercel.app",
  },
  {
    name: "netflix-clone-mern-stack",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/netflix-clone-mern-stack",
    demoUrl: "https://netfilxclone-hbac.onrender.com/",
  },
  {
    name: "Portfolio-Website",
    language: "HTML",
    repoUrl: "https://github.com/Adamya-Kumar/Portfolio-Website",
    demoUrl: "https://portfolio-website-two-ochre.vercel.app",
  },
  {
    name: "Todo-List-Using-ReactJS",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/Todo-List-Using-ReactJS",
    demoUrl: "https://todo-list-using-react-js-chi.vercel.app",
  },
  {
    name: "ERP-cloud",
    language: "HTML",
    repoUrl: "https://github.com/Adamya-Kumar/ERP-cloud",
    demoUrl: "https://erp-cloud.vercel.app",
  },
  {
    name: "Real-Time-Location-Tracking-App",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/Real-Time-Location-Tracking-App",
    demoUrl: "https://real-time-location-tracking-app.vercel.app",
  },
  {
    name: "StudySync-UI",
    language: "HTML",
    repoUrl: "https://github.com/Adamya-Kumar/StudySync-UI",
    demoUrl: "https://study-sync-ui-xi.vercel.app",
  },
  {
    name: "Employee-management-system-using-React.js",
    language: "JavaScript",
    repoUrl:
      "https://github.com/Adamya-Kumar/Employee-management-system-using-React.js",
    demoUrl:
      "https://employee-management-system-using-react-js-six.vercel.app",
  },
  {
    name: "MERN-Chat-App",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/MERN-Chat-App",
    demoUrl: "https://mern-chat-app-lac-zeta.vercel.app",
  },
  {
    name: "Leetcode-Metric",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/Leetcode-Metric",
    demoUrl: "https://leetcodemetric.vercel.app",
  },
  {
    name: "AI-Powered-chess",
    language: "Python",
    repoUrl: "https://github.com/Adamya-Kumar/AI-Powered-chess",
    demoUrl: "https://ai-powered-chess.vercel.app",
  },
  {
    name: "URL-Shortener-Service",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/URL-Shortener-Service",
    demoUrl: "https://url-shortener-service-one.vercel.app",
  },
  {
    name: "NodeJS-Auth-jwt",
    language: "JavaScript",
    repoUrl: "https://github.com/Adamya-Kumar/NodeJS-Auth-jwt",
    demoUrl: "https://node-js-auth-jwt.vercel.app",
  },
  {
    name: "Airbnb_clone_interface_in_ReactJS",
    language: "CSS",
    repoUrl: "https://github.com/Adamya-Kumar/Airbnb_clone_interface_in_ReactJS",
    demoUrl: "https://airbnb-clone-interface-in-react-js.vercel.app",
  },
];

const allProjects = [
  ...projects,
  ...githubLiveProjects.map((project, index) => ({
    ...project,
    number: String(index + projects.length + 1).padStart(2, "0"),
    slug: `github-${project.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`,
    url: project.demoUrl,
    repoName: project.name,
    repoUrl: project.repoUrl,
    linkLabel: "Open live project",
    description: `${project.name} is a public ${project.language} project by Adamya Kumar. Visit the live deployment or browse the source repository for implementation details.`,
    stack: project.language,
    displayName: project.name,
    highlights: [
      `Public ${project.language} repository.`,
      "Open the deployed project or inspect its source on GitHub.",
    ],
    artwork: "retrieval",
  })),
];

const filters = [
  { id: "all", label: "All work" },
  { id: "fullstack", label: "Full stack" },
  { id: "genai", label: "GenAI" },
  { id: "agentic", label: "Agentic AI" },
  { id: "rag", label: "RAG" },
];

const skillGroups = [
  {
    name: "Languages",
    skills: ["JavaScript", "Python", "C++", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "TanStack Query", "React Router"],
  },
  {
    name: "Services & APIs",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT", "Zod", "Server-Sent Events"],
  },
  {
    name: "Data",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "ChromaDB", "Pinecone", "FAISS"],
  },
  {
    name: "Generative AI",
    description: "Models, retrieval, and the frameworks behind LLM-powered features.",
    featured: true,
    skills: [
      "LangChain",
      "RAG",
      "Vector embeddings",
      "OpenAI APIs",
      "Google Gemini",
      "Groq",
      "Hugging Face",
    ],
  },
  {
    name: "AI agents",
    description: "Tool-using, stateful workflows that plan and act across tasks.",
    featured: true,
    skills: [
      "LangGraph",
      "Tool calling",
      "Agent orchestration",
      "Memory management",
      "LLM guardrails",
      "Conditional routing",
      "Shared state",
      "Multi-agent systems",
    ],
  },
  {
    name: "AI development",
    featured: true,
    skills: ["GitHub Copilot", "Claude", "Cursor", "Spec-driven development", "Prompt engineering"],
  },
  {
    name: "Developer tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Cloudinary"],
  },
  {
    name: "Deployment",
    featured: true,
    skills: ["Vercel", "Render", "Streamlit Community Cloud", "Hugging Face Spaces", "Netlify", "Docker"],
    links: {
      Vercel: "https://vercel.com/",
      Render: "https://render.com/",
      "Streamlit Community Cloud": "https://streamlit.io/cloud",
      "Hugging Face Spaces": "https://huggingface.co/spaces",
      Netlify: "https://www.netlify.com/",
      Docker: "https://www.docker.com/",
    },
  },
  {
    name: "Computer science",
    skills: ["Data structures & algorithms", "Problem solving", "Testing"],
  },
  {
    name: "Machine learning & deep learning",
    skills: ["scikit-learn", "Pandas", "NumPy", "Neural networks", "TensorFlow", "NLP", "Transformer architectures"],
  },
];

const skillPillars = [
  {
    number: "01",
    label: "Full-stack development",
    flow: "DESIGN → BUILD → SHIP",
    description:
      "End-to-end product engineering across polished interfaces, reliable APIs, data, and deployment.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "Vercel",
      "Render",
    ],
  },
  {
    number: "02",
    label: "Generative AI & agent systems",
    flow: "RETRIEVE → REASON → ACT",
    description:
      "Practical AI features—from grounded RAG experiences to stateful, tool-using multi-agent workflows.",
    skills: [
      "RAG",
      "LangChain",
      "LangGraph",
      "Vector embeddings",
      "OpenAI APIs",
      "Google Gemini",
      "Groq",
      "FAISS",
      "ChromaDB",
      "Tool calling",
      "Agent orchestration",
      "LLM guardrails",
      "Server-Sent Events",
    ],
  },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:adamyakumar2307@gmail.com",
    value: "adamyakumar2307@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+917310839922",
    value: "+91 73108 39922",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/adamya-kumar",
    value: "linkedin.com/in/adamya-kumar",
  },
  {
    label: "GitHub",
    href: "https://github.com/Adamya-Kumar",
    value: "github.com/Adamya-Kumar",
  },
];

const certifications = [
  "Supervised Machine Learning: Regression and Classification — Coursera / DeepLearning.AI",
  "Advanced Learning Algorithms — Coursera / DeepLearning.AI",
  "Spring Boot: Microservices, Kafka, Docker, Kubernetes, AWS — CodingShuttle",
];

function useSavedTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("adamya-theme");
      return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "dark";
    } catch (error) {
      console.warn("Theme preference could not be loaded.", error);
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#151515" : "#d9d9d9"
    );
    try {
      localStorage.setItem("adamya-theme", theme);
    } catch (error) {
      console.warn("Theme preference could not be saved.", error);
    }
  }, [theme]);

  return [theme, setTheme];
}

function useProjectRoute() {
  const [projectSlug, setProjectSlug] = useState(() => {
    const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
    return match ? decodeURIComponent(match[1]) : null;
  });

  useEffect(() => {
    const handlePopState = () => {
      const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
      setProjectSlug(match ? decodeURIComponent(match[1]) : null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openProject = (slug) => {
    window.history.pushState({ projectSlug: slug }, "", `/projects/${slug}`);
    setProjectSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProject = () => {
    window.history.pushState({}, "", "/");
    setProjectSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    project: allProjects.find((item) => item.slug === projectSlug) ?? null,
    projectSlug,
    openProject,
    closeProject,
  };
}

function useGitHubMetadata(project) {
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    if (!project?.repoName) return undefined;

    const controller = new AbortController();
    setState({ status: "loading", data: null, error: null });

    Promise.all([
      fetch(
        `https://api.github.com/repos/Adamya-Kumar/${encodeURIComponent(project.repoName)}`,
        {
          headers: { Accept: "application/vnd.github+json" },
          signal: controller.signal,
        }
      ),
      fetch(
        `https://api.github.com/repos/Adamya-Kumar/${encodeURIComponent(project.repoName)}/languages`,
        {
          headers: { Accept: "application/vnd.github+json" },
          signal: controller.signal,
        }
      ),
    ])
      .then(async ([repositoryResponse, languagesResponse]) => {
        if (!repositoryResponse.ok) {
          throw new Error(
            `GitHub returned ${repositoryResponse.status} ${repositoryResponse.statusText}.`
          );
        }
        const repository = await repositoryResponse.json();
        const languages = languagesResponse.ok
          ? await languagesResponse.json()
          : null;
        return { ...repository, languages };
      })
      .then((data) => {
        if (!Number.isInteger(data.stargazers_count)) {
          throw new Error("GitHub did not return repository star data.");
        }
        setState({ status: "success", data, error: null });
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
        console.error("Unable to load GitHub repository details.", error);
        setState({ status: "error", data: null, error: error.message });
      });

    return () => controller.abort();
  }, [project?.repoName]);

  return state;
}

function useReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function useScrollMotion() {
  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        document.documentElement.style.setProperty(
          "--page-scroll",
          String(Math.min(1, Math.max(0, progress)))
        );
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);
}

function useActiveHero() {
  useEffect(() => {
    const hero = document.querySelector("#top");
    const pattern = document.querySelector(".hero-pattern");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hero || !pattern || reduceMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        pattern.classList.toggle("is-active", entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);
}

function Brand({ footer = false, href = "#top" }) {
  return (
    <a
      className="flex w-fit items-center gap-2.5"
      href={href}
      aria-label={footer ? "Back to top" : "Adamya, home"}
    >
      <span className="grid h-7 w-7 place-items-center bg-[var(--ink)] font-display text-xs font-bold text-[var(--canvas)]">
        A.
      </span>
      <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
        ADAMYA
      </span>
    </a>
  );
}

function Header({ theme, onThemeToggle, projectPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navLinks = [
    {
      href: projectPage ? "/#work" : "#work",
      text: "Selected work",
      number: "01",
    },
    {
      href: projectPage ? "/#about" : "#about",
      text: "About",
      number: "02",
    },
    {
      href: projectPage ? "/#contact" : "#contact",
      text: "Contact",
      number: "03",
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b rule bg-[var(--canvas)]/95 backdrop-blur-sm">
      <nav
        className="mx-auto grid h-16 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-[4.5rem] md:px-8"
        aria-label="Main navigation"
      >
        <Brand href={projectPage ? "/" : "#top"} />
        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a className="nav-link eyebrow" href={link.href} key={link.href}>
              {link.text}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-self-end gap-3">
          <div
            className="hidden items-center gap-1 md:flex"
            role="group"
            aria-label="Social profiles"
          >
            {socialLinks
              .filter((link) => link.label === "LinkedIn" || link.label === "GitHub")
              .map((link) => (
                <a
                  className="profile-link"
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${link.label} profile in a new tab`}
                  title={link.label}
                >
                  {link.label === "LinkedIn" ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5.2 8.5H2V22h3.2V8.5ZM3.6 2A1.9 1.9 0 1 0 3.6 5.8 1.9 1.9 0 0 0 3.6 2ZM22 13.8c0-4.1-2.2-6-5.1-6a4.4 4.4 0 0 0-3.9 2.1V8.5H9.8V22H13v-7.2c0-1.9.4-3.7 2.7-3.7s2.3 2.1 2.3 3.8V22h3.2l.8-8.2Z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.7 2.4 3.9 1.7.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.7 5.2 18.7 5.5 18.7 5.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                  )}
                </a>
              ))}
          </div>
          {resumeLinks.map((resume) => (
            <a
              className="eyebrow nav-link hidden py-3 xl:inline-flex"
              href={resume.href}
              key={resume.href}
              download
            >
              {resume.navLabel} ↓
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "dark"}
            title="Toggle color theme"
            data-theme-toggle={theme}
            onClick={onThemeToggle}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3.5" />
                  <path d="M12 2.5v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.22-6.72-1.42 1.42m-10.6 10.6-1.42 1.42m13.44 0-1.42-1.42m-10.6-10.6L5.28 5.28" />
                </svg>
              </span>
              <span className="theme-toggle-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20.4 15.2A8.6 8.6 0 0 1 8.8 3.6 8.6 8.6 0 1 0 20.4 15.2Z" />
                  <path d="m16.8 4 .5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4Z" />
                </svg>
              </span>
              <span className="theme-toggle-thumb">
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20.4 15.2A8.6 8.6 0 0 1 8.8 3.6 8.6 8.6 0 1 0 20.4 15.2Z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3.5" />
                    <path d="M12 2.5v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.22-6.72-1.42 1.42m-10.6 10.6-1.42 1.42m13.44 0-1.42-1.42m-10.6-10.6L5.28 5.28" />
                  </svg>
                )}
              </span>
            </span>
          </button>
          <a
            className="bracket-button hidden lg:inline-flex"
            href={projectPage ? "/#contact" : "#contact"}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
          <button
            className="grid h-10 w-10 place-items-center md:hidden"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={`${menuOpen ? "Close" : "Open"} navigation menu`}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-xl" aria-hidden="true">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className="mobile-menu absolute inset-x-0 top-full border-b rule bg-[var(--canvas)] px-5 pb-8 pt-6 md:hidden"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <a
              className={`display border-b rule py-4 text-4xl last:border-b-0 ${
                link.number === "03" ? "border-b-0" : ""
              }`}
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              {link.text} <span className="float-right text-base">{link.number}</span>
            </a>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3 border-t rule pt-5">
          {socialLinks
            .filter((link) => link.label === "LinkedIn" || link.label === "GitHub")
            .map((link) => (
              <a
                className="bracket-button w-fit"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} profile <span aria-hidden="true">↗</span>
              </a>
            ))}
        </div>
        <p className="eyebrow mt-8 text-[var(--muted)]">
          Full stack development · Generative AI
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {resumeLinks.map((resume) => (
            <a className="bracket-button w-fit" href={resume.href} key={resume.href} download>
              {resume.label} <span aria-hidden="true">↓</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function ProjectArtwork({ type, label }) {
  return (
    <div className="project-art">
      {type === "commerce" && (
        <svg
          className="project-art-svg commerce-art"
          viewBox="0 0 560 340"
          fill="none"
          aria-hidden="true"
        >
          <path className="art-frame" d="M76 54h408v232H76z" />
          <path className="art-divider" d="M76 96h408M130 54v42" />
          <path className="art-commerce-mark" d="m96 76 9-13 9 13v10H96zM99 86v-8h12v8" />
          <path className="art-commerce-lines" d="M144 69h72m-72 11h44" />
          <circle className="art-commerce-dot" cx="450" cy="75" r="3" />
          <circle className="art-commerce-dot art-commerce-dot--red" cx="466" cy="75" r="3" />
          <path className="art-commerce-card" d="M104 118h156v132H104z" />
          <path className="art-commerce-product" d="M145 151h72v58h-72zM158 151c0-12 8-20 23-20s23 8 23 20" />
          <path className="art-commerce-lines" d="M122 225h70m-70 10h42" />
          <path className="art-commerce-card" d="M280 118h156v132H280z" />
          <path className="art-commerce-product art-commerce-product--alt" d="m333 145 27-10 28 10-8 48h-39zM339 154h40" />
          <path className="art-commerce-lines" d="M298 225h70m-70 10h42" />
          <path className="art-commerce-cart" d="M422 222h30l-4 17h-20l-5-24h-7m14 31h1m15 0h1" />
          <path className="art-commerce-action" d="M402 260h48" />
          <path className="art-scanline" d="M88 112h384" />
        </svg>
      )}
      {type === "agents" && (
        <>
          <span className="art-orbit" aria-hidden="true" />
          <span className="art-orbit two" aria-hidden="true" />
          <span className="art-core" aria-hidden="true">
            <span>AI</span>
          </span>
        </>
      )}
      {type === "retrieval" && (
        <svg
          className="project-art-svg retrieval-art"
          viewBox="0 0 560 340"
          fill="none"
          aria-hidden="true"
        >
          <path className="art-doc" d="M66 64h112l28 28v82H66z" />
          <path className="art-doc-fold" d="M178 64v29h28" />
          <path className="art-doc-lines" d="M86 112h81m-81 16h66m-66 16h74" />
          <path className="art-doc art-doc--second" d="M66 200h112l28 28v46H66z" />
          <path className="art-doc-fold" d="M178 200v29h28" />
          <path className="art-doc-lines" d="M86 244h81m-81 16h59" />
          <path className="art-retrieval-route" d="M206 130h54l38 40m-92 74h54l38-40" />
          <path className="art-vector-core" d="m300 128 39 22v45l-39 22-39-22v-45z" />
          <circle className="art-vector-node art-vector-node--blue" cx="300" cy="150" r="5" />
          <circle className="art-vector-node art-vector-node--red" cx="339" cy="173" r="5" />
          <circle className="art-vector-node art-vector-node--blue" cx="300" cy="195" r="5" />
          <circle className="art-vector-node art-vector-node--red" cx="261" cy="173" r="5" />
          <circle className="art-vector-center" cx="300" cy="173" r="9" />
          <path className="art-retrieval-route art-retrieval-route--answer" d="M339 173h45" />
          <path className="art-answer-card" d="M384 116h110v112H384z" />
          <path className="art-answer-lines" d="M402 143h72m-72 14h57m-57 14h66" />
          <path className="art-answer-check" d="m404 196 7 7 13-15" />
          <path className="art-scanline art-scanline--retrieval" d="M48 177h464" />
        </svg>
      )}
      {type === "services" &&
        [
          { color: "blue", top: "top-[26%]", border: "border-[var(--blue)]" },
          { color: "red", top: "top-[58%]", border: "border-[var(--red)]" },
        ].map((row) => (
          <div className="contents" key={row.color}>
            {[25, 50, 75].map((left) => (
              <span
                className={`absolute ${row.top} h-12 w-12 border ${row.border} ${
                  left === 25
                    ? "left-[25%]"
                    : left === 75
                      ? "right-[25%]"
                      : "left-1/2 -translate-x-1/2"
                }`}
                key={`${row.color}-${left}`}
                aria-hidden="true"
              />
            ))}
          </div>
        ))}
      {type === "assistant" && (
        <>
          <span className="absolute left-1/2 top-1/2 grid h-24 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center border border-[var(--blue)] bg-[var(--canvas)] text-[var(--blue)]">
            <span className="font-display text-4xl">↗</span>
          </span>
          <span className="absolute left-[20%] top-[25%] h-2 w-2 bg-[var(--red)]" />
          <span className="absolute right-[21%] top-[32%] h-2 w-2 bg-[var(--blue)]" />
          <span className="absolute bottom-[24%] left-[28%] h-2 w-2 bg-[var(--blue)]" />
          <span className="absolute bottom-[26%] right-[27%] h-2 w-2 bg-[var(--red)]" />
        </>
      )}
      <span className="eyebrow absolute bottom-3 left-3 text-[var(--muted)]">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ project, hidden, onOpen }) {
  const openFromCard = (event) => {
    if (event.target.closest("a, button, summary, details")) return;
    onOpen(project.slug);
  };

  const handleCardKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(project.slug);
    }
  };

  return (
    <article
      className="work-card project-card grid cursor-pointer border-b rule md:grid-cols-[0.82fr_1fr] md:gap-10 lg:gap-16"
      hidden={hidden}
      role="link"
      tabIndex={hidden ? -1 : 0}
      aria-label={`Open ${project.repoName} project details`}
      onClick={openFromCard}
      onKeyDown={handleCardKeyDown}
    >
      <div className="p-4 md:p-7 lg:p-10" data-reveal>
        <ProjectArtwork
          type={project.artwork}
          label={`${project.number} / ${project.shortLabel}`}
        />
      </div>
      <div className="flex flex-col justify-center px-4 pb-7 md:py-10 md:pr-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              className={`eyebrow ${
                index === 0 ? "text-[var(--blue)]" : "text-[var(--muted)]"
              }`}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="display text-3xl leading-tight md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
          {project.description}
        </p>
        <details className="project-details mt-5 max-w-xl border-t rule pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-xs uppercase tracking-wider hover:text-[var(--red)]">
            <span>Project notes</span>
            <span className="details-arrow text-lg" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
            {project.notes}
          </p>
        </details>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            className="bracket-button w-fit"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            {project.linkLabel} <span aria-hidden="true">↗</span>
          </a>
          <a
            className="eyebrow nav-link py-3 text-[var(--muted)]"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.repoName} on GitHub`}
          >
            GitHub / {project.repoName} <span className="text-[var(--red)]">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function WorkSection({ onOpen }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(selectedFilter));
  const activeLabel = filters.find((filter) => filter.id === selectedFilter)?.label;

  return (
    <section id="work" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[1fr_0.62fr] md:items-center lg:gap-16">
          <div className="relative z-10" data-reveal>
            <p className="eyebrow mb-5 text-[var(--blue)]">01 / Selected work</p>
            <h2 className="display max-w-3xl text-[clamp(3rem,8vw,7rem)] leading-[0.88]">
              Ideas into<br />working systems.
            </h2>
            <p className="mt-6 max-w-xl font-display text-lg leading-relaxed text-[var(--muted)] md:mt-8 md:text-xl">
              A selection of explorations across AI and software engineering.
              Filter by focus to find your way through.
            </p>
          </div>
          <div
            className="work-visual md:col-start-2 md:row-start-1 md:justify-self-end"
            aria-hidden="true"
            data-reveal
          >
            <svg viewBox="0 0 320 320" fill="none">
              <defs>
                <radialGradient id="work-core-glow">
                  <stop stopColor="currentColor" stopOpacity=".26" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="work-orbit-gradient" x1="30" y1="44" x2="290" y2="276">
                  <stop stopColor="var(--blue)" />
                  <stop offset=".52" stopColor="var(--red)" />
                  <stop offset="1" stopColor="var(--blue)" />
                </linearGradient>
              </defs>
              <circle className="work-ring work-ring--outer" cx="160" cy="160" r="138" />
              <circle className="work-ring work-ring--inner" cx="160" cy="160" r="101" />
              <circle className="work-ring work-ring--micro" cx="160" cy="160" r="72" />
              <g className="work-orbit">
                <ellipse className="work-orbit-line" cx="160" cy="160" rx="138" ry="52" />
                <circle className="work-node" cx="28" cy="123" r="5" />
              </g>
              <g className="work-orbit work-orbit--reverse">
                <ellipse className="work-orbit-line work-orbit-line--dashed" cx="160" cy="160" rx="112" ry="39" />
                <circle className="work-node work-node--accent" cx="55" cy="138" r="4" />
              </g>
              <path className="work-crosshair" d="M160 4v42m0 228v42M4 160h42m228 0h42" />
              <circle className="work-core-halo" cx="160" cy="160" r="54" fill="url(#work-core-glow)" />
              <circle className="work-core" cx="160" cy="160" r="39" />
              <path className="work-core-mark" d="m143 174 17-34 17 34m-26-12h18" />
              <path className="work-core-cut" d="M160 120v-15m0 110v-15m-40-40h-15m110 0h-15" />
              <circle className="work-node work-node--accent" cx="160" cy="22" r="3" />
              <circle className="work-node" cx="298" cy="160" r="3" />
              <path className="work-orbit-line work-orbit-line--accent" d="M52 70 72 90m176 140 20 20M268 70l-20 20M72 230l-20 20" />
            </svg>
            <span className="work-visual-label work-visual-label--top">FIELD / 01</span>
            <span className="work-visual-label work-visual-label--bottom">
              SYSTEMS ONLINE / PRODUCT ENGINEERING × AI
            </span>
          </div>
        </div>
        <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              className="filter-button"
              type="button"
              data-filter={filter.id}
              aria-pressed={selectedFilter === filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              key={filter.id}
            >
              {filter.label}
              {filter.id === "all" && <span className="ml-1">{projects.length.toString().padStart(2, "0")}</span>}
            </button>
          ))}
          <p className="sr-only" aria-live="polite">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
            {selectedFilter === "all" ? "" : ` for ${activeLabel}`}
          </p>
        </div>
        <div className="border-t rule">
          {projects.map((project) => (
            <ProjectCard
              project={project}
              hidden={!filteredProjects.includes(project)}
              onOpen={onOpen}
              key={project.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubProjectsSection({ onOpen }) {
  return (
    <section className="border-t rule px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div data-reveal>
            <p className="eyebrow mb-4 text-[var(--blue)]">
              More work / GitHub
            </p>
            <h2 className="display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9]">
              More live projects.
            </h2>
          </div>
          <a
            className="bracket-button w-fit"
            href="https://github.com/Adamya-Kumar?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            All GitHub repositories <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="mb-7 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          More public repositories with demo links configured on GitHub. Open a
          live project or browse its source.
        </p>
        <div className="grid border-l border-t rule sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {githubLiveProjects.map((project, index) => (
            <article
              className="github-project-card flex min-h-40 min-w-0 cursor-pointer flex-col justify-between border-b border-r rule p-5 md:p-6"
              key={project.name}
              data-reveal
              role="link"
              tabIndex={0}
              aria-label={`Open ${project.name} project details`}
              onClick={(event) => {
                if (event.target.closest("a, button")) return;
                const detail = allProjects.find(
                  (item) => item.repoName === project.name
                );
                if (detail) onOpen(detail.slug);
              }}
              onKeyDown={(event) => {
                if (
                  event.target === event.currentTarget &&
                  (event.key === "Enter" || event.key === " ")
                ) {
                  event.preventDefault();
                  const detail = allProjects.find(
                    (item) => item.repoName === project.name
                  );
                  if (detail) onOpen(detail.slug);
                }
              }}
            >
              <div>
                <p className="eyebrow text-[var(--blue)]">
                  {String(index + projects.length + 1).padStart(2, "0")} /{" "}
                  {project.language}
                </p>
                <h3 className="mt-5 min-w-0 break-all font-display text-xl font-medium leading-tight">
                  {project.name}
                </h3>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                <a
                  className="eyebrow nav-link text-[var(--ink)]"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo ↗
                </a>
                <a
                  className="eyebrow nav-link text-[var(--muted)]"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source ↗
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="eyebrow mt-4 text-[var(--muted)]">
          {githubLiveProjects.length + projects.length} public projects with
          live demo links
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  const skills = [
    "Full-stack apps",
    "Generative AI",
    "RAG & agents",
    "APIs & services",
    "React / Node.js",
    "Problem solving",
  ];

  return (
    <section
      id="about"
      className="dark-section px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-[0.9fr_1fr] md:gap-20">
        <div data-reveal>
          <p className="eyebrow mb-6 text-[#3898ec]">02 / A little about me</p>
          <h2 className="display text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.88]">
            Curious by<br />default.
          </h2>
        </div>
        <div className="md:pt-14" data-reveal>
          <p className="max-w-2xl font-display text-2xl leading-snug md:text-4xl">
            I’m interested in making complex technology feel useful, dependable,
            and human.
          </p>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/60">
            I’m a Computer Science graduate and Full Stack Developer who enjoys
            building web applications and practical AI tools. I work across the
            user experience, application services, and LLM-powered features, and
            care about clear interfaces, thoughtful trade-offs, and dependable
            delivery.
          </p>
          <div className="mt-12 grid grid-cols-2 border-t border-white/20 sm:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                className={`skill-cell border-b border-white/20 py-5 ${
                  index % 3 === 0 ? "border-r pr-3" : "pl-4 sm:px-5"
                } ${index % 3 === 1 ? "sm:border-r" : ""} ${
                  index % 3 === 2 ? "border-r sm:border-r-0" : ""
                } ${index > 2 ? "sm:py-6" : ""}`}
                key={skill}
              >
                <span className="skill-index eyebrow block text-white/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectDetail({ project, onBack }) {
  const github = useGitHubMetadata(project);
  const metadata = github.data;
  const technicalSkills = project.stack
    ? project.stack.split(" · ").filter(Boolean)
    : [];
  const skills = [...new Set([...technicalSkills, ...(project.aiSkills ?? [])])];
  const updatedAt = metadata?.updated_at
    ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
        new Date(metadata.updated_at)
      )
    : null;
  const projectActions = (
    <>
      <a
        className="bracket-button w-fit"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        Visit live project <span aria-hidden="true">↗</span>
      </a>
      <a
        className="bracket-button w-fit"
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
      >
        View GitHub repo <span aria-hidden="true">↗</span>
      </a>
      <a
        className="bracket-button w-fit"
        href={`${project.repoUrl}/stargazers`}
        target="_blank"
        rel="noreferrer"
      >
        Star on GitHub <span aria-hidden="true">★</span>
      </a>
    </>
  );

  return (
    <main id="main" className="min-h-screen pt-16 md:pt-[4.5rem]">
      <section className="relative overflow-hidden border-b rule px-5 pb-12 pt-8 md:px-8 md:pb-20">
        <div className="mx-auto max-w-[1600px]">
          <button
            className="nav-link eyebrow mb-12 inline-flex items-center gap-3 text-[var(--muted)]"
            type="button"
            onClick={onBack}
          >
            <span aria-hidden="true">←</span> Back to all projects
          </button>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5 text-[var(--blue)]">
                PROJECT / {project.number}
              </p>
              <h1 className="display max-w-5xl text-[clamp(3.25rem,9vw,8.5rem)] leading-[0.86]">
                {project.displayName ?? project.repoName}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {metadata?.description || project.description}
              </p>
              <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[var(--muted)]">
                <span className="eyebrow">GitHub repository /</span>
                <a
                  className="eyebrow nav-link break-all"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.repoName}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {projectActions}
            </div>
          </div>

          <div className="mt-12 grid border-l border-t rule sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-r rule p-5 md:p-6">
              <p className="eyebrow text-[var(--muted)]">GitHub stars</p>
              <p className="mt-3 font-display text-3xl">
                {github.status === "loading"
                  ? "..."
                  : github.status === "success"
                    ? `★ ${metadata.stargazers_count}`
                    : "Unavailable"}
              </p>
              {github.status === "error" && (
                <p className="mt-2 text-xs text-[var(--muted)]">
                  Star count could not be loaded. Use the GitHub link to view it.
                </p>
              )}
            </div>
            <div className="border-b border-r rule p-5 md:p-6">
              <p className="eyebrow text-[var(--muted)]">Primary language</p>
              <p className="mt-3 font-display text-2xl">
                {metadata?.language ?? project.language ?? "See repository"}
              </p>
            </div>
            <div className="border-b border-r rule p-5 md:p-6">
              <p className="eyebrow text-[var(--muted)]">Forks</p>
              <p className="mt-3 font-display text-3xl">
                {github.status === "success" ? metadata.forks_count : "—"}
              </p>
            </div>
            <div className="border-b border-r rule p-5 md:p-6">
              <p className="eyebrow text-[var(--muted)]">Last updated</p>
              <p className="mt-3 font-display text-xl">
                {updatedAt ?? (github.status === "loading" ? "Loading..." : "See GitHub")}
              </p>
            </div>
          </div>
          {github.status === "error" && (
            <p className="mt-4 text-xs text-[var(--muted)]" role="status">
              GitHub repository stats are temporarily unavailable: {github.error}
            </p>
          )}
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.68fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5 text-[var(--blue)]">01 / Overview</p>
            <h2 className="display text-4xl leading-[0.95] md:text-6xl">
              What it does.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-8 text-[var(--muted)] md:text-base">
              {project.description}
            </p>
            <p className="mt-6 text-sm leading-8 text-[var(--muted)] md:text-base">
              {project.notes}
            </p>
          </div>
        </div>
      </section>

      {project.aiSkills && (
        <section className="shopping-assistant-detail px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-[0.68fr_1fr] md:items-center md:gap-24">
            <div>
              <p className="eyebrow mb-5 text-[var(--red)]">
                SPARK COMMERCE / AI FEATURE
              </p>
              <h2 className="display text-4xl leading-[0.95] md:text-6xl">
                Your AI shopping assistant.
              </h2>
              <p className="mt-5 max-w-lg font-display text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                A separate Python service uses FastAPI and LangGraph to
                understand product requests. Express streams its recommendations
                into the storefront in real time.
              </p>
            </div>
            <div className="shopping-assistant-detail-card">
              <div className="shopping-assistant-head">
                <span className="shopping-assistant-avatar" aria-hidden="true">
                  AI
                </span>
                <div className="min-w-0">
                  <p className="eyebrow text-[var(--ink)]">Shopping assistant</p>
                  <p className="shopping-assistant-caption">
                    FastAPI <span aria-hidden="true">·</span> LangGraph
                    <span aria-hidden="true">·</span> Gemini
                    <span aria-hidden="true">·</span> FAISS
                  </p>
                </div>
                <span
                  className="assistant-status"
                  aria-label="Assistant service"
                />
              </div>
              <div className="assistant-conversation">
                <p className="assistant-message">
                  “I’m looking for something lightweight for everyday use.”
                </p>
                <p className="assistant-reply">
                  “I found a few good matches. Want to compare features or
                  narrow the options by price?”
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.aiSkills.map((skill) => (
                  <span className="skill-tag skill-tag-featured" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <p className="eyebrow mt-6 border-t rule pt-4 text-[var(--muted)]">
                SAMPLE CONVERSATION <span aria-hidden="true">·</span> STREAMED
                BY SERVER-SENT EVENTS
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="px-5 py-14 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.68fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5 text-[var(--blue)]">02 / Project detail</p>
            <h2 className="display text-4xl leading-[0.95] md:text-6xl">
              What’s inside.
            </h2>
          </div>
          <ul className="divide-y rule border-y rule">
            {project.highlights.map((highlight, index) => (
              <li className="flex gap-5 py-5 text-sm leading-7" key={highlight}>
                <span className="eyebrow shrink-0 pt-1 text-[var(--red)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.68fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5 text-[var(--blue)]">03 / Skills used</p>
            <h2 className="display text-4xl leading-[0.95] md:text-6xl">
              Built with.
            </h2>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {github.status === "success" &&
            metadata.languages &&
            Object.keys(metadata.languages).length > 0
              ? Object.keys(metadata.languages).map((language) => (
                  <span className="skill-tag skill-tag-featured" key={language}>
                    {language}
                  </span>
                ))
              : technicalSkills.map((skill) => (
                  <span className="skill-tag skill-tag-featured" key={skill}>
                    {skill}
                  </span>
                ))}
            {project.aiSkills?.map((skill) => (
              <span className="skill-tag skill-tag-featured" key={skill}>
                {skill}
              </span>
            ))}
            {github.status === "success" &&
              metadata.topics?.map((topic) => (
                <span className="skill-tag" key={topic}>
                  {topic}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="dark-section px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-[#3898ec]">READY TO EXPLORE?</p>
            <h2 className="display text-4xl md:text-6xl">
              Try it. Read the code.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="bracket-button text-white"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              Live project ↗
            </a>
            <a
              className="bracket-button text-white"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub source ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [theme, setTheme] = useSavedTheme();
  const prefersReducedMotion = useReducedMotion();
  const { project, projectSlug, openProject, closeProject } = useProjectRoute();
  useReveal();
  useScrollMotion();
  useActiveHero();

  useEffect(() => {
    document.title = project
      ? `${project.displayName ?? project.repoName} — Adamya Kumar`
      : projectSlug
        ? "Project not found — Adamya Kumar"
        : "Adamya Kumar — Full Stack Developer × Generative AI";
    return () => {
      document.title = "Adamya Kumar — Full Stack Developer × Generative AI";
    };
  }, [project, projectSlug]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-3 focus:text-black"
        href="#main"
      >
        Skip to content
      </a>
      <Header
        theme={theme}
        projectPage={Boolean(project || projectSlug)}
        onThemeToggle={() =>
          setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
        }
      />
      {project ? (
        <ProjectDetail project={project} onBack={closeProject} />
      ) : projectSlug ? (
        <main id="main" className="min-h-screen px-5 pt-40 md:px-8">
          <div className="mx-auto max-w-[1600px]">
            <p className="eyebrow mb-5 text-[var(--red)]">404 / NOT FOUND</p>
            <h1 className="display text-5xl md:text-7xl">
              Project not found.
            </h1>
            <button className="bracket-button mt-8" onClick={closeProject}>
              Back to all projects
            </button>
          </div>
        </main>
      ) : (
      <>
      <main id="main">
        <section
          id="top"
          className="hero relative isolate overflow-hidden px-5 md:px-8"
        >
          <div className="hero-pattern" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => (
              <span
                key={index}
                style={{
                  "--bar-speed": `${2.2 + (index % 5) * 0.42}s`,
                  "--bar-delay": `${index * -0.13}s`,
                }}
              />
            ))}
          </div>
          <div className="hero-inner mx-auto flex min-h-[570px] max-w-[1600px] flex-col justify-between pb-12 md:min-h-[620px] md:pb-16">
            <div className="max-w-[1180px] pt-12 md:pt-16">
              <p className="eyebrow mb-8 flex items-center gap-3 md:mb-10">
                <span className="inline-block h-2 w-2 bg-[var(--red)]" />
                Full stack development / Generative AI
              </p>
              <h1 className="display text-[clamp(3.4rem,11.2vw,10rem)] font-medium leading-[0.82]">
                <span className="hero-line"><span>I build</span></span>
                <span className="hero-line"><span>intelligent</span></span>
                <span className="hero-line">
                  <span>systems<span className="text-[var(--red)]">.</span></span>
                </span>
              </h1>
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <a
                className="bracket-button w-fit md:col-start-1 md:row-start-1"
                href="#work"
              >
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <p className="max-w-md text-sm leading-7 md:col-start-2 md:row-start-1 md:justify-self-end md:text-right md:text-base">
                I’m Adamya — a Full Stack Developer building end-to-end web
                products and practical generative AI features.
              </p>
            </div>
          </div>
          <div className="hero-progress" aria-hidden="true">
            <svg viewBox="0 0 1200 92" preserveAspectRatio="none" className="hero-progress-svg">
              <path className="hero-progress-base" d="M0 46 C110 34, 175 20, 240 32 S370 58, 470 36 S620 32, 710 46 S930 70, 1040 36 S1140 40, 1200 44" />
              <path className="hero-progress-line" d="M0 46 C110 34, 175 20, 240 32 S370 58, 470 36 S620 32, 710 46 S930 70, 1040 36 S1140 40, 1200 44" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-5 right-5 flex justify-between border-t rule py-3 text-[9px] uppercase tracking-[0.12em] text-[var(--muted)] md:left-8 md:right-8">
            <span>Independent engineer</span>
            <span>Scroll to explore&nbsp; ↓</span>
            <span className="hidden sm:inline">01 — 04</span>
          </div>
        </section>

        <section className="border-y rule px-5 py-7 md:px-8">
          <div className="mx-auto grid max-w-[1600px] gap-5 md:grid-cols-[180px_1fr] md:items-center">
            <p className="eyebrow text-[var(--muted)]">Building across</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 font-display text-lg font-medium md:gap-x-12 md:text-2xl">
              {["Full stack", "RAG", "Agentic AI", "LLM systems", "APIs"].map(
                (skill, index) => (
                  <span className="contents" key={skill}>
                    {index > 0 && (
                      <span className="text-[var(--blue)]" aria-hidden="true">
                        /
                      </span>
                    )}
                    <span>{skill}</span>
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <WorkSection onOpen={openProject} />
        <GitHubProjectsSection onOpen={openProject} />
        <AboutSection />

        <section className="px-5 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-[1600px]">
            <div data-reveal>
              <p className="eyebrow mb-5 text-[var(--blue)]">
                04 / Technical toolkit
              </p>
              <h2 className="display text-[clamp(3rem,7vw,6rem)] leading-[0.88]">
                AI ideas.<br />Real products.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                I bring full-stack engineering and applied AI together to take
                products from a clear idea to a deployed experience.
              </p>
            </div>
            <div className="mt-12 grid border-y rule lg:grid-cols-2">
              {skillPillars.map((pillar, index) => (
                <article
                  className={`skill-pillar py-7 md:py-9 ${
                    index === 0
                      ? "border-b rule lg:border-b-0 lg:border-r lg:pr-9"
                      : "lg:pl-9"
                  }`}
                  key={pillar.number}
                  data-reveal
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="eyebrow text-[var(--blue)]">
                      {pillar.number} / {pillar.label}
                    </p>
                    <span className="eyebrow hidden text-[var(--muted)] sm:inline">
                      {pillar.flow}
                    </span>
                  </div>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    {pillar.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pillar.skills.map((skill) => (
                      <span
                        className="skill-tag skill-tag-featured"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-baseline justify-between gap-3 border-b rule pb-4">
              <h3 className="display text-2xl md:text-3xl">Complete toolkit</h3>
              <p className="eyebrow text-[var(--muted)]">
                Languages · frameworks · data · AI · deployment
              </p>
            </div>
            <div className="grid border-t rule sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <motion.div
                  className={`skill-cell border-b rule py-6 ${
                    index % 3 < 2 ? "lg:border-r" : ""
                  } ${index % 2 === 0 ? "sm:pr-7" : "sm:pl-7"} lg:px-7 ${
                    index % 3 === 0 ? "lg:pl-0" : ""
                  } ${index % 3 === 2 ? "lg:pr-0" : ""}`}
                  key={group.name}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.55,
                    delay: prefersReducedMotion ? 0 : Math.min(index * 0.05, 0.35),
                    ease: "easeOut",
                  }}
                >
                  <p className="eyebrow text-[var(--blue)]">{group.name}</p>
                  {group.description && (
                    <p className="mt-2 max-w-sm text-xs leading-6 text-[var(--muted)]">
                      {group.description}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const className = `skill-tag ${
                        group.featured ? "skill-tag-featured" : ""
                      }`;

                      return group.links?.[skill] ? (
                        <a
                          className={className}
                          href={group.links[skill]}
                          key={skill}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${skill} official website`}
                        >
                          {skill}
                        </a>
                      ) : (
                        <span className={className} key={skill}>
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 grid gap-14 border-t rule pt-10 md:grid-cols-2 md:gap-16 md:pt-14">
              <div data-reveal>
                <p className="eyebrow mb-5 text-[var(--blue)]">
                  05 / Education
                </p>
                <h3 className="display text-3xl md:text-4xl">
                  Computer Science & Engineering
                </h3>
                <p className="mt-4 text-sm leading-7">
                  Bachelor of Technology
                </p>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Graphic Era Hill University · Dehradun, India
                </p>
                <p className="eyebrow mt-5 text-[var(--muted)]">
                  September 2021 — June 2025
                </p>
              </div>
              <div data-reveal>
                <p className="eyebrow mb-5 text-[var(--blue)]">
                  Recognition & certifications
                </p>
                <p className="font-display text-xl leading-snug">
                  Top 10 Contributor, Hacktoberfest 2023
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Among 2,000+ developers. Solved 250+ DSA problems on LeetCode
                  and Codeforces.
                </p>
                <ul className="mt-6 space-y-3 text-xs leading-6 text-[var(--muted)]">
                  {certifications.map((certification) => (
                    <li className="border-t rule pt-3" key={certification}>
                      {certification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 md:py-36">
          <div className="mx-auto grid max-w-[1600px] gap-8 border-y rule py-10 md:grid-cols-[0.72fr_1fr] md:items-center md:gap-16 md:py-16">
            <div className="thinking-visual" data-reveal aria-hidden="true">
              <svg viewBox="0 0 240 240" fill="none">
                <path className="thinking-frame" d="M120 14 216 70v100l-96 56-96-56V70z" />
                <path className="thinking-path" d="M120 14v54m96 2-47 27m47 73-48-28m-48 84v-55m-96-1 48-28M24 70l48 28" />
                <path className="thinking-path thinking-path--inner" d="m120 68 47 28v55l-47 27-47-27V96z" />
                <path className="thinking-glyph" d="m101 139 19-39 19 39m-29-12h20" />
                <circle className="thinking-node thinking-node--blue" cx="120" cy="14" r="5" />
                <circle className="thinking-node thinking-node--red" cx="216" cy="70" r="5" />
                <circle className="thinking-node thinking-node--blue" cx="216" cy="170" r="5" />
                <circle className="thinking-node thinking-node--red" cx="120" cy="226" r="5" />
                <circle className="thinking-node thinking-node--blue" cx="24" cy="170" r="5" />
                <circle className="thinking-node thinking-node--red" cx="24" cy="70" r="5" />
              </svg>
              <p className="eyebrow mt-4 text-[var(--blue)]">06 / How I think</p>
            </div>
            <div data-reveal>
              <p className="display text-3xl leading-tight md:text-5xl">
                Good engineering is not just making it work. It’s making the
                next change make sense.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">
                I value clear interfaces, useful abstractions, and systems that
                can be reasoned about. The best solution is the one that fits
                the real problem—not the trendiest tool.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="dark-section relative overflow-hidden px-5 py-24 md:px-8 md:py-36"
        >
          <div className="pointer-events-none absolute inset-x-8 top-10 h-px bg-white/20 md:top-16" />
          <div className="mx-auto max-w-[1600px]">
            <p className="eyebrow mb-8 text-[#3898ec]">
              07 / Start a conversation
            </p>
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <h2 className="display max-w-5xl text-[clamp(3.6rem,10vw,9.5rem)] leading-[0.83]">
                Let’s build<br />what’s next
                <span className="text-[var(--red)]">.</span>
              </h2>
              <div className="md:max-w-xs md:pb-2">
                <p className="mb-7 text-sm leading-7 text-white/60">
                  Have an interesting problem, project, or idea? I’d be glad to
                  hear about it.
                </p>
                <a
                  className="bracket-button text-white"
                  href="mailto:adamyakumar2307@gmail.com?subject=Hello%20Adamya&body=Hi%20Adamya%2C%0A%0A"
                >
                  Get in touch <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t rule px-5 py-8 md:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
            <div className="space-y-5">
              <Brand footer />
              <p className="eyebrow text-[var(--muted)]">
                Full stack development · Generative AI
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a
                  className="nav-link text-xs text-[var(--muted)]"
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("https:") ? "_blank" : undefined}
                  rel={link.href.startsWith("https:") ? "noreferrer" : undefined}
                >
                  <span className="mr-2 text-[var(--blue)]">{link.label} ↗</span>
                  {link.value}
                </a>
              ))}
              {resumeLinks.map((resume) => (
                <a
                  className="bracket-button mt-2 w-fit sm:col-span-2"
                  href={resume.href}
                  key={resume.href}
                  download
                >
                  {resume.label} <span aria-hidden="true">↓</span>
                </a>
              ))}
            </div>
          </div>
          <p className="eyebrow mt-8 border-t rule pt-5 text-[var(--muted)]">
            © {new Date().getFullYear()} Adamya Kumar · Bangalore, India
          </p>
        </div>
      </footer>
      </>
      )}
    </>
  );
}

export default App;
