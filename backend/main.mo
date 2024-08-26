import Int "mo:base/Int";

import Text "mo:base/Text";
import Array "mo:base/Array";
import Result "mo:base/Result";

actor {
  type Feature = {
    title: Text;
    description: Text;
    icon: Text;
  };

  type ShowcaseItem = {
    title: Text;
    description: Text;
    imageUrl: Text;
    ctaText: Text;
  };

  stable var info: Text = "GEMS accelerates your Internet Computer projects with AI-assisted development, seamless deployment, and powerful management tools.";

  stable var features: [Feature] = [
    {
      title = "AI-Powered Development";
      description = "Generate Motoko code and entire projects using natural language prompts.";
      icon = "lightbulb";
    },
    {
      title = "Instant Deployment";
      description = "Deploy to the Internet Computer with a single click using our playground canisters.";
      icon = "rocket";
    },
    {
      title = "Canister Management";
      description = "Easily manage your canisters from playground experiments to production deployments.";
      icon = "cubes";
    }
  ];

  stable var showcaseItems: [ShowcaseItem] = [
    {
      title = "AI-Assisted Development";
      description = "Describe your project in natural language, and watch as GEMS generates functional Motoko code. Accelerate your development process and bring your ideas to life faster than ever.";
      imageUrl = "https://loremflickr.com/g/600/400/code?lock=1";
      ctaText = "Try it now";
    },
    {
      title = "Seamless Deployment";
      description = "Deploy your projects to the Internet Computer with just one click. GEMS handles the complexities, allowing you to focus on building great applications.";
      imageUrl = "https://loremflickr.com/g/600/400/server?lock=2";
      ctaText = "Learn more";
    }
  ];

  public query func getInfo() : async Text {
    info
  };

  public query func getFeatures() : async [Feature] {
    features
  };

  public query func getShowcaseItems() : async [ShowcaseItem] {
    showcaseItems
  };
}
