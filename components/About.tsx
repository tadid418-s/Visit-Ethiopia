export default function About() {
  return (
    <section id="about" className="bg-[#fdfdf8] px-6 py-12 md:px-16 lg:px-24 min-h-[calc(100vh-3.5rem)] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Label and Headline Row */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Small Label on the far left */}
          <div className="md:col-span-1">
            <p className="text-xs font-medium tracking-wide text-gray-700 uppercase">
              MEET ETHIOPIA
            </p>
          </div>

          {/* Headline (takes 3 columns on larger screens) */}
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-4xl font-extrabold text-red-700 leading-snug">
              ETHIOPIA IS TRULY TIMELESS, A PLACE WHERE ANCIENT TRADITIONS FUSE
              WITH MODERN LIFE, AS IF IT WERE THE MOST NATURAL THING IN THE
              WORLD.
            </h2>
          </div>
        </div>

        {/* Two-Column Paragraphs */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 text-gray-700 text-base leading-relaxed">
          <p className="max-w-xs">
            Be inspired by authentic experiences, invigorating nature breaks and
            offbeat adventures doubling as refreshing escapes. Once you're tapped
            out exploring, relive the day's highlights in ancient rock churches or
            luxury lodges—sure to supercharge your well-being.
          </p>
          <p className="max-w-xs">
            Ethiopia intrigues with its kaleidoscope of sights and sounds. While
            wandering through the cradle of humanity, make the most out of your next 
            getaway and tick off as many once-in-a-lifetime experiences. Prepare to be
            enthralled, captivated and delighted all at once.
          </p>
        </div>
      </div>
    </section>
  );
}
