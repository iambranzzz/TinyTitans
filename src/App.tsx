import { type ReactNode, useMemo, useState } from "react"
import ModalDrawer from "./components/ModalDrawer"
import PlanetDetail from "./components/PlanetDetail"
import PlanetExplorer from "./components/PlanetExplorer"
import SectionShell from "./components/SectionShell"
import StickyNav, { type NavSection } from "./components/StickyNav"
import TrailerHero from "./components/TrailerHero"
import { loadBundledContent, type Creature, type Planet } from "./data"
import PrototypeOverlay from "./game/PrototypeOverlay"
import { scrollToSection } from "./lib/scroll"
import CreaturesSection, { CreatureDetail } from "./sections/CreaturesSection"
import CommunityVoteSection from "./sections/CommunityVoteSection"
import GalacticGuideSection from "./sections/GalacticGuideSection"
import MountsSection, { MountDetail } from "./sections/MountsSection"
import PrototypeSection from "./sections/PrototypeSection"
import WeaponsSection from "./sections/WeaponsSection"

export default function App() {
  const sections = useMemo<NavSection[]>(
    () => [
      { id: "trailer", label: "Trailer" },
      { id: "prototype", label: "Prototype" },
      { id: "planets", label: "Planets" },
      { id: "weapons", label: "Weapons" },
      { id: "mounts", label: "Mounts" },
      { id: "creatures", label: "Creatures" },
      { id: "vote", label: "Vote" },
      { id: "guide", label: "Galactic Guide" },
    ],
    [],
  )

  const contentResult = useMemo(() => loadBundledContent(), [])
  const planets = contentResult.ok ? contentResult.content.planets : []
  const creatures = contentResult.ok ? contentResult.content.creatures : []
  const weapons = contentResult.ok ? contentResult.content.weapons : []
  const mounts = contentResult.ok ? contentResult.content.mounts : []

  const [detail, setDetail] = useState<{
    open: boolean
    title: string
    body: ReactNode
  }>({
    open: false,
    title: "Detail",
    body: null,
  })

  const openDetail = (title: string, body: ReactNode) => {
    setDetail({ open: true, title, body })
  }

  const closeDetail = () => {
    setDetail((prev) => ({ ...prev, open: false }))
  }

  const [prototypeOpen, setPrototypeOpen] = useState(false)

  const openPrimitive = () => {
    openDetail(
      "Shared Modal/Drawer Primitive",
      <div className="space-y-4">
        <div className="text-sm leading-relaxed text-white/70">
          This primitive is shared across the reveal experience: planet details, mount showcase,
          creature field notes, and more.
        </div>
        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <div className="text-sm font-semibold text-white">Keyboard + behavior</div>
          <ul className="mt-2 space-y-1 text-sm text-white/65">
            <li>Escape closes</li>
            <li>Clicking the backdrop closes</li>
            <li>Tab stays inside the panel</li>
            <li>Body scroll locks while open</li>
          </ul>
        </div>
      </div>,
    )
  }

  const creatureById = useMemo(() => new Map(creatures.map((c) => [c.id, c] as const)), [creatures])

  const openPlanet = (planet: Planet) => {
    const nativeCreatures: Creature[] = planet.nativeCreatureIds
      .map((id) => creatureById.get(id))
      .filter((c): c is Creature => Boolean(c))

    openDetail(planet.name, <PlanetDetail planet={planet} creatures={nativeCreatures} />)
  }

  const handleSelectPlanet = (planetId: string) => {
    const planet = planets.find((p) => p.id === planetId)
    if (!planet) return
    openPlanet(planet)
  }

  return (
    <div className="grain">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute -inset-[20%] bg-aurora opacity-70 blur-3xl motion-safe:animate-aurora" />
        <div className="absolute inset-0 bg-particles opacity-30 [background-size:240px_240px] motion-safe:animate-particles" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/10 via-ink-950/35 to-ink-950" />
      </div>
      <div id="top" className="section-anchor" />
      <StickyNav brand="Tiny Titan" sections={sections} />

      <main>
        <TrailerHero onExploreUniverse={() => scrollToSection("planets")} />

        <SectionShell
          id="prototype"
          kicker="Playable Prototype"
          title="Play Prototype"
          subtitle="A full-screen Three.js scaffold integrated into the reveal site. Launch it, confirm it mounts cleanly, then exit back to the page."
        >
          <PrototypeSection onPlay={() => setPrototypeOpen(true)} />
        </SectionShell>

        <SectionShell
          id="planets"
          kicker="Planet Explorer"
          title="Planets"
          subtitle="Three worlds, each with a survival brief and a creature roster. Tap any card to open its field dossier."
        >
          {!contentResult.ok ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glow backdrop-blur-xl">
              <div className="text-sm font-semibold text-white">Planet data unavailable</div>
              <div className="mt-2 text-sm text-white/65">
                The bundled JSON content failed validation. Fix the issues below to re-enable the
                Planet Explorer.
              </div>
              <ul className="mt-4 space-y-1 text-sm text-white/60">
                {contentResult.issues.slice(0, 8).map((issue) => (
                  <li key={`${issue.path}:${issue.message}`}>
                    {issue.path}: {issue.message}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <PlanetExplorer planets={planets} onSelect={handleSelectPlanet} />
          )}
        </SectionShell>

        <SectionShell
          id="weapons"
          kicker="Gadgets & Weapons"
          title="The Armory Bay"
          subtitle="Hover for quick specs, tap to lock a card open and read the full description."
        >
          <WeaponsSection weapons={weapons} />
        </SectionShell>

        <SectionShell
          id="mounts"
          kicker="Alien Mounts"
          title="Mount Showcase"
          subtitle="Stage a mount, compare traversal styles, then open an expanded view for capabilities and travel fantasy."
        >
          <MountsSection
            mounts={mounts}
            onOpenMount={(mount) => openDetail(mount.name, <MountDetail mount={mount} />)}
          />
        </SectionShell>

        <SectionShell
          id="creatures"
          kicker="Creature Encyclopedia"
          title="Creature Encyclopedia"
          subtitle="Scan each creature dossier, expand for a quick field panel, then open the full readout for survival-grade notes."
        >
          <CreaturesSection
            creatures={creatures}
            planets={planets}
            onOpenCreature={(creature) =>
              openDetail(creature.name, <CreatureDetail creature={creature} planets={planets} />)
            }
          />
        </SectionShell>

        <SectionShell
          id="vote"
          kicker="Community"
          title="Community Planet Vote"
          subtitle="Choose which planet gets the next deep-dive reveal. Your vote persists locally and results update instantly."
        >
          <CommunityVoteSection planets={planets} />
        </SectionShell>

        <SectionShell
          id="guide"
          kicker="AI Galactic Guide"
          title="Ask about Tiny Titan"
          subtitle="A lore-grounded Q&A console. Every answer cites the field dossier entries it used."
        >
          <GalacticGuideSection />
        </SectionShell>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto w-full max-w-6xl px-5 text-sm text-white/55 sm:px-8">
            Tiny Titan — reveal site
          </div>
        </footer>
      </main>

      <ModalDrawer open={detail.open} onClose={closeDetail} title={detail.title}>
        {detail.body}
      </ModalDrawer>

      <PrototypeOverlay open={prototypeOpen} onClose={() => setPrototypeOpen(false)} />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] bg-cover bg-center opacity-60 mix-blend-lighten"
        style={{ backgroundImage: "url(/texture.png)" }}
      />
    </div>
  )
}
