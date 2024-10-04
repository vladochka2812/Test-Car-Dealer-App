# Car Dealer App

## Overview

The Car Dealer App is a Next.js application that allows users to filter and view vehicles based on make and model year. The app features a responsive design using Tailwind CSS and provides a user-friendly interface for navigating vehicle options.

## Features

- **Vehicle Filtering:** Users can select vehicle makes and model years to filter results.
- **Dynamic Routing:** The app uses Next.js dynamic routing to display vehicle models based on user selections.
- **Loading States:** React's `Suspense` component is utilized to handle loading states gracefully.
- **Responsive Design:** Tailwind CSS ensures the application is responsive and visually appealing across devices.

## Architecture

- **Frontend Framework:** Built using [Next.js](https://nextjs.org/), which provides server-side rendering and static site generation.
- **Styling:** Utilizes [Tailwind CSS](https://tailwindcss.com/) for modern and responsive design.
- **Data Fetching:** Interacts with the National Highway Traffic Safety Administration (NHTSA) API to fetch vehicle makes and models.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/vladochka2812/Test-Car-Dealer-App.git>
   cd car-dealer-app

2. Install dependencies:
    ```bash
    npm install

3. Running the Application
   ```bash
   npm run dev

