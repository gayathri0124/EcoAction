import FeatureCard from "../ui/feature-card";

export default function FeaturesSection() {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "ri-footprint-line",
      title: "Carbon Footprint Calculator",
      description: "Measure your current impact with our comprehensive calculator that evaluates your lifestyle, transportation, home energy use, and consumption habits."
    },
    {
      image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "ri-road-map-line",
      title: "Personalized Action Plans",
      description: "Receive customized recommendations based on your unique situation, with step-by-step guidance to reduce your environmental impact."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "ri-team-line",
      title: "Community Projects",
      description: "Join forces with others on local or global initiatives, from neighborhood clean-ups to policy advocacy campaigns."
    },
    {
      image: "https://images.unsplash.com/photo-1547306843-f8fea4d65f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "ri-line-chart-line",
      title: "Progress Tracking",
      description: "Monitor your impact over time with detailed analytics, celebrating your milestones and identifying areas for improvement."
    },
    {
      image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "ri-book-open-line",
      title: "Educational Resources",
      description: "Access a comprehensive library of articles, videos, and courses about climate change, sustainability, and environmental action."
    },
    {
      image: "https://images.unsplash.com/photo-1604685633662-f8111b07c259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80",
      icon: "ri-recycle-line",
      title: "Carbon Offset Marketplace",
      description: "Support verified carbon offset projects around the world, from reforestation to renewable energy initiatives."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-medium text-sm text-[#4CAF50] font-semibold uppercase tracking-wider mb-2">
            Key Features
          </span>
          <h2 className="font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            How EcoAction Works
          </h2>
          <p className="text-lg text-neutral-700">
            Our platform provides powerful tools to help you understand, reduce, and offset your environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
