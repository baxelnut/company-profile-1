import { useEffect, useRef, useState } from "react";

// Used for FadeInOnScroll fancy FX
export default function useInView(options = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node); // Only trigger once
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isVisible];
}
