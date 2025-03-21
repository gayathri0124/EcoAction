import { cn } from "@/lib/utils";

interface ProgressCircleProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  bgColor?: string;
  progressColor?: string;
  className?: string;
}

export default function ProgressCircle({
  value,
  size = 36,
  strokeWidth = 3,
  bgColor = "rgba(0, 0, 0, 0.1)",
  progressColor = "#D32F2F",
  className,
}: ProgressCircleProps) {
  // Calculate radius, circumference and offset
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  
  return (
    <svg
      className={cn("transform -rotate-90", className)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* Background circle */}
      <circle
        className="transition-all duration-300"
        stroke={bgColor}
        fill="none"
        strokeWidth={strokeWidth}
        cx={size / 2}
        cy={size / 2}
        r={radius}
      />
      
      {/* Progress circle */}
      <circle
        className="transition-all duration-500 ease-in-out"
        stroke={progressColor}
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        cx={size / 2}
        cy={size / 2}
        r={radius}
      />
    </svg>
  );
}
