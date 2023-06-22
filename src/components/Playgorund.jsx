import { useEffect } from "react";

export default function Playground() {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const isScrolledToEnd = scrollTop + clientHeight >= scrollHeight-5;
      if (isScrolledToEnd) {
        console.log("Scrolled to the end!");
      }
    };

    // Add scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return <div>Scroll to the end of the page.</div>;
}
