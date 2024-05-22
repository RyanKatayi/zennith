interface SponsorProps {
  icon: JSX.Element;
  name?: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <img src="https://www.shorttermprograms.com/images/cache/600_by_314/uploads/institution-logos/harvard-university.png" alt="Harvard Logo" style={{ width: '250px', height: '125px' }} />,
  },
  {
    icon: <img src="https://collegeaim.org/wp-content/uploads/2021/09/princeton-scaled.jpg" alt="Princeton Logo" style={{ width: '200px', height: '55px' }} />,
  },
  {
    icon: <img src="https://mrvian.com/wp-content/uploads/2022/10/university-of-cambridge.png" alt="Cambridge Logo" style={{ width: '250px', height: '70px' }} />,
  },
  {
    icon: <img src="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Finstitutions%2Fpenn-hz.png?auto=format&ixlib=php-4.1.0&s=9a90e319654a47438285621944cedff7" alt="Penn Logo" style={{ width: '180px', height: '50px' }} />,
  },
  {
    icon: <img src="https://fundit.fr/sites/default/files/styles/max_650x650/public/actors/2527-universite-toronto.png?itok=mPR77h6x" alt="Toronto Logo" style={{ width: '230px', height: '120px' }} />,
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-16 sm:py-20 hidden sm:block" // Reduced top padding from pt-24 sm:py-32 to pt-12 sm:py-16
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Find opportunities at Top Universities and more!
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
