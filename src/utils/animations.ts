// Animation utilities

// Function to check if an element is in viewport
export const isInViewport = (element: HTMLElement, offset: number = 100): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.bottom >= 0
  );
};

// Function to add animation to an element when it enters viewport
export const animateOnScroll = (element: HTMLElement, animationClass: string): void => {
  if (isInViewport(element)) {
    element.classList.add(animationClass);
  }
};

// Function to create typing animation
export const createTypingAnimation = (element: HTMLElement, text: string, speed: number = 100): void => {
  if (!element) return;
  
  element.textContent = '';
  let i = 0;
  
  const typeWriter = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  
  typeWriter();
};

// Staggered animation for multiple elements
export const staggeredAnimation = (
  elements: NodeListOf<HTMLElement> | HTMLElement[], 
  animationClass: string, 
  delay: number = 100
): void => {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add(animationClass);
    }, index * delay);
  });
};

// Parallax effect
export const parallaxEffect = (element: HTMLElement, speed: number = 0.5): void => {
  const scrollPosition = window.pageYOffset;
  element.style.transform = `translateY(${scrollPosition * speed}px)`;
};