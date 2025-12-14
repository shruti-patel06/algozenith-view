import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import event1 from "@/assets/event1.png";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      title: "AlgoZenith Inaugural",
      date: "September 09, 2025",
      location: "VIEW Campus",
      participants: "300+ Students",
      description:
        "We organized the AlgoZenith Club Inaugural at Vignan's Institute of Engineering for Women, marking the launch of the first-ever AlgoZenith chapter on our campus!",
      image: event1,
      color: "from-primary to-primary/80",
    },
    {
      title: "DSA and CP session",
      date: "September 09, 2025",
      location: "VIEW Campus",
      participants: "300+ Students",
      description:
        "This session was expertly conducted by our recently placed students at Netwest, who shared their knowledge and experience with the participants",
      image: event2,
      color: "from-secondary to-secondary/80",
    },
    {
      title: "Coding Contest",
      date: "September 12, 2025",
      location: "VIEW Campus",
      participants: "250+ Students",
      description:
        "This contest provided a platform for students to sharpen their coding abilities, build confidence, and experience the true spirit of competitive programming 💻",
      image: event3,
      color: "from-accent to-accent/80",
    },
    {
      title: "Guest Lecture",
      date: "December 9, 2025",
      location: "VIEW Campus",
      participants: "350+ Students",
      description:
        "The session was led by 𝐌𝐫. 𝐏. 𝐉𝐚𝐧𝐚𝐤𝐢 𝐑𝐚𝐦𝐮𝐝𝐮, DevOps Engineer & Software Developer at 𝐓𝐂𝐒, with 𝟏𝟎+ 𝐲𝐞𝐚𝐫𝐬 𝐨𝐟 𝐢𝐧𝐝𝐮𝐬𝐭𝐫𝐲 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞. He shared valuable insights on product thinking, full-stack development, DSA and problem-solving, software engineering, essential industry skills, and career direction 💡",
      image: event4,
      color: "from-green-500 to-green-600",
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
            <span className="text-gradient">Events</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Join us in these exciting events and be part of our growing community
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Event Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      event.title === "AlgoZenith Inaugural" ? "object-[center_80%]" : 
                      event.title === "DSA and CP session" ? "object-[center_70%]" :
                      event.title === "Coding Contest" ? "object-[center_40%]" :
                      event.title === "Guest Lecture" ? "object-[center_85%]" : ""
                    }`}
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="h-48 bg-gradient-to-br ${event.color} p-6 flex items-end">
                          <h3 class="text-2xl font-bold text-white">${event.title}</h3>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{event.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
