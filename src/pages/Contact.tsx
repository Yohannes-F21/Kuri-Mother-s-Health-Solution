import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import axios from "axios";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: false, message: "" });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: false, message: "Sending..." });

    try {
      await axios.post(
        "https://kuri-backend-ub77.onrender.com/contact-us",
        formData
      ); // Replace with your API
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        success: false,
        message: "Failed to send message. Try again later.",
      });
    }
  };

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='relative h-[400px] w-full overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=1440'
          alt='Mother and baby'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute pt-2 inset-0 bg-black/30' />
        <div className='relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center'>
          <h1 className='text-5xl font-bold text-white mb-4'>
            We're Here to Support You Every Step of the Way
          </h1>
          <p className='text-xl text-white/90'>
            Have questions? Need guidance? Let's connect!
          </p>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Information */}
          <div>
            <h2 className='text-3xl font-semibold mb-8'>Get in Touch</h2>
            <div className='space-y-6'>
              <div className='flex items-center'>
                <Phone className='w-6 h-6 mr-4 text-gray-600' />
                <span className='text-lg'>+251933935593</span>
              </div>
              <div className='flex items-center'>
                <Mail className='w-6 h-6 mr-4 text-gray-600' />
                <span className='text-lg'>support@kurimother.com</span>
              </div>
              <div className='flex items-center'>
                <MessageCircle className='w-6 h-6 mr-4 text-gray-600' />
                <button className='bg-[#FBC53F] text-gray-800 px-6 py-2 rounded-lg hover:bg-[#faaf18] transition-colors'>
                  Join Our Telegram Group
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-8 rounded-2xl shadow-sm'>
            <h2 className='text-2xl font-semibold mb-6'>Send us a Message</h2>
            <form
              onSubmit={handleSubmit}
              className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Message
                </label>
                <textarea
                  name='message'
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFE5E5]'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-[#FBC53F] text-gray-800 py-3 rounded-lg hover:bg-[#faaf18] transition-colors'>
                Send Message
              </button>
            </form>

            {/* Status Message */}
            {status.message && (
              <p
                className={`mt-4 text-center ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}>
                {status.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
