import { useState, useEffect, useRef } from 'react';

export default function useAnimatedUnmount(visible) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const elementRef = animatedElementRef.current;
    if (!visible && elementRef) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationEnd', handleAnimationEnd);
      }
    };
  }, [visible]);

  return { shouldRender, animatedElementRef };
}
