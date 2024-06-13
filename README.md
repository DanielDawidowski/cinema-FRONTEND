# Cinema Booking System

A comprehensive web application for managing cinema halls, movies, shows, and ticket bookings. This application is built using React, Node.js, Redux Toolkit, TypeScript, and Styled Components, with Stripe integration for handling payments.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Manage Cinema Halls**: Create and configure cinema halls with different seating arrangements.
- **Movies Management**: Add, update, and delete movies.
- **Schedule Shows**: Create and manage showtimes for movies in different halls.
- **Seat Selection**: Users can select seats for a specific show.
- **Ticket Booking**: Book tickets and proceed to payment.
- **Stripe Integration**: Securely handle payments using Stripe.

## Tech Stack

- **Frontend**: React, TypeScript, Redux Toolkit, Styled Components
- **Backend**: Node.js, Express
- **Database**: MongoDB (or any other database of your choice)
- **Payments**: Stripe

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **MongoDB**: Make sure you have MongoDB running locally or have access to a MongoDB server. You can download it [here](https://www.mongodb.com/).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/cinema-booking-system.git
    cd cinema-booking-system
    ```

2. **Install dependencies for the backend**:
    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend**:
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Backend**:
    - Create a `.env` file in the `backend` directory and add your environment variables:
      ```env
      PORT=5000
      MONGO_URI=your_mongodb_uri
      STRIPE_SECRET_KEY=your_stripe_secret_key
      ```
    - Start the backend server:
      ```bash
      npm run dev
      ```

2. **Frontend**:
    - Create a `.env` file in the `frontend` directory and add your environment variables:
      ```env
      REACT_APP_API_URL=http://localhost:5000
      REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
      ```
    - Start the frontend development server:
      ```bash
      npm start
      ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Use the application to create cinema halls, movies, and shows.
- Book tickets by selecting seats and proceed to payment using Stripe.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and include relevant tests for your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
