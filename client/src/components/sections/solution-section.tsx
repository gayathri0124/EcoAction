import { CheckIcon, HeartIcon, UsersIcon, LineChartIcon, AwardIcon } from "lucide-react";

export default function SolutionSection() {
  const features = [
    "Custom carbon footprint calculator",
    "AI-powered recommendations based on your habits",
    "Progress tracking with achievable milestones",
    "Real-time impact visualization"
  ];

  const communityFeatures = [
    "Connect with like-minded individuals",
    "Participate in local and global initiatives",
    "Share success stories and challenges",
    "Access collective knowledge and resources"
  ];

  const stats = [
    {
      icon: "ri-user-line",
      value: "10K+",
      label: "Active Users"
    },
    {
      icon: "ri-earth-line",
      value: "50+",
      label: "Countries Represented"
    },
    {
      icon: "ri-scales-line",
      value: "5K",
      label: "Tons of CO₂ Reduced"
    }
  ];

  return (
    <section id="solution" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-medium text-sm text-[#4CAF50] font-semibold uppercase tracking-wider mb-2">
            Our Approach
          </span>
          <h2 className="font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
            A Platform for Climate Action
          </h2>
          <p className="text-lg text-neutral-700">
            EcoAction provides tools, resources, and community support to help individuals and organizations take meaningful steps toward a sustainable future.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">
              Personalized Climate Action Plans
            </h3>
            <p className="text-neutral-700 mb-6">
              Our platform analyzes your lifestyle and creates tailored recommendations to reduce your carbon footprint effectively.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <CheckIcon className="text-white" size={14} />
                  </div>
                  <span className="ml-3 text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Person analyzing climate data on tablet" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Community members collaborating on climate solutions" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">
              Connect With a Global Community
            </h3>
            <p className="text-neutral-700 mb-6">
              Join thousands of individuals and organizations working together to make a difference. Share ideas, collaborate on initiatives, and amplify your impact.
            </p>
            <ul className="space-y-3">
              {communityFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <CheckIcon className="text-white" size={14} />
                  </div>
                  <span className="ml-3 text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-[#4CAF50] mb-2">
                <i className={`${stat.icon} text-4xl`}></i>
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
