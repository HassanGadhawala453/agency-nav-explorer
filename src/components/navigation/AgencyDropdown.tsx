import { 
  Monitor, 
  Megaphone, 
  Code, 
  Palette, 
  Search, 
  BarChart3, 
  Video, 
  Smartphone, 
  Globe, 
  Zap,
  ShoppingCart,
  Users
} from "lucide-react";

interface AgencyDropdownProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  {
    title: "Web Development",
    icon: Code,
    services: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "E-commerce Development",
      "CMS Development"
    ]
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    services: [
      "SEO Services",
      "PPC Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing"
    ]
  },
  {
    title: "Design Services",
    icon: Palette,
    services: [
      "UI/UX Design",
      "Web Design",
      "Logo Design",
      "Brand Identity",
      "Graphic Design"
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    services: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter Development",
      "Hybrid Apps"
    ]
  },
  {
    title: "Analytics & Data",
    icon: BarChart3,
    services: [
      "Data Analytics",
      "Business Intelligence",
      "Data Science",
      "Market Research",
      "Performance Tracking"
    ]
  },
  {
    title: "Video & Media",
    icon: Video,
    services: [
      "Video Production",
      "Animation",
      "Motion Graphics",
      "Photography",
      "Audio Production"
    ]
  }
];

const marketplaceItems = [
  { title: "Freelancers", icon: Users, description: "Individual experts" },
  { title: "Templates", icon: Globe, description: "Ready-made solutions" },
  { title: "Tools", icon: Zap, description: "Business software" },
  { title: "Services", icon: ShoppingCart, description: "One-time projects" }
];

export const AgencyDropdown = ({ isOpen, onOpenChange }: AgencyDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-background border border-border rounded-xl shadow-dropdown z-50"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <div className="p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Categories Column 1 */}
          <div className="space-y-4">
            {categories.slice(0, 2).map((category) => (
              <div key={category.title} className="group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <category.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2 ml-11">
                  {category.services.map((service) => (
                    <li key={service}>
                      <a 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-1"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Categories Column 2 */}
          <div className="space-y-4">
            {categories.slice(2, 4).map((category) => (
              <div key={category.title} className="group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <category.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2 ml-11">
                  {category.services.map((service) => (
                    <li key={service}>
                      <a 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-1"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Categories Column 3 + Marketplace */}
          <div className="space-y-4">
            {categories.slice(4, 6).map((category) => (
              <div key={category.title} className="group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <category.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2 ml-11">
                  {category.services.slice(0, 3).map((service) => (
                    <li key={service}>
                      <a 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-1"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Marketplace Section */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-3">Marketplace</h3>
              <div className="space-y-2">
                {marketplaceItems.map((item) => (
                  <a 
                    key={item.title}
                    href="#"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      <item.icon className="h-3 w-3" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};