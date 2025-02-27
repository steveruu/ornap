"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  FaFire,
  FaChessRook,
  FaGem,
  FaTrophy,
  FaGamepad,
  FaDiscord,
  FaTwitter,
  FaWindows,
  FaApple,
  FaSteam,
} from "react-icons/fa";
import { ImDownload } from "react-icons/im";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const gameplayRef = useRef(null);
  const screenshotsRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
      .fromTo(
        ".shape",
        { opacity: 0, scale: 0.8 },
        { opacity: 0.1, scale: 1, duration: 1.5, stagger: 0.2 }
      )
      .fromTo(
        ".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=1"
      )
      .fromTo(
        ".hero-buttons",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      );

    // Features section animation
    gsap.fromTo(
      ".feature-card",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );

    // Gameplay section animation
    const gameplayTl = gsap.timeline({
      scrollTrigger: {
        trigger: gameplayRef.current,
        start: "top 70%",
      },
    });

    gameplayTl
      .fromTo(
        ".gameplay-image",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        ".gameplay-content",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".gameplay-stat",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
        "-=0.5"
      );

    // Screenshots section animation
    gsap.fromTo(
      ".screenshot-item",
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: screenshotsRef.current,
          start: "top 50%",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background/95 to-background">
      {/* Navigation - Updated */}
      <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50 glass-effect">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold game-title">ORNAP</h1>
        </div>
        <nav className="hidden md:flex gap-8">
          {["Funkce", "Hratelnost", "Snímky", "Stáhnout"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div>
          <button className="btn-primary flex items-center gap-2">
            <FaGamepad className="text-lg" />
            <span>Hrát Nyní</span>
          </button>
        </div>
      </header>

      {/* Hero Section - Enhanced */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center"
      >
        {/* Geometric Background Shapes */}
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape-ring"></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto hero-content">
          <div className="mt-14  p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50"></div>

            <div className="relative z-8">
              <div className="inline-block mb-6 px-6 py-2 rounded-full glass-effect">
                <span className="text-md font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-white">
                  🎮 Vítejte v herním zážitku nové generace
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold game-title mb-6 leading-tight glow-text">
                RUN. COLLECT.
                <br />
                SURVIVE.
              </h1>

              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed">
                Unikněte stoupající lávě, sbírejte silná vylepšení a dobyjte
                náročné úrovně v tomto vzrušujícím 2D dobrodružství.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
                <button className="btn-primary flex items-center justify-center gap-2 group">
                  <ImDownload className="text-lg group-hover:scale-110 transition-transform" />
                  <span>Stáhnout nyní</span>
                </button>
                <button className="btn-secondary flex items-center justify-center gap-2 group glass-effect">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent group-hover:animate-pulse" />
                  <span>Přehrát ukázku</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section - Enhanced */}
      <section
        ref={featuresRef}
        id="features"
        className="py-32 px-6 md:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold game-title mb-6 uppercase">
              Herní funkce
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto uppercase">
              Objevte, co dělá Ornap nezapomenutelným herním zážitkem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaFire,
                title: "Stoupající láva",
                description:
                  "Závoďte s časem, jak stoupá žhavá láva, vytvářející intenzivní tlak na rychlý pohyb.",
                color: "var(--lava)",
                iconColor: "text-[var(--lava)]",
              },
              {
                icon: FaGem,
                title: "Vylepšení",
                description:
                  "Sbírejte unikátní vylepšení, která zlepší vaše schopnosti a pomohou vám déle přežít.",
                color: "var(--powerup)",
                iconColor: "text-[var(--powerup)]",
              },
              {
                icon: FaChessRook,
                title: "Skryté truhly",
                description:
                  "Objevujte a odemykejte tajné truhly obsahující vzácné předměty a speciální schopnosti.",
                color: "var(--chest)",
                iconColor: "text-[var(--chest)]",
              },
              {
                icon: FaTrophy,
                title: "Náročné úrovně",
                description:
                  "Postupujte stále obtížnějšími úrovněmi s jedinečnými překážkami a hádankami.",
                color: "var(--accent)",
                iconColor: "text-[var(--accent)]",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card p-8 group">
                <feature.icon
                  className={`${feature.iconColor} text-2xl mb-6`}
                />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section
        ref={gameplayRef}
        id="gameplay"
        className="py-20 px-6 md:px-12 bg-[rgba(0,0,0,0.3)]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 game-title">
            HRATELNOST
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 gameplay-image">
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

            <div className="lg:w-1/2 gameplay-content">
              <h3 className="text-2xl font-bold mb-4">Ovládněte živly</h3>
              <p className="text-gray-300 mb-6">
                V Ornapu se pohybujete nebezpečným terénem se stoupající lávou,
                sbíráte vylepšení pro speciální schopnosti a objevujete tajné
                truhly s předměty, které lze kombinovat k odemčení nových
                mocných schopností.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="gameplay-stat bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                  <h4 className="font-bold mb-2">30+ úrovní</h4>
                  <p className="text-sm text-gray-400">
                    Každá s jedinečnými výzvami
                  </p>
                </div>
                <div className="gameplay-stat bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                  <h4 className="font-bold mb-2">15 vylepšení</h4>
                  <p className="text-sm text-gray-400">
                    Kombinujte pro speciální efekty
                  </p>
                </div>
                <div className="gameplay-stat bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                  <h4 className="font-bold mb-2">5 prostředí</h4>
                  <p className="text-sm text-gray-400">Od jeskyní po sopky</p>
                </div>
                <div className="gameplay-stat bg-[rgba(255,255,255,0.05)] p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Souboje s Bossy</h4>
                  <p className="text-sm text-gray-400">
                    Čekají na vás epické střety
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section
        ref={screenshotsRef}
        id="screenshots"
        className="py-20 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 game-title">
            SNÍMKY OBRAZOVKY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="screenshot-item relative aspect-video rounded-lg overflow-hidden feature-card"
              >
                <Image
                  src={`/screenshot-${num}.jpg`}
                  alt={`Snímek ze hry ${num}`}
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
            Připraveni Hrát?
          </h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Stáhněte si Ornap nyní a začněte své dobrodružství. Dostupné na více
            platformách.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="bg-white text-[var(--background)] py-4 px-8 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <FaWindows className="text-xl" />
              <div className="text-left">
                <div className="text-sm">Stáhnout pro</div>
                <div className="font-bold">Windows</div>
              </div>
            </a>

            <a
              href="#"
              className="bg-white text-[var(--background)] py-4 px-8 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <FaApple className="text-xl" />
              <div className="text-left">
                <div className="text-sm">Stáhnout pro</div>
                <div className="font-bold">macOS</div>
              </div>
            </a>

            <a
              href="#"
              className="bg-white text-[var(--background)] py-4 px-8 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <FaSteam className="text-xl" />
              <div className="text-left">
                <div className="text-sm">Dostupné na</div>
                <div className="font-bold">Steam</div>
              </div>
            </a>
          </div>
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
              © 2025 HATS Software. Všechna práva vyhrazena.
            </p>
            <div className="flex gap-6">
              <a
                href="https://4hats.vercel.app"
                className="text-sm text-gray-400 hover:text-white"
              >
                HATS Software
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
