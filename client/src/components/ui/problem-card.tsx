import { cn } from "@/lib/utils";
import ProgressCircle from "./progress-circle";

interface ProblemCardProps {
  icon: string;
  title: string;
  description: string;
  percentage: number;
  statText: string;
  className?: string;
}

export default function ProblemCard({
  icon,
  title,
  description,
  percentage,
  statText,
  className,
}: ProblemCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-neutral-200 transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="p-6">
        <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <i className={`${icon} text-2xl text-primary`}></i>
        </div>
        <h3 className="font-bold text-xl mb-2 text-neutral-800">{title}</h3>
        <p className="text-neutral-600">
          {description}
        </p>
      </div>
      <div className="px-6 pb-6">
        <div className="w-full bg-neutral-200 rounded-full h-2.5">
          <div 
            className="bg-red-600 h-2.5 rounded-full" 
            style={{width: `${percentage}%`}}
          ></div>
        </div>
        <p className="mt-2 text-sm text-neutral-500">{statText}</p>
      </div>
    </div>
  );
}
