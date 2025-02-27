import Image from "next/image";
import Link from "next/link";
import {
  FaFire,
  FaChessRook,
  FaGem,
  FaTrophy,
  FaDownload,
  FaGamepad,
  FaDiscord,
  FaTwitter,
  FaWindows,
  FaApple,
  FaSteam,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold game-title">ORNAP</h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#gameplay" className="nav-link">
            Gameplay
          </a>
          <a href="#screenshots" className="nav-link">
            Screenshots
          </a>
          <a href="#download" className="nav-link">
            Download
          </a>
        </nav>
        <div>
          <button className="btn-primary">Play Now</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] z-10"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold game-title mb-4">
            RUN. COLLECT. SURVIVE.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Escape the rising lava, collect powerful upgrades, and conquer
            challenging levels in this thrilling 2D adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              <FaDownload /> Download Now
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <FaGamepad /> Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 game-title">
            GAME FEATURES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card p-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(255,61,0,0.2)] flex items-center justify-center mb-4">
                <FaFire className="text-[var(--lava)] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rising Lava</h3>
              <p className="text-gray-300">
                Race against time as molten lava rises, creating intense
                pressure to move quickly.
              </p>
            </div>

            <div className="feature-card p-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(0,230,118,0.2)] flex items-center justify-center mb-4">
                <FaGem className="text-[var(--powerup)] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Power Ups</h3>
              <p className="text-gray-300">
                Collect unique power-ups that enhance your abilities and help
                you survive longer.
              </p>
            </div>

            <div className="feature-card p-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(255,215,0,0.2)] flex items-center justify-center mb-4">
                <FaChessRook className="text-[var(--chest)] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hidden Chests</h3>
              <p className="text-gray-300">
                Discover and unlock secret chests containing rare items and
                special abilities.
              </p>
            </div>

            <div className="feature-card p-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(255,193,7,0.2)] flex items-center justify-center mb-4">
                <FaTrophy className="text-[var(--accent)] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Challenging Levels</h3>
              <p className="text-gray-300">
                Progress through increasingly difficult levels with unique
                obstacles and puzzles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section
        id="gameplay"
        className="py-20 px-6 md:px-12 bg-[rgba(0,0,0,0.3)]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 game-title">
            GAMEPLAY
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-[var(--primary)]">
                <Image
                  src="/gameplay.jpg"
                  alt="Ornap Gameplay"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Master the Elements</h3>
              <p className="text-gray-300 mb-6">
                In Ornap, you'll navigate through treacherous terrain as lava
                rises from below. Quick thinking and precise movements are
                essential as you collect power-ups that grant special abilities
                like double jumps, speed boosts, and temporary lava immunity.
              </p>
              <p className="text-gray-300 mb-6">
                Each level presents unique challenges with moving platforms,
                falling obstacles, and hidden pathways. Discover secret chests
                containing rare items that can be combined to unlock powerful
                new abilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                  <h4 className="font-bold mb-2">30+ Levels</h4>
                  <p className="text-sm text-gray-400">
                    Each with unique challenges
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                  <h4 className="font-bold mb-2">15 Power-ups</h4>
                  <p className="text-sm text-gray-400">
                    Combine for special effects
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                  <h4 className="font-bold mb-2">5 Environments</h4>
                  <p className="text-sm text-gray-400">
                    From caves to volcanoes
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Boss Battles</h4>
                  <p className="text-sm text-gray-400">Epic encounters await</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 game-title">
            SCREENSHOTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="relative aspect-video rounded-lg overflow-hidden feature-card"
              >
                <Image
                  src={`/screenshot-${num}.jpg`}
                  alt={`Game Screenshot ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 md:px-12 lava-animation">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Play?
          </h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Download Ornap now and begin your adventure. Available on multiple
            platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="bg-white text-[var(--background)] py-4 px-8 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <FaWindows />
              <div className="text-left">
                <div className="text-sm">Download for</div>
                <div className="font-bold">Windows</div>
              </div>
            </a>

            <a
              href="#"
              className="bg-white text-[var(--background)] py-4 px-8 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <FaApple />
              <div className="text-left">
                <div className="text-sm">Download for</div>
                <div className="font-bold">macOS</div>
              </div>
            </a>

            <a
              href="#"
              className="bg-white text-[var(--background)] py-4 px-8 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <FaSteam />
              <div className="text-left">
                <div className="text-sm">Available on</div>
                <div className="font-bold">Steam</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 md:px-12 bg-[rgba(0,0,0,0.3)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter for updates, tips, and exclusive
            content.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus:border-[var(--primary)]"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-[rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <h1 className="text-2xl font-bold game-title">ORNAP</h1>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
              >
                <FaDiscord />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
              >
                <FaGamepad />
              </a>
            </div>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Ornap Game. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
