# RAMSYS -  Web Development Tutorial

View the live project here: https://olitech1010.github.io/rayvalley-html-css-js-project-tut/

## Table of Contents
1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [HTML Basics](#html-basics)
4. [CSS Fundamentals](#css-fundamentals)
5. [JavaScript Essentials](#javascript-essentials)
6. [Responsive Design](#responsive-design)
7. [Project Structure](#project-structure)
8. [Key Concepts Explained](#key-concepts-explained)
9. [Practice Exercises](#practice-exercises)
10. [Resources](#resources)

---

## Introduction

Welcome to the RAMSYS web development tutorial! This project is designed to teach beginners/intermediate devs the fundamentals of HTML, CSS, and JavaScript through a real-world website example.

### Instructor - Clement Olives Mensah
https://www.linkedin.com/in/olitech1010

### What You'll Learn
- **HTML**: Structure and semantic markup
- **CSS**: Styling, layout, and responsive design
- **JavaScript**: Interactive functionality and DOM manipulation
- **Best Practices**: Clean code, comments, and organization

### Prerequisites
- Basic computer skills
- A text editor (VS Code, Sublime Text, or any code editor)
- A web browser (Chrome, Firefox, Safari, or Edge)
- No prior coding experience required!

---

## Project Overview

Ray Valley Farms is a modern, responsive website for an agricultural business. The project includes:
- **6 HTML Pages**: Home, About, Gallery, Login, Signup, and Contact
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Menu**: Hamburger menu for mobile navigation
- **Modern Styling**: Clean, professional design with CSS variables
- **Image Gallery**: Learn CSS Grid with a beautiful image gallery
- **Google Maps Integration**: Embedded maps for location display
- **Form Handling**: Login and signup forms with validation

### Technologies Used
- HTML5 (Structure)
- CSS3 (Styling)
- Vanilla JavaScript (Functionality)
- Google Fonts (Typography)

---

## HTML Basics

### What is HTML?
HTML (HyperText Markup Language) is the foundation of every website. It provides the structure and content of web pages.

### Key HTML Concepts in This Project

#### 1. Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadata goes here -->
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

**Explanation:**
- `<!DOCTYPE html>` tells the browser this is an HTML5 document
- `<html>` is the root element containing all content
- `<head>` contains metadata (title, links to CSS, etc.)
- `<body>` contains visible content

#### 2. Semantic HTML Elements

**Header (`<header>`)**
- Contains logo, navigation, and login button
- Provides site-wide navigation

**Navigation (`<nav>`)**
- Contains links to different pages
- Helps users navigate the website

**Section (`<section>`)**
- Groups related content together
- Example: Hero section, About section, etc.

**Footer (`<footer>`)**
- Contains footer information
- Usually at the bottom of the page

**Why Semantic HTML?**
- Better accessibility for screen readers
- Easier to maintain and understand
- Better SEO (Search Engine Optimization)

#### 3. Common HTML Elements

**Headings (`<h1>`, `<h2>`, etc.)**
```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
```
- `<h1>` is the most important (largest)
- Use headings in order (h1 → h2 → h3)

**Paragraphs (`<p>`)**
```html
<p>This is a paragraph of text.</p>
```

**Links (`<a>`)**
```html
<a href="about.html">About Us</a>
```
- `href` attribute specifies the destination
- Can link to other pages or external websites

**Images (`<img>`)**
```html
<img src="./images/logo.png" alt="Ray Valley Logo">
```
- `src` is the image file path
- `alt` provides text description (important for accessibility)

**Buttons (`<button>`)**
```html
<button class="btn-primary">Click Me</button>
```

**Lists (`<ul>`, `<ol>`, `<li>`)**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```
- `<ul>` = unordered list (bullets)
- `<ol>` = ordered list (numbers)
- `<li>` = list item

**Forms (`<form>`)**
```html
<form action="#" method="POST">
    <input type="email" name="email" required>
    <button type="submit">Submit</button>
</form>
```
- Used to collect user input
- `action` specifies where to send data
- `method` specifies HTTP method (GET or POST)

#### 4. HTML Attributes

Attributes provide additional information about elements:

```html
<img src="image.jpg" alt="Description" class="logo" id="main-logo">
```

Common attributes:
- `class`: Used for CSS styling (can have multiple classes)
- `id`: Unique identifier (only one per page)
- `src`: Source file path
- `alt`: Alternative text
- `href`: Link destination
- `type`: Input type (text, email, password, etc.)
- `required`: Makes form field mandatory

---

## CSS Fundamentals

### What is CSS?
CSS (Cascading Style Sheets) controls the appearance and layout of HTML elements. It makes websites beautiful and responsive.

### Key CSS Concepts in This Project

#### 1. CSS Variables (Custom Properties)

**What are CSS Variables?**
CSS variables allow you to store values that can be reused throughout your stylesheet.

**How They Work:**
```css
:root {
    --color-primary: #53C351;
    --spacing-md: 20px;
}

.button {
    background-color: var(--color-primary);
    padding: var(--spacing-md);
}
```

**Benefits:**
- Easy to maintain: Change color once, updates everywhere
- Consistent design: All buttons use the same color
- Better organization: All design values in one place

**Variables Used in This Project:**
- Colors: `--color-primary`, `--color-text-primary`, etc.
- Spacing: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, etc.
- Font sizes: `--font-size-base`, `--font-size-lg`, etc.
- Border radius: `--radius-sm`, `--radius-md`, etc.

#### 2. CSS Selectors

**Element Selector**
```css
p {
    color: black;
}
```
- Styles all `<p>` elements

**Class Selector**
```css
.btn-primary {
    background-color: green;
}
```
- Styles elements with `class="btn-primary"`
- Can be used multiple times

**ID Selector**
```css
#hamburger-icon {
    width: 30px;
}
```
- Styles element with `id="hamburger-icon"`
- Should be unique (only one per page)

**Descendant Selector**
```css
nav a {
    color: black;
}
```
- Styles `<a>` elements inside `<nav>`

**Pseudo-classes**
```css
a:hover {
    color: green;
}
```
- `:hover` - when mouse hovers over element
- `:active` - when element is clicked
- `:focus` - when element has focus

#### 3. Box Model

Every HTML element is a box with:
- **Content**: The actual content (text, image, etc.)
- **Padding**: Space inside the element
- **Border**: Border around the element
- **Margin**: Space outside the element

```css
.element {
    padding: 20px;    /* Space inside */
    border: 1px solid black;  /* Border */
    margin: 10px;     /* Space outside */
}
```

**box-sizing: border-box**
```css
* {
    box-sizing: border-box;
}
```
- Makes padding and border included in width/height
- Prevents elements from being wider than expected

#### 4. Flexbox Layout

Flexbox makes it easy to create flexible layouts.

**Container (Parent)**
```css
.container {
    display: flex;
    justify-content: center;  /* Horizontal alignment */
    align-items: center;      /* Vertical alignment */
    gap: 20px;                /* Space between items */
}
```

**Common Flexbox Properties:**
- `display: flex` - Makes container a flex container
- `flex-direction: row/column` - Direction of items
- `justify-content` - Horizontal alignment
- `align-items` - Vertical alignment
- `gap` - Space between items

**Example from Project:**
```css
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
```
- Header items are arranged horizontally
- Evenly spaced
- Vertically centered

#### 5. Positioning

**Static (Default)**
- Elements flow in normal document order

**Relative**
- Positioned relative to its normal position
- Can use `top`, `right`, `bottom`, `left`

**Absolute**
- Positioned relative to nearest positioned ancestor
- Removed from normal flow

**Fixed**
- Positioned relative to viewport
- Stays in place when scrolling
- Used for mobile menu in this project

**Example:**
```css
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    right: -100%;
}
```

#### 6. Button Styles

**Primary Button**
```css
.btn-primary {
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 0 20px;
    cursor: pointer;
}
```
- Green background
- Used for main actions (Login, Submit, etc.)

**Secondary Button**
```css
.btn-secondary {
    background-color: transparent;
    color: black;
    border: none;
}
```
- No background
- Used for less important actions

**Why Two Button Types?**
- Visual hierarchy: Primary buttons stand out more
- User guidance: Shows which action is most important
- Consistent design: All buttons follow same pattern

#### 7. Transitions and Animations

**Transitions**
```css
.button {
    transition: background-color 0.2s ease;
}

.button:hover {
    background-color: darkgreen;
}
```
- Smoothly changes property over time
- Makes interactions feel polished

**In This Project:**
- Menu slides in smoothly
- Buttons change color on hover
- Links have smooth color transitions

---

## JavaScript Essentials

### What is JavaScript?
JavaScript makes websites interactive. It can:
- Respond to user actions (clicks, typing, etc.)
- Modify page content
- Handle form submissions
- Create dynamic effects

### Key JavaScript Concepts in This Project

#### 1. DOM (Document Object Model)

**What is the DOM?**
The DOM is a representation of your HTML that JavaScript can interact with.

**Selecting Elements:**
```javascript
// By ID
const menu = document.getElementById('mobile-menu');

// By class (returns first match)
const button = document.querySelector('.btn-primary');

// By class (returns all matches)
const buttons = document.querySelectorAll('.btn-primary');
```

**Why We Use It:**
- To find elements on the page
- To modify their properties
- To add event listeners

#### 2. Event Listeners

Event listeners wait for user actions and respond to them.

**Syntax:**
```javascript
element.addEventListener('event', function() {
    // Code to run when event happens
});
```

**Common Events:**
- `click` - When element is clicked
- `keydown` - When key is pressed
- `resize` - When window is resized
- `load` - When page finishes loading

**Example from Project:**
```javascript
hamburgerIcon.addEventListener('click', function() {
    openMenu();
});
```
- When hamburger icon is clicked, open the menu

#### 3. Functions

Functions are reusable blocks of code.

**Function Declaration:**
```javascript
function openMenu() {
    mobileMenu.classList.add('active');
}
```

**Function Expression:**
```javascript
const openMenu = function() {
    mobileMenu.classList.add('active');
};
```

**Arrow Function (Modern):**
```javascript
const openMenu = () => {
    mobileMenu.classList.add('active');
};
```

**Why Use Functions?**
- Reusable code
- Better organization
- Easier to maintain

#### 4. DOM Manipulation

**Adding Classes:**
```javascript
element.classList.add('active');
```

**Removing Classes:**
```javascript
element.classList.remove('active');
```

**Checking if Class Exists:**
```javascript
if (element.classList.contains('active')) {
    // Do something
}
```

**Changing Styles:**
```javascript
element.style.overflow = 'hidden';
```

**Example from Project:**
```javascript
function openMenu() {
    mobileMenu.classList.add('active');
    menuBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
}
```

#### 5. Event Object

The event object contains information about the event.

```javascript
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMenu();
    }
});
```
- `event.key` tells us which key was pressed
- `event.target` tells us which element triggered the event

#### 6. DOMContentLoaded

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Code runs after HTML is loaded
});
```

**Why We Use It:**
- Ensures HTML is loaded before JavaScript runs
- Prevents errors from trying to access elements that don't exist yet

#### 7. Mobile Menu Logic

**How It Works:**
1. User clicks hamburger icon
2. JavaScript adds `active` class to menu
3. CSS transitions menu into view
4. User can close menu multiple ways:
   - Click X button
   - Click backdrop
   - Press Escape key
   - Click menu link

**Code Flow:**
```javascript
// 1. Get elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');

// 2. Define functions
function openMenu() {
    mobileMenu.classList.add('active');
}

function closeMenu() {
    mobileMenu.classList.remove('active');
}

// 3. Add event listeners
hamburgerIcon.addEventListener('click', openMenu);
```

---

## Responsive Design

### What is Responsive Design?
Responsive design makes websites work on all screen sizes: desktop, tablet, and mobile.

### Media Queries

Media queries apply different styles based on screen size.

**Syntax:**
```css
@media screen and (max-width: 750px) {
    /* Styles for screens 750px and smaller */
}
```

**Breakpoints Used:**
- **Desktop**: Above 768px (default styles)
- **Tablet**: 768px and below
- **Mobile**: 750px and below
- **Small Mobile**: 480px and below

**Example:**
```css
/* Desktop: Show navigation */
.nav {
    display: flex;
}

/* Mobile: Hide navigation, show hamburger */
@media screen and (max-width: 750px) {
    .nav {
        display: none;
    }
    
    .hamburger {
        display: block;
    }
}
```

### Mobile-First Approach

**What It Means:**
- Design for mobile first
- Add styles for larger screens with media queries
- Progressive enhancement

**Benefits:**
- Faster on mobile devices
- Better user experience
- Easier to maintain

### Responsive Techniques Used

**1. Flexible Images**
```css
img {
    max-width: 100%;
    height: auto;
}
```
- Images scale to fit container
- Maintains aspect ratio

**2. Flexible Layouts**
```css
.hero {
    flex-direction: column; /* Stack on mobile */
}

@media screen and (min-width: 768px) {
    .hero {
        flex-direction: row; /* Side by side on desktop */
    }
}
```

**3. Responsive Typography**
```css
h1 {
    font-size: 28px; /* Mobile */
}

@media screen and (min-width: 768px) {
    h1 {
        font-size: 40px; /* Desktop */
    }
}
```

**4. CSS Order Property**
```css
.money-content {
    order: -1; /* Text appears first on mobile */
}

.money-image {
    order: 1; /* Image appears after text */
}
```
- Changes visual order without changing HTML
- Text appears before images on mobile

---

## Project Structure

```
ray-valley-main/
│
├── index.html          # Home page
├── about.html          # About page with video and images
├── gallery.html       # Image gallery page (CSS Grid)
├── login.html         # Login page
├── signup.html        # Sign up page
├── contact.html       # Contact page with Google Maps
│
├── css/
│   └── style.css      # All styles (variables, layout, responsive)
│
├── javascript/
│   └── script.js      # Mobile menu functionality
│
├── images/
│   ├── logo.png
│   ├── bg.png
│   ├── Aerial_view_of_farm.jpeg
│   ├── Agricultural_machinery.jpg
│   ├── cattle farm.jpg
│   ├── farmer at farm.jpg
│   └── ... (many more images)
│
└── README.md          # This file
```

### File Organization

**HTML Files**
- Each page has its own HTML file
- All pages share the same header and footer structure
- Consistent navigation across all pages
- Footer includes: About, Quick Links, Contact Info, and Social Media

**CSS File**
- All styles in one file for simplicity
- Organized by sections with comments
- CSS variables at the top
- Responsive design with mobile-first approach

**JavaScript File**
- Separate file for better organization
- Loaded at end of HTML for performance
- Handles mobile menu functionality

---

## Key Concepts Explained

### 1. Semantic HTML
Using HTML elements that describe their purpose:
- `<header>` for header content
- `<nav>` for navigation
- `<section>` for content sections
- `<footer>` for footer

**Benefits:**
- Better accessibility
- Easier to understand
- Better SEO

### 2. CSS Variables
Storing reusable values:
```css
:root {
    --color-primary: #53C351;
}
```

**Benefits:**
- Easy to maintain
- Consistent design
- Quick theme changes

### 3. Flexbox
Modern layout method:
```css
.container {
    display: flex;
    justify-content: center;
}
```

**Benefits:**
- Easy alignment
- Responsive layouts
- Less code than old methods

### 4. Event-Driven JavaScript
Code that responds to user actions:
```javascript
button.addEventListener('click', function() {
    // Do something
});
```

**Benefits:**
- Interactive websites
- Better user experience
- Dynamic content

### 5. Mobile-First Design
Designing for mobile, then enhancing for desktop:
- Faster mobile performance
- Better user experience
- Easier maintenance

### 6. CSS Grid (Gallery Page)
Modern layout system for two-dimensional layouts:
```css
.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
```

**Benefits:**
- Easy to create responsive grids
- Automatic layout adjustment
- Perfect for image galleries

### 7. Google Maps Integration
Embedding interactive maps using iframes:
```html
<iframe src="https://www.google.com/maps/embed?..." 
        width="100%" 
        height="450">
</iframe>
```

**Benefits:**
- Interactive location display
- Easy navigation for users
- Professional appearance

### 8. Form Validation
HTML5 form validation attributes:
```html
<input type="email" required minlength="8">
```

**Benefits:**
- Built-in browser validation
- Better user experience
- Prevents invalid submissions

### 9. Footer Design
The footer uses CSS Grid for a responsive multi-column layout:
```css
.footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

**Footer Sections:**
- About: Company description
- Quick Links: Navigation links
- Contact: Contact information
- Social Media: Social icons and follow text

**Benefits:**
- Organized information
- Easy navigation
- Professional appearance
- Responsive grid layout

### 10. Content Overflow Prevention
Using proper CSS properties to prevent text overflow:
```css
word-wrap: break-word;
max-width: 100%;
box-sizing: border-box;
```

**Benefits:**
- Prevents text from breaking layout
- Better mobile experience
- Content stays within containers

---

## Practice Exercises

### Beginner Exercises

1. **Change Colors**
   - Find CSS variables in `style.css`
   - Change `--color-primary` to a different color
   - See how it updates throughout the site

2. **Add a New Section**
   - Add a new section to `index.html`
   - Style it using existing classes
   - Make it responsive

3. **Modify Button Text**
   - Find a button in HTML
   - Change its text
   - See the change in browser

4. **Add a New Page**
   - Copy `about.html`
   - Create `services.html`
   - Update navigation links

5. **Explore the Gallery Page**
   - Open `gallery.html`
   - See how CSS Grid creates responsive image layouts
   - Try adding more images to the gallery

### Intermediate Exercises

1. **Add Hover Effects**
   - Add hover effect to images
   - Use CSS transitions
   - Experiment with different effects

2. **Create New Button Style**
   - Add a new button class
   - Use CSS variables
   - Apply to multiple buttons

3. **Add Form Validation**
   - Add JavaScript to validate forms
   - Show error messages
   - Prevent invalid submissions

4. **Improve Mobile Menu**
   - Add animation to menu items
   - Add close on outside click
   - Add keyboard navigation

### Advanced Exercises

1. **Add Dark Mode**
   - Create dark mode CSS variables
   - Add toggle button
   - Save preference in localStorage

2. **Add Smooth Scrolling**
   - Implement smooth scroll to sections
   - Add scroll animations
   - Create scroll-to-top button

3. **Form Submission**
   - Connect forms to backend
   - Add loading states
   - Show success/error messages

4. **Performance Optimization**
   - Optimize images
   - Minify CSS/JS
   - Add lazy loading

5. **Enhance the Gallery**
   - Add lightbox functionality (click image to view larger)
   - Add image filtering (filter by category)
   - Add image captions with animations

---

## Resources

### Learning Resources

**HTML:**
- [MDN HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)

**CSS:**
- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

**JavaScript:**
- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

**Responsive Design:**
- [Responsive Design Basics](https://web.dev/responsive-web-design-basics/)
- [Media Queries Guide](https://css-tricks.com/css-media-queries/)

### Tools

**Code Editors:**
- [VS Code](https://code.visualstudio.com/) (Recommended)
- [Sublime Text](https://www.sublimetext.com/)
- [Atom](https://atom.io/)

**Browser DevTools:**
- Chrome DevTools (F12)
- Firefox Developer Tools
- Safari Web Inspector

**Online Resources:**
- [CodePen](https://codepen.io/) - Practice coding
- [GitHub](https://github.com/) - Version control
- [Stack Overflow](https://stackoverflow.com/) - Get help

---

## New Features Explained

### Gallery Page (gallery.html)
The gallery page demonstrates CSS Grid, a powerful layout system for creating responsive image galleries.

**Key Concepts:**
- **CSS Grid**: Two-dimensional layout system
- **auto-fit**: Automatically adjusts number of columns
- **minmax()**: Sets minimum and maximum column widths
- **Hover Effects**: Interactive image scaling on hover

**How It Works:**
```css
.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
```
This creates a responsive grid that automatically adjusts based on screen size.

### Signup Page (signup.html)
A complete registration form demonstrating:
- Multiple input types (text, email, tel, password)
- Form validation (required, minlength)
- Checkbox for terms and conditions
- Password confirmation field

### Google Maps Integration
The contact page includes an embedded Google Map showing the business location in Accra, Ghana.

**How to Embed Maps:**
1. Get the Google Maps share link
2. Convert to embed format
3. Use iframe to display the map

### Mobile Centering
All content is centered on mobile devices for better readability:
- Text alignment: center
- Images: auto margins
- Buttons: centered with flexbox
- Forms: centered inputs

### Footer Implementation
The footer is now a comprehensive section with:
- **Grid Layout**: Responsive 4-column layout (stacks on mobile)
- **Social Icons**: Integrated social media icons
- **Contact Information**: Quick access to contact details
- **Quick Links**: Easy navigation to all pages
- **Copyright**: Footer bottom with copyright notice

**Applied to All Pages:**
- index.html
- about.html
- gallery.html
- contact.html
- login.html
- signup.html

## Common Questions

### Q: Why do we use CSS variables?
**A:** CSS variables make it easy to maintain consistent design. Change a color once, and it updates everywhere it's used.

### Q: What's the difference between class and ID?
**A:** 
- `class` can be used multiple times (for styling groups of elements)
- `id` should be unique (for targeting specific elements)

### Q: Why is JavaScript at the end of HTML?
**A:** So HTML loads first, then JavaScript runs. This prevents errors from trying to access elements that don't exist yet.

### Q: What's the difference between padding and margin?
**A:**
- `padding` is space inside the element
- `margin` is space outside the element

### Q: How do media queries work?
**A:** Media queries apply different styles based on screen size. They let you create responsive designs that work on all devices.

### Q: What's the difference between Flexbox and Grid?
**A:**
- **Flexbox**: One-dimensional layout (row OR column)
- **Grid**: Two-dimensional layout (rows AND columns)
- Use Flexbox for components, Grid for page layouts

### Q: How do I embed Google Maps?
**A:** 
1. Get the share link from Google Maps
2. Convert it to embed format
3. Use an iframe element with the embed URL
4. Set width and height attributes

### Q: How does the footer work?
**A:** The footer uses CSS Grid to create a responsive layout. On desktop, it shows 4 columns. On mobile, it stacks vertically. The footer includes company info, links, contact details, and social media icons.

### Q: How do I prevent text overflow?
**A:** Use CSS properties like `word-wrap: break-word`, `max-width: 100%`, and `box-sizing: border-box` to ensure content stays within its container and doesn't break the layout.

---

## Next Steps

1. **Experiment**: Change colors, add content, modify layouts
2. **Practice**: Complete the exercises above
3. **Build**: Create your own project using these concepts
4. **Learn More**: Explore advanced topics like:
   - CSS Grid
   - JavaScript frameworks (React, Vue)
   - Backend development
   - Database integration

---

## Conclusion

Congratulations! You've learned the fundamentals of web development through this project. You now understand:

HTML structure and semantic markup
CSS styling, layout, and responsive design
JavaScript for interactivity
Best practices and code organization

Keep practicing, building projects, and learning. Web development is a journey, and you're on the right path!

**Happy Coding!**

---

## License

This project is for educational purposes. Feel free to use it as a learning resource.

---

*Last Updated: 2025*

---

## Contact Information

**Olives Technologies**
- **Address**: Accra, Ghana
- **Phone**: +233 55 330 6360
- **Email**: olitech1010@gmail.com
- **Google Maps**: [View Location](https://maps.app.goo.gl/sq2QHscmQ1UMpQG5A)
- **Reviews**: [Leave a Review](https://share.google/HuDOOyPcgZzexN2P4)

BY CLEMENT OLIVES
