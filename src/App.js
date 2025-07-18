import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, Mail, Linkedin, Github, BarChart, Code, Database, FileText, Bot, TrendingUp, ChevronLeft, BookOpen, Layers, Zap, Briefcase, Award, GraduationCap, ExternalLink, ChevronRight, MessageSquare, Calendar } from 'lucide-react';

// Import the new InsightsPage component
import InsightsPage from './InsightsPage'; // Assuming InsightsPage.js is in the same directory

// Define project data
const projects = [
  {
    id: 'ecommerce-sales',
    title: 'E-commerce Sales Analysis',
    description: 'Developed a comprehensive Power BI dashboard to track key e-commerce metrics, identify sales trends, and optimize marketing strategies.',
    image: 'https://placehold.co/600x300/8B5CF6/FFFFFF?text=E-commerce+Dashboard',
    tags: ['Power BI', 'SQL', 'Excel'],
    liveDemo: '#',
    githubRepo: '#',
    caseStudy: '#',
    fullDescription: 'This project involved extracting sales data from a retail database, performing extensive data cleaning and transformation using SQL and Power Query, and building an interactive dashboard in Power BI. Key insights included identifying top-performing products, regional sales variations, and customer purchasing patterns. The dashboard empowered the marketing team to target campaigns more effectively and improve inventory management.'
  },
  {
    id: 'crypto-analytics',
    title: 'Real-time Crypto Analytics',
    description: 'Built a Python-based real-time analytics system to monitor cryptocurrency market trends, volatility, and sentiment using public APIs.',
    image: 'https://placehold.co/600x300/EC4899/FFFFFF?text=Crypto+Dashboard',
    tags: ['Python', 'APIs', 'Real-time'],
    liveDemo: '#',
    githubRepo: '#',
    caseStudy: '#',
    fullDescription: 'Leveraging Python and libraries like Pandas and Requests, this project connected to various cryptocurrency APIs to fetch live market data. The system processed data streams to calculate real-time metrics suchs as price changes, trading volumes, and social media sentiment. The goal was to provide traders with immediate insights into market movements, helping them make informed decisions faster.'
  },
  {
    id: 'churn-prediction',
    title: 'AI-driven Churn Prediction',
    description: 'Implemented machine learning models in Python to predict customer churn, enabling proactive retention strategies for a telecom client.',
    image: 'https://placehold.co/600x300/6D28D9/FFFFFF?text=Customer+Churn+Prediction',
    tags: ['Python', 'Machine Learning', 'AI Tools'],
    liveDemo: '#',
    githubRepo: '#',
    caseStudy: '#',
    fullDescription: 'This project focused on building a predictive model to identify customers at high risk of churning. Using Python with Scikit-learn, various classification algorithms (e.g., Logistic Regression, Random Forest, Gradient Boosting) were explored. Feature engineering was crucial, incorporating customer demographics, service usage, and historical interaction data. The final model achieved high accuracy, allowing the client to implement targeted retention campaigns.'
  },
  {
    id: 'marketing-campaign',
    title: 'Marketing Campaign Performance',
    description: 'Analyzed marketing campaign data to identify effective channels and optimize ROI using Tableau visualizations.',
    image: 'https://placehold.co/600x300/3B82F6/FFFFFF?text=Marketing+Campaign',
    tags: ['Tableau', 'SQL', 'Marketing Analytics'],
    liveDemo: '#',
    githubRepo: '#',
    caseStudy: '#',
    fullDescription: 'This project involved a deep dive into marketing campaign data from various sources. SQL was used to aggregate and clean the data, which was then imported into Tableau for visualization. Interactive dashboards were created to track key performance indicators (KPIs) such as conversion rates, cost per acquisition, and customer lifetime value. The analysis led to recommendations for reallocating marketing spend to more profitable channels.'
  },
  {
    id: 'hr-analytics',
    title: 'HR Employee Attrition Analysis',
    description: 'Conducted an in-depth analysis of HR data to understand factors contributing to employee attrition and propose solutions.',
    image: 'https://placehold.co/600x300/10B981/FFFFFF?text=HR+Analytics',
    tags: ['Excel', 'Power BI', 'HR Analytics'],
    liveDemo: '#',
    githubRepo: '#',
    caseStudy: '#',
    fullDescription: 'Using a combination of Excel for initial data manipulation and Power BI for dashboarding, this project explored factors influencing employee attrition. Data points included salary, performance ratings, tenure, department, and job satisfaction. Visualizations highlighted trends and correlations, leading to actionable insights for improving employee retention strategies, such as targeted training programs and improved work-life balance initiatives.'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Optimization',
    description: 'Developed a dashboard to visualize and optimize supply chain logistics, reducing operational costs and improving efficiency.',
    image: 'https://placehold.co/600x300/F59E0B/FFFFFF?text=Supply+Chain',
    tags: ['Power BI', 'SQL', 'Supply Chain'],
    liveDemo: '#',
    githubRepo: '#',
    caseStudy: '#',
    fullDescription: 'This project focused on enhancing supply chain efficiency by analyzing data related to inventory levels, shipping times, and supplier performance. SQL queries were used to integrate data from disparate systems, and Power BI was utilized to create a centralized dashboard. The dashboard provided real-time visibility into the supply chain, enabling stakeholders to identify bottlenecks, optimize routes, and reduce overall operational costs.'
  }
];

