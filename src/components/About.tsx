import { Statistics } from "./Statistics";
import growth from "../assets/growth.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-12 sm:py-32" // Reduced top and bottom padding on mobile from py-24 to py-12
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={growth}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
              About{"   "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Zenith
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              <p style={{ color: 'black' }}>
                At Zenith, we are dedicated to empowering students to achieve their educational dreams by providing comprehensive resources for discovering and applying for scholarships. Our platform simplifies the scholarship search process, allowing students to focus on what matters most: their education.
                With a commitment to excellence, we offer personalized support, expert advice on crafting standout application documents, and a robust database of scholarship opportunities. Join our growing community and take the next step toward your academic success with confidence.
              </p>
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
