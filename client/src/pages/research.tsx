import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Research() {
  const researchPapers = [
    {
      id: 1,
      title: "Climate Change Impacts on Global Food Security",
      authors: "Johnson, S., Williams, K., & Zhang, L.",
      journal: "Nature Climate Change",
      year: 2024,
      abstract: "This study examines the potential impacts of climate change on global food security, with a focus on vulnerable regions in Sub-Saharan Africa and South Asia. Using climate and crop models, we project significant yield reductions for major staple crops under various warming scenarios.",
      category: "agriculture"
    },
    {
      id: 2,
      title: "Ocean Acidification and Marine Ecosystem Responses",
      authors: "Garcia, M., Patel, R., & Anderson, T.",
      journal: "Science of the Total Environment",
      year: 2024,
      abstract: "We investigate the effects of increasing ocean acidification on marine ecosystems, with particular emphasis on coral reefs and shellfish populations. Our findings indicate accelerated rates of pH decline in coastal waters and significant impacts on calcifying organisms.",
      category: "oceans"
    },
    {
      id: 3,
      title: "Urban Heat Islands: Mitigation Strategies for Growing Cities",
      authors: "Lee, J., Nguyen, H., & Miller, B.",
      journal: "Sustainable Cities and Society",
      year: 2023,
      abstract: "This research evaluates the effectiveness of various urban planning interventions to reduce the urban heat island effect. Green infrastructure, reflective surfaces, and urban forest restoration all showed significant potential for temperature reduction.",
      category: "cities"
    },
    {
      id: 4,
      title: "Renewable Energy Integration: Grid Stability Challenges and Solutions",
      authors: "Brown, A., Martinez, C., & Singh, D.",
      journal: "Energy Policy",
      year: 2023,
      abstract: "As renewable energy sources become a larger portion of the electricity mix, grid stability presents new challenges. This paper models several scenarios for integrating high percentages of variable renewable energy while maintaining reliability.",
      category: "energy"
    },
    {
      id: 5,
      title: "Climate Change and Vector-Borne Diseases: Shifting Patterns",
      authors: "Thompson, E., Kumar, S., & Jansen, F.",
      journal: "The Lancet Planetary Health",
      year: 2023,
      abstract: "This study maps the changing global distribution of disease vectors in response to climate change. Results indicate northward expansion of mosquito habitats and longer seasonal activity periods, with implications for public health planning.",
      category: "health"
    },
    {
      id: 6,
      title: "Carbon Sequestration Potential of Reforestation and Afforestation",
      authors: "Wilson, M., Chen, Y., & López, R.",
      journal: "Global Change Biology",
      year: 2022,
      abstract: "We quantify the carbon sequestration potential of large-scale tree planting initiatives across different biomes. Results suggest that while forests offer significant carbon storage, species selection and management practices strongly influence outcomes.",
      category: "forestry"
    }
  ];

  const researchCategories = [
    { id: "all", name: "All Research" },
    { id: "energy", name: "Energy" },
    { id: "agriculture", name: "Agriculture" },
    { id: "oceans", name: "Oceans" },
    { id: "cities", name: "Urban Planning" },
    { id: "health", name: "Health" },
    { id: "forestry", name: "Forestry" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Climate Research Hub</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore the latest peer-reviewed research on climate change, its impacts, and potential solutions.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="flex flex-wrap justify-center mb-8">
              {researchCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {researchCategories.map(category => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {researchPapers
                    .filter(paper => category.id === 'all' || paper.category === category.id)
                    .map(paper => (
                      <Card key={paper.id} className="flex flex-col h-full">
                        <CardHeader>
                          <CardTitle className="text-lg">{paper.title}</CardTitle>
                          <CardDescription>{paper.authors}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-sm text-neutral-500 mb-2">
                            {paper.journal}, {paper.year}
                          </p>
                          <p className="text-sm">{paper.abstract}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Read Full Paper
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="bg-neutral-50 rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-4">Research Partnerships</h2>
            <p className="mb-6">
              EcoAction collaborates with leading research institutions and universities 
              to advance climate science and sustainable solutions. Some of our key partners include:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['MIT Climate Initiative', 'Stanford Earth', 'Oxford Environmental Change Institute', 'Berkeley Earth'].map((partner, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-sm text-center">
                  {partner}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
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