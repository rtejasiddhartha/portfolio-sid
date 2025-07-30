import React from 'react';
import { Bot, TrendingUp, Calendar, Layers, MessageSquare, ChevronLeft, BookOpen } from 'lucide-react';

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

const InsightsPageDesktop = ({ theme, navigateToPage }) => {
  return (
    <div className={`min-h-screen font-inter pt-20 pb-10 px-24 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        My Insights & Learning Journey & BLOG
      </h1>

      {/* Blog / Insights Section */}
      <section id="blog-insights" className={`py-10 mb-12 rounded-xl shadow-2xl p-8
        ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Insights & Musings: My Data Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className={`rounded-xl p-6 shadow-xl transform hover:scale-[1.01] transition-all duration-300
              ${theme === 'dark' ? 'bg-gray-700 border border-gray-600 hover:border-purple-500' : 'bg-gray-100 border border-gray-300 hover:border-purple-500'}`}>
              <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{post.title}</h3>
              <p className="text-sm opacity-70 mb-3 flex items-center"><Calendar size={16} className="mr-2" />{post.date}</p>
              <p className="mb-4 opacity-80">{post.snippet}</p>
              <button
                onClick={() => navigateToPage('blog-post', post.id)}
                className="flex items-center text-purple-600 hover:underline font-semibold"
              >
                Read More <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => navigateToPage('blog')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Insights
          </button>
        </div>
      </section>

      {/* Timeline / Roadmap Section */}
      <section id="roadmap" className={`py-10 mb-12 rounded-xl shadow-2xl p-8
        ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-700">
          My Learning Journey: A Data Roadmap
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          An interactive timeline showcasing my growth, key milestones, certifications, and future learning paths.
        </p>
        <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border
          ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Future Feature: Interactive Career Map</h3>
          <p className="text-gray-600 dark:text-gray-300">
            This section will feature an engaging SVG or 3D journey map, highlighting certifications, skill acquisitions, and major project achievements over time.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Explore My Milestones
          </button>
        </div>
      </section>

      {/* AI Integration Section */}
      <section id="ai-integration" className={`py-10 rounded-xl shadow-2xl p-8
        ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          AI Integration: Smarter Data Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border
            ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">GPT-Powered Project Explanations</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Leveraging AI to provide concise, layman's explanations for complex data projects.
            </p>
            <button className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">See in Action</button>
          </div>
          <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border
            ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">AI Resume Screener Simulator</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Upload a job description and see an AI-driven match score against my skills and projects.
            </p>
            <button className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">Try Simulator</button>
          </div>
          <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border
            ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">AutoML Use Cases & Demos</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Showcasing projects built with automated machine learning platforms for rapid model deployment.
            </p>
            <button className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">View Demos</button>
          </div>
          <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border
            ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Copilot in Excel: Enhanced Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Examples of how AI-powered tools like Copilot streamline data analysis in Excel.
            </p>
            <button className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">Explore Examples</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPageDesktop;
