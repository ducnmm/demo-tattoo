# Oh My Ink - Tattoo Try-On Application

A Next.js application that allows users to browse and try on virtual tattoo designs using AI technology.

## Technical Requirements

- Next.js
- TypeScript
- Tailwind CSS
- Jest for testing
- MVC architecture
- Designed for iPad screen sizes

## Features

- Home page with introduction to the tattoo try-on concept
- Design selection page with categories
- Tattoo design details page with try-on option
- Responsive design optimized for tablet (iPad) viewing

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd demo-tattoo
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Running Tests

To run the tests:

```bash
npm test
```

To run tests with coverage report:

```bash
npm test -- --coverage
```

## Testing Strategy

The application implements a comprehensive testing approach:

### Component Testing
- **Unit Tests**: Testing individual components in isolation
- **Integration Tests**: Testing component interactions
- **Snapshot Tests**: Ensuring UI consistency (where appropriate)

### Test Coverage
The test suite covers:
- Core components (HomePage, SelectDesignPage, etc.)
- UI components (BackButton, CategoryTabs, DesignDetail)
- Controller logic (TattooController)
- User interactions (clicks, navigation)

### Test Categories

#### Page Components Tests
- **HomePage**: Tests for rendering and navigation
- **SelectDesignPage**: Tests for category selection, design viewing and navigation

#### UI Component Tests
- **BackButton**: Tests for styling variants and click handlers
- **CategoryTabs**: Tests for category selection and active state
- **DesignDetail**: Tests for rendering design information and interaction

#### Controller Tests
- **TattooController**: Tests for data retrieval and filtering functionality

### Mocking Strategy
- Router functionality (Next.js navigation)
- Component dependencies
- Data models

## Project Structure

The project follows the MVC (Model-View-Controller) architecture:

- **Models**: Data structure and business logic (`src/models/`)
- **Views**: User interface components (`src/views/`)
- **Controllers**: Data management and handling user actions (`src/controllers/`)

## Design Implementation

The design follows the provided mockups, featuring:
- A landing page with "Touch to Start"
- A design selection page with filterable categories
- A detailed view for each tattoo design
- A "Try It On" button for the virtual tattoo feature

## Technologies Used

- **Next.js**: React framework for server-side rendering and routing
- **TypeScript**: Static typing for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Jest/React Testing Library**: Testing framework
- **Roboto Font**: Primary typography
