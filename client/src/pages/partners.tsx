import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Partners() {
  const partnerCategories = [
    {
      title: "Corporate Partners",
      description: "Forward-thinking companies committed to sustainability and climate action",
      partners: [
        {
          name: "EcoTech Solutions",
          logo: "https://via.placeholder.com/150",
          description: "Developing innovative renewable energy technologies",
          website: "#"
        },
        {
          name: "Green Horizons",
          logo: "https://via.placeholder.com/150",
          description: "Sustainable consumer products with carbon-neutral operations",
          website: "#"
        },
        {
          name: "Circular Systems",
          logo: "https://via.placeholder.com/150",
          description: "Pioneering circular economy solutions for manufacturing",
          website: "#"
        },
        {
          name: "Blue Carbon Inc.",
          logo: "https://via.placeholder.com/150",
          description: "Marine ecosystem restoration and blue carbon initiatives",
          website: "#"
        }
      ]
    },
    {
      title: "NGO Partners",
      description: "Environmental organizations at the forefront of climate advocacy and action",
      partners: [
        {
          name: "Global Climate Coalition",
          logo: "https://via.placeholder.com/150",
          description: "International alliance for climate policy reform",
          website: "#"
        },
        {
          name: "Rainforest Protectors",
          logo: "https://via.placeholder.com/150",
          description: "Preserving critical forest ecosystems worldwide",
          website: "#"
        },
        {
          name: "Climate Youth Movement",
          logo: "https://via.placeholder.com/150",
          description: "Empowering young climate activists and leaders",
          website: "#"
        },
        {
          name: "Ocean Conservation Trust",
          logo: "https://via.placeholder.com/150",
          description: "Marine protection and ocean health initiatives",
          website: "#"
        }
      ]
    },
    {
      title: "Research Institutions",
      description: "Leading academic and scientific organizations advancing climate science",
      partners: [
        {
          name: "Climate Research Institute",
          logo: "https://via.placeholder.com/150",
          description: "Cutting-edge climate modeling and impact assessment",
          website: "#"
        },
        {
          name: "Sustainable Technology Lab",
          logo: "https://via.placeholder.com/150",
          description: "Developing next-generation clean energy solutions",
          website: "#"
        },
        {
          name: "Urban Sustainability Center",
          logo: "https://via.placeholder.com/150",
          description: "Smart city solutions for climate resilience",
          website: "#"
        },
        {
          name: "Global Ecosystems Initiative",
          logo: "https://via.placeholder.com/150",
          description: "Biodiversity conservation and ecosystem restoration",
          website: "#"
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Working with EcoAction has transformed our approach to sustainability. Their expertise and passion have been invaluable in helping us achieve our climate goals.",
      author: "Sarah Chen",
      title: "Sustainability Director, EcoTech Solutions"
    },
    {
      quote: "EcoAction brings together critical stakeholders across sectors to create meaningful climate solutions. Their collaborative approach is exactly what's needed to address these complex challenges.",
      author: "Dr. James Wilson",
      title: "Executive Director, Global Climate Coalition"
    },
    {
      quote: "The data and resources provided by EcoAction have been instrumental in our climate research. Their commitment to scientific integrity and practical solutions sets them apart.",
      author: "Prof. Amara Johnson",
      title: "Climate Research Institute"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Collaborating with forward-thinking organizations to accelerate climate action and create sustainable solutions.
            </p>
          </div>
          
          {/* Partnership Benefits */}
          <div className="bg-neutral-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Partner With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-3">Collective Impact</h3>
                <p>Join a network of organizations combining resources and expertise to drive meaningful climate action at scale.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-3">Innovation & Solutions</h3>
                <p>Access cutting-edge research, tools, and methodologies to advance your sustainability goals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-3">Visibility & Recognition</h3>
                <p>Showcase your climate leadership and connect with a community of like-minded organizations and individuals.</p>
              </div>
            </div>
          </div>
          
          {/* Partner Categories */}
          {partnerCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-2xl font-semibold mb-3">{category.title}</h2>
              <p className="text-neutral-600 mb-8">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <Card key={partnerIndex} className="bg-white">
                    <CardHeader className="pb-2 flex justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="h-16 object-contain"
                      />
                    </CardHeader>
                    <CardContent className="text-center">
                      <h3 className="font-medium text-lg mb-2">{partner.name}</h3>
                      <p className="text-sm text-neutral-600 mb-4">{partner.description}</p>
                      <Button variant="outline" size="sm">Visit Website</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          
          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Partner Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-neutral-50">
                  <CardContent className="pt-6">
                    <div className="text-3xl text-primary mb-4">"</div>
                    <p className="italic mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-neutral-600">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Become a Partner CTA */}
          <div className="bg-primary/10 rounded-lg p-8 text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Interested in joining our network of partners committed to climate action? 
              We welcome collaboration with organizations that share our values and vision.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us About Partnership
            </Button>
          </div>
          
          <div className="text-center">
            <Link href="/">
              <Button variant="outline">
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