import logo from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="flex flex-col items-center text-center">
          <img 
            src={logo} 
            alt="Clean Cut Gutters Logo" 
            className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover shadow-elevated mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            PROFESSIONAL Gutter INSTALLATIONS
          </h2>
          <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Since 2018, Clean Cut Gutters has proudly served homeowners across Florida, delivering expert gutter solutions built on precision, reliability, and care. With years of hands-on experience, our team is equipped to handle every aspect of your gutter installation and maintenance needs.
            </p>
            <p>
              Our mission is simple — to install gutter systems that perform flawlessly, enhance your home's curb appeal, and contribute to its long-term protection. At Clean Cut Gutters, we take pride in going above and beyond our clients' expectations with every project we complete.
            </p>
            <p>
              As a leading local gutter contractor, we offer a full range of seamless gutter services — from custom installation to repairs and cleaning — all tailored to your property's unique needs. Every system is designed with precision and installed with care to ensure lasting performance and durability you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
