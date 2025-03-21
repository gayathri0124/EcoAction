import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Link } from "wouter";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Carbon Footprints: A Comprehensive Guide",
      description: "Learn how to calculate, reduce, and offset your carbon footprint with our step-by-step guide.",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?q=80&w=2376&auto=format&fit=crop",
      author: "Emma Harrison"
    },
    {
      id: 2,
      title: "The Rise of Renewable Energy: Trends and Innovations",
      description: "Explore the latest developments in solar, wind, and other renewable energy sources transforming our world.",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2370&auto=format&fit=crop",
      author: "David Chen"
    },
    {
      id: 3,
      title: "Climate Change and Biodiversity: Protecting Endangered Species",
      description: "How climate change threatens biodiversity and what conservation efforts are making a difference.",
      date: "March 5, 2025", 
      image: "https://images.unsplash.com/photo-1551089309-b6e8cbb00d9a?q=80&w=2370&auto=format&fit=crop",
      author: "Sarah Johnson"
    },
    {
      id: 4,
      title: "Sustainable Cities: Urban Planning for a Greener Future",
      description: "Case studies of cities leading the way in sustainable development and green infrastructure.",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2326&auto=format&fit=crop",
      author: "Michael Rodriguez"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">EcoAction Blog</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Stay informed with the latest news, research, and insights on climate action and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-neutral-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-neutral-600 mb-4">{post.description}</p>
                  <Button variant="outline" className="text-primary hover:text-primary-dark">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}