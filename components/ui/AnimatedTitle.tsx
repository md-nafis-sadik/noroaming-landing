"use client";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTitleProps) => {
  return (
    <div
      className={`animated-text mt-5 text-sm md:text-lg font-light text-gray-700 ${className}`}
    >
      {text}
      <style jsx>{`
        .animated-text {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          animation: fadeSlideScaleIn 1s forwards ease-out;
        }

        @keyframes fadeSlideScaleIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
