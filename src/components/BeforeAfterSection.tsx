import BeforeAfterSlider from "./BeforeAfterSlider";

// These are placeholder images - replace with actual before/after photos
const projects = [
  {
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    after: "https://images.unsplash.com/photo-1558618047-3c8c76ca7e99?w=800&q=80",
    beforeAlt: "Before — damaged gutters with debris",
    afterAlt: "After — new seamless gutters installed",
  },
  {
    before: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    after: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    beforeAlt: "Before — clogged gutters causing overflow",
    afterAlt: "After — clean gutters with proper drainage",
  },
];

const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Before & After — Real Florida Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Drag the handle to compare real gutter transformations completed by Clean Cut Gutters.
            From clogged and damaged systems to clean, precise and efficient installations — see the
            difference craftsmanship makes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={project.before}
              afterImage={project.after}
              beforeAlt={project.beforeAlt}
              afterAlt={project.afterAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
