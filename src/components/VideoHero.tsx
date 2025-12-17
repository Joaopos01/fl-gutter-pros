import logo from "@/assets/logo.jpeg";

interface VideoHeroProps {
  videoUrl?: string;
}

const VideoHero = ({ videoUrl }: VideoHeroProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          // Placeholder when no video is provided
          <div className="h-full w-full bg-gradient-to-br from-primary via-secondary to-teal-light flex items-center justify-center">
            <span className="text-primary-foreground/30 text-lg">Video placeholder — connect your backend video here</span>
          </div>
        )}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        {/* Logo */}
        <img 
          src={logo} 
          alt="Clean Cut Gutters Logo" 
          className="mb-6 h-32 w-32 rounded-full object-cover shadow-elevated md:h-40 md:w-40"
        />

        {/* Company Name */}
        <h1 className="text-center text-5xl font-bold tracking-tight text-card md:text-7xl">
          Clean Cut Gutters
        </h1>
      </div>
    </section>
  );
};

export default VideoHero;
