import { cn } from "@/lib/utils";

interface FeatureCardProps {
  image: string;
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  image,
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden border border-neutral-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          width={600}
          height={300}
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 flex items-center">
          <i className={`${icon} text-primary mr-2`}></i>
          {title}
        </h3>
        <p className="text-neutral-700 mb-4">
          {description}
        </p>
        <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
          Learn more <i className="ri-arrow-right-line ml-1"></i>
        </a>
      </div>
    </div>
  );
}
