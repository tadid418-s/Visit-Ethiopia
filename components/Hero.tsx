const Hero = () => {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/Ethiopia_Background.jpg')",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="flex items-end justify-end min-h-[calc(100vh-4rem)] pb-20">
          <div className="w-full max-w-2xl text-right mr-8 md:mr-16">
            <p className="text-xs md:text-sm text-white/80 uppercase tracking-wider mb-4 font-light">
              Your Official Ethiopian Travel Guide
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight tracking-tight">
              Explore
              <br />
              Ethiopia
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero