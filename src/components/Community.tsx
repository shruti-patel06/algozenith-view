import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Community = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const communityLinks = [
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow us for behind-the-scenes content and event highlights",
      color: "from-pink-500 to-purple-600",
      link: "https://www.instagram.com/algozenith_view?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // Updated link
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with us professionally and stay updated with opportunities",
      color: "from-blue-600 to-blue-700",
      link: "https://www.linkedin.com/in/algozenith-view-4aa2b1383/", // Updated link
    },
    {
      icon: Youtube,
      title: "YouTube",
      description: "Watch our tutorials, talks, and event recordings",
      color: "from-red-500 to-red-600",
      link: "https://youtube.com/@algozenith2k25?si=flvDpWzK80uHlpXw",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Connect with us on social media and be part of our growing community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {communityLinks.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-card rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 h-full flex flex-col">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 sm:mb-6`}
                >
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 flex-grow">
                  {item.description}
                </p>
                <Button
                  asChild
                  className="btn-gradient w-full"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Join Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
