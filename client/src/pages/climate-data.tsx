import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Link } from "wouter";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ClimateData() {
  // Sample data for global temperature anomalies
  const temperatureData = [
    { year: '1880', value: -0.16 },
    { year: '1900', value: -0.08 },
    { year: '1920', value: -0.27 },
    { year: '1940', value: 0.12 },
    { year: '1960', value: -0.03 },
    { year: '1980', value: 0.26 },
    { year: '2000', value: 0.39 },
    { year: '2020', value: 1.02 },
  ];

  // Sample data for CO2 emissions
  const emissionsData = [
    { year: '1960', value: 9400 },
    { year: '1970', value: 14100 },
    { year: '1980', value: 19500 },
    { year: '1990', value: 22400 },
    { year: '2000', value: 25000 },
    { year: '2010', value: 33100 },
    { year: '2020', value: 34800 },
  ];
  
  // Sample data for renewable energy adoption
  const renewableData = [
    { year: '2000', solar: 1, wind: 31, hydro: 684 },
    { year: '2005', solar: 4, wind: 104, hydro: 748 },
    { year: '2010', solar: 32, wind: 298, hydro: 935 },
    { year: '2015', solar: 228, wind: 836, hydro: 1098 },
    { year: '2020', solar: 714, wind: 1597, hydro: 1327 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Climate Data Center</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore visualizations of key climate indicators and trends from trusted scientific sources.
            </p>
          </div>
          
          <Tabs defaultValue="temperature" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="temperature">Temperature</TabsTrigger>
              <TabsTrigger value="emissions">CO₂ Emissions</TabsTrigger>
              <TabsTrigger value="renewables">Renewables</TabsTrigger>
            </TabsList>
            
            <TabsContent value="temperature">
              <Card>
                <CardHeader>
                  <CardTitle>Global Temperature Anomalies (°C)</CardTitle>
                  <CardDescription>
                    Temperature deviation from 20th century average (1901-2000)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={temperatureData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#ff7043" 
                          fill="#ff7043" 
                          fillOpacity={0.3}
                          name="Temperature Anomaly (°C)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-4 text-sm text-neutral-600">
                    Source: NOAA National Centers for Environmental Information (simulated data for demonstration)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="emissions">
              <Card>
                <CardHeader>
                  <CardTitle>Global CO₂ Emissions</CardTitle>
                  <CardDescription>
                    Million metric tons of carbon dioxide
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={emissionsData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#4caf50" 
                          fill="#4caf50" 
                          fillOpacity={0.3}
                          name="CO₂ Emissions (MMt)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-4 text-sm text-neutral-600">
                    Source: Global Carbon Project (simulated data for demonstration)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="renewables">
              <Card>
                <CardHeader>
                  <CardTitle>Renewable Energy Growth</CardTitle>
                  <CardDescription>
                    Global installed capacity (GW)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={renewableData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="solar" stackId="a" fill="#ffd54f" name="Solar" />
                        <Bar dataKey="wind" stackId="a" fill="#90caf9" name="Wind" />
                        <Bar dataKey="hydro" stackId="a" fill="#4db6ac" name="Hydropower" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-4 text-sm text-neutral-600">
                    Source: International Renewable Energy Agency (simulated data for demonstration)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Data Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>NASA Goddard Institute for Space Studies</li>
                  <li>NOAA National Centers for Environmental Information</li>
                  <li>Global Carbon Project</li>
                  <li>International Energy Agency</li>
                  <li>World Meteorological Organization</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Key Findings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>2020s are on track to be the warmest decade on record</li>
                  <li>CO₂ levels are at their highest in over 800,000 years</li>
                  <li>Renewable energy capacity has more than quadrupled since 2000</li>
                  <li>Arctic sea ice is declining at a rate of 13% per decade</li>
                  <li>Global sea level rose about 8-9 inches since 1880</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Download Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-neutral-600">
                  Access raw datasets and complete reports for your research or project needs.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">Temperature Records (CSV)</Button>
                  <Button variant="outline" className="w-full">Emissions Data (Excel)</Button>
                  <Button variant="outline" className="w-full">Renewable Energy Statistics (PDF)</Button>
                </div>
              </CardContent>
            </Card>
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