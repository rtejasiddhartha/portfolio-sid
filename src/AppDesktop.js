import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Sun, Moon, Download, Mail, Linkedin, Github, BarChart, Code, Database, FileText, Bot, TrendingUp, ChevronLeft, BookOpen, Layers, Zap, Briefcase, Award, GraduationCap, ExternalLink, ChevronRight, MessageSquare, Calendar, Menu, X } from 'lucide-react';

// Import the InsightsPage component (will be duplicated and adjusted for desktop)
import InsightsPageDesktop from './InsightsPageDesktop';

// Define global styles for desktop
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    line-height: 1.5;
  }
  
  /* Dark mode class on html element */
  html.dark {
    /* Define dark mode variables or direct styles if not using Tailwind's dark: prefix */
  }
`;

// Define Keyframes (duplicated for desktop)
const pulseSlow = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.2;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// HeroSection - Adjusted padding and ensured single background element for desktop
const HeroSection = ({ theme, children }) => {
  return (
    <section id="hero" className={`relative h-screen flex items-center justify-center px-24 py-12 overflow-hidden 
      ${theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900' 
        : 'bg-gradient-to-br from-gray-100 via-gray-50 to-blue-100'} 
      transition-colors duration-300`}>
      <HeroBackgroundPattern /> 
      {children}
    </section>
  );
};

// HeroBackgroundPattern styled component definition (duplicated for desktop)
const HeroBackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(ellipse at center, rgba(147, 51, 234, 0.1), transparent, transparent);
  animation: ${pulseSlow} 8s infinite ease-in-out;
  transition: opacity 0.5s ease-in-out; 
`;

// HeroContent remains the same, using Tailwind classes (duplicated for desktop)
const HeroContent = ({ children }) => {
  return (
    <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
      {children}
    </div>
  );
};

// Combined Hero Heading Component using styled-components (GRANULAR FONT SIZES FOR DESKTOP)
const StyledCombinedHeroHeading = styled.h1`
  font-weight: 800; /* font-extrabold */
  margin-bottom: 0.5rem; /* Adjusted from 1rem to move content up */
  padding-bottom: 0.25rem; /* Adjusted from 0.5rem for better spacing */
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: 0.1s;
  
  background-image: linear-gradient(to right, #a855f7, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  line-height: 1.0; 

  /* --- DESKTOP SPECIFIC STYLES --- */
  & > span.hero-subtitle-text {
    display: block;
    font-size: 3.5rem; /* Kept same font size */
    margin-bottom: 0.25rem; /* Adjusted spacing to move content up */
    line-height: 1.1; 
  }

  & > span.hero-title-text {
    display: block;
    font-size: 5.5rem; /* Reduced from 6.5rem to fit on fewer lines */
    line-height: 1.1; /* Tighter line height for multi-line text */
    padding: 0 2rem; /* Reduced horizontal padding */
  }
`;

// HeroDescription remains the same, using styled-components (duplicated and adjusted for desktop)
const HeroDescription = styled.p`
  font-size: 1.25rem; /* Increased from 1.1rem */
  margin-top: 2rem; /* Added top margin for spacing from heading */
  margin-bottom: 2.5rem; /* Kept original mb-10 */
  opacity: 0.9;
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: 0.2s;

  color: ${props => props.theme === 'dark' ? '#d1d5db' : '#374151'};
`;

