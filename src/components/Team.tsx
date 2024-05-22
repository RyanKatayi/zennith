import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin} from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://pbs.twimg.com/profile_images/1729919168709808128/XZwJdK69_400x400.jpg",
    name: "Munya Makosa",
    position: "Full Stack Engineer",
    socialNetworks: [
      { name: "Linkedin", url: "https://zm.linkedin.com/in/makosa-munya" },
      { name: "X", url: "https://twitter.com/makosamunyaa" },
    ],
  },
  {
    imageUrl: "https://pbs.twimg.com/profile_images/1774033354431623168/46g9xRYn_400x400.jpg",
    name: "Ryan Katayi",
    position: "Product",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/ryankatayi/" },
      { name: "X", url: "https://twitter.com/RyanKatayi" },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;

      case "X":
        return (
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-foreground w-5 h-5"
          >
            <title>X</title>
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        );
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Our Dedicated{" "}
          </span>
          Crew
        </h2>

        <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
          Meet the team behind our platform. We are committed to providing the best service and support to help you achieve your educational goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 justify-center items-center">
          {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex flex-col justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center mt-8">{name}</CardTitle>
                <CardDescription className="text-primary text-center">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>Passionate about delivering quality solutions and exceptional user experiences.</p>
              </CardContent>

              <CardFooter className="flex justify-center gap-2">
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <a
                    key={name}
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
