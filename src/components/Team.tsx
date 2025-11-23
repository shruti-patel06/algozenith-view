import { useEffect, useRef, useState } from "react";
import { Linkedin, Github, Mail, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin: string;
  github: string;
  email: string;
}

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start typewriter effect
          startTypewriter();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startTypewriter = () => {
    const text = "Meet Our Team";
    let i = 0;
    const timer = setInterval(() => {
      setTypewriterText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        // Hide cursor after animation completes
        setTimeout(() => {
          setShowCursor(false);
        }, 500);
      }
    }, 100);
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Neelam Reethika",
      role: "Lead",
      image: "images/team/Reethika.jpg",
      description: "Priya is a passionate coder and leader who drives the vision of AlgoZenith VIEW. With expertise in competitive programming and team management, she mentors students to excel in coding competitions and leads the club towards new heights of innovation.",
      linkedin: "#",
      github: "#",
      email: "priya@view.edu.in",
    },
    {
      name: "P.Bhasini",
      role: "Co-Lead",
      image: "images/team/Bhasini.jpg",
      description: "Anjali supports the club's operations and coordinates between different teams. Her organizational skills and technical knowledge in algorithms make her an invaluable asset in planning workshops and hackathons.",
      linkedin: "#",
      github: "#",
      email: "anjali@view.edu.in",
    },
    {
      name: "Hanumanthu Pavithra",
      role: "CP Lead",
      image: "images/team/Pavithra.jpg",
      description: "I’m Pavitra Hanumanthu, passionate about coding, networking, and cloud security. I aim to build a safer digital world and share what I learn.",
      linkedin: "https://www.linkedin.com/in/pavitra-hanumanthu-164192328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/HanumanthuPavitra",
      email: "hpavitra257@gmail.com",
    },
    {
      name: "Ashmitha Nalla",
      role: "Graphic Designer",
      image: "images/team/Ashmitha.jpg",
      description: "Kavya leads the Data Structures and Algorithms wing, creating comprehensive learning paths for students. Her expertise in teaching complex DSA concepts in simple terms helps students build strong foundations.",
      linkedin: "#",
      github: "#",
      email: "kavya@view.edu.in",
    },
    {
      name: "Jeeru Pratyusha",
      role: "Graphic Desingner",
      image: "images/team/Pratyusha.jpg",
      description: "Divya brings creative excellence to the club with her exceptional UI/UX design skills. She leads design workshops and ensures all club projects have beautiful, user-friendly interfaces.",
      linkedin: "https://www.linkedin.com/in/pratyusha-reddy-jeeru-b34845340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "#",
      email: "divya@view.edu.in",
    },
    {
      name: "Shruti Patel",
      role: "UI/UX Designer",
      image: "images/team/Shruti.jpg",
      description: "I enjoy contributing to team projects and collaborating to ensure my designs are always clear and user-focused.",
      linkedin: "https://www.linkedin.com/in/shruti-patel06/",
      github: "https://github.com/shruti-patel06",
      email: "shruti.8717@gmail.com",
    },
    {
      name: "Neelima Sree",
      role: "Media and Content Lead ",
      image: "images/team/Neelima.jpg",
      description: "Isha manages the club's online presence and engagement. She creates compelling content that showcases achievements and keeps the community informed about upcoming events and opportunities.",
      linkedin: "#",
      github: "#",
      email: "isha@view.edu.in",
    },
    {
      name: "A.Sahithi Aravinda",
      role: "Media and Content Manager",
      image: "images/team/Sahithi.jpg",
      description: "Riya orchestrates all club events from hackathons to workshops. Her attention to detail and coordination skills ensure every event runs smoothly and creates lasting impact on participants.",
      linkedin: "https://www.linkedin.com/in/attili-sahithi-aravinda-a82706273?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "#",
      email: "riya@view.edu.in",
    },
    {
      name: "Nallamilli Vineela",
      role: "Event Planner",
      image: "images/team/Vineela.jpg",
      description: "I am Vineela Reddy, an aspiring AI undergrad engineer skilled in clear explanation, quick problem-solving, and effective interaction with people. I love combining my technical curiosity with strong communication to create meaningful and practical AI solutions.",
      linkedin: "https://www.linkedin.com/in/vineela-reddy-1270332b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/vineelareddy984",
      email: "vineelareddy984@gmail.com",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {typewriterText ? (
              typewriterText.includes("Team") ? (
                <>Meet Our <span className="text-primary">Team</span></>
              ) : typewriterText
            ) : "Meet Our"}
            {showCursor && <span className="animate-pulse text-primary/60">|</span>}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            The passionate leaders driving innovation and excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-0 xl:gap-12 place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center group transition-all duration-700 delay-${
                (index % 4) * 100
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${index === 0 || index === 1 ? "lg:col-span-5" : index >= 2 && index <= 5 ? "lg:col-span-3" : "lg:col-span-4"}`}
            >
              {/* Profile Image */}
              <div 
                className="relative mb-6 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-3 sm:ring-4 ring-muted group-hover:ring-primary transition-all duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${(member.name === "Hanumanthu Pavithra" || member.name === "P.Bhasini") ? "object-[center_20%]" : ""} ${member.name === "Ashmitha Nalla" ? "object-[25%_center] scale-105" : ""} ${member.name === "Shruti Patel" ? "scale-98" : ""} ${member.name === "Neelam Reethika" ? "scale-110" : ""} ${member.name === "Sahithi Aravinda" ? "scale-105 brightness-105 contrast-105 saturate-110" : ""} ${member.name === "Jeeru Pratyusha" ? "brightness-90 contrast-110" : ""} ${member.name === "Neelima Sree" ? "scale-105 brightness-105 contrast-105 saturate-110" : ""} group-hover:filter group-hover:blur-md transition-all duration-300`}
                  />
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                    <a
                      href={member.linkedin}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </a>
                    <a
                      href={member.github}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-black group-hover:underline decoration-gray-600 decoration-2 underline-offset-4 transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Member Details Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col md:flex-row gap-6 pt-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className={`w-48 h-48 rounded-full object-cover ring-4 ring-primary/20 ${(selectedMember.name === "Hanumanthu Pavithra" || selectedMember.name === "P.Bhasini") ? "object-[center_20%]" : ""} ${selectedMember.name === "Ashmitha Nalla" ? "object-[25%_center] scale-105" : ""} ${selectedMember.name === "Shruti Patel" ? "scale-98" : ""} ${selectedMember.name === "Neelam Reethika" ? "scale-110" : ""} ${selectedMember.name === "Sahithi Aravinda" ? "scale-105 brightness-105 contrast-105 saturate-110" : ""} ${selectedMember.name === "Jeeru Pratyusha" ? "brightness-90 contrast-110" : ""} ${selectedMember.name === "Neelima Sree" ? "scale-105 brightness-105 contrast-105 saturate-110" : ""}`}
                  />
                </div>
                
                {/* Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      {selectedMember.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedMember.description}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={selectedMember.linkedin}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={selectedMember.github}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Team;
