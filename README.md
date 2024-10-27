# React Router Application

This project is a React application with routing and mock backend data handling, built with `react-router-dom` and `json-server`. It provides a modern frontend development environment with hot reloading and a simulated REST API backend.

## Features

- Client-side routing with React Router
- Mock REST API with JSON Server
- Modern React development environment
- Hot module replacement
- ESLint for code quality
- Responsive design support

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install project dependencies:
```bash
npm install
```

3. Install React Router for client-side routing:
```bash
npm install react-router-dom
```

4. Install JSON Server globally to mock API data:
```bash
npm install -g json-server
```

## Running the Application

### Development Server

Start the React development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Mock API Server

In a separate terminal, start the JSON Server:
```bash
npx  json-server --watch data.json --port 5000 
```
The mock API will be available at `http://localhost:5000`

## Project Structure

```
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/         # Page components for routing
│   ├── services/      # API service functions
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static assets
├── data.json          # Mock API data
├── index.html         # HTML entry point
└── package.json       # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run tests (if configured)

## API Endpoints

The mock API provides the following endpoints:

```
GET    /api/resources
GET    /api/resources/:id
POST   /api/resources
PUT    /api/resources/:id
DELETE /api/resources/:id
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=http://localhost:3000/api
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

To deploy the application:

1. Build the production version:
```bash
npm run build
```

2. The build artifacts will be stored in the `dist/` directory

## Troubleshooting

Common issues and their solutions:

1. **Port already in use**
   - Change the port for the development server in `vite.config.js`
   - For JSON Server, use the `--port` flag: `json-server --watch data.json --port 3001`

2. **Module not found errors**
   - Ensure all dependencies are installed: `npm install`
   - Check import paths for correct casing

3. **API connection issues**
   - Verify JSON Server is running
   - Check the API URL in your environment variables

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- React team for the amazing framework
- JSON Server creators for the mock API solution
- React Router team for the routing library