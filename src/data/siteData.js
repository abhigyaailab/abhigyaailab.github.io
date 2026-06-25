export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Training', href: '#training' },
  { label: 'Syllabus', href: '#course-syllabus' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const trainingPrograms = [
  {
    id: 1,
    title: 'Building Agentic AI Systems',
    topics: [
      'LLM Fundamentals',
      'RAG',
      'LangGraph',
      'Multi-Agent Systems',
      'Evaluation',
      'Deployment',
    ],
    icon: 'agent',
    syllabusHref: 'https://github.com/abhigyaailab/Paid-Courses/blob/main/AI%20Agents/readme.md',
  },
  {
    id: 2,
    title: 'Knowledge Graph Engineering',
    topics: ['RDF', 'OWL', 'Neo4j', 'Ontology Design', 'GraphRAG'],
    icon: 'graph',
    syllabusHref: '#',
  },
  {
    id: 3,
    title: 'Enterprise RAG Systems',
    topics: [
      'Embeddings',
      'Vector Databases',
      'Hybrid Retrieval',
      'Evaluation',
      'Production Deployment',
    ],
    icon: 'rag',
    syllabusHref: 'https://github.com/abhigyaailab/Paid-Courses/blob/main/RAG/readme.md',
  },
  {
    id: 4,
    title: 'Healthcare Ontology Engineering',
    topics: [
      'Healthcare Ontologies',
      'RDF Modeling',
      'Semantic Search',
      'Neo4j Integration',
    ],
    icon: 'health',
    syllabusHref: '#',
  },
  {
    id: 5,
    title: 'Basic to Advanced Python',
    topics: [
      'Python Fundamentals',
      'Data Structures',
      'OOP & Design Patterns',
      'Libraries & Frameworks',
      'Advanced Python',
    ],
    icon: 'python',
    syllabusHref: 'https://github.com/abhigyaailab/Paid-Courses/blob/main/Python%20for%20Begginers/readme.md',
  },
  {
    id: 6,
    title: 'AI Product Management & Generative AI',
    topics: [
      'AI Product Strategy',
      'Generative AI Applications',
      'User Research',
      'Roadmap Planning',
      'Go-to-Market',
    ],
    icon: 'product',
    syllabusHref: '#',
  },
  {
    id: 7,
    title: 'SDLC Training Program for Analytics & Data Science',
    topics: [
      'Agile for Data Teams',
      'MLOps Lifecycle',
      'Version Control',
      'CI/CD Pipelines',
      'Production Best Practices',
    ],
    icon: 'sdlc',
    syllabusHref: '#',
  },
  {
    id: 8,
    title: 'Data Science, Machine Learning & Analytics',
    topics: [
      'Statistical Analysis',
      'Machine Learning',
      'Deep Learning',
      'Data Visualization',
      'Model Deployment',
    ],
    icon: 'data',
    syllabusHref: 'https://github.com/abhigyaailab/Paid-Courses/blob/main/Data%20Science%20for%20Beginners/readme.md',
  },
]

/** GitHub repo/folder for all course syllabi — update "View All Syllabi" button link */
export const syllabusRepoUrl = 'https://github.com/abhigyaailab'

export const consultingServices = [
  {
    id: 1,
    title: 'Knowledge Graph Consulting',
    description:
      'Ontology design, graph architecture, Neo4j implementation, GraphRAG.',
    icon: 'graph',
  },
  {
    id: 2,
    title: 'Agentic AI Consulting',
    description:
      'Multi-agent systems, orchestration, LangGraph architecture.',
    icon: 'agent',
  },
  {
    id: 3,
    title: 'Enterprise RAG Consulting',
    description:
      'Retrieval systems, vector search, evaluation frameworks.',
    icon: 'rag',
  },
  {
    id: 4,
    title: 'AI Product Development',
    description:
      'AI product architecture, MVP development, deployment strategy.',
    icon: 'product',
  },
  {
    id: 5,
    title: 'FinOps AI Solutions',
    description:
      'Cloud cost analytics, FinOps automation, AI-powered optimization.',
    icon: 'finops',
  },
]

export const caseStudies = [
  {
    id: 1,
    title: 'Healthcare Ontology Platform',
    challenge:
      'A healthcare organization struggled with fragmented medical terminology across disparate systems, leading to inconsistent data interoperability and failed semantic search initiatives.',
    solution:
      'Designed and implemented a comprehensive healthcare ontology platform using RDF/OWL standards, integrated with Neo4j for graph-based querying, and deployed semantic search capabilities across clinical data repositories.',
    outcome:
      'Achieved 95% terminology standardization across systems, reduced clinical data lookup time by 60%, and enabled cross-institutional semantic interoperability.',
  },
  {
    id: 2,
    title: 'Enterprise Knowledge Graph Framework',
    challenge:
      'Enterprise AI systems often struggle with fragmented data, inconsistent terminology, and disconnected knowledge sources, leading to poor reasoning and unreliable AI responses. Traditional RAG systems also lack the ability to understand complex business relationships.',
    solution:
      'Designed an ontology-driven knowledge graph framework that unifies enterprise knowledge using semantic models, graph relationships, and hybrid retrieval. The framework provides a reusable foundation for context-aware reasoning, explainability, and multi-agent collaboration across domains.',
    outcome:
      'Established a scalable semantic foundation that improves AI reasoning, context retention, and enterprise knowledge reuse. The architecture can be adapted across multiple business domains while maintaining governance and explainability.',
  },
  {
    id: 3,
    title: 'FinOps AI Assistant',
    challenge:
      'Modern enterprises generate massive multi-cloud billing data that is difficult to analyze using traditional dashboards or SQL, especially when business users need conversational insights. Mapping business terminology to complex cloud billing schemas while maintaining accuracy and explainability is a significant challenge.',
    solution:
      'Built an AI-powered FinOps assistant using agentic AI architecture with LangGraph orchestration, automated cost anomaly detection, and natural language querying of cloud billing data.',
    outcome:
      'Reduced cloud cost analysis time by 85%, identified $2.3M in annual savings opportunities, and enabled real-time cost optimization recommendations.',
  },
  {
    id: 4,
    title: 'Cloud Billing Analyst Platform',
    challenge:
      'An organization managing multi-cloud environments lacked a unified platform for billing analysis, making it difficult to forecast costs and allocate spending across business units.',
    solution:
      'Developed a cloud billing analyst platform with automated data ingestion, ML-based cost forecasting, interactive dashboards, and AI-driven recommendations for resource optimization.',
    outcome:
      'Consolidated billing data from 4 cloud providers into a single platform, improved cost forecasting accuracy to 92%, and reduced monthly FinOps reporting effort by 70%.',
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'The Dashboard Said Everything Was Fine',
    excerpt:
      'Why traditional monitoring dashboards fail to capture the nuanced failures of AI systems in production — and what to measure instead.',
    date: 'March 15, 2026',
    readTime: '8 min read',
    href: 'https://github.com/abhigyaailab/blogs/blob/main/The%20Dashboard%20Said%20Everything%20Was%20Fine',
  },
  {
    id: 2,
    title: 'The Agent Was Working Fine. The Data Was Not',
    excerpt:
      'A deep dive into how data quality issues silently undermine agentic AI systems, and practical strategies for building data-aware agents.',
    date: 'February 28, 2026',
    readTime: '10 min read',
    href: 'https://github.com/abhigyaailab/blogs/blob/main/The%20Agent%20Was%20Working%20Fine.%20The%20Data%20Was%20Not_',
  },
  {
    id: 3,
    title: 'When Your AI Agent Scores 87 Percent and Still Gets It Wrong',
    excerpt:
      'The gap between evaluation metrics and real-world performance — why high benchmark scores don\'t guarantee production reliability.',
    date: 'February 10, 2026',
    readTime: '7 min read',
    href: 'https://github.com/abhigyaailab/blogs/blob/main/AI%20Agent%20Scores%2087%20Percent%20and%20Still%20Gets%20It%20Wrong%20(1).txt',
  },
]

export const contactInfo = {
  email: 'abhigyaailab@gmail.com',
  phone: '+91-9036467807',
  linkedin: 'https://www.linkedin.com/in/shuchismitasahu/',
}