// Define project data (DUPLICATED FOR DESKTOP)
const projects = [
{
  id: 'crypto-market-analytics',
  title: 'Automated Crypto Market Analytics Platform',
  description: 'Built an end-to-end analytics system to monitor crypto market trends, coin performance, and volatility using automated pipelines and Power BI dashboards.',
  image: '/PROJECT-CRYPTO.png',
  tags: ['Python', 'SQL', 'BigQuery', 'Power BI', 'n8n', 'AI','Excel'],
  liveDemo: 'https://app.powerbi.com/view?r=eyJrIjoiZDg3MGUyMjQtZjJlZC00MmZmLTk2NTItZTQyOGI5Y2ZjMTcxIiwidCI6IjA0MzJkMmY1LTA0MzUtNGJjMy1iNDBjLThhOTdmZTJkODc2YSJ9',          // Power BI / hosted demo link
  githubRepo: 'https://github.com/rtejasiddhartha/n8n-crypto-live',        // GitHub repo link
  caseStudy: null,        // keep null / unused (no case study)
  fullDescription: 'This project implements a production-style crypto analytics pipeline, starting from automated data ingestion using n8n and CoinGecko APIs, followed by data cleaning and transformation in Python. Analytics-ready tables were modeled in BigQuery to support both trend-based and snapshot analysis. Power BI dashboards were built to track overall market health, coin-level performance, dominance, volatility, and 24-hour changes, with slicer-aware logic to handle single and multi-coin selections accurately.',
  aiSummary: 'This project demonstrates how automated data pipelines, cloud modeling, and BI dashboards can be combined to monitor fast-moving crypto markets. It highlights my ability to design end-to-end analytics workflows, define meaningful KPIs, and translate complex market data into clear, decision-ready insights.'
},
{
  id: 'customer-churn-analysis',
  title: 'Customer Churn Analysis & Risk Segmentation',
  description: 'Built an end-to-end churn analytics solution using Python and SQL to predict churn risk and support data-driven retention strategies.',
  image: '/PROJECT-CHURN.png',
  tags: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'EDA','Excel'],
  liveDemo: 'https://app.powerbi.com/view?r=eyJrIjoiYWEyYzIwYWEtMTQ2Mi00MjUzLWFkMjEtZTQ4MmFkY2IzY2Y3IiwidCI6IjA0MzJkMmY1LTA0MzUtNGJjMy1iNDBjLThhOTdmZTJkODc2YSJ9',          // Power BI dashboard (to be added)
  githubRepo: 'https://github.com/rtejasiddhartha/customer-churn-analysis',
  caseStudy: null,        // no case study
  fullDescription: 'This project covers the complete analytics lifecycle for churn prediction in a subscription-based business. The workflow includes data cleaning, exploratory data analysis, outlier detection, and feature classification using Python. A Logistic Regression model was built with class-imbalance handling to predict churn probability. Customers were segmented into Low, Medium, and High risk groups, and churn risk was mapped to actionable business strategies such as retention calls, targeted offers, and monitoring. The final output was a BI-ready dataset designed for dashboards and operational decision-making.',
  aiSummary: 'This project demonstrates how predictive modeling and risk segmentation can be applied to real business problems. It highlights my ability to translate customer behavior data into churn risk signals and align model outputs with practical retention actions.'
},
{
  id: 'healthcare-wearable-analytics',
  title: 'Healthcare Wearable Data Analytics',
  description: 'Analyzed multi-year wearable health data to detect sleep, activity, and heart-rate risk patterns using Python and Power BI.',
  image: '/PROJECT-HEALTHCARE.png',
  tags: ['Python', 'Data Cleaning', 'Feature Engineering', 'Machine Learning', 'Power BI'],
  liveDemo: '#',          // Power BI dashboard / image link
  githubRepo: '#',        // GitHub repo (if public)
  caseStudy: null,        // no case study
  fullDescription: 'This project involved transforming raw XML wearable data into structured, analysis-ready datasets using Python. Data quality validation and normalization logic were applied to handle device sync gaps, inconsistent intervals, and missing days. Sleep quality features such as efficiency, stage distribution, fragmentation, and extreme sleep flags were engineered alongside activity and movement metrics. Heart rate and HRV analytics were performed to capture physiological stress signals. All features were combined into a unified longitudinal health timeline, enabling trend-based risk detection rather than daily snapshot analysis. A Logistic Regression model was used to classify elevated health-risk days, and insights were delivered through Power BI dashboards for patient-level monitoring.',
  aiSummary: 'This project demonstrates how wearable health data can be transformed into meaningful health insights through feature engineering and predictive analytics. It highlights my ability to handle noisy real-world data, engineer interpretable features, and deliver risk-focused dashboards suitable for preventive health analysis.'
},
{
  id: 'na-music-retail-analytics',
  title: 'North America Music Retail Analytics',
  description: 'Designed and built an end-to-end SQL analytics platform to analyze sales, customers, and artist performance across a multi-store music retail business.',
  image: '/PROJECT-MUSIC.png',
  tags: ['SQL', 'MySQL', 'Data Modeling', 'Advanced Queries'],
  liveDemo: '#',          // optional image / dashboard link
  githubRepo: '#',        // GitHub repo link
  caseStudy: null,        // no case study
  fullDescription: 'This project simulates a large-scale music retail business operating across the United States and Canada. A fully normalized 17-table relational schema was designed covering artists, albums, tracks, customers, vendors, invoices, orders, and multi-location store operations. Primary and foreign keys, constraints, and triggers were implemented to enforce data integrity. Advanced SQL techniques such as CTEs, window functions, conditional aggregations, and analytical joins were used to analyze over 60,000 orders and 130,000 order items. Business insights were generated on revenue growth, customer purchasing behavior, vendor spending, inventory movement, artist and album performance, and store-wise sales distribution.',
  aiSummary: 'This project demonstrates strong SQL-centric analytical problem solving. It highlights my ability to design relational schemas, write complex analytical queries, and extract meaningful business insights using SQL as the primary analytics tool.'
}

];


