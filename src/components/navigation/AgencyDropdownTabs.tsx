import { useState } from "react";
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

interface AgencyDropdownTabsProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  {
    id: "web-dev",
    title: "Web Dev",
    icon: Code,
    services: [
      "Frontend Development",
      "Backend Development", 
      "Full Stack Development",
      "E-commerce Development",
      "CMS Development",
      "API Development"
    ]
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: Megaphone,
    services: [
      "SEO Services",
      "PPC Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Influencer Marketing"
    ]
  },
  {
    id: "design",
    title: "Design", 
    icon: Palette,
    services: [
      "UI/UX Design",
      "Web Design",
      "Logo Design",
      "Brand Identity",
      "Graphic Design",
      "Print Design"
    ]
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    services: [
      "iOS Development",
      "Android Development", 
      "React Native",
      "Flutter Development",
      "Hybrid Apps",
      "App Store Optimization"
    ]
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: BarChart3,
    services: [
      "Data Analytics",
      "Business Intelligence",
      "Data Science", 
      "Market Research",
      "Performance Tracking",
      "Conversion Optimization"
    ]
  },
  {
    id: "video",
    title: "Video",
    icon: Video,
    services: [
      "Video Production",
      "Animation",
      "Motion Graphics",
      "Photography", 
      "Audio Production",
      "Live Streaming"
    ]
  }
];

const marketplaceItems = [
  { title: "Freelancers", icon: Users, description: "Individual experts", count: "2.5k+" },
  { title: "Templates", icon: Globe, description: "Ready-made solutions", count: "500+" },
  { title: "Tools", icon: Zap, description: "Business software", count: "150+" },
  { title: "Services", icon: ShoppingCart, description: "One-time projects", count: "1.2k+" }
];

export const AgencyDropdownTabs = ({ isOpen, onOpenChange }: AgencyDropdownTabsProps) => {
  const [activeTab, setActiveTab] = useState("web-dev");

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[920px] bg-background border border-border rounded-xl shadow-dropdown z-50"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      {/* Tab Navigation */}
      <div className="border-b border-border bg-accent/30">
        <div className="flex">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === category.id
                  ? 'border-primary text-primary bg-background'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
              onMouseEnter={() => setActiveTab(category.id)}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.title}</span>
            </button>
          ))}
          <button
            className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === "marketplace"
                ? 'border-primary text-primary bg-background'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-accent/50'
            }`}
            onMouseEnter={() => setActiveTab("marketplace")}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Marketplace</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "marketplace" ? (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Marketplace</h3>
            <div className="grid grid-cols-2 gap-4">
              {marketplaceItems.map((item) => (
                <a 
                  key={item.title}
                  href="#"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.count}</div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {(() => {
              const activeCategory = categories.find(cat => cat.id === activeTab);
              if (!activeCategory) return null;
              
              return (
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <activeCategory.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{activeCategory.title}</h3>
                      <p className="text-sm text-muted-foreground">Professional {activeCategory.title.toLowerCase()} services</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {activeCategory.services.map((service) => (
                      <a 
                        key={service}
                        href="#"
                        className="p-3 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-all duration-200 group"
                      >
                        <div className="text-sm font-medium text-foreground group-hover:text-primary">
                          {service}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Find expert agencies →
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};