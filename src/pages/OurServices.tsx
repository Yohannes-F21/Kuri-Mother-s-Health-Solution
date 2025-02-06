import { Heart, Users, Book, ArrowRight } from "lucide-react";
import { HugeiconsPeerToPeer02 } from "../components/PeerNetworkIcon";
function OurServices() {
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="relative h-[500px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1440"
          alt="Mother and baby"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            Digital Platform
          </h1>
          <p className="text-xl text-white/90 text-center">
            Our digital platform complements our products by providing mothers
            with a comprehensive support system tailored to their breastfeeding
            needs.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#FDF8F6] transition-transform hover:scale-[1.02]">
              <Heart className="w-12 h-12 text-[#E68EA3] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                Expert Guidance
              </h3>
              <p className="text-[#4A5568] mb-6">
                Access consultations with lactation consultants, pediatricians,
                and maternal health experts. Participate in Q&A sessions for
                practical advice.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-[#E68EA3] text-white rounded-full hover:bg-[#d47a91] transition-colors">
                Book a Session
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="p-8 rounded-2xl bg-[#F0F7FF] transition-transform hover:scale-[1.02]">
              <HugeiconsPeerToPeer02 className="w-12 h-12 text-[#7EB6FF] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                Peer-Support Network
              </h3>
              <p className="text-[#4A5568] mb-6">
                Connect with other mothers where mothers share their unique
                postpartal experiences and encouragement.
              </p>
              <a href="https://t.me/kurimother">
                <button className="inline-flex items-center px-6 py-3 bg-[#7EB6FF] text-white rounded-full hover:bg-[#6da1f1] transition-colors">
                  Join Community
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </a>
            </div>
            <div className="p-8 rounded-2xl bg-[#F5F8F2] transition-transform hover:scale-[1.02]">
              <Book className="w-12 h-12 text-[#8BC34A] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                Breastfeeding & Nutrition Guidance
              </h3>
              <p className="text-[#4A5568] mb-6">
                Access expert-backed resources about proper lactation diets,
                baby nutrition, and milk supply management.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-[#8BC34A] text-white rounded-full hover:bg-[#7baf3d] transition-colors">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="p-8 rounded-2xl bg-[#FFF5F5] transition-transform hover:scale-[1.02]">
              <Users className="w-12 h-12 text-[#FF8A80] mb-4" />
              <h3 className="text-2xl font-bold text-[#2D3648] mb-3">
                Trusted Community
              </h3>
              <p className="text-[#4A5568] mb-6">
                A safe space where mothers can find guidance and companionship.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-[#FF8A80] text-white rounded-full hover:bg-[#ff7567] transition-colors">
                Join Community
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#FAF7EB]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2D3648] mb-12">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-[#4A5568] italic mb-4">
                "Kuri's support has been invaluable in my breastfeeding journey.
                The experts are so knowledgeable and caring!"
              </p>
              <p className="font-semibold text-[#2D3648]">
                - Makda T., New Mother
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-[#4A5568] italic mb-4">
                "The community here is amazing. It's so helpful to connect with
                other mothers going through the same experiences."
              </p>
              <p className="font-semibold text-[#2D3648]">
                - Sara H., Mother of Two
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#2D3648] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Supported Motherhood Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of mothers who have found success with Kuri's support
            system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/kurimother">
              <button className="px-8 py-4 bg-white text-[#2D3648] rounded-full hover:bg-gray-100 transition-colors">
                Join Our Support Group
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
