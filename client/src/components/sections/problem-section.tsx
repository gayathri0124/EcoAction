import ProblemCard from "../ui/problem-card";

export default function ProblemSection() {
  const problems = [
    {
      icon: "ri-temp-hot-line",
      title: "Rising Temperatures",
      description: "Global temperatures have increased by over 1°C since pre-industrial times, threatening ecosystems and communities.",
      percentage: 45,
      statText: "45% increase in temperature-related disasters"
    },
    {
      icon: "ri-cloud-windy-line",
      title: "Extreme Weather",
      description: "Increased frequency and intensity of extreme weather events like hurricanes, floods, and wildfires.",
      percentage: 62,
      statText: "62% increase in extreme weather events"
    },
    {
      icon: "ri-water-flash-line",
      title: "Rising Sea Levels",
      description: "Sea levels are rising at an accelerating rate, threatening coastal communities and infrastructure.",
      percentage: 30,
      statText: "30cm average sea level rise predicted by 2050"
    }
  ];

  return (
    <section id="problem" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-medium text-sm text-[#4CAF50] font-semibold uppercase tracking-wider mb-2">
            The Challenge We Face
          </span>
          <h2 className="font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            Climate Change: A Global Crisis
          </h2>
          <p className="text-lg text-neutral-700">
            Climate change is the defining issue of our time, with far-reaching impacts on ecosystems, communities, and economies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard 
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              percentage={problem.percentage}
              statText={problem.statText}
            />
          ))}
        </div>

        <div className="mt-16 relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=400&q=80" 
            alt="Global map showing climate change impact" 
            className="w-full h-auto object-cover"
            width={1200}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(46,125,50,0.85)] via-[rgba(46,125,50,0.6)] to-[rgba(46,125,50,0)] flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
                The Time to Act is Now
              </h3>
              <p className="text-white text-lg mb-6">
                Scientists agree that we need to limit global warming to 1.5°C to avoid catastrophic climate change impacts. This requires immediate and substantial action.
              </p>
              <Button 
                className="bg-white hover:bg-neutral-100 text-[#2E7D32] font-semibold px-8 py-3 h-auto"
                onClick={() => {
                  const target = document.querySelector("#solution");
                  if (target) {
                    window.scrollTo({
                      top: target.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                See Our Solution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "../ui/button";
