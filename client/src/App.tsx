import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import ClimateData from "@/pages/climate-data";
import Research from "@/pages/research";
import Partners from "@/pages/partners";
import FAQ from "@/pages/faq";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/climate-data" component={ClimateData} />
      <Route path="/research" component={Research} />
      <Route path="/partners" component={Partners} />
      <Route path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
