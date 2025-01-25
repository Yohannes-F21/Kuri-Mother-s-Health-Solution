import React from "react";
import { Heart, Leaf, Users, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-[#F43F5E]" />,
    title: "Organic Solutions",
    description:
      "Natural and safe products to support your breastfeeding journey",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#F43F5E]" />,
    title: "Holistic Support",
    description: "Comprehensive care for both mother and baby's wellbeing",
  },
  {
    icon: <Users className="w-6 h-6 text-[#F43F5E]" />,
    title: "Expert Team",
    description: "Access to qualified healthcare professionals",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-[#F43F5E]" />,
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
      <section className=" pt-24 w-full bg-gradient-to-b from-[#FFE5D9] to-[#FFFAF6] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Empowering Mothers Across Africa
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Welcome to Kuri Mother's Health Solution, where we're dedicated
                to enhancing the breastfeeding experience for mothers across
                Ethiopia and beyond.
              </p>
              <Button className="bg-[#F43F5E] hover:bg-[#E11D48]">
                Join Our Community <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              {/* <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80"
                alt="Mother and baby"
                className="rounded-2xl shadow-lg w-full"
              /> */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="668.40475"
                  height="538.45004"
                  viewBox="0 0 668.40475 538.45004"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  role="img"
                  data-artist="Katerina Limpitsouni"
                  data-source="https://undraw.co/"
                >
                  <path
                    d="M982.49026,231.66176v420.06c18.97217,30.71973-3.22778,28.69977-33.67779,21.20972a757.69423,757.69423,0,0,0-215.45-21.27q-13.11.585-26.18,1.64-6.15.49492-12.3,1.09-23.475,2.295-46.83,6.06-4.395.705-8.77,1.48c-2.73.47-5.45.96-8.18,1.47q-22.245,4.125-44.29,9.62c-.02.01-.05.01-.07.02l-73.9,18.46-155.73,38.89c-32.69,0-59.19-26.5-4.48612-62.91211v-420.06c-54.70389-28.97794-28.20389-55.47794,4.48612-55.47794L586.8743,256.35822A535.74969,535.74969,0,0,0,871.002,257.76581C934.72854,240.57968,991.9714,225.05507,982.49026,231.66176Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#FFE5D9"
                  />
                  <path
                    d="M602.04959,279.16379c7.8681-25.07526,25.76031-48.07338,50.50488-56.55017,24.746-8.47681,60.98047,4.43613,79.584,22.97667,34.02935,33.91435,35.0766,75.4315,11.697,112.24937-4.65027-.24615-20.6966-.42822-25.4032-.60449L711.7742,335.0441v21.97235c-36.73651-1.13531-77.62579,29.08118-113.24939.31067C595.09494,331.25962,594.18155,304.23905,602.04959,279.16379Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#2f2e41"
                  />
                  <polygon
                    points="381.55 343.539 389.142 363.278 387.624 383.018 241.852 364.797 246.407 348.094 263.11 328.354 381.55 343.539"
                    fill="#ffb6b6"
                  />
                  <circle
                    cx="334.5686"
                    cy="112.82948"
                    r="53.07025"
                    fill="#ffb7b7"
                  />
                  <path
                    d="M599.4086,395.7822l30.36908-18.22147,60.73816-6.07382,53.684,12.14771-.538,98.69952-34.05664,86.61465L566.87045,550.72736l-5.42316-30.55145s-39.47979-53.02634,3.03693-83.39542Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#F43F5E"
                  />
                  <path
                    d="M733.36239,651.6615q-13.11.58494-26.18,1.64-6.15.495-12.3,1.09-23.475,2.295-46.83,6.06-4.395.705-8.77,1.48c-2.73.47-5.45.96-8.18,1.47q-22.245,4.125-44.29,9.62c-.02.01-.05.01-.07.02l-73.9,18.46c4.27-38.5,14.33-97.91,36.46-111.99l14.46-25.72.01-.02.89-1.57,26.78,2.79,22.52,2.35,15.54,1.62,9.71,1,.15.02,69.96,7.29.9.1h.03v33.72s.46.59,1.24,1.7c.32.44.68.96,1.08,1.55a148.0187,148.0187,0,0,1,8.52,14.06c.42.78.84,1.58,1.25,2.41a131.54453,131.54453,0,0,1,7.13,16.52A98.62807,98.62807,0,0,1,733.36239,651.6615Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M619.21676,235.66411c20.27228-12.35893,47.29-12.71519,67.88263-.89491,20.59107,11.82028,33.9087,35.33057,33.46088,59.06958-29.66473,1.36423-60.43536,29.2243-92.42548,1.78073l-7.46771-18.2767L616.26443,295.633q-14.44234-.00143-28.93957-.038C586.24966,271.87622,598.943,248.02306,619.21676,235.66411Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M746.8724,576.49707l51.62745,30.36908c12.14764-6.07379,9.79931-45.46393,2.382-47.771l-5.59259-131.42527c-3.03692-60.73816-51.08953-44.03518-51.08953-44.03518L722.40347,388.19,737.588,451.96509l16.49408,110.03864A18.1729,18.1729,0,0,0,746.8724,576.49707Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#F43F5E"
                  />
                  <path
                    d="M727.82242,609.06147l-4.33,9.27-1.15,2.48-12.15,26.03-3.01,6.46q-6.15015.495-12.3,1.09-23.47494,2.295-46.83,6.06l4.52-18.66-13.29,20.14c-2.73.47-5.45.96-8.18,1.47q-22.245,4.125-44.29,9.62l40.27-93.31v-.01l3.46-8.02,80.95,31.11005,2.14.81994Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M624.26108,576.21961c26.07959,33.50921,62.64233,44.80011,105.96673,41.7597l61.68927-190.25726-29.09065-5.13815-12.42351-16.18821-32.476-4.26209-16.0886,7.83856-26.9006-.59752-20.46695,67.38428-37.71463,66.95414Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#e6e7e8"
                  />
                  <path
                    d="M828.74905,418.65406l-12.97583,11.27368-26.77484-30.8176-8.08105-3.33908a11.13767,11.13767,0,0,1-4.245-17.49271h0a11.13741,11.13741,0,0,1,16.90588-.10559l8.396,9.6637Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M758.90472,494.77552l49.514-41.474,20.12065-18.23841a14.07816,14.07816,0,0,0,.20968-20.66739l0,0-.34415-6.21019a11.57519,11.57519,0,0,0-13.71974-10.731l0,0-17.2235,16.94114,9.56606,5.46606-11.004,6.62676-28.216,1.598Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#e6e7e8"
                  />
                  <circle
                    cx="424.487"
                    cy="170.88232"
                    r="39.74988"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M775.67843,316.21781c24.46485,9.11181,39.18952,22.14111,30.07764,46.60592s-33.99646,48.8725-58.4613,39.76068-8.583-17.8449-35.52057-67.54034C699.33328,312.0925,751.21359,307.106,775.67843,316.21781Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M795.06241,604.84149c-.2.13-.41.26-.62.38q-.615.375-1.26.69l-63.71,31.42-19.28,9.51-15.31,7.55q-23.47494,2.295-46.83,6.06-4.39509.705-8.77,1.48c-2.73.47-5.45.96-8.18,1.47a22.64347,22.64347,0,0,1-.08-5.4,23.82461,23.82461,0,0,1,28.75-20.9,23.39,23.39,0,0,1,3.59,1.11l31.07-21.39,18.14-12.48,1.06-.73,27.36-18.84.01-.01,8.6-5.91.58-.4,5.83-4.01-2.12-27.24,40.69-8.57,8.44,47.86A18.14069,18.14069,0,0,1,795.06241,604.84149Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#ffb6b6"
                  />
                  <path
                    d="M799.61032,559.095l-2.569-38.7995-43.1488,26.904-1.082,14.80414a18.17273,18.17273,0,0,0-7.20972,14.49328l51.62744,30.36914C809.37588,600.7923,807.02756,561.40222,799.61032,559.095Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#F43F5E"
                  />
                  <path
                    d="M544.05179,378.80826a13.68483,13.68483,0,0,0,17.98352,10.81323l110.02685,58.5644,9.33808-28.25748L570.31113,371.247a13.759,13.759,0,0,0-26.25934,7.56131Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#ffb6b6"
                  />
                  <path
                    d="M716.53934,463.04258s-20.60761,13.45867-34.39728,6.79126c-11.03968-5.3378-44.25965-33.93921-57.07923-45.14225a10.75066,10.75066,0,0,1-13.17083-.4917l20.16186-29.0794c7.94892-1.04462,9.08258,4.18716,9.01563,7.33535L661.567,410.845l17.37217-.29476,38.98776,47.45333Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#e6e7e8"
                  />
                  <path
                    d="M713.60477,582.33112a23.18264,23.18264,0,0,1-35.42066,3.0022l-144.21887,4.6632-18.43991.59626h0c-18.96735.61328-29.89282-21.331-17.97144-36.09638L510.363,538.63153l45.81424,7.18573,16.56586.726,106.58869,4.671a23.30815,23.30815,0,0,1,34.27294,31.117Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#ffb6b6"
                  />
                  <path
                    d="M586.38913,402.58441s-27.49085-6.97525-40.521,15.46311c-10.43158,17.96362-45.91672,85.90366-53.283,113.78781-35.94223,86.61871,47.62448,52.125,45.28635,60.29578l27.9574-45.89087c12.14764-6.07379-11.23529,1.7652-14.31556-2.59l21.43085-23.29205,24.29529-12.14765,8.91449-95.10583Z"
                    transform="translate(-321.11377 -191.94144)"
                    fill="#F43F5E"
                  />
                </svg>
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
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Kuri
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#FFF1F2] rounded-full flex items-center justify-center">
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
                <p className="text-[#F43F5E] mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#FFF1F2] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl text-[#F43F5E] mb-6">"</div>
          <p className="text-xl text-gray-600 mb-8">
            Kuri has been a lifesaver in my breastfeeding journey. The support
            and resources they provide are invaluable, and I'm so grateful to be
            part of this amazing community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
              alt="Sarah"
              className="w-12 h-12 rounded-full"
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
          <Button className="bg-[#F43F5E] hover:bg-[#E11D48] text-lg px-8">
            Learn More About Our Mission
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
