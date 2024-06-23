# Onboard

## Description
Mumbai's bus service is challenged by route inefficiencies, prolonged travel durations, limited reach, and a lack of adaptability to demographic shifts. Our solution leverages machine learning to analyze population density data, refine existing routes, and suggest new ones, aiming to boost mobility, accessibility, and sustainability. This approach is designed to cut down on travel times, enhance operational efficiency, and elevate user satisfaction.

## Technologies Used
- **Mapping Services**: Utilized Azure Maps (Microsoft Azure) and Google Maps (Google Cloud Platform) for obtaining path matrices and enabling real-time map displays on the website and mobile app.
- **Data Analysis and Visualization**: Employed Python, TensorFlow, Matplotlib, Numpy, and Folium for selecting the optimal routing algorithms and visualizing paths during efficiency tests.
- **Mobile Application Development**: Flutter and Firebase were chosen for creating the mobile app, facilitating a direct connection between end-users and the model.
- **Web Development**: The website was developed using Next.js, TailwindCSS, Express.js, Framer Motion, and Flask, making it easier for new users to explore our platform and discover buses operating on efficient routes.

## Challenges Faced
- **Data Availability**: Securing datasets related to the existing bus routes and stops was a significant hurdle.
- **Algorithm Optimization**: Determining the most effective weights for the routing algorithm to ensure efficient path matrices.
- **API Integration**: Integrating Google Maps API into the website and mobile app required meticulous attention to detail.
- **Cloud Service Limitations**: Navigating the constraints of cloud service credits necessitated creative solutions to accurately measure distances between bus stops.

## Installation Guide

### Website
To set up the website locally:
1. Navigate to the `web/onboard` directory.
2. Run `npm install` to install all necessary packages.
3. Execute `npm run dev` to serve the website on localhost.

### Mobile Application
To run the mobile application locally:
1. Go to the `flutter/onboard` folder.
2. Enter `flutter pub get` to install all required packages and libraries.
3. Use `flutter run` to launch the mobile application locally.

**Note**: Users must configure their own environment variables and provide their API keys.

## How to Use
This project is designed for bus operators seeking to identify the most efficient routes covering all necessary stops. Passengers can also benefit by viewing buses operating between selected stops. Both the website and mobile application support multiple languages and include a chatbot feature for user assistance and guidance.

## Credits
This project was collaboratively developed by a team of four, with specific contributions from:
- **Web Development**: Abhinav Singh
- **Mobile Application**: Piyush Singh
- **Algorithm and Data Preprocessing**: Divyansh Srivastava
- **Leadership and Cross-functional Support**: Utkarsh Ranjan, who played a pivotal role in web and mobile app development, algorithm optimization, and server deployment, connecting the algorithmic model with the web and mobile platforms.