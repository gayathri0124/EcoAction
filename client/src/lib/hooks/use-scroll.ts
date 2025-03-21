import { useState, useEffect } from "react";

export function useScroll(threshold = 100) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrolled;
}

export function scrollToElement(elementId: string, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: yCoordinate - offset,
      behavior: "smooth"
    });
  }
}
