import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "8801631439816"; 
  const message = "Hello! I want to connect with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />


      {/* Curved text */}
      <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        className="absolute -top-10 -left-9 "
      >
        <defs>
          <path
            id="curve"
            d="M 20,80 A 50,50 0 0,1 120,80"
          />
        </defs>
        <text fill="#555555" fontSize="14" fontWeight="600" className="font-one">
          <textPath href="#curve" startOffset="35%" textAnchor="middle">
            I am Here!
          </textPath>
        </text>
      </svg>
    </a>
  );
};

export default WhatsAppButton;