import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqCategories = [
    {
      id: "general",
      name: "General",
      questions: [
        {
          question: "What is EcoAction's mission?",
          answer: "EcoAction is dedicated to empowering individuals and communities to take meaningful action on climate change. We provide education, tools, resources, and community support to help people understand climate issues and implement practical solutions in their daily lives and communities."
        },
        {
          question: "How can I get involved with EcoAction?",
          answer: "There are many ways to get involved! You can sign up for our newsletter, join a local chapter, participate in our community forums, volunteer for events, or become a member. Check out our 'Take Action' section for specific opportunities."
        },
        {
          question: "Is EcoAction a non-profit organization?",
          answer: "Yes, EcoAction is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law."
        },
        {
          question: "Where does my donation go?",
          answer: "Your donations help fund our educational programs, community initiatives, climate research partnerships, and platform development. We maintain full financial transparency with annual reports available on our website."
        }
      ]
    },
    {
      id: "climate",
      name: "Climate Science",
      questions: [
        {
          question: "What is climate change?",
          answer: "Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas, which produces heat-trapping gases."
        },
        {
          question: "What's the difference between weather and climate?",
          answer: "Weather refers to short-term atmospheric conditions like temperature, humidity, precipitation, wind, and storms in a specific place and time. Climate is the average weather pattern in a place over many years. While weather can change in just a few hours, climate changes over longer timeframes."
        },
        {
          question: "How do we know climate change is caused by humans?",
          answer: "Scientists have gathered extensive evidence showing that human activities, particularly the emission of greenhouse gases from burning fossil fuels, are the primary driver of observed climate change. Multiple lines of evidence include the pattern of warming, the chemical composition of atmospheric CO2, and sophisticated climate models that can only match observed temperature changes when human factors are included."
        },
        {
          question: "Is there scientific consensus on climate change?",
          answer: "Yes, there is overwhelming scientific consensus that climate change is real and human-caused. Multiple studies show that 97-99% of actively publishing climate scientists agree that human activities are causing global warming. This consensus is supported by virtually all major scientific organizations worldwide."
        }
      ]
    },
    {
      id: "action",
      name: "Taking Action",
      questions: [
        {
          question: "What can individuals do to fight climate change?",
          answer: "Individuals can make a difference through various actions: reducing energy consumption at home, using more efficient transportation options, changing dietary habits to include more plant-based foods, reducing waste, making sustainable consumer choices, supporting climate policy, and engaging with others to spread awareness."
        },
        {
          question: "How can I reduce my carbon footprint?",
          answer: "You can reduce your carbon footprint by: using energy-efficient appliances, improving home insulation, using renewable energy, driving less or using electric vehicles, reducing air travel, eating more plant-based foods, minimizing food waste, practicing conscious consumption, and offsetting emissions you can't eliminate."
        },
        {
          question: "Are individual actions meaningful compared to industrial emissions?",
          answer: "Yes, individual actions matter for several reasons: collectively they add up to significant impacts, they drive market demand for sustainable products, they normalize climate-friendly behaviors, and they demonstrate public support for climate policies that can address larger industrial emissions."
        },
        {
          question: "How can I get my community involved in climate action?",
          answer: "Community engagement can take many forms: organizing local environmental events, starting a community garden, initiating renewable energy co-ops, advocating for climate policies with local government, forming or joining climate action groups, and educating others through workshops and information sessions."
        }
      ]
    },
    {
      id: "solutions",
      name: "Climate Solutions",
      questions: [
        {
          question: "What role does renewable energy play in addressing climate change?",
          answer: "Renewable energy is crucial for reducing greenhouse gas emissions from the power sector, which is one of the largest sources of emissions. Solar, wind, hydroelectric, geothermal, and other renewable sources can provide clean electricity without the carbon emissions associated with fossil fuels."
        },
        {
          question: "What is carbon capture and is it effective?",
          answer: "Carbon capture, utilization, and storage (CCUS) technologies remove CO2 from point sources like power plants or directly from the atmosphere. While CCUS has potential as part of a comprehensive climate strategy, it faces challenges including cost, energy requirements, and storage capacity. Most climate scientists agree it should complement, not replace, emissions reductions."
        },
        {
          question: "How important are natural climate solutions?",
          answer: "Natural climate solutions—such as forest conservation, reforestation, sustainable agriculture, and wetland protection—are vital components of climate action. These approaches can provide up to one-third of emissions reductions needed by 2030 while also supporting biodiversity, water quality, and community resilience."
        },
        {
          question: "What policy approaches are most effective for addressing climate change?",
          answer: "Effective climate policies typically include a mix of approaches: carbon pricing (taxes or cap-and-trade systems), renewable energy standards, efficiency regulations, research and development funding, investment in public transportation and infrastructure, and international cooperation agreements. The most successful policies balance immediate action with long-term planning."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Find answers to common questions about climate change, our organization, and how you can take action.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {faqCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {faqCategories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-700">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="bg-neutral-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
              <p className="mb-4">
                If you couldn't find the answer you were looking for, please feel free to reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto">Contact Us</Button>
                </Link>
                <Button variant="outline" className="w-full sm:w-auto">
                  Browse Resources
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/">
                <Button variant="outline">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}