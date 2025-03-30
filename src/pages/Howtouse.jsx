import React from 'react'

const HowToUse = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">How to Use</h1>
      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        <li>
          <strong>Install Dependencies:</strong> Run the following command to
          install required dependencies:
          <code className="bg-gray-200 px-2 py-1 rounded-md">npm install</code>
        </li>
        <li>
          <strong>Required Packages:</strong>
          Clerk, Tailwind CSS, Axios, Dotenv, React Router DOM
        </li>
        <li>
          <strong>How to Run:</strong> Start the development server with:
          <code className="bg-gray-200 px-2 py-1 rounded-md">npm run dev</code>
        </li>
        <li>
          <strong>Features:</strong>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fetches country data using the REST Countries API</li>
            <li>
              Displays detailed country information (flag, capital, region,
              population)
            </li>
            <li>Dynamically generated blog posts based on country data</li>
            <li>Like functionality for blogs</li>
            <li>Search bar to filter countries</li>
            <li>Responsive Navbar with authentication using Clerk.js</li>
            <li>Local storage for caching data</li>
          </ul>
        </li>
        <li>
          <strong>Tech Stack:</strong>
          <ul className="list-disc pl-6 space-y-1">
            <li>React (Functional components, Hooks, Context API)</li>
            <li>React Router DOM (Navigation, Dynamic routes)</li>
            <li>Tailwind CSS (Modern UI styling)</li>
            <li>Axios (API requests)</li>
            <li>Clerk.js (Authentication)</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default HowToUse