// Define blog post data (DUPLICATED FOR DESKTOP)
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
    content: 'Power BI offers a vast array of visualization options. To create impactful dashboards, focus on: 1. Choosing the right chart type for your data. 2. Using consistent color palettes. 3. Minimizing clutter and maximizing data-ink ratio. 4. Incorporating interactive elements like slicers and and drill-throughs. 5. Telling a clear story with your data. Remember, a good visualization simplifies complex information.'
  },
  {
    id: 'ai-trends-2025',
    title: 'AI in Data Analytics: Trends for 2025 and Beyond',
    date: 'July 01, 2025',
    snippet: 'Exploring the future of AI in enhancing data analysis capabilities.',
    content: 'The integration of AI in data analytics is rapidly evolving. Key trends for 2025 include: 1. Automated Machine Learning (AutoML) for faster model deployment. 2. Natural Language Processing (NLP) for unstructured data analysis. 3. Explainable AI (XAI) for transparent model interpretations. 4. Real-time AI for immediate insights. 5. AI-powered data preparation tools. Data analysts who embrace these tools will be at the forefront of innovation.'
  }
];

// Define LinkedIn-style posts data (DUPLICATED FOR DESKTOP)
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


// Define education data (DUPLICATED FOR DESKTOP)
const education = [
  {
    degree: 'PG Diploma - Web Design and Development',
    institution: 'Conestoga College, Ontario, Canada',
  },
  {
    degree: 'B.Tech - Computer Science and Engineering',
    institution: 'Siddhartha Academy of Higher Education, Vijayawada, India',
  },
];

// Define certifications data (DUPLICATED FOR DESKTOP)
const certifications = [
  {
    name: 'Power BI Essential Training',
    issuer: 'LinkedIn Learning',
    link: 'https://www.linkedin.com/learning/certificates/905824feb9462f5c5d77ca145f54245a43e26880018885ab21c3a95f3899b210',
  },
  {
    name: 'Python for Data Science, AI & Development',
    issuer: 'IBM (Coursera)',
    link: 'https://www.coursera.org/account/accomplishments/verify/TN6I3VEPTUBI',
  },
  {
    name: 'SQL (Basic) Certificate',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/ef19a7334495',
  },
  {
    name: 'Python (Basic) Certificate',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/17598ad277b2',
  },
  {
    name: 'Gemini Proficiency',
    issuer: 'Google',
    link: 'https://edu.google.accredible.com/732b8717-f185-4c21-9124-09fb798839f5',
  },
  {
    name: 'AI Skills Passport',
    issuer: 'EY – Microsoft',
    link: '/Certificate_Ey-Microsoft.pdf',
  }
];


