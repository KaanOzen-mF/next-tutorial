# NextLevel Food

NextLevel Food is a Next.js project designed to showcase a platform where users can share and discover delicious meal recipes. This project serves as a learning journey to explore Next.js, including server-side rendering, client-side rendering, and static site generation.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Acknowledgements](#acknowledgements)

## Project Overview

NextLevel Food allows users to:

- Share their favorite meal recipes, complete with instructions and images.
- Browse a collection of meals shared by others.
- Join a community of food enthusiasts.

The project also serves as a practical application of learning Next.js, focusing on various aspects such as routing, data fetching, form handling, and more.

## Features

- **Dynamic Routing**: Each meal has its own page generated dynamically using Next.js routing.
- **Client-Side and Server-Side Rendering**: Utilizes both rendering techniques for optimal performance.
- **Form Handling**: Allows users to submit new meals with a form, handling file uploads and validations.
- **Image Handling**: Uses the Next.js `Image` component for optimized image rendering.
- **XSS Protection**: Sanitizes user inputs to prevent cross-site scripting attacks.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nextlevel-food.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd nextlevel-food
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up the database:**
   Ensure you have SQLite installed and create a meals.db database file.

5. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

To use the NextLevel Food project, follow these steps:

1. **Adding a Meal**:

   - Navigate to the share page by clicking on the "Share Your Favorite Recipe" link.
   - Fill out the form with your meal's title, summary, instructions, and an image.
   - Click the "Share Meal" button to submit your meal. Your recipe will be added to the list of meals.

2. **Viewing Meals**:

   - Visit the meals page to browse all available meals.
   - Click on a meal card to view detailed information about that specific meal, including the recipe, creator details, and instructions.

3. **Community**:
   - Join the foodies community to connect with other users who share a passion for cooking and trying new recipes.

## Technologies Used

- **Next.js**: A React framework that enables server-side rendering, static site generation, and client-side rendering for building modern web applications.
- **React**: A JavaScript library for building user interfaces, used here to create interactive components and pages.
- **SQLite**: A lightweight, disk-based database used for storing meal data. It's a self-contained, serverless, and zero-configuration database engine.
- **CSS Modules**: A CSS file in which all class and animation names are scoped locally by default. This project uses CSS Modules for component-level styling to avoid naming conflicts and to make styles more maintainable.
- **XSS**: A library used to sanitize user inputs to prevent cross-site scripting attacks. This helps ensure that user-generated content does not include harmful scripts that could affect the application's security.
- **Node.js File System (fs)**: Used for handling file operations, such as saving uploaded images to the server.

These technologies were chosen to create a robust, secure, and efficient web application, providing a seamless user experience for browsing and sharing recipes.

## Folder Structure

The project is organized into the following main directories and files:
├── public/ # Public assets like images and static files
│ └── images/ # Directory for storing uploaded meal images
├── components/ # React components used across the application
│ ├── meals/ # Components related to meal functionalities (e.g., MealItem, MealsGrid)
│ ├── main-header/ # Components related to the main header (e.g., MainHeader, MainHeaderBackground)
│ └── ... # Other reusable components
├── lib/ # Utility functions and database interactions
│ ├── actions.js # Actions for handling form submissions and data processing
│ └── meals.js # Functions for meal-related database operations
├── pages/ # Next.js pages, each file represents a route
│ ├── \_app.js # Custom App component for global styles and configuration
│ ├── index.js # Home page
│ ├── meals/ # Meals-related pages (e.g., [slug].js for meal details)
│ ├── community/ # Community-related pages
│ └── ... # Other pages and API routes
├── styles/ # CSS styles
│ ├── globals.css # Global CSS styles
│ └── ... # Component-specific styles (if any)
├── .gitignore # Git ignore file specifying which files to exclude from version control
├── package.json # NPM package file with project dependencies and scripts
└── README.md # This file

## Acknowledgements

- **Next.js Documentation**: For providing comprehensive guides and examples that helped in understanding and implementing Next.js features.
- **React Community**: For their valuable resources, tutorials, and forums that assist in solving common development challenges.
- **SQLite Documentation**: For offering detailed documentation and support for database management.
- **Open Source Contributors**: To all the developers who contribute to open source libraries and tools that make projects like this possible.
- **CSS Tricks and MDN Web Docs**: For providing extensive documentation and tips on web development best practices, particularly in CSS and JavaScript.
- **XSS Library Maintainers**: For providing a robust solution to sanitize user inputs and ensure application security.

Special thanks to everyone who supports and contributes to the open-source community, making tools and knowledge accessible to developers worldwide.
