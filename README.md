# Scholarship Hub

A modern web application designed to help students discover, search, and apply for scholarships. Built with React and Vite for optimal performance and developer experience.

## 🎓 About Scholarship Hub

Scholarship Hub is a comprehensive scholarship finder platform that aggregates and displays scholarship opportunities for students at various academic levels. The application provides an intuitive interface for browsing, searching, and filtering scholarship opportunities.

## 🚀 Features

- **Search & Filter**: Find scholarships based on your criteria
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **React Router**: Seamless navigation between pages
- **Analytics**: Integrated with Vercel Analytics for usage insights
- **Icon Library**: FontAwesome integration for beautiful UI icons

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **React Router** 7.10.1 - Client-side routing
- **Vite** (rolldown-vite) 7.2.5 - Build tool with HMR
- **React Compiler** - Automatic React optimization enabled

### Styling & UI
- **FontAwesome** 7.1.0 - Icon library
  - @fortawesome/fontawesome-svg-core
  - @fortawesome/free-solid-svg-icons
  - @fortawesome/react-fontawesome
- **clsx** 2.1.1 - Utility for conditional className concatenation

### API & Analytics
- **Axios** 1.13.2 - HTTP client for API requests
- **Vercel Analytics** 1.6.1 - Usage analytics

### Development Tools
- **ESLint** 9.39.1 - Code linting
- **TypeScript Types** - Type safety for React and React DOM
- **Babel** - JavaScript compiler with React Compiler plugin

## 📦 Project Structure

```
scholarship-hub/
├── src/
│   ├── components/        # Reusable React components
│   ├── styles/           # Global and component styles
│   ├── assets/           # Images and static files
│   ├── App.jsx           # Main App component
│   ├── App.css           # App styles
│   └── main.jsx          # Application entry point
├── public/               # Static files
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
├── vercel.json           # Vercel deployment configuration
└── package.json          # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Uriri-007/Scholarship-Hub.git
cd Scholarship-Hub
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality with ESLint:
```bash
npm run lint
```

## 📱 Deployment

This project is configured for deployment on **Vercel**. The `vercel.json` file contains the deployment configuration.

To deploy:
1. Push your changes to the repository
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy on every push

## 🔧 Configuration Files

- **vite.config.js** - Vite bundler configuration with React plugin
- **eslint.config.js** - Code linting rules
- **vercel.json** - Vercel deployment settings
- **.gitignore** - Git ignore rules

## 🎯 Key Features Explained

### React Compiler
The React Compiler is enabled to automatically optimize component rendering, improving performance. Note: This may impact Vite dev & build performance.

### Hot Module Replacement (HMR)
Vite provides lightning-fast HMR for an excellent development experience. Changes are reflected instantly without full page refreshes.

### Type Safety
TypeScript support is available for enhanced development experience and type checking.

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint to check code quality |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and owned by Uriri-007.

## 📞 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Made with ❤️ by Uriri-007**