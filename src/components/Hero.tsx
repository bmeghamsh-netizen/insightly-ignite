import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning online"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground">
            Learn Anything,
            <br />
            <span className="text-accent">Anytime, Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of students mastering new skills with our expert-led online courses. 
            Flexible learning that fits your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="accent" size="lg" className="text-lg">
              Enroll Now <ArrowRight className="ml-2" />
            </Button>
            <Button variant="secondary" size="lg" className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20">
              Browse Courses
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
