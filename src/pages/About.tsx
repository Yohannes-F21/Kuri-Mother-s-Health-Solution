import { Heart, Leaf, Users, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/AboutPage/Hero";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-[#104a52]" />,
    title: "Organic Solutions",
    description:
      "Natural and safe products to support your breastfeeding journey",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#104a52]" />,
    title: "Holistic Support",
    description: "Comprehensive care for both mother and baby's wellbeing",
  },
  {
    icon: <Users className="w-6 h-6 text-[#104a52]" />,
    title: "Expert Team",
    description: "Access to qualified healthcare professionals",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-[#104a52]" />,
    title: "Community Care",
    description: "Connect with other mothers and share experiences",
  },
];
const team = [
  {
    name: "Dr. Aisha Mohammed",
    role: "Chief Medical Officer",
    description:
      "Specialized in maternal health with 15 years of experience in lactation support.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
  },
  {
    name: "Bethel Tadesse",
    role: "Lead Lactation Consultant",
    description:
      "Certified lactation consultant with expertise in traditional and modern techniques.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Samuel Bekele",
    role: "Nutrition Specialist",
    description:
      "Expert in maternal nutrition and holistic wellness approaches.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
  },
];

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <section className=" pt-24 w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-semibold text-[#104a52] mb-6">
                Empowering Mothers Across Africa
              </h1>
              <p className="text-lg text-gray-800 mb-8">
                Welcome to Kuri Mother's Health Solution, where we're dedicated
                to enhancing the breastfeeding experience for mothers across
                Ethiopia and beyond.
              </p>
              <Link to={"/contact-us"}>
                <Button className="bg-[#104a52] text-white hover:bg-[#2D3648] px-8 py-6 text-lg group">
                  <Link to={"/contact-us"}>Join our community</Link>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-2" />
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <div className="hidden md:flex">
                <Hero />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#FFFBEB] p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide effective, natural solutions and trusted support for
                successful breastfeeding, ensuring every mother has access to
                the resources they need for their journey.
              </p>
            </div>
            <div className="bg-[#ECFDF5] p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become Africa's leading provider of lactation support,
                creating a nurturing community where every mother feels
                empowered and supported in their breastfeeding journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#faf7eb] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Kuri
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-[#104a52] mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#faf7eb] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl text-[#faaf18] mb-6">"</div>
          <p className="text-xl text-gray-600 mb-8">
            Kuri has been a lifesaver in my breastfeeding journey. The support
            and resources they provide are invaluable, and I'm so grateful to be
            part of this amazing community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
              alt="Sarah"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold">Sarah M.</p>
              <p className="text-sm text-gray-600">Mother of two</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-gray-600 mb-8">
            Be part of a supportive network of mothers and healthcare
            professionals dedicated to successful breastfeeding journeys.
          </p>
          <Link to={"/our-services"}>
            <Button className="bg-[#104a52] text-white hover:bg-[#2D3648] px-8 py-6 text-lg">
              Learn More About Our Mission
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
