import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Discover Scholarships",
    description:
      "Explore a vast database of scholarships tailored to your profile and preferences. Find opportunities that best match your needs and aspirations.",
  },
  {
    icon: <MapIcon />,
    title: "Save Deadlines",
    description:
      "Keep track of important scholarship application deadlines. Never miss an opportunity with our convenient deadline management features.",
  },
  {
    icon: <MapIcon />,
    title: "AI-Powered SOP Generator",
    description:
      "Leverage our AI tools to create impressive Statements of Purpose tailored to each scholarship application. Stand out from the competition with unique and well-crafted SOPs.",
  },
  {
    icon: <PlaneIcon />,
    title: "AI-Powered Resume Builder",
    description:
      "Use our AI-powered resume builder to create professional resumes that highlight your strengths and achievements, ensuring you make a great impression.",
  },
  {
    icon: <PlaneIcon />,
    title: "Get Application Help",
    description:
      "Receive expert assistance on crafting compelling resumes and Statements of Purpose (SOP). Ensure your application documents meet the highest standards.",
  },
  {
    icon: <MedalIcon />,
    title: "Monitor Progress",
    description:
      "Track the status of your scholarship applications and manage all your activities in one centralized location. Stay updated on your progress.",
  },
  {
    icon: <PlaneIcon />,
    title: "Receive Alerts",
    description:
      "Get timely notifications about new scholarship opportunities, approaching deadlines, and updates on your application status.",
  },
  {
    icon: <GiftIcon />,
    title: "Access Support",
    description:
      "Benefit from our dedicated support team ready to assist you with any queries or challenges you may face during your scholarship journey.",
  },

];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Here is a step-by-step guide on getting started!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
