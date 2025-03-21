import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 md:pt-28 bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#66BB6A]">
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center text-white">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Climate Action Starts With You
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
            Join our global community taking real steps to combat climate change. Track your impact, connect with others, and create meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-[#FFC107] hover:bg-amber-600 text-[#1B5E20] font-semibold px-8 py-6 h-auto"
              onClick={() => {
                const target = document.querySelector("#take-action");
                if (target) {
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: "smooth"
                  });
                }
              }}
            >
              Take Action Now
            </Button>
            <Button 
              variant="outline"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 font-semibold px-8 py-6 h-auto"
              onClick={() => {
                const target = document.querySelector("#problem");
                if (target) {
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: "smooth"
                  });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=500&q=80" 
            alt="Earth in hands representing climate action" 
            className="rounded-lg shadow-xl max-w-full h-auto"
            width={600}
            height={500}
          />
        </div>
      </div>
      <div className="bg-white w-full h-16 rounded-t-[50%] md:rounded-t-[70%]"></div>
    </section>
  );
}
