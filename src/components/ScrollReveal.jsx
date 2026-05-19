import { useScrollReveal } from "../hooks/useScrollReveal";

const directionStyles = {
  up: { hidden: { opacity: 0, transform: "translateY(40px)" }, visible: { opacity: 1, transform: "translateY(0)" } },
  down: { hidden: { opacity: 0, transform: "translateY(-40px)" }, visible: { opacity: 1, transform: "translateY(0)" } },
  left: { hidden: { opacity: 0, transform: "translateX(-40px)" }, visible: { opacity: 1, transform: "translateX(0)" } },
  right: { hidden: { opacity: 0, transform: "translateX(40px)" }, visible: { opacity: 1, transform: "translateX(0)" } },
  scale: { hidden: { opacity: 0, transform: "scale(0.9)" }, visible: { opacity: 1, transform: "scale(1)" } },
};

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  threshold = 0.15,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold });
  const styles = directionStyles[direction] || directionStyles.up;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? styles.visible : styles.hidden),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};
