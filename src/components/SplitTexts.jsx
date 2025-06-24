import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitTexts = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const letters = el.querySelectorAll(".char");

    gsap.set(letters, from);

    const startPct = (1 - threshold) * 100;
    const rootOffset = parseInt(rootMargin, 10) || 0;
    const start = `top ${startPct}%${rootOffset < 0 ? `-=${Math.abs(rootOffset)}px` : `+=${rootOffset}px`}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => onLetterAnimationComplete?.(),
    });

    tl.to(letters, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, [text]);

  return (
    <p
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ textAlign }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block char will-change-transform will-change-opacity"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
};

export default SplitTexts;
