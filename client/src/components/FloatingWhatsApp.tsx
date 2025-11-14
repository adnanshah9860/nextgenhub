import { FaWhatsapp } from "react-icons/fa";
import { trackConversion } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  const whatsappNumber = "918530938774";
  const whatsappMessage = encodeURIComponent(
    "Hi NGH, please send a free audit for my website / I want a quote for a website."
  );

  const handleClick = () => {
    trackConversion('whatsapp_click', undefined, {
      source: 'floating_button',
    });
  };

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
      data-testid="button-floating-whatsapp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
