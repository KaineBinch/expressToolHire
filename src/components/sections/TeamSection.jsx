import ImageContainer from "../common/ImageContainer"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Richard Hayden",
      role: "Director",
      image: "./src/assets/teamImages/richHead.png",
      description:
        "With over 20 years of experience in the construction industry, Richard ensures smooth operations.",
    },
    {
      name: "Kaine Binch",
      role: "Director of fun",
      image: "./src/assets/teamImages/kaineHead.png",
      description:
        "I wanted to put another person on and thought it would be easier to use my name than search for people you work with.",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get to know the experienced team behind Express Tool Hire Ltd.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <ImageContainer
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-64 h-64 mx-auto rounded-xl overflow-hidden"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <h4 className="text-md text-gray-600 mb-4">{member.role}</h4>
              <p className="text-gray-700 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
