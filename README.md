## Introduction

This project was developed as part of a coding challenge for the Senior Frontend Developer position at Doping Technology. The main objective was to create an application that showcases my expertise in React and frontend development techniques.

## Project Overview

The application is designed as a question bank system that allows users to navigate through various questions, view their details, and interact with different UI components. The main components include:

- A side navigator for routing.
- A dynamic question display.
- A bubble sheet for visualizing selected options.

## Design Decisions

1. **Modules-Based Architecture:** To ensure a clean, organized, and scalable codebase, a modules-based architecture was implemented.
2. **Atomic Design Approach:** The atomic design methodology was adopted to decompose the UI into smaller, reusable components. This modular strategy facilitates better code organization, reusability, and maintainability.
3. **Semantic URL Construction:** Adopted a hierarchical and descriptive URL structure to represent the relationship and content of the pages. The URL structure was designed to be intuitive and easily understandable by both users and search engines. By constructing URLs like `/question-bank/{lessonName}/{testName}/{testNumber}/{questionNumber}`, it provides a clear indication of the content hierarchy and the current location within the application. This not only aids in navigation but also potentially offers SEO benefits due to its descriptive nature.
4. **Asset Organization:** Assets were stored within the `src` folder instead of the public folder. This organization ensures that assets undergo the build process, benefitting from optimizations like minification. It also ensures the inclusion of only necessary assets in the final build.
5. **Rendering Local Content:** React's `dangerouslySetInnerHTML` was employed to render content containing formatted HTML. The content originates from a trusted local JSON file, ensuring there's no risk of malicious content or cross-site scripting (XSS) attacks.
6. **SCSS Modules:** SCSS was used in combination with CSS Modules to allow for more organized, maintainable, and scoped styles. This approach helps in avoiding global scope pollution and makes it easier to manage styles as the application grows.
7. **Performance First:** The application was designed with performance in mind. Using `forwardRef` and `useRef` for automatic scrolling ensures that the DOM isn't queried repeatedly, preserving performance.

## Implementation Challenges & Solutions

- **Interactive Feedback on Option Selection:**

  - **Challenge:** When a user selects an option, the application must provide immediate feedback. If the chosen option is correct, the styling of the other options should change and a specific button should appear. Conversely, if the chosen option is incorrect, the styling of the other options should adjust differently, and another distinct button should emerge.
  - **Solution:** Leveraged conditional rendering and state management to dynamically adjust the UI based on the user's selection. By comparing the user's choice against the correct answer, the application can modify component styles and display appropriate buttons to provide instantaneous feedback. This approach enhances user engagement and provides a more interactive learning experience.

- **Navigation Button Uniformity:**

  - **Challenge:** The Figma design allowed the export of standalone icons for some side navigator buttons, while for others, the entire button (including the background) was exportable. This posed a challenge in maintaining a consistent look across all buttons.
  - **Solution:** The approach to use entire button assets for all navigation buttons was adopted. This guaranteed uniformity throughout the navigation panel and circumvented any visual inconsistencies.

- **SVG Icon Alignment:**

  - **Challenge:** Certain icons in the Figma design had extra padding, which wasn't visually evident, leading to misalignment within the SideNavigator.
  - **Solution:** Adobe Illustrator was employed to optimize these SVG icons by adjusting and removing the unwanted padding around them, ensuring their proper alignment.

- **Opacity and Background Color Rendering:**

  - **Challenge:** Figma designs incorporated separate values for opacity and background color for certain sections. When implemented in CSS, using both opacity and background color caused some elements to appear faint or even disappear due to the combined effects of opacity.
  - **Solution:** Instead of using separate opacity and hex color values, the colors were converted to RGB and combined with the opacity, resulting in RGBA values. This method ensured a consistent visual representation of the color as intended in the Figma design while preventing any unintentional fading or disappearance of elements.

