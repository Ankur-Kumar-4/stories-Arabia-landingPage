# Referral Landing Page

## Overview

The Referral Landing Page is a web application designed to facilitate the referral process. Users can refer friends by providing their name and Gmail address. Upon submission, an email is sent to the referred friend's Gmail address notifying them that they have been referred. The landing page also features a testimonial section displaying user reviews in a card format. The user interface is responsive, ensuring a smooth experience on mobile devices. Animations are implemented using Framer Motion to provide a visually appealing and smooth experience.

### Features

- **Referral Form**: Allows users to refer friends by entering their name and Gmail address.
- **Testimonials Section**: Displays user reviews in a card format.
- **Smooth Animations**: Uses Framer Motion for seamless transitions.
- **Responsive Design**: Optimized for mobile devices.
- **Hero Section**: Includes smooth image swiping effects.

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>


   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

### API Endpoints

_The project integrates with the following APIs:_

1. User Service APIs

**Login**
Endpoint: /api/login
Method: POST
Description: Authenticates the user and returns a token for persistent authentication.

**Register**
Endpoint: /api/register
Method: POST
Description: Registers a new user.

2. Referral API
   Endpoint: /api/referral
   Method: POST
   Description: Handles the referral process. Takes the friend's name and Gmail address and sends a referral email.

3. Testimonials API
   Endpoint: /api/testimonials
   Method: GET
   Description: Fetches user testimonials and returns them to be rendered in card format.

### Deployment

The landing page is deployed and can be accessed live at Live URL.