// Project Detail Page Component (DUPLICATED AND ADJUSTED FOR DESKTOP)
const ProjectDetailPage = ({ project, setCurrentPage, theme }) => {
if (!project) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === 'dark'
          ? 'bg-gray-900 text-gray-100'
          : 'bg-gray-50 text-gray-800'
      }`}
    >
      <p className="text-xl mb-4">Project not found.</p>
      <button
        onClick={() => {
          setCurrentPage('home');
          setTimeout(() => {
            const section = document.getElementById('projects');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }}
        className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200"
      >
        Back to Projects
      </button>
    </div>
  );
}

return (
  <div
    className={`min-h-screen font-inter pt-20 pb-10 px-24 ${
      theme === 'dark'
        ? 'bg-gray-900 text-gray-100'
        : 'bg-gray-50 text-gray-800'
    } transition-colors duration-300`}
  >
    <button
      onClick={() => {
        setCurrentPage('home');
        setTimeout(() => {
          const section = document.getElementById('projects');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }}
      className={`flex items-center mb-8 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      <ChevronLeft size={20} className="mr-2" />
      Back to Projects
    </button>

      <div className={`max-w-4xl mx-auto rounded-xl p-8 shadow-2xl
            ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {project.title}
        </h1>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-contain rounded-lg mb-8 shadow-lg"
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
              className={`flex items-center px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <Github size={20} className="mr-2" /> GitHub Repo
            </a>
          )}
          {/* {project.caseStudy && (
            <a
              href={project.caseStudy}
              download={`${project.id}_CaseStudy.pdf`}
              className={`flex items-center px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <Download size={20} className="mr-2" /> Case Study (PDF)
            </a>
          )} */}
        </div>

        <div className={`mt-6 p-6 rounded-lg shadow-inner ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100/50'}`}>
          <h3 className="text-xl font-semibold mb-3 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Logic and Approach
          </h3>
          <p className="text-base opacity-80">
            {project.aiSummary}
          </p>
        </div>
      </div>
    </div>
  );
};

