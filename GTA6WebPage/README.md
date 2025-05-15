


          
# GTA VI Landing Page

## Project Description
An immersive, animated landing page inspired by Grand Theft Auto VI, showcasing advanced web animations and interactive elements. This project demonstrates modern web development techniques using React and GSAP, creating a cinematic user experience that captures the essence of the GTA franchise's visual style.

## Tech Stack
- **React** - Frontend framework
- **Vite** - Build tool and development server
- **GSAP (GreenSock Animation Platform)** - Advanced animations
  - ScrollTrigger plugin
  - ScrollSmoother plugin
- **Tailwind CSS** - Utility-first styling
- **Remix Icons** - UI icons
- **Custom Fonts**
  - Pricedown (GTA-style font)
  - Helvetica Now Display

## Features

### 1. Intro Animation
- SVG mask animation with "VI" text reveal
- Scale and rotation transitions
- Smooth fade-out to main content

### 2. Landing Page
- Interactive parallax effects on mouse movement
- Animated background elements (sky, trees)
- Responsive Rockstar Games navigation bar
- Dynamic text scaling and positioning

### 3. Content Sections
- Scroll-triggered animations
- Staggered content reveals
- Interactive button animations
- Neon-styled GTA VI section with hover effects

## Project Structure
```
/
├── public/
│   └── assets/
│       ├── bg.png           # Background images
│       ├── girlbg.png       # Character artwork
│       ├── sky.png          # Sky texture
│       ├── pricedown.otf    # GTA-style font
│       └── HelveticaNow*.woff2 # Body text font
├── src/
│   ├── App.jsx             # Main application logic
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
```

## Animation Implementation

### Initial Load Animation
```javascript
useGSAP(() => {
  const t1 = gsap.timeline();
  // VI mask animation
  t1.to(".vi-mask-group", {
    rotate: 10,
    scale: 10,
    opacity: 0
    // Transitions to main content
  });
});
```

### Mouse Movement Effects
```javascript
main?.addEventListener("mousemove", function (e) {
  // Parallax calculations
  const xmove = (e.clientX / window.innerWidth - 0.5) * 30;
  const ymove = (e.clientY / window.innerHeight - 0.5) * 30;
  // Apply to multiple elements
});
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm run dev
```

### Required Dependencies
- gsap
- @gsap/react
- @remixicon/react
- tailwindcss

## Customization Guide

### Replacing Assets
1. Place new images in `/public/assets/`
2. Update image paths in `App.jsx`:
```jsx
<img src="/assets/your-new-image.png" />
```

### Modifying Animations

#### Adjust Timeline Animations
```javascript
const t1 = gsap.timeline();
t1.to(element, {
  duration: 2,     // Animation duration
  ease: "expo.inOut", // Easing function
  scale: 1.5       // Transform scale
});
```

#### Customize Scroll Triggers
```javascript
ScrollTrigger.create({
  trigger: ".your-element",
  start: "top center",  // Adjust trigger point
  end: "bottom center", // Adjust end point
  scrub: true           // Smooth scrubbing
});
```

### Styling Modifications
- Global styles are in `src/index.css`
- Tailwind classes can be modified directly in components
- Neon effects and gradients can be adjusted in the CSS

## Performance Considerations
- Use `will-change` for elements with heavy animations
- Consider lazy loading for images
- Optimize animation timelines for smooth transitions

## Browser Support
- Modern browsers with WebGL support
- CSS Grid and Custom Properties support required
- JavaScript ES6+ compatibility needed

## Credits
- Fonts: Pricedown (GTA style) and Helvetica Now Display
- GSAP by GreenSock
- Remix Icons for UI elements
        