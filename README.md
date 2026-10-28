# Karthik P - Professional Portfolio

A modern, designer-level portfolio website for Karthik P, Junior Data Analyst, built with React.js and Node.js/Express.

## Features

- **Modern Design**: Professional dark/light theme with smooth animations
- **Responsive**: Mobile-first approach, works on all devices
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Optimized animations, lazy loading, code splitting
- **Contact Form**: Backend API with validation

## Tech Stack

### Frontend
- React 18 (Create React App)
- CSS Variables for theming
- Intersection Observer for scroll animations
- No external UI libraries (custom components)

### Backend
- Node.js + Express.js
- CORS enabled
- Input validation with express-validator
- Serves React build in production

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Skills/
│   │   │   ├── Experience/
│   │   │   ├── Projects/
│   │   │   ├── Education/
│   │   │   ├── Certificates/
│   │   │   ├── Contact/
│   │   │   └── Footer/
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── variables.css
│   │   │   └── animations.css
│   │   ├── data/
│   │   │   └── portfolioData.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server/                 # Express backend
│   ├── routes/
│   │   └── api.js
│   ├── index.js
│   └── package.json
├── package.json            # Root package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install all dependencies
npm run install:all

# Or manually:
npm install
cd client && npm install
cd ../server && npm install
```

### Development

```bash
# Start both client and server concurrently
npm run dev

# Or separately:
npm run client    # React dev server on port 3000
npm run server    # Express server on port 5000
```

### Production Build

```bash
# Build React app
npm run build

# Start production server
npm start
```

The production server will serve the React build on port 5000.

## Available Scripts

### Root
- `npm run dev` - Start development servers (client + server)
- `npm run server` - Start Express server only
- `npm run client` - Start React dev server only
- `npm run build` - Build React app for production
- `npm start` - Start production server
- `npm run install:all` - Install all dependencies

### Client
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from CRA (irreversible)

### Server
- `npm run dev` - Start with file watching
- `npm start` - Start production server

## Sections

1. **Hero** - Name, title, key stats, CTA buttons, visual code/chart preview
2. **About** - Professional summary, highlights, profile card with contact info
3. **Skills** - 6 categories with expandable details and proficiency indicators
4. **Experience** - Timeline with expandable details and metrics
5. **Projects** - Featured project cards with tech stack and highlights
6. **Education** - Timeline with degree details and summary stats
7. **Certificates** - Interactive cards with expandable details
8. **Contact** - Contact form with validation + direct contact methods
9. **Footer** - Navigation, social links, copyright

## Customization

### Portfolio Data
Edit `client/src/data/portfolioData.js` to update:
- Personal information
- Skills and categories
- Work experience
- Projects
- Education
- Certificates

### Colors & Theme
Edit `client/src/styles/variables.css` to customize:
- Color palette (primary, secondary, accent)
- Typography scale
- Spacing system
- Border radius
- Shadows

### Animations
Edit `client/src/styles/animations.css` to modify:
- Scroll reveal animations
- Hover effects
- Background patterns
- Gradient orbs

## Deployment

### Traditional Server
```bash
npm run build
npm start
```

### Docker
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/
RUN npm run install:all
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/server ./server
COPY --from=builder /app/client/build ./client/build
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 5000
CMD ["npm", "start"]
```

### Environment Variables
Create `.env` in server directory:
```env
PORT=5000
NODE_ENV=production
```

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Reduced motion support
- Screen reader friendly

## Performance

- CSS-only animations (no JS animation libraries)
- Intersection Observer for scroll effects
- Optimized images and assets
- Minimal dependencies
- Code splitting ready

## License

MIT License - feel free to use for your own portfolio!

## Contact

Karthik P - karthiksivam11@gmail.com
LinkedIn: https://www.linkedin.com/in/karthik-sivam