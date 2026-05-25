"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Play, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const games = [
  {
    title: "Emoji TicTacToe",
    desc: "A Flutter Flame emoji twist on the classic tic-tac-toe game.",
    img: "/assets/emoji_tic.jpg",
    liveLink: "https://emoji-tic-tac-toe-12.web.app/",
    aspect: "portrait"
  },
  {
    title: "Flappy Legends",
    desc: "A Flappy Bird-inspired game with football and character-themed gameplay.",
    img: "/assets/flappy.jpg",
    liveLink: "https://emoji-tic-tac-toe-12.web.app/",
    aspect: "portrait"
  },
  {
    title: "Dino Runner",
    desc: "A Flutter Flame take on the classic Chrome dinosaur runner.",
    img: "/assets/dino-runner.jpg",
    liveLink: "https://flappy--legends.web.app/",
    aspect: "portrait"
  },
  {
    title: "Rock Paper Scissors",
    desc: "A simple browser game built with HTML, CSS, and JavaScript.",
    img: "/assets/rock-paper-scissors.png",
    liveLink: "https://rock-paper-scissors-game-tau-three.vercel.app/",
    aspect: "wide"
  }
];

const apps = [
  {
    title: "Book-Hive",
    desc: "A Flutter ecommerce app concept for browsing and buying books.",
    thumbnail: "/assets/book1.jpg",
    screenshots: [
      "/assets/book1.jpg",
      "/assets/book2.jpg",
      "/assets/book3.jpg",
      "/assets/book4.jpg"
    ]
  },
  {
    title: "Anime-Wrld",
    desc: "A Flutter ecommerce UI for anime-inspired products and collections.",
    thumbnail: "/assets/anime1.jpg",
    screenshots: [
      "/assets/anime1.jpg",
      "/assets/anime2.jpg",
      "/assets/anime3.png",
      "/assets/anime5.png",
      "/assets/anime6.png"
    ]
  },
  {
    title: "Hairz-Style",
    desc: "An AI hairstyle visualisation platform focused on previewing new looks.",
    thumbnail: "/assets/hairz1.jpg",
    screenshots: [
      "/assets/hairz1.jpg",
      "/assets/hairz2.jpg",
      "/assets/hairz3.jpg",
      "/assets/hairz4.jpg"
    ]
  }
];

const mainWebsites = [
  {
    title: "HK Multipurpose Collection",
    desc: "An introductory business website built to present a client brand and services online.",
    img: "/assets/hk-mpc_thumbnail.png",
    liveLink: "https://hk-multipurpose.onrender.com/",
    gitLink: "https://github.com/lil-ameer1981/hk_multipurpose"
  },
  {
    title: "Gamerz-Zone",
    desc: "An ecommerce marketplace concept for gaming products, built by gamers for gamers.",
    img: "/assets/gamerz-zone_thumbnail.png",
    liveLink: "https://gamerz-zone.vercel.app/",
    gitLink: "https://github.com/lil-ameer1981/Gamerz-Zone"
  },
  {
    title: "Movie-Site",
    desc: "A movie discovery app for browsing highly rated movies and saving titles to a watchlist.",
    img: "/assets/Movie-site_thumbnail.png",
    liveLink: "https://movie-site-88kw.vercel.app/",
    gitLink: "https://github.com/lil-ameer1981/Movie-Site"
  }
];

const extraWebsites = [
  {
    title: "Weather Checker",
    desc: "A weather lookup site for quickly checking weather information by location.",
    img: "/assets/website-checker_thumbnail.png",
    liveLink: "https://weather-site-s11o.vercel.app/",
    gitLink: "https://github.com/lil-ameer1981/Weather-Site"
  },
  {
    title: "YouTube Clone",
    desc: "A UI-focused YouTube clone with custom video cards and preview pages.",
    img: "/assets/youtube_thumbnail.png",
    liveLink: "https://youtube-clone-navy-eta.vercel.app/",
    gitLink: "https://github.com/lil-ameer1981/Youtube-Clone"
  },
  {
    title: "Spotify Clone",
    desc: "A responsive Spotify-style landing interface built with HTML and CSS.",
    img: "/assets/spotify_thumbnail.png",
    liveLink: "https://spotify-clone-81.vercel.app/",
    gitLink: "https://github.com/lil-ameer1981/Spotify-Clone"
  }
];

type AppPreview = (typeof apps)[number];

const SectionTitle = ({

  title,
  desc
}: {
  
  title: string;
  desc: string;
}) => (
  <div className="w-full text-center md:text-left">
    <h3 className="mt-2 text-3xl md:text-4xl font-bold">{title}</h3>
    <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
      {desc}
    </p>
  </div>
);

const LiveButton = ({ href, label = "Play Live" }: { href: string; label?: string }) => (
  <Link href={href} target="_blank" className={href === "#" ? "pointer-events-none" : ""}>
    <Button className="gap-2" disabled={href === "#"}>
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </Button>
  </Link>
);

const ProjectsPage = () => {
  const [selectedApp, setSelectedApp] = useState<AppPreview | null>(null);

  return (
    <MaxWidthWrapper className="min-h-screen w-full flex flex-col justify-start items-center p-5 gap-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl lg:text-7xl font-bold text-center p-4 text-[#5148fc]"
      >
        Projects
      </motion.div>

      <section className="w-full space-y-8">
        <SectionTitle
          title="Games"
          desc="Playable browser games and one 3D gameplay showcase, built across Flutter Flame, HTML/CSS/JavaScript, and Godot."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {games.map((game, index) => (
            <motion.article
              key={game.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="bg-muted p-3">
                <div
                  className={`mx-auto overflow-hidden rounded-md bg-black ${
                    game.aspect === "portrait"
                      ? "aspect-[9/16] max-h-[360px] max-w-[220px]"
                      : "aspect-video w-full"
                  }`}
                >
                  <img
                    src={game.img}
                    alt={game.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <h4 className="text-xl font-bold">{game.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {game.desc}
                  </p>
                </div>
                <LiveButton href={game.liveLink} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-0">
            <div className="bg-black p-3 md:p-5">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl">
                <div className="absolute left-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  3D Gameplay
                </div>
                <video
                  className="aspect-video w-full object-cover"
                  src="/assets/gameplay.mp4"
                  poster="/assets/meteor_thumbnail.png"
                  controls
                  preload="metadata"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
              </div>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5148fc]">
                Gameplay Showcase
              </p>
              <h4 className="mt-3 text-2xl md:text-3xl font-bold">
                3D Space Shooter
              </h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A 3D meteor/space shooter game built in Godot Game Engine. Watch the Gameplay!.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#5148fc]">
                <Play className="h-4 w-4" />
                Watch gameplay
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full space-y-8">
        <SectionTitle
          title="Mobile Apps"
          desc="Flutter app interfaces presented through screenshots for now, with APK and code links coming soon!"
        />

        <div className="grid md:grid-cols-3 gap-5">
          {apps.map((app, index) => (
            <motion.article
              key={app.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="bg-muted p-4">
                <div className="mx-auto aspect-[9/19] max-h-[460px] max-w-[230px] overflow-hidden rounded-2xl border bg-black shadow-lg">
                  <img
                    src={app.thumbnail}
                    alt={app.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold">{app.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {app.desc}
                </p>
                <Button className="mt-5 w-full" onClick={() => setSelectedApp(app)}>
                  Preview Screens
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="w-full space-y-8">
        <SectionTitle
          title="Websites"
          desc="Hosted websites and UI experiments, grouped into main projects and extra clone/practice builds."
        />

        <div>
          <h4 className="text-2xl font-bold mb-5">Main Projects</h4>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {mainWebsites.map((site) => (
              <WebsiteCard key={site.title} {...site} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-5">Extras</h4>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {extraWebsites.map((site) => (
              <WebsiteCard key={site.title} {...site} />
            ))}
          </div>
        </div>
      </section>

      {selectedApp && (
        <div className="fixed inset-0 z-[80] bg-background/90 backdrop-blur-md p-4 overflow-y-auto">
          <div className="mx-auto max-w-5xl rounded-lg border bg-card shadow-xl">
            <div className="flex items-center justify-between border-b p-4">
              <div>
                <p className="text-sm font-semibold text-[#5148fc]">App preview</p>
                <h3 className="text-2xl font-bold">{selectedApp.title}</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedApp(null)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              {selectedApp.screenshots.map((screenshot) => (
                <div
                  key={screenshot}
                  className="mx-auto aspect-[9/19] w-full max-w-[230px] overflow-hidden rounded-2xl border bg-black shadow-md"
                >
                  <img
                    src={screenshot}
                    alt={`${selectedApp.title} screenshot`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

const WebsiteCard = ({
  title,
  desc,
  img,
  liveLink,
  gitLink
}: {
  title: string;
  desc: string;
  img: string;
  liveLink: string;
  gitLink: string;
}) => (
  <article className="rounded-lg border bg-card overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
    <div className="bg-muted p-3">
      <div className="aspect-video overflow-hidden rounded-md bg-black">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
    <div className="p-5">
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <LiveButton href={liveLink} label="Live Demo" />
        <Link href={gitLink} target="_blank" className={gitLink === "#" ? "pointer-events-none" : ""}>
          <Button variant="outline" className="gap-2" disabled={gitLink === "#"}>
            <Github className="h-4 w-4" />
            GitHub
          </Button>
        </Link>
      </div>
    </div>
  </article>
);

export default ProjectsPage;
