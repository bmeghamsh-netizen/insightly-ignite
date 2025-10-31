import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "month",
    description: "Perfect for beginners starting their learning journey",
    features: [
      "Access to 5 courses",
      "Basic course materials",
      "Community forum access",
      "Email support",
      "Mobile app access"
    ],
    highlighted: false
  },
  {
    name: "Standard",
    price: "$79",
    period: "month",
    description: "Most popular choice for serious learners",
    features: [
      "Access to all courses",
      "Premium course materials",
      "Priority community support",
      "Live Q&A sessions",
      "Downloadable resources",
      "Course completion certificates"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    price: "$149",
    period: "month",
    description: "For professionals seeking advanced skills",
    features: [
      "Everything in Standard",
      "1-on-1 mentorship sessions",
      "Career guidance",
      "Job placement assistance",
      "Lifetime course access",
      "Exclusive workshops",
      "Advanced certifications"
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your learning goals and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`gradient-card rounded-xl p-8 shadow-elegant hover:shadow-lg transition-smooth hover:-translate-y-2 animate-scale-in ${
                plan.highlighted ? "ring-2 ring-primary relative" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-accent text-accent-foreground px-6 py-1 rounded-full font-semibold text-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.highlighted ? "hero" : "default"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
