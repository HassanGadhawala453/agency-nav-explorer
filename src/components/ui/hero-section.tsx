import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="bg-gradient-secondary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Find the Perfect{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Agency
          </span>{" "}
          for Your Business
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with top-rated agencies across web development, digital marketing, 
          design, and more. Get matched with the right expertise for your project.
        </p>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search for agencies, services, or locations..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-border focus:border-primary rounded-xl shadow-card"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-primary hover:bg-gradient-hover text-primary-foreground px-6"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span>Popular:</span>
          {["Web Design", "SEO Services", "Mobile Apps", "Branding", "E-commerce"].map((tag) => (
            <button 
              key={tag}
              className="px-3 py-1 bg-accent text-accent-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;