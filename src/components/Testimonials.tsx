import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    content: "This platform transformed my career! The courses are well-structured, and the instructors are incredibly knowledgeable. I landed my dream job within 3 months of completing the bootcamp.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    content: "The flexibility to learn at my own pace was exactly what I needed. The quality of content is outstanding, and the community support helped me stay motivated throughout my learning journey.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    content: "I've tried many online learning platforms, but this one stands out. The practical projects and real-world examples made all the difference. Highly recommend to anyone looking to upskill!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied learners who achieved their goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="gradient-card rounded-xl p-8 shadow-elegant hover:shadow-lg transition-smooth animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-bold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
