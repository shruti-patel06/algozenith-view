import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroAbout = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-bg via-background to-muted/40">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Removed top label per request */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Code Better Every Day
              <span className="block mt-1 sm:mt-2 text-gradient text-lg sm:text-xl md:text-2xl lg:text-3xl">A Community Built on Growth and Practice</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We are a vibrant community at Vignan's Institute of Engineering for Women, 
              mastering algorithms, building products, and winning hackathons. Join us to 
              level up your skills with hands-on workshops, peer learning, and mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button className="btn-gradient px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 text-sm sm:text-base whitespace-nowrap" asChild>
                <a href="#events">Explore Events</a>
              </Button>
              <Button variant="outline" className="px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 text-sm sm:text-base" asChild>
                <a href="https://www.linkedin.com/in/algozenith-view-4aa2b1383/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Join Now
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </Button>
            </div>
            {/* Mobile badge */}
            <div className="lg:hidden mt-4 flex justify-center">
              <div className="rounded-lg px-2 py-1 bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-sm border border-white/40">
                <p className="text-xs font-semibold">
                  Learn • Build • Compete
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-1 lg:order-2 mx-auto lg:mx-0">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10">
              {/* Concentric rings */}
              <div className="absolute inset-6 rounded-2xl border border-primary/20" />
              <div className="absolute inset-12 rounded-2xl border border-secondary/20" />
              <div className="absolute inset-20 rounded-2xl border border-accent/20" />

              {/* Floating dots */}
              <div className="hidden lg:block absolute top-10 left-10 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary animate-float" />
              <div className="hidden lg:block absolute bottom-12 right-16 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-secondary animate-float" style={{ animationDelay: '300ms' }} />
              <div className="hidden lg:block absolute top-1/2 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-float" style={{ animationDelay: '600ms' }} />

              {/* Center badge */}
              <div className="hidden lg:flex absolute inset-0 items-center justify-center">
                <div className="rounded-lg px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-sm border border-white/40">
                  <p className="text-xs sm:text-sm md:text-base font-semibold">
                    Learn • Build • Compete
                  </p>
                </div>
              </div>
            </div>

            {/* Removed stats strip per request */}
          </div>
        </div>

        {/* Removed about slice under hero per request */}
      </div>
    </section>
  );
};

export default HeroAbout;


