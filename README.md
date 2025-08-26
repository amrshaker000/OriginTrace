OriginTrace – Secure Platform for Buying & Selling Used Electronics

OriginTrace is a modern, full-stack Web 2 platform designed to make buying and selling used electronics safe, transparent, and reliable.
With integrated device inspection reports, AI-powered assistant, and a seamless marketplace, OriginTrace ensures both buyers and sellers enjoy a smooth and trustworthy experience.

🚀 Overview

OriginTrace helps transform the risky process of buying used devices into a secure and verified experience.
Before any device is listed, it goes through a technical inspection to ensure its condition and provide a detailed report.
The platform also integrates an AI assistant to guide users, answer queries, and simplify the process.

✨ Key Features

Device Certification → Multi-step inspection with detailed reports.

AI-Powered Assistant → Integrated chatbot connected to the backend via API for real-time support.

Secure Marketplace → Browse and purchase verified devices with confidence.

Search & Filtering → Quickly find the devices you need using advanced filters.

Responsive & Modern UI → Built with a mobile-first approach.

Fast & Lightweight → Optimized performance using Vite and Tailwind.

🛠️ Technology Stack
Frontend

React 18 + Vite → Fast, modern, and efficient development.

Tailwind CSS → Fully responsive and elegant design.

Framer Motion → Smooth animations and transitions.

React Router → Page routing and navigation.

Lucide React → Icon library for a clean UI.

Backend

PHP Laravel → Core server-side logic and API endpoints.

MySQL → Relational database for secure data storage.

RESTful APIs → Connects the frontend with backend services.

AI Integration

AI Assistant → Built with third-party APIs.

Integrated into both frontend and backend for dynamic responses.

🎨 Design Highlights

Dark Mode First → Default dark UI with light mode toggle.

Modern UI/UX → Glassmorphism effects, gradients, and smooth transitions.

Accessibility → WCAG-compliant, ensuring better usability.

Fully Responsive → Optimized for mobile, tablet, and desktop.

📦 Installation & Setup
1. Clone the repository
git clone <repository-url>
cd OriginTrace

2. Install dependencies
npm install

3. Build Tailwind CSS
npm run tailwind:build

4. Configure Backend

Make sure you have PHP installed.

Set up your local server (e.g., XAMPP, Laragon, or WAMP).

Create a MySQL database and import the provided schema.

Update your .env or config file with database credentials.

5. Start development server
npm run dev

6. Open your browser

Visit: http://localhost:3000

🚀 Available Scripts
Command	Description
npm run dev	Starts the development server
npm run build	Builds the app for production
npm run preview	Previews the production build
npm run lint	Runs ESLint for code quality
npm run tailwind:watch	Watches for Tailwind CSS changes
npm run tailwind:build	Builds Tailwind CSS files
📁 Project Structure
OriginTrace/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer section
│   ├── pages/              # Main pages
│   │   ├── Home.tsx        # Landing page
│   │   ├── Marketplace.tsx # Device marketplace
│   │   ├── DeviceCertification.tsx # Device inspection page
│   │   └── About.tsx       # About us page
│   ├── App.tsx             # Main React app component
│   ├── main.tsx            # Entry point for React app
│   ├── tailwind.css        # Tailwind base styles
│   └── index.css           # Compiled CSS output
├── public/                 # Static assets
├── index.html              # Root HTML template
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation

🤖 AI Assistant Integration

Built-in AI assistant helps users find devices, understand reports, and get instant answers.

Connected to the backend via REST API.

Fully integrated into the frontend interface for seamless interaction.

🎯 Planned Features

 Seller & Buyer dashboards.

 Advanced device certification reports.

 AI-powered device recommendations.

 PDF export for inspection results.

 Integrated notification system.

 Full authentication with JWT.

 Mobile app version for Android & iOS.

📄 License

This project is licensed under the MIT License.

Built with ❤️ using React, Vite, Tailwind, PHP Laravel & MySQL
