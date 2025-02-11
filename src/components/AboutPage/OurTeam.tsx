import { useTranslation } from "react-i18next";
import "../i18n";

const OurTeam = () => {
  const { t } = useTranslation();
  const team = [
    {
      name: t("mahlet_kassahun"),
      role: t("mahlet_kassahun_role"),
      description: t("mahlet_kassahun_description"),
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    },
    {
      name: t("dr_eyerusalem_getu"),
      role: t("dr_eyerusalem_getu_role"),
      description: t("dr_eyerusalem_getu_description"),

      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
    },
  ];
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          {t("meet_the_team")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
  );
};

export default OurTeam;
