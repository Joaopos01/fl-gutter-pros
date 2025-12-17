import project1 from "@/assets/projects/project-1.jpeg";
import project2 from "@/assets/projects/project-2.jpeg";
import project3 from "@/assets/projects/project-3.jpeg";
import project4 from "@/assets/projects/project-4.jpeg";
import project5 from "@/assets/projects/project-5.jpeg";

const projects = [
  {
    src: project1,
    alt: "Seamless black gutters on white modern home",
    title: "Modern Home Installation",
  },
  {
    src: project2,
    alt: "White gutters on beige stucco home with garage",
    title: "Residential Gutter System",
  },
  {
    src: project3,
    alt: "White downspout on teal-colored house",
    title: "Complete Drainage Solution",
  },
  {
    src: project4,
    alt: "White seamless gutters during installation",
    title: "Professional Installation",
  },
  {
    src: project5,
    alt: "White gutters and downspouts on beige siding",
    title: "New Construction Project",
  },
];

const BeforeAfterSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Our Recent Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Take a look at some of our completed gutter installations across Florida. 
            Every project showcases our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
