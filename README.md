# AIONEX 2K26

![AIONEX Hero](assets/hero1.jpg) <!-- Optional: You can replace this with an actual screenshot of your hero section -->

Welcome to the official website repository for **AIONEX 2K26**, the National Level Technical Symposium organized by the Department of Artificial Intelligence & Data Science.

## 🌟 Overview

AIONEX is a premier technical symposium designed to bring together brilliant minds, tech enthusiasts, and innovators. The website serves as the central hub for event details, rules, schedules, faculty coordinators, and registration.

### ✨ Key Features
- **Liquid Glass Aesthetic:** A modern, premium UI featuring dynamic frosted/liquid glass effects, specular highlights, and edge caustics.
- **Light & Dark Mode:** A fully integrated theme toggle using CSS custom properties for a seamless transition between themes.
- **Dynamic Content Rendering:** Events and faculty data are cleanly separated into a JavaScript array, allowing for easy updates without modifying the HTML structure.
- **Interactive Animations:** Powered by GSAP (GreenSock) and ScrollTrigger for smooth, high-performance scroll animations.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile viewing, including a floating "Register Now" button on mobile.

---

## 🚀 Events

AIONEX hosts a variety of technical and non-technical events to challenge and entertain participants:

### Technical Events
1. **Techie Talks:** Paper presentation on emerging technical fields.
2. **Code Conqueror:** Two-round debugging and logic challenge.
3. **Aura UI/UX:** Single-page UI design challenge using Figma.
4. **Brainy Blitz:** Fast-paced technical quiz and rapid-fire rounds.

### Non-Technical Events
1. **Spotify:** Music guessing game with a fun balloon/proverb twist.
2. **Connexion:** Visual puzzle and lateral thinking challenge.
3. **Logiq Hunt:** Multi-round visual logic challenge (blurred images, logos, taglines).

---

## 🛠️ Technology Stack

- **HTML5:** Semantic structure.
- **CSS3 / Tailwind CSS:** Core styling, utility classes, and complex CSS custom properties for the liquid-glass theme system.
- **Vanilla JavaScript:** DOM manipulation, theme management (`localStorage`), and dynamic data rendering.
- **GSAP & ScrollTrigger:** Scroll-linked animations and page entrance effects.
- **Lucide Icons:** Clean, lightweight SVG icons.

---

## 📂 Project Structure

```text
AI_sympo_web/
├── index.html          # Main application structure
├── style.css           # Theme variables, glassmorphism, responsive styles
├── script.js           # Event data, GSAP animations, dynamic rendering
├── tailwind.config.js  # Tailwind configuration
├── event_rules_.pdf    # Official event rules and guidelines
└── assets/             # Images, logos, and faculty portraits
```

---

## 💻 Local Development

To run this project locally, simply clone the repository and serve the HTML file. No build step is required for the core files (unless modifying the Tailwind configuration).

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashley-Lijin/aionex.git
   ```
2. Navigate to the project directory:
   ```bash
   cd aionex
   ```
3. Open `index.html` in your browser, or use a local development server like Live Server (VS Code) or Python's `http.server`:
   ```bash
   python -m http.server 8000
   ```

---

## 🎨 Theme System

The website uses a robust CSS Custom Property system to handle themes. The theme state is toggled via JavaScript and saved in `localStorage`. 

- **Dark Mode (Default):** Deep purples (`#07001a`), neon accents, and heavy glassmorphism.
- **Light Mode:** High-contrast pastel purple (`#f5f0ff`), deeper shadow depths, and softer light refraction on glass elements.

You can modify the core colors in `style.css` under the `:root, [data-theme="dark"]` and `[data-theme="light"]` selectors.

---

## 📝 How to Update Content

Event details and faculty information are stored as JSON-like objects inside `script.js`. 
- To add or modify an event, edit the `technicalEvents` or `nonTechnicalEvents` arrays.
- To add or modify staff/coordinators, edit the `facultyCategories` object.

The page will automatically re-render the HTML cards based on these arrays on load.

---

*Designed and Developed for AIONEX 2K26.*
