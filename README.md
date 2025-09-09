# Synthesia Take Home Assignment

A React-based image editing application that allows users to fetch images from Picsum Photos API and apply various transformations including resizing, blur effects, and black & white filters.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd synthesia-take-home
```

2. Install project dependencies:
```bash
npm ci
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run check-types` - Run TypeScript type checking

## 🏗️ Architecture & Project Structure


### Project Structure

```
src/
├── api.ts                    # API service functions
├── App.tsx                   # Main application component with routing
├── App.css                   # Global application styles
├── main.tsx                  # Application entry point
├── global.d.ts               # Global type declarations
│
├── components/               # Reusable UI components
│   ├── Button/              # Generic button component
│   ├── ControlsPanel/       # Main controls for image editing
│   ├── DownloadButton/      # Download functionality component
│   ├── Input/               # Form input component
│   ├── Modal/               # Modal dialog component
│   ├── Preview/             # Image preview component
│   ├── Slider/              # Range slider component
│   └── ToggleSwitch/        # Toggle switch component
│
├── pages/                   # Page components
│   ├── Home/                # Landing page with image ID input
│   ├── Edit/                # Image editing interface
│   └── NotFound/            # 404 error page
│
├── hooks/                   # Custom React hooks
│   ├── useImageInfo.ts      # Hook for fetching image data
│   └── useControlParams.ts  # Hook for managing URL parameters
│
├── types/                   # TypeScript type definitions
│   └── Image.ts             # Image interface definition
│
├── constants/               # Application constants
│   └── api.ts               # API endpoints and configuration
│
└── utils/                   # Utility functions
    └── utils.ts             # Image transformation utilities
```

## 🎯 Features

### Core Functionality

1. **Image Fetching**: Enter an image ID to fetch image data from Picsum Photos API
2. **Image Editing Controls**:
   - **Resize**: Adjust width and height dimensions
   - **Black & White**: Toggle grayscale filter
   - **Blur Effect**: Apply blur with intensity control (0-10)
3. **Real-time Preview**: See changes before downloading
4. **Download**: Download the edited image
5. **URL State Management**: Editing parameters are stored in URL query parameters

### Component Architecture

#### Pages
- **Home (`/`)**: Simple interface to enter image ID and navigate to editor
- **Edit (`/edit/:id`)**: Full-featured image editing interface
- **NotFound**: Handles invalid routes

#### Key Components
- **ControlsPanel**: Central component managing all editing controls
- **Preview**: Modal component showing the final edited image

#### Custom Hooks
- **useImageInfo**: Manages image data fetching and loading states
- **useControlParams**: Handles URL parameter synchronization for editing controls

### API Integration

The application integrates with Picsum Photos API:
- **Base URL**: `https://picsum.photos`
- **Image Info Endpoint**: `/id/{id}/info` - Fetches image metadata
- **Image Transformations**: Applied via URL parameters (blur, grayscale)

### State Management

- **Local State**: React useState for component-level state
- **URL State**: React Router's useSearchParams for persistent editing parameters
- **Loading States**: Proper loading and error handling throughout the application

### Type Safety

Full TypeScript implementation with:
- Strict type checking enabled
- Custom interfaces for API responses
- Proper typing for all components and hooks
- Type-safe form handling

## Conclusion

Since this is a small application, managing state using useState and UrlSearchParams is sufficient. For reusability, the custom hook useControlParams encapsulates the logic of maintaining state and synchronizing it with the query parameters. If the application grows, state management libraries like Zustand or MobX would be more suitable, and the logic inside the hooks can be moved into a store without affecting the UI implementation.

The image preview is implemented without using a canvas, instead allowing the parent container to scroll if the image is too large. In a real-world scenario, a canvas would be necessary if more advanced editing tools were required. Since the API already provides everything except resizing, displaying the preview with just an image tag is sufficient to meet the requirements.

The images include cache-control headers in the response, which allow them to be cached in the user’s browser. In a real-world scenario, additional caching mechanisms such as service workers may be required to efficiently cache different resources.
