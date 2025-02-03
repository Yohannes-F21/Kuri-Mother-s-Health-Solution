import { Phone, Mail, MessageCircle } from "lucide-react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=1440"
          alt="Mother and baby"
          className="  absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute pt-2 inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            We're Here to Support You Every Step of the Way
          </h1>
          <p className="text-xl text-white/90">
            Have questions? Need guidance? Let's connect!
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-gray-600" />
                <span className="text-lg">+251933935593</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-gray-600" />
                <span className="text-lg">support@kurimother.com</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 mr-4 text-gray-600" />
                <button className="bg-[#FBC53F] text-gray-800 px-6 py-2 rounded-lg hover:bg-[#faaf18] transition-colors">
                  Join Our Telegram Group
                </button>
              </div>
            </div>
            {/* Map */}
            {/* <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
              <MapContainer
                center={[9.0222, 38.7468]}
                zoom={13}
                className="h-full w-full"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[9.0222, 38.7468]}>
                  <Popup>Kuri Mother's Health Solution</Popup>
                </Marker>
              </MapContainer>
            </div> */}
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FBC53F] text-gray-800 py-3 rounded-lg hover:bg-[#faaf18] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