- **Bottom Navigation Button Centering:**
  - **Challenge:** The left and right arrow icons in the bottom navigation were not vertically centered within their respective artboards in the Figma design. Adjustments in Adobe Illustrator did not yield the desired centered alignment.
  - **Solution:** The vertical centering was achieved using CSS in the implementation. By adjusting positioning properties in the stylesheet, the icons were perfectly centered, ensuring they matched the intended design aesthetic.

## Demo & Screenshots

**Live Demo:** [Click here to view the live demo.](https://dh-reactjs-challenge.ew.r.appspot.com)

### Screenshots

Here are some screenshots showcasing the application's main features:

![Screenshot 1 Description](https://github.com/erayaras/dh-reactjs-challenge/raw/main/question.png)
![Screenshot 2 Description](https://github.com/erayaras/dh-reactjs-challenge/raw/main/wrong-answer.png)

## Installation & Setup

1. **Prerequisites:**
   - Ensure you have `Node.js` and `npm` (or `yarn`) installed.
2. **Steps:**
   1. Clone the repository: `git clone https://github.com/erayaras/dh-reactjs-challenge.git`.
   2. Navigate to the project folder: `cd [project_folder]`.
   3. Install the dependencies: `npm install` or `yarn`.
   4. Start the application: `npm start` or `yarn start`.

## Usage

1. On launching the application, you'll be presented with a list of questions.
2. You can navigate between questions using the provided navigation buttons.
3. Selecting an option on the question will highlight it on the bubble sheet.

## Technical Highlights

- **Dynamic Routing:** Utilized `react-router-dom` to handle dynamic routing based on the selected question.
- **State Management:** Local state management was handled using React hooks, primarily `useState` and `useEffect`.
- **Performance Optimization:** Used React's `forwardRef` and `useRef` to handle automatic scrolling, ensuring a seamless user experience.
- **Error Boundaries:** Implemented error boundaries within the application to gracefully handle potential runtime errors. This ensures that if a component encounters an error, it won't crash the entire application. Instead, it provides the opportunity to display a friendly error message to users and log the error for further diagnosis.

## Testing Approach

- Manual testing was primarily conducted to ensure that all components rendered correctly and the state was managed effectively.
- For future implementations, considering integrating Jest and React Testing Library to write unit and integration tests.

## Feedback & Future Improvements

While the challenge provided a great opportunity to showcase various frontend techniques, there are a few areas where improvements can be made:

- **Responsiveness:** Enhance the design to be fully responsive, ensuring an optimal user experience across a variety of devices, from desktops to tablets and mobile phones.
- **Accessibility:** Further improvements could be made to ensure the application is fully accessible to all users, including those with disabilities. This includes better focus management, improved keyboard navigation, and screen reader compatibility.
- **Animation & Transitions:** Introduce subtle animations or transitions to make the user interface more interactive and engaging. For example, smooth transitions when navigating between questions or a subtle animation when selecting an option can enhance user feedback.
- **Optimization:** Look into further optimizing the application for performance, especially when handling a larger set of questions or data.

## Conclusion

This project was an exciting opportunity to apply and showcase various frontend development techniques. I believe it meets the requirements of the challenge and demonstrates a solid understanding of React and frontend best practices. I'm eager to receive feedback and further discuss my approach during the review.

## A Note on `npm audit`

`npm audit` is a tool that flags potentially vulnerable dependencies. However, it's essential to understand that:

- `npm audit` often flags vulnerabilities without considering the context, which can lead to numerous false positives, especially in frontend frameworks like Create React App.
- These alerts can be misleading for new developers and can also create unnecessary alarm for more experienced ones.
- Before taking action on `npm audit` results, it's recommended to interpret them discerningly, bearing in mind that not every reported issue may be pertinent to every project.

For a detailed discussion on the challenges and limitations of `npm audit`, you can read [npm audit: Broken by Design](https://overreacted.io/npm-audit-broken-by-design/).
