import { Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import ClimateData from "@/pages/climate-data";
import Research from "@/pages/research";
import Partners from "@/pages/partners";
import FAQ from "@/pages/faq";
import RouteTransition from "@/components/transitions/route-transition";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <RouteTransition path="/" component={Home} />
        <RouteTransition path="/blog" component={Blog} />
        <RouteTransition path="/climate-data" component={ClimateData} />
        <RouteTransition path="/research" component={Research} />
        <RouteTransition path="/partners" component={Partners} />
        <RouteTransition path="/faq" component={FAQ} />
        <RouteTransition component={NotFound} />
      </Switch>
    </AnimatePresence>
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
