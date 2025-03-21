import { Route, useLocation } from "wouter";
import { AnimatePresence } from "framer-motion";

type RouteProps = Parameters<typeof Route>[0];

export default function RouteTransition({ component: Component, ...rest }: RouteProps) {
  const [location] = useLocation();
  const isActive = location === rest.path;

  return (
    <Route
      {...rest}
      component={(params) => (
        <AnimatePresence mode="wait">
          {isActive && <Component {...params} />}
        </AnimatePresence>
      )}
    />
  );
}