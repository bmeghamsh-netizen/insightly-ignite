import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import webDevImage from "@/assets/course-web-dev.jpg";
import dataScienceImage from "@/assets/course-data-science.jpg";
import marketingImage from "@/assets/course-marketing.jpg";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications",
    image: webDevImage,
    duration: "12 weeks",
    students: "15,234",
    rating: 4.9,
    price: "$99"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Learn Python, statistics, and ML algorithms to analyze data and build predictive models",
    image: dataScienceImage,
    duration: "16 weeks",
    students: "12,567",
    rating: 4.8,
    price: "$129"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "Comprehensive course covering SEO, social media, content marketing, and analytics",
    image: marketingImage,
    duration: "10 weeks",
    students: "18,901",
    rating: 4.9,
    price: "$89"
  }
];

const Courses = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            Popular Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most loved courses and start your learning journey today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="gradient-card rounded-xl overflow-hidden shadow-elegant hover:shadow-lg transition-smooth hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold text-sm">
                  {course.price}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-card-foreground">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
