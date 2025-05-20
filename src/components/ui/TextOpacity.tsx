'use client';
import { useEffect } from "react";
// import PropTypes from "prop-types";

interface TextOpacityProps {
  text: string;
  className?: string;
}

const TextOpacity: React.FC<TextOpacityProps> = ({ text, className }) => {
  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        // Select the element after the component mounts
        const splitTypes = document.querySelectorAll('.reveal-type');

        splitTypes.forEach((textElement) => {
          // Split the text into individual characters
          const chars = textElement.textContent
            ?.split("")
            .map(char => `<span class="char">${char}</span>`)
            .join("");
          textElement.innerHTML = chars || ''; // Replace text with span-wrapped characters

          // Use GSAP to animate each character
          gsap.from(textElement.querySelectorAll('.char'), {
            scrollTrigger: {
              trigger: textElement,
              start: "top 90%", // Trigger when the text comes into view
              end: "top 40%", // When it is fully visible
              scrub: 3, // Smoothly follow the scroll
              markers: false, // Enable for debugging
            },
            opacity: 0.2, // Start with opacity 0 (invisible)
            stagger: 0.05, // Stagger delay for each letter
          });
        });
      }
    };

    loadGSAP();
  }, []);

  return <p className={`reveal-type ${className}`}>{text}</p>;
};

export default TextOpacity;

// TextOpacity.propTypes = {
//   text: PropTypes.string.isRequired,
//   className: PropTypes.string,
// };
