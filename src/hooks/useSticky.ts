import { useEffect, useState } from "react";

function useSticky(targetId: string): boolean {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.error("Target element not found");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const targetOffset = targetElement.offsetTop;
      setIsSticky(scrollPosition >= targetOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetId]);

  return isSticky;
}

export default useSticky;