// Blog Page Component (DUPLICATED AND ADJUSTED FOR DESKTOP)
const BlogPage = ({ setCurrentPage, theme, blogPosts, linkedinPosts }) => {
  return (
    <div className={`min-h-screen font-inter pt-20 pb-10 px-24 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
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

    // Blog Post Detail Component (DUPLICATED AND ADJUSTED FOR DESKTOP)
    const BlogPostDetail = ({ post, setCurrentPage, theme }) => {
      if (!post) {
        return (
          <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
            <p className="text-xl mb-4">Blog post not found.</p>
            <button onClick={() => setCurrentPage('blog')} className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200">Back to Blog</button>
          </div>
        );
      }

      return (
        <div className={`min-h-screen font-inter pt-20 pb-10 px-24 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
          <button
            onClick={() => setCurrentPage('blog')}
            className={`flex items-center mb-8 px-4 py-2 rounded-full font-semibold transition-all duration-300
              ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            <ChevronLeft size={20} className="mr-2" /> Back to Blog
          </button>

          <div className={`max-w-4xl mx-auto rounded-xl p-8 shadow-2xl
            ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
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

    // Project Card Component (DUPLICATED AND ADJUSTED FOR DESKTOP)
    const ProjectCard = ({ project, navigateToPage, theme }) => {
      return (
        <div className={`rounded-xl p-6 shadow-xl transform hover:scale-[1.02] transition-all duration-300 group cursor-pointer
          ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500' : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200 hover:border-purple-500'}`}
          onClick={() => navigateToPage('project-detail', project.id)}
        >
          <div className="relative h-48 mb-4 rounded-lg overflow-hidden shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg" // Changed to h-64 and object-cover for zoomed effect
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x300/CCCCCC/000000?text=Image+Error"; }}
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
          <div className="flex space-x-4">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-purple-600 hover:underline font-semibold text-sm"
            >
              <BarChart size={16} className="mr-1" /> Live Demo
            </a>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-purple-600 hover:underline font-semibold text-sm"
            >
              <Github size={16} className="mr-1" /> GitHub
            </a>
            {/* <a
              href={project.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-purple-600 hover:underline font-semibold text-sm"
            >
              /* <BookOpen size={16} className="mr-1" /> Case Study 
            </a> */}
          </div>
        </div>
      );
    };


    // Main App component for Desktop
    const AppDesktop = () => {
      const [theme, setTheme] = useState('light');
      const [isScrolled, setIsScrolled] = useState(false);
      const [currentPage, setCurrentPage] = useState('home');
      const [selectedProjectId, setSelectedProjectId] = useState(null);
      const [selectedBlogPostId, setSelectedBlogPostId] = useState(null); 
      const [currentProjectPageIndex, setCurrentProjectPageIndex] = useState(0);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Not used on desktop

      // State for contact form
      const [contactName, setContactName] = useState('');
      const [contactEmail, setContactEmail] = useState('');
      const [contactMessage, setContactMessage] = useState('');
      const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });

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

      // Clear form status message after a few seconds
      useEffect(() => {
        if (formStatus.type === 'success' || formStatus.type === 'error') {
          const timer = setTimeout(() => {
            setFormStatus({ type: 'idle', message: '' });
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [formStatus]);


      // Smooth scroll to section (only for home page sections)
      const scrollToSection = (id) => {
        setCurrentPage('home');
        // No mobile menu to close on desktop
        setTimeout(() => {
          // Check if element exists before attempting to scroll
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.warn(`Element with ID '${id}' not found for scrolling.`);
          }
        }, 100);
      };

      // Navigate to page
      const navigateToPage = (page, id = null) => {
        setCurrentPage(page);
        // No mobile menu to close on desktop
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
        window.scrollTo(0, 0);
      };

      // Handle contact form submission
      const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ type: 'sending', message: 'Sending message...' });

        const formData = new URLSearchParams();
        formData.append('name', contactName);
        formData.append('email', contactEmail);
        formData.append('message', contactMessage);

        try {
          const response = await fetch('/.netlify/functions/send-contact-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
          });

          if (response.ok) {
            setFormStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            setContactName('');
            setContactEmail('');
            setContactMessage('');
          } else {
            const errorData = await response.json();
            setFormStatus({ type: 'error', message: `Failed to send message: ${errorData.message || 'Unknown error'}` });
          }
        } catch (error) {
          console.error('Error sending message:', error);
          setFormStatus({ type: 'error', message: 'Failed to send message. Please check your network connection.' });
        }
      };


      // Sample skills data (for Toolbox Zone) (DUPLICATED FOR DESKTOP)
const skills = [
  {
    name: 'Python',
    icon: <Code size={48} className="text-blue-500 mb-4" />,
    description: 'Pandas, NumPy, Feature Engineering, Data Processing',
  },
  {
    name: 'SQL',
    icon: <Database size={48} className="text-green-500 mb-4" />,
    description: 'Joins, CTEs, Window Functions, Analytics Queries',
  },
  {
    name: 'Power BI',
    icon: <BarChart size={48} className="text-indigo-500 mb-4" />,
    description: 'Dashboard Design, DAX, KPI Modeling',
  },
  {
    name: 'Data Analytics',
    icon: <BarChart size={48} className="text-purple-500 mb-4" />,
    description: 'Data Cleaning, EDA, Business Insights',
  },
  {
    name: 'Excel',
    icon: <FileText size={48} className="text-emerald-500 mb-4" />,
    description: 'Advanced Formulas, Pivot Tables, Forecasting',
  },
  {
    name: <>Machine Learning</>,
    icon: <Bot size={48} className="text-pink-500 mb-4" />,
    description: 'Logistic Regression, Classification, Model Evaluation',
  },
  {
    name: 'BigQuery',
    icon: <Database size={48} className="text-purple-700 mb-4" />,
    description: 'Analytics Tables, SQL Modeling, Snapshots',
  },
  {
    name: 'Data Warehousing',
    icon: <Database size={48} className="text-indigo-700 mb-4" />,
    description: 'ETL Concepts, Star Schema, Fact & Dimension Tables',
  },
  {
    name: <>Real-time<br />Analytics</>,
    icon: <Zap size={48} className="text-red-500 mb-4" />,
    description: <>Automated Pipelines,<br />Live Market Monitoring</>,
  },
  {
    name: 'n8n Automation',
    icon: <Zap size={48} className="text-orange-500 mb-4" />,
    description: 'n8n Workflows, Scheduled Data Pipelines',
  },
  {
    name: 'APIs',
    icon: <Code size={48} className="text-cyan-500 mb-4" />,
    description: 'REST APIs, JSON, Data Ingestion',
  },
  {
    name: 'Data Visualization',
    icon: <Layers size={48} className="text-orange-600 mb-4" />,
    description: 'Insight Narratives, Business Dashboards',
  },
];

      // Logic for project slider (DUPLICATED FOR DESKTOP)
      const projectsPerPage = 2; // Show 2 projects per page on desktop
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


      // renderPageContent now accepts props (navigateToPage, theme, scrollToSection, setIsMobileMenuOpen)
      const renderPageContent = (navigateToPage, theme, scrollToSection, setIsMobileMenuOpen) => {
        switch (currentPage) {
          case 'home':
            return (
              <>
                {/* Hero Section */}
                <HeroSection theme={theme}>
                  <HeroBackgroundPattern />
                  <HeroContent>
                    <StyledCombinedHeroHeading theme={theme}>
                        <span className="hero-subtitle-text">Hi, I’m Sid</span>
                        <span className="hero-title-text">A Data Analyst Building Decision-Ready Insights from Real-World Data</span>
                    </StyledCombinedHeroHeading>
                    <HeroDescription theme={theme}>
                      I design end-to-end analytics solutions using Python, SQL, Power BI, and AI — from raw data pipelines to business-ready dashboards that support confident decision-making.
                    </HeroDescription>
                  </HeroContent>
                </HeroSection>

                {/* About Section */}
                <section id="about" className={`pt-8 pb-18 px-24
                  ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
                    <div className={`rounded-xl shadow-2xl p-8 border
                      ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                      <div className="grid grid-cols-2 gap-12 items-center">
                        {/* Left Column: Content */}
                        <div className="order-2 md:order-1">
                          <h3 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Hi, I’m Teja Siddhartha</h3>
                          <p className={`text-lg md:text-xl mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}> Data & BI Analyst | SQL • Python • Power BI | End-to-End Analytics</p>
                          <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                            I am a Data Analyst with hands-on experience building end-to-end analytics solutions across domains such as finance, customer analytics, healthcare, and retail. My work focuses on transforming raw, messy data into structured datasets, meaningful KPIs, and interactive dashboards that support business and operational decision-making.
                          </p>
                          <p className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                            I have worked extensively with Python, SQL, Power BI, Excel, BigQuery, and automation tools to design analytics pipelines — from data ingestion and cleaning to modeling, analysis, and visualization. My projects demonstrate strong foundations in data cleaning, exploratory data analysis (EDA), feature engineering, KPI design, and dashboard development. </p>
                            <p className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                            Across my projects, I have analyzed crypto market trends, customer churn risk, wearable healthcare data, and large-scale retail transactions, applying both descriptive and predictive analytics to uncover patterns, assess risk, and generate actionable insights. I aim to build analytics solutions that are not only technically sound, but also practical, interpretable, and business-ready.
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-center mt-8">
                              <div className={`p-4 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-700 border border-purple-500' : 'bg-gray-100 border-gray-200'}`}>
                                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">4+</h3>
                                  <p className="text-sm opacity-90">End-to-End Analytics</p>
                                  <p className="text-xs opacity-80 dark:text-gray-100">Projects across Finance, Crypto, Healthcare & Retail</p> {/* CHANGE 002: Text color for visibility */}
                              </div>
                              <div className={`p-4 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-700 border border-purple-500' : 'bg-gray-100 border-gray-200'}`}>
                                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">5+</h3>
                                  <p className="text-sm opacity-90">Industry-Recognized Certifications</p>
                                  <p className="text-xs opacity-80 dark:text-gray-100">in SQL, Python, Power BI & AI</p> {/* CHANGE 002: Text color for visibility */}
                              </div>
                              <div className={`p-4 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-700 border border-purple-500' : 'bg-gray-100 border-gray-200'}`}>
                                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">14+</h3>
                                  <p className="text-sm opacity-90">Core Tools & Technologies</p>
                                  <p className="text-xs opacity-80 dark:text-gray-100">Used Across End-to-End Analytics Projects</p> {/* CHANGE 002: Text color for visibility */}
                              </div>
                          </div>
                        </div>
                        {/* Right Column: Photo and Social Media */}
                        <div className="order-1 md:order-2 flex flex-col items-center justify-center space-y-8">
                          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500">
                            <img
                              src="/sid-photo.jpg"
                              alt="Teja Siddhartha Rajam"
                              className="w-full h-full object-cover object-left"
                              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/320x320/CCCCCC/000000?text=Profile+Photo"; }}
                            />
                          </div>
                          <div className="flex justify-center space-x-6 text-3xl">
                            <a href="https://www.linkedin.com/in/rtejasiddhartha/" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="LinkedIn">
                              <Linkedin size={36} className="text-blue-400 dark:text-blue-300" />
                            </a>
                            <a href="https://github.com/rtejasiddhartha/" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="GitHub">
                              <Github size={36} className="text-gray-400 dark:text-gray-300" />
                            </a>
                            <a href="mailto:rtejasiddhartha18@gmail.com" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="Mail">
                              <Mail size={36} className="text-red-400 dark:text-red-300" />
                            </a>
                          </div>
                            <a
                              href="/TejaSiddhartha_DataAnalyst.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200"
                            >
                              View Resume (PDF)
                            </a>
                          <button onClick={() => scrollToSection('education-certifications')} className={`px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center
                            ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                            <Award size={20} className="mr-2" /> View Certifications
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Education & Certifications Section */}
                <section id="education-certifications" className={`pt-12 pb-20 px-24
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
                              ${theme === 'dark' ? 'bg-gray-800 border border-blue-900  hover:border-blue-400' : 'bg-white border border-gray-200  hover:border-blue-400'}`}>
                              <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                              <p className="text-gray-400 dark:text-gray-300 text-sm">{item.institution}</p> {/* CHANGE 003: Text color for visibility */}
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
                              ${theme === 'dark' ? 'bg-gray-800 border border-green-800 hover:border-green-300' : 'bg-white border border-gray-200 hover:border-green-500'}`}>
                              <div>
                                <h4 className="text-xl font-semibold mb-1">{item.name}</h4>
                                <p className="text-gray-400 dark:text-gray-300 text-sm">{item.issuer}</p> {/* CHANGE 003: Text color for visibility */}
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
                <section id="projects" className={`py-20 px-24
                  ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">My Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
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
                <section id="skills" className={`py-20 px-24
                  ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">My Skills</h2>
                    <div className="grid grid-cols-4 gap-8">
                      {skills.map((skill, index) => (
                        <div key={index} className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 group
                          ${theme === 'dark' ? 'bg-gray-700 border  border-purple-500' : 'bg-gray-100 border border-gray-200'}`}> {/* CHANGE 005: Changed border color for dark mode */}
                          {skill.icon}
                          <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                          <p className="text-center text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Contact Form & Social Links */}
                <section id="contact" className={`py-20 px-24
                  ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
                  <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">
                      Get in Touch
                    </h2>
                    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border
                      ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                      <form onSubmit={handleContactSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                              ${theme === 'dark' ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500
                              ${theme === 'dark' ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                            placeholder="your@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:focus-border-indigo-500
                              ${theme === 'dark' ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                            placeholder="Your message..."
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          disabled={formStatus.type === 'sending'}
                          className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105
                            ${formStatus.type === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {formStatus.type === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {formStatus.message && (
                          <p className={`mt-4 text-center text-lg font-semibold
                            ${formStatus.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            {formStatus.message}
                          </p>
                        )}
                      </form>
                    </div>
                    <div className="mt-12 text-center">
                      <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-purple-500">Connect with Me</h3> {/* CHANGE 006: Changed to text-orange-300 for dark mode */}
                      <div className="flex justify-center space-x-8 text-3xl">
                        <a href="https://www.linkedin.com/in/rtejasiddhartha/" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="LinkedIn">
                          <Linkedin size={36} className="text-blue-400 dark:text-blue-300" />
                        </a>
                        <a href="https://github.com/rtejasiddhartha/" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="GitHub">
                          <Github size={36} className="text-gray-400 dark:text-gray-300" />
                        </a>
                        <a href="mailto:rtejasiddhartha18@gmail.com" target="_blank" className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="Mail">
                          <Mail size={36} className="text-red-400 dark:text-red-300" />
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
          case 'blog': 
            return <BlogPage setCurrentPage={navigateToPage} theme={theme} blogPosts={blogPosts} linkedinPosts={linkedinPosts} />;
          case 'blog-post':
            const post = blogPosts.find(p => p.id === selectedBlogPostId);
            return <BlogPostDetail post={post} setCurrentPage={navigateToPage} theme={theme} />;
          case 'insights': 
            return <InsightsPageDesktop theme={theme} navigateToPage={navigateToPage} blogPosts={blogPosts} linkedinPosts={linkedinPosts} />;
          default:
            return null;
        }
      };

      return (
        <>
          <GlobalStyle />
          <div className={`font-inter min-h-screen ${theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
            {/* Header */}
            <header className={`relative py-4 px-24 flex items-center justify-between transition-colors duration-300
              ${isScrolled ? (theme === 'dark' ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-lg') : 'bg-transparent'}`}>  
              
              <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
                <button onClick={() => navigateToPage('home')} className={`text-2xl sm:text-3xl font-extrabold ${theme === 'dark' ? 'text-[#F46540]' : 'text-indigo-600'} hover:opacity-80 transition-opacity duration-200 flex-shrink-0`}>Sid's Portfolio</button> {/* CHANGE 001: Conditional text color for dark mode */}
                
                {/* Desktop Navigation */}
                <nav className="flex items-center space-x-8">
                  <button onClick={() => scrollToSection('hero')} className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Home</button>
                  <button onClick={() => scrollToSection('about')} className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">About</button>
                  <button onClick={() => scrollToSection('projects')} className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Projects</button>
                  <button onClick={() => scrollToSection('skills')} className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Skills</button>
                  {/* <button onClick={() => navigateToPage('insights')} className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Insights</button> */}
                  <button onClick={() => scrollToSection('contact')} className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Contact</button>
                </nav>

                <div className="flex items-center space-x-6">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Toggle dark mode"
                  >
                    {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                  </button>
                  {/* Mobile menu button is hidden on desktop */}
                </div>
              </div>
            </header>

            {/* Pass all necessary props to renderPageContent */}
            {renderPageContent(navigateToPage, theme, scrollToSection, setIsMobileMenuOpen)} 

            {/* Footer */}
            <footer className={`py-10 px-6 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-800'} text-gray-300 text-center`}>
              <p>&copy; 2026 Teja Siddhartha Rajam. All rights reserved.</p>
            </footer>
          </div>
        </>
      );
    };

    export default AppDesktop;
