
const teamMembers = [
  {
    name: "Michael Turner",
    role: "Managing Director",
    image: "/images/699ebb9bab06aa49bee6d9b5_Team 8.webp",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/"
  },
  {
    name: "James Wilson",
    role: "Project Manager",
    image: "/images/699ebbaa4072136d8f0c296f_Team 7.webp",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/"
  },
  {
    name: "Robert Martinez",
    role: "Construction Supervisor",
    image: "/images/699ebb9bb8401bdc6c52eca3_Team 6.webp",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/"
  },
  {
    name: "Daniel Carter",
    role: "Lead Construction Technician",
    image: "/images/699ebb9ad351954209b94607_Team 5.webp",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/"
  },
  {
    name: "Anthony Rodriguez",
    role: "Compliance Officer",
    image: "/images/699ebb9a85c9b396a47b40fc_Team 4.webp",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/"
  },
  {
    name: "Brian Thom",
    role: "Logistics Manager",
    image: "/images/699ebb9aab06aa49bee6d932_Team 3.webp",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/"
  },
  {
    name: "Emily Parker",
    role: "Customer Service",
    image: "/images/699ebb9954becf7d49749848_Team 2.webp",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/"
  },
  {
    name: "Kevin Anderson",
    role: "Quality Control Inspector",
    image: "/images/699ebb9a877c549927c605d3_Team 1.webp",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/"
  }
];

export default function TeamSection() {
  return (
    <section className="section team">
      <div className="container">
        <div className="team-wrap">
          <h3 
            data-w-id="e3322e5b-7d37-bf36-3c6a-622b23013cad" 
            style={{ opacity: 0 }} 
            className="team-titlle"
          >
            Dedicated Construction Professionals Serving You with Excellence
          </h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                className="team-single-card reveal-on-scroll" 
                key={index}
                style={{ transitionDelay: `${(index % 4) * 0.1 + 0.1}s` }}
              >
                <div className="team-image-box">
                  <img 
                    src={member.image} 
                    loading="lazy" 
                    alt={member.name} 
                    className="team-image" 
                  />
                </div>
                <div className="team-content-box">
                  <div className="team-content-left-box">
                    <div className="secondary-text black">{member.name}</div>
                    <div className="description">{member.role}</div>
                  </div>
                  <div className="team-social-icon-box">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-box-team w-inline-block"
                    >
                      <img 
                        src="/images/699eb937cc8ec2479340e6e7_1-linkedln.svg" 
                        alt="LinkedIn" 
                        className="social-icon-in" 
                      />
                      <img 
                        src="/images/69b1809b6d1a6662937e7d4e_ac-linkedln.svg" 
                        alt="LinkedIn Hover" 
                        className="social-icon-out" 
                      />
                    </a>
                    <a 
                      href={member.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-box-team w-inline-block"
                    >
                      <img 
                        src="/images/69b17ff66fb128191a96006d_ac-new-twitter.svg" 
                        alt="Twitter" 
                        className="social-icon-in" 
                      />
                      <img 
                        src="/images/699eb9882adb8f93b7bf535c_new-twitter.svg" 
                        alt="Twitter Hover" 
                        className="social-icon-out" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