// Define blog post data
const blogPosts = [
  {
    id: 'sql-tips-1',
    title: '5 Essential SQL Tips for Data Analysts',
    date: 'July 15, 2025',
    snippet: 'Mastering these SQL techniques can significantly boost your data analysis efficiency.',
    content: 'SQL is the backbone of data analysis. Here are five tips to help you write cleaner, more efficient queries: 1. Use CTEs for readability. 2. Understand Window Functions. 3. Optimize your JOINs. 4. Index frequently queried columns. 5. Leverage CASE statements for conditional logic. These practices will make your SQL code more robust and maintainable.'
  },
  {
    id: 'powerbi-viz',
    title: 'Creating Impactful Visualizations in Power BI',
    date: 'July 10, 2025',
    snippet: 'Beyond default charts: techniques for truly impactful Power BI dashboards.',
    content: 'Power BI offers a vast array of visualization options. To create impactful dashboards, focus on: 1. Choosing the right chart type for your data. 2. Using consistent color palettes. 3. Minimizing clutter and maximizing data-ink ratio. 4. Incorporating interactive elements like slicers and drill-throughs. 5. Telling a clear story with your data. Remember, a good visualization simplifies complex information.'
  },
  {
    id: 'ai-trends-2025',
    title: 'AI in Data Analytics: Trends for 2025 and Beyond',
    date: 'July 01, 2025',
    snippet: 'Exploring the future of AI in enhancing data analysis capabilities.',
    content: 'The integration of AI in data analytics is rapidly evolving. Key trends for 2025 include: 1. Automated Machine Learning (AutoML) for faster model deployment. 2. Natural Language Processing (NLP) for unstructured data analysis. 3. Explainable AI (XAI) for transparent model interpretations. 4. Real-time AI for immediate insights. 5. AI-powered data preparation tools. Data analysts who embrace these tools will be at the forefront of innovation.'
  }
];

// Define LinkedIn-style posts data
const linkedinPosts = [
  {
    id: 'post-1',
    author: 'Teja Siddhartha Rajam',
    profilePic: 'https://placehold.co/50x50/A78BFA/FFFFFF?text=TS', // Placeholder for profile pic
    date: '1 hour ago',
    content: 'Just wrapped up a deep dive into customer segmentation using K-Means clustering in Python! The insights on distinct customer behaviors are fascinating. Always amazed by how much value you can extract from seemingly simple data. #DataScience #MachineLearning #CustomerAnalytics',
    likes: 25,
    comments: 5,
  },
  {
    id: 'post-2',
    author: 'Teja Siddhartha Rajam',
    profilePic: 'https://placehold.co/50x50/6EE7B7/FFFFFF?text=TS', // Placeholder for profile pic
    date: 'Yesterday',
    content: 'SQL tip of the day: Ever struggled with complex aggregations? WINDOW functions are your best friend! ROW_NUMBER(), RANK(), and SUM() OVER (PARTITION BY...) can simplify so much. Game changer for reporting! #SQLTips #DataAnalytics #Database',
    likes: 42,
    comments: 12,
  },
  {
    id: 'post-3',
    author: 'Teja Siddhartha Rajam',
    profilePic: 'https://placehold.co/50x50/FCD34D/FFFFFF?text=TS', // Placeholder for profile pic
    date: '3 days ago',
    content: 'Attended an insightful webinar on the ethical implications of AI in data analysis. Bias detection and fairness in algorithms are critical. As data professionals, our responsibility goes beyond just numbers. #AIethics #DataForGood #ResponsibleAI',
    likes: 18,
    comments: 3,
  },
];


// Define education data
const education = [
  {
    degree: 'PG Diploma - Web Design and Development',
    institution: 'Conestoga College, Ontario, Canada',
  },
  {
    degree: 'B.Tech - Computer Science and Engineering',
    institution: 'Siddhartha Acadmy of Higher Education, Vijayawada, India',
  },
];

// Define certifications data
const certifications = [
  {
    name: 'Data Analysis with Python',
    issuer: 'IBM SkillsBuild',
    link: '#', // Placeholder for actual certificate link
  },
  {
    name: 'Big Data 101',
    issuer: 'IBM SkillsBuild',
    link: '#',
  },
  {
    name: 'Intro to Data Science',
    issuer: '365 Data Science',
    link: '#',
  },
  {
    name: 'Statistics Certificate',
    issuer: '365 Data Science',
    link: '#',
  },
  {
    name: 'SQL Certificate',
    issuer: 'HackerRank',
    link: '#',
  },
];


// Project Detail Page Component
const ProjectDetailPage = ({ project, setCurrentPage, theme }) => {
  if (!project) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
        <p className="text-xl mb-4">Project not found.</p>
        <button onClick={() => setCurrentPage('projects')} className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200">Back to Projects</button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-inter pt-20 pb-10 px-6 md:px-12 lg:px-24 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      <button
        onClick={() => setCurrentPage('projects')}
        className={`flex items-center mb-8 px-4 py-2 rounded-full font-semibold transition-all duration-300
          ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        <ChevronLeft size={20} className="mr-2" /> Back to Projects
      </button>

      <div className={`max-w-4xl mx-auto rounded-xl p-8 shadow-2xl
        ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {project.title}
        </h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-lg mb-8 shadow-lg"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x300/CCCCCC/000000?text=Image+Error"; }}
        />
        <p className="text-lg leading-relaxed mb-6 opacity-90">
          {project.fullDescription}
        </p>

        <div className="flex flex-wrap gap-2 text-sm font-medium mb-8">
          {project.tags.map(tag => (
            <span key={tag} className={`px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Project Links:</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <BarChart size={20} className="mr-2" /> Live Demo
            </a>
          )}
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500
                ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <Github size={20} className="mr-2" /> GitHub Repo
            </a>
          )}
          {project.caseStudy && (
            <a
              href={project.caseStudy}
              download={`${project.id}_CaseStudy.pdf`}
              className={`flex items-center px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500
                ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <Download size={20} className="mr-2" /> Case Study (PDF)
            </a>
          )}
        </div>

        {/* Placeholder for AI Corner / GPT explanation */}
        <div className={`mt-10 p-6 rounded-lg shadow-inner
          ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
          <h3 className="text-xl font-semibold mb-3 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            <Bot size={24} className="mr-2" /> AI Corner: Project Explained
          </h3>
          <p className="text-base opacity-80">
            "This project leverages [key technology] to solve [problem]. In simple terms, it's like [simple analogy]. The core insight was [key finding], leading to [impact]. This demonstrates my ability to [skill]."
          </p>
        </div>
      </div>
    </div>
  );
};

// Blog Page Component
const BlogPage = ({ setCurrentPage, theme, blogPosts }) => { // Added blogPosts prop
  return (
    <div className={`min-h-screen font-inter pt-20 pb-10 px-6 md:px-12 lg:px-24 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Daily Byte Blog & Posts
      </h1>
      <div className="max-w-4xl mx-auto grid gap-8">
        {/* LinkedIn-style Posts Section */}
        <div className={`rounded-xl p-6 shadow-xl
          ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">My Latest Posts</h2>
          <div className="space-y-6">
            {linkedinPosts.map(post => (
              <div key={post.id} className={`p-4 rounded-lg shadow-md
                ${theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-300'}`}>
                <div className="flex items-center mb-3">
                  <img src={post.profilePic} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-lg">{post.author}</p>
                    <p className="text-sm opacity-70">{post.date}</p>
                  </div>
                </div>
                <p className="mb-3 opacity-90">{post.content}</p>
                <div className="flex items-center text-sm opacity-80">
                  <span className="flex items-center mr-4"><Layers size={16} className="mr-1" /> {post.likes} Likes</span>
                  <span className="flex items-center"><MessageSquare size={16} className="mr-1" /> {post.comments} Comments</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Blog Articles Section */}
        <div className={`rounded-xl p-6 shadow-xl
          ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">In-depth Articles</h2>
          <div className="space-y-6">
            {blogPosts.map(post => (
              <div key={post.id} className={`rounded-xl p-6 shadow-md transform hover:scale-[1.01] transition-all duration-300
                ${theme === 'dark' ? 'bg-gray-700 border border-gray-600 hover:border-purple-500' : 'bg-gray-100 border border-gray-300 hover:border-purple-500'}`}>
                <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{post.title}</h3>
                <p className="text-sm opacity-70 mb-3">{post.date}</p>
                <p className="mb-4 opacity-80">{post.snippet}</p>
                <button
                  onClick={() => setCurrentPage('blog-post', post.id)}
                  className="flex items-center text-purple-600 hover:underline font-semibold"
                >
                  Read More <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Post Detail Component
const BlogPostDetail = ({ post, setCurrentPage, theme }) => {
  if (!post) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
        <p className="text-xl mb-4">Blog post not found.</p>
        <button onClick={() => setCurrentPage('blog')} className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200">Back to Blog</button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-inter pt-20 pb-10 px-6 md:px-12 lg:px-24 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      <button
        onClick={() => setCurrentPage('blog')}
        className={`flex items-center mb-8 px-4 py-2 rounded-full font-semibold transition-all duration-300
          ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        <ChevronLeft size={20} className="mr-2" /> Back to Blog
      </button>

      <div className={`max-w-4xl mx-auto rounded-xl p-8 shadow-2xl
        ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {post.title}
        </h1>
        <p className="text-sm opacity-70 mb-6">{post.date}</p>
        <p className="text-lg leading-relaxed opacity-90">
          {post.content}
        </p>
      </div>
    </div>
  );
};

// Project Card Component (Re-introduced for better modularity and styling)
const ProjectCard = ({ project, navigateToPage, theme }) => {
  return (
    <div className={`rounded-xl p-6 shadow-xl transform hover:scale-[1.02] transition-all duration-300 group cursor-pointer
      ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500' : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200 hover:border-purple-500'}`}
      onClick={() => navigateToPage('project-detail', project.id)} // Main card click navigates to detail page
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x300/CCCCCC/000000?text=Project+Image+Error"; }}
        />
        <div className={`absolute inset-0 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${theme === 'dark' ? 'bg-black/60' : 'bg-white/60'}`}>
          <button className="px-4 py-2 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700">View Details</button>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{project.title}</h3>
      <p className="mb-4 opacity-80">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 text-sm font-medium mb-4">
        {project.tags.map(tag => (
          <span key={tag} className={`px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Prevent card click from triggering
          className="flex items-center text-purple-600 hover:underline font-semibold text-sm"
        >
          <BarChart size={16} className="mr-1" /> Live Demo
        </a>
        <a
          href={project.caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Prevent card click from triggering
          className="flex items-center text-purple-600 hover:underline font-semibold text-sm"
        >
          <BookOpen size={16} className="mr-1" /> Case Study
        </a>
      </div>
    </div>
  );
};


// Main App component
const App = () => {
  const [theme, setTheme] = useState('light'); // Default to light mode
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'project-detail', 'blog', 'blog-post', 'insights'
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState(null);
  const [currentProjectPageIndex, setCurrentProjectPageIndex] = useState(0); // For project slider

  // Toggle dark/light mode
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Add a class to the html element based on the theme
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section (only for home page sections)
  const scrollToSection = (id) => {
    setCurrentPage('home'); // Ensure we are on the home page before scrolling
    setTimeout(() => { // Small delay to allow page state to update
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToPage = (page, id = null) => {
    setCurrentPage(page);
    if (page === 'project-detail') {
      setSelectedProjectId(id);
    } else {
      setSelectedProjectId(null);
    }
    if (page === 'blog-post') {
      setSelectedBlogPostId(id);
    } else {
      setSelectedBlogPostId(null);
    }
    window.scrollTo(0, 0); // Scroll to top when navigating to a new page
  };

  // Sample skills data (for Toolbox Zone)
  const skills = [
    { name: 'Data Analytics', icon: <BarChart size={48} className="text-purple-500 mb-4" />, description: 'Cleaning, Exploration, Statistical Analysis' },
    { name: 'AI & ML', icon: <Bot size={48} className="text-pink-500 mb-4" />, description: 'Machine Learning, Predictive Modeling' },
    { name: 'Python', icon: <Code size={48} className="text-blue-500 mb-4" />, description: 'Pandas, NumPy, Scikit-learn, Matplotlib' },
    { name: 'SQL', icon: <Database size={48} className="text-green-500 mb-4" />, description: 'Database Querying, Data Manipulation' },
    { name: 'Excel', icon: <FileText size={48} className="text-emerald-500 mb-4" />, description: 'Advanced Formulas, Data Modeling, VBA' },
    { name: 'Power BI', icon: <BarChart size={48} className="text-indigo-500 mb-4" />, description: 'Dashboard Design, Data Modeling, DAX' },
    { name: 'Tableau', icon: <Layers size={48} className="text-orange-500 mb-4" />, description: 'Interactive Visualizations, Storytelling' },
    { name: 'Real-time Analytics', icon: <Zap size={48} className="text-red-500 mb-4" />, description: 'Streaming Data, Live Dashboards' },
    { name: 'Cloud Platforms', icon: <Briefcase size={48} className="text-cyan-500 mb-4" />, description: 'AWS, GCP, Azure Fundamentals' },
    { name: 'Data Warehousing', icon: <Database size={48} className="text-purple-700 mb-4" />, description: 'ETL, Data Modeling, OLAP' },
  ];

  // Logic for project slider
  const projectsPerPage = 2;
  const totalProjectPages = Math.ceil(projects.length / projectsPerPage);

  const displayedProjects = projects.slice(
    currentProjectPageIndex * projectsPerPage,
    (currentProjectPageIndex + 1) * projectsPerPage
  );

  const goToNextProjects = () => {
    setCurrentProjectPageIndex((prevIndex) =>
      (prevIndex + 1) % totalProjectPages
    );
  };

  const goToPrevProjects = () => {
    setCurrentProjectPageIndex((prevIndex) =>
      (prevIndex - 1 + totalProjectPages) % totalProjectPages
    );
  };


  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <section id="hero" className={`relative h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden
              ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-blue-100'}`}>
              <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                {/* Subtle background pattern/texture */}
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse-slow"></div>
              </div>
              <div className="relative z-10 text-center max-w-5xl mx-auto px-4"> {/* Added max-w-5xl and px-4 for better control */}
                {/* "Hey, I'm Sid" - now in its own H2 for independent styling */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in-up">
                  Hey, I’m Sid
                </h2>
                {/* Main Headline - now in its own H1 */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in-up delay-100">
                  Empowering Smarter Decisions with Data
                </h1>
                <p className={`text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  I strategically transform complex datasets into precise, actionable intelligence using Python, SQL, Power BI, and AI, driving optimal business outcomes.
                </p>
                {/* Removed quick access buttons from here, they are now in About Me */}
              </div>

            </section>

            {/* About Section */}
            <section id="about" className={`py-20 px-6 md:px-12 lg:px-24
              ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
                <div className={`rounded-xl shadow-2xl p-8 border
                  ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}> {/* Changed background to light */}
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="order-2 md:order-1">
                      <h3 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Hello, I'm Teja Siddhartha Rajam</h3>
                      <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Data & BI Analyst | Data Storyteller | Insight Crafter | Attention to Detail | Turning Raw Data into Insights</p>
                      <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                        I'm a data analyst who doesn't just crunch numbers; I tell stories. My passion lies in transforming raw, complex datasets into clear, actionable insights that drive real-world impact. With a blend of analytical rigor and creative problem-solving, I bridge the gap between data and strategy.
                      </p>
                      <p className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                        My expertise spans the entire data lifecycle, from meticulous cleaning and robust modeling to compelling visualization and predictive analytics. I thrive on uncovering hidden patterns and empowering businesses with the intelligence they need to innovate and grow. Let's turn your data into your next big advantage.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-8">
                          <div className={`p-4 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-200'}`}>
                              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">4+</h3>
                              <p className="text-sm opacity-80">Major Projects</p>
                              <p className="text-xs opacity-60">Data Analysis Projects</p>
                          </div>
                          <div className={`p-4 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">5+</h3>
                              <p className="text-sm opacity-80">Certifications</p>
                              <p className="text-xs opacity-60">Professional Credentials</p>
                          </div>
                          <div className={`p-4 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">30%</h3>
                              <p className="text-sm opacity-80">Improvement</p>
                              <p className="text-xs opacity-60">User Reactivation Boost</p>
                          </div>
                      </div>
                    </div>
                    {/* Right Column: Photo and Social Media */}
                    <div className="order-1 md:order-2 flex flex-col items-center justify-center space-y-8">
                      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500">
                        <img
                          src="/sid-photo.jpg" // Using a placeholder for the profile image
                          alt="Teja Siddhartha Rajam"
                          className="w-full h-full object-cover object-left"
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/320x320/CCCCCC/000000?text=Profile+Photo"; }}
                        />
                      </div>
                      <div className="flex justify-center space-x-6 text-3xl">
                        <a href="https://www.linkedin.com/in/rtejasiddhartha/" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="LinkedIn">
                          <Linkedin size={36} />
                        </a>
                        <a href="https://github.com/rtejasiddhartha/" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="GitHub">
                          <Github size={36} />
                        </a>
                        <a href="mailto:rajamtejasiddhartha@gmail.com" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="Mail">
                          <Mail size={36} />
                        </a>
                      </div>
                      <a href="#" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                        <Download size={20} className="mr-2" /> Download Resume (PDF)
                      </a>
                      <a href="#" className={`px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center
                        ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                        <Award size={20} className="mr-2" /> View Certifications
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Education & Certifications Section */}
            <section id="education-certifications" className={`py-20 px-6 md:px-12 lg:px-24
              ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Education & Certifications</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Education Column */}
                  <div>
                    <h3 className="text-3xl font-semibold mb-8 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                      <GraduationCap size={32} className="mr-3" /> Education
                    </h3>
                    <div className="space-y-6">
                      {education.map((item, index) => (
                        <div key={index} className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01]
                          ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                          <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{item.institution}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications Column */}
                  <div>
                    <h3 className="text-3xl font-semibold mb-8 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
                      <Award size={32} className="mr-3" /> Certifications
                    </h3>
                    <div className="space-y-6">
                      {certifications.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01] group
                          ${theme === 'dark' ? 'bg-gray-800 border border-gray-700 hover:border-green-500' : 'bg-white border border-gray-200 hover:border-green-500'}`}>
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{item.name}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.issuer}</p>
                          </div>
                          <ExternalLink size={20} className="text-gray-500 group-hover:text-green-500 transition-colors duration-200" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-20 px-6 md:px-12 lg:px-24
              ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-8"> {/* Changed to 2 columns */}
                  {displayedProjects.map(project => (
                    <ProjectCard key={project.id} project={project} navigateToPage={navigateToPage} theme={theme} />
                  ))}
                </div>
                {totalProjectPages > 1 && (
                  <div className="flex justify-center items-center mt-12 space-x-4">
                    <button
                      onClick={goToPrevProjects}
                      disabled={currentProjectPageIndex === 0}
                      className={`p-3 rounded-full shadow-md transition-all duration-300
                        ${currentProjectPageIndex === 0 ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-110'}`}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <span className="text-lg font-semibold">
                      {currentProjectPageIndex + 1} / {totalProjectPages}
                    </span>
                    <button
                      onClick={goToNextProjects}
                      disabled={currentProjectPageIndex === totalProjectPages - 1}
                      className={`p-3 rounded-full shadow-md transition-all duration-300
                        ${currentProjectPageIndex === totalProjectPages - 1 ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-110'}`}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Skills Section (Toolbox Zone) */}
            <section id="skills" className={`py-20 px-6 md:px-12 lg:px-24
              ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">My Toolbox</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {skills.map((skill, index) => (
                    <div key={index} className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 group
                      ${theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-200'}`}>
                      {skill.icon}
                      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                      <p className="text-center text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Form & Social Links */}
            <section id="contact" className={`py-20 px-6 md:px-12 lg:px-24
              ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <div className="max-w-xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">
                  Get in Touch
                </h2>
                <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border
                  ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Name</label>
                      <input type="text" id="name" name="name" className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                        ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'}`} placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Email</label>
                      <input type="email" id="email" name="email" className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                        ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'}`} placeholder="your@example.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Message</label>
                      <textarea id="message" name="message" rows="5" className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                        ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'}`} placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Connect with Me</h3>
                  <div className="flex justify-center space-x-8 text-3xl">
                    <a href="https://www.linkedin.com/in/rtejasiddhartha/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" aria-label="LinkedIn">
                      <Linkedin size={36} />
                    </a>
                    <a href="https://github.com/rtejasiddhartha/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" aria-label="GitHub">
                      <Github size={36} />
                    </a>
                    <a href="mailto:rajamtejasiddhartha@gmail.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" aria-label="Mail">
                      <Mail size={36} />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      case 'project-detail':
        const project = projects.find(p => p.id === selectedProjectId);
        return <ProjectDetailPage project={project} setCurrentPage={navigateToPage} theme={theme} />;
      case 'blog': // This case is for the full blog listing (Daily Byte Blog & Posts)
        return <BlogPage setCurrentPage={navigateToPage} theme={theme} blogPosts={blogPosts} linkedinPosts={linkedinPosts} />;
      case 'blog-post':
        const post = blogPosts.find(p => p.id === selectedBlogPostId);
        return <BlogPostDetail post={post} setCurrentPage={navigateToPage} theme={theme} />;
      case 'insights': // New case for the InsightsPage
        return <InsightsPage theme={theme} navigateToPage={navigateToPage} blogPosts={blogPosts} linkedinPosts={linkedinPosts} />;
      default:
        return null;
    }
  };

  return (
    <div className={`font-inter min-h-screen ${theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? (theme === 'dark' ? 'bg-gray-900/90 shadow-lg' : 'bg-white/90 shadow-md') : 'bg-transparent'} backdrop-blur-md py-4`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => navigateToPage('home')} className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity duration-200">Sid's Portfolio</button>
          <nav className="space-x-10 hidden md:flex">
            <button onClick={() => scrollToSection('hero')} className="text-2xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-2xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-2xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-2xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Toolbox</button>
            {/* Updated navigation for Insights */}
            <button onClick={() => navigateToPage('insights')} className="text-2xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Insights</button>
            {/* Removed AI link as its content is now in InsightsPage */}
            <button onClick={() => scrollToSection('contact')} className="text-2xl font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Contact</button>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      {renderPageContent()}

      {/* Footer */}
      <footer className={`py-10 px-6 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-800'} text-gray-300 text-center`}>
        <p>&copy; 2025 Teja Siddhartha Rajam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;