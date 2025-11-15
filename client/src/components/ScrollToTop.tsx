import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop(): null {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}