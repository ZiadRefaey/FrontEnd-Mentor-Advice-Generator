# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Advice Generator App Documentation

**Overview**
The Advice Generator is a simple React web application that generates random pieces of advice when the user clicks a "Roll the Dice" button. The application fetches advice from an external API and displays it to the user. It also provides a loading animation while fetching advice.

**File Structure**
The application consists of several files:

index.js: The main entry point of the application that renders the App component into the root HTML element.
App.jsx: The main component of the application that imports and renders the AdviceGenerator component. It also includes a <React.StrictMode> wrapper.
AdviceGenerator.js: The component responsible for generating and displaying advice. It fetches advice from an external API, displays it along with an advice number, and shows a loading spinner while fetching data.
Various CSS files (index.css, App.css, AdviceGenerator.css): These files contain the styling for different components of the application.
Components
App Component (App.jsx)
This component serves as the entry point of the application. It renders the AdviceGenerator component wrapped in <React.StrictMode> for improved development checks.

AdviceGenerator Component (AdviceGenerator.js)
The AdviceGenerator component is the core of the application. It includes the following elements:

**State Variables:**

advice: Holds the generated advice message.
adviceNo: Keeps track of the advice number.
isLoading: Tracks whether advice is currently being fetched.
handleAdviceGenerator Function: This function is triggered when the "Roll the Dice" button is clicked. It sets isLoading to true, fetches advice from an external API using the fetch function, and updates the state variables with the fetched advice.

**Conditional Rendering:**

When isLoading is true, it displays a loading spinner (<ThreeDots> from the react-loader-spinner library).
When isLoading is false, it displays the following:
The advice number (adviceNo) if available.
The generated advice message (advice).
A decorative divider.
A "Roll the Dice" button with a rotating dice icon.
Styling: The component is styled using CSS to create an appealing visual design. It includes custom styling for the container, advice text, advice number, and the button.

CSS Files (index.css, App.css, AdviceGenerator.css)
These CSS files contain styles for different parts of the application, including the layout, colors, fonts, and animations.

**Styling and Responsiveness**
The application is designed with responsive web design principles in mind. It adapts to different screen sizes, ensuring a consistent and visually pleasing user experience.

**External Dependencies**
The application uses the following external dependencies:

react and react-dom: Core libraries for building React applications.
react-loader-spinner: A library for displaying loading spinners.
External API: The app fetches advice from the "https://api.adviceslip.com/advice" API.
Usage
To use the application, follow these steps:

Open the application in a web browser.

Click the "Roll the Dice" button to generate a random piece of advice.

Wait for the advice to load, and it will be displayed along with an advice number.

You can keep clicking the button to generate more advice.

**Conclusion**
The Advice Generator is a simple and fun React web application that demonstrates the use of React components, state management, and external API integration to provide users with random advice. It offers an engaging user interface and is designed to be responsive across different devices.
