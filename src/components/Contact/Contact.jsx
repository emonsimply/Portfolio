import { Home, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">Get in Touch</p>
          <h1 className="text-4xl font-bold text-[#333333] mt-1">Contact Me</h1>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Card */}
          <div className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center">
            <Home className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-500 mt-2">Muladi, Barisal, Bangladesh</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center">
            <Phone className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-500 mt-2">(+880) 1631 439 816</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center">
            <Mail className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-500 mt-2">foysal.emon01@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
