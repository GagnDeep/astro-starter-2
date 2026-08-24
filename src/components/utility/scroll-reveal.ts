/**
 * Simple script to add '.is-visible' to '.scroll-reveal' elements when they
 * enter the viewport, triggering the CSS transition.
 */
if (typeof window !== "undefined") {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el);
  });
}
