import { Clock, Award, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Learn at your own pace with 24/7 access to course materials"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Get guidance from industry professionals with years of experience"
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn recognized certificates upon successful course completion"
  },
  {
    icon: BookOpen,
    title: "Rich Content",
    description: "Access video lessons, quizzes, and downloadable resources"
  }
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="gradient-card rounded-xl p-8 shadow-elegant hover:shadow-lg transition-smooth hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
