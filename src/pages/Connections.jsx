import Reveal from '../components/Reveal'

const quoteConnections = [
  {
    theme: 'Nature as a restorative sanctuary',
    quote:
      '“These sublime and magnificent scenes afforded me the greatest consolation that I was capable of receiving.”',
    citation: 'Victor in the Alps, Volume I, Chapter 9',
    analysis:
      'Wordsworth’s Lake District retreat echoes here. Victor flees industrial laboratories for glaciers, hoping—like a Romantic pilgrim—that untamed nature will realign his spirit after William’s death. The novel rewards that pilgrimage with temporary calm, confirming the movement’s belief that wild landscapes heal moral injury.',
    bridge:
      'Pairs with Wordsworth at Dove Cottage (1799) and Thomas Cole’s sublime panoramas (1829).',
  },
  {
    theme: 'The outsider’s eloquence',
    quote: '“I ought to be thy Adam, but I am rather the fallen angel.”',
    citation: 'The Creature confronting Victor, Volume II, Chapter 2',
    analysis:
      'Like Chatterton and Werther, the Creature narrates his sensitivity as a wound. Shelley grants him lyrical diction to indict a utilitarian society that values productivity over empathy. The line reframes the “monster” as the Romantic hero—ostracised yet morally perceptive.',
    bridge:
      'Resonates with Rousseau’s idealised child (1762) and the cult of the tragic artist after Chatterton (1770).',
  },
  {
    theme: 'Ardent exploration and the flâneur’s gaze',
    quote:
      '“I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and tread a land never before imprinted by the foot of man.”',
    citation: 'Robert Walton, Letter I',
    analysis:
      'Walton’s quest mirrors Baudelaire’s flâneur and Gauguin’s flight from Europe. He seeks authenticity by leaving the map, measuring success by wonder rather than commerce. The Arctic expedition frames the entire novel inside a Romantic travelogue.',
    bridge:
      'Connects to Baudelaire’s celebration of aimless wandering (1863) and Gauguin’s South Seas escape (1891).',
  },
]

const craftMoves = [
  {
    heading: 'Layered narration as Romantic immersion',
    detail:
      'Shelley structures the novel like a set of nested journals. Walton, Victor, and the Creature each deliver confessional, emotionally charged testimonies—mirroring Romantic poetry’s interior voice and inviting us to weigh feeling as evidence.',
  },
  {
    heading: 'Science framed as moral, not technical',
    detail:
      'The text rarely details laboratory procedures. Instead, Shelley zooms in on the ethics of ambition, echoing Romantic skepticism toward unchecked industrial progress while never fully rejecting innovation.',
  },
  {
    heading: 'Gothic aesthetics with Romantic purpose',
    detail:
      'Storms, moonlit vistas, and ruined castles provide atmospheric spectacle, but they also embody the mood swings of the characters. Goya’s nightmare etching feels like its visual cousin—reason dozing while imagination floods the room.',
  },
]

const Connections = () => {
  return (
    <>
      <Reveal as="section" className="section" variant="fade">
        <p className="section__badge">Analytical Bridge</p>
        <h1 className="section__heading">Where Romantic ideals ignite <em>Frankenstein</em></h1>
        <p className="section__description">
          The novel reads like a conversation with every milestone on the Romantic timeline. These curated pairings highlight how Shelley absorbs the movement’s priorities and retools them to question responsibility, innovation, and belonging.
        </p>
      </Reveal>

      <section className="section">
        <div className="grid-panels">
          {quoteConnections.map((entry, index) => (
            <Reveal as="article" key={entry.theme} className="quote-card" delay={index * 160}>
              <p className="section__badge" style={{ letterSpacing: '0.28em', marginBottom: '1rem' }}>
                {entry.theme}
              </p>
              <blockquote>{entry.quote}</blockquote>
              <cite>{entry.citation}</cite>
              <p style={{ marginTop: '1.4rem' }}>{entry.analysis}</p>
              <p style={{ marginTop: '1rem', color: 'rgba(210, 220, 255, 0.7)' }}>
                <strong>Timeline Echo:</strong> {entry.bridge}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="section">
        <p className="section__badge">Authorial Moves</p>
        <h2 className="section__heading">Mary Shelley’s craft choices through a Romantic lens</h2>
        <div className="grid-panels">
          {craftMoves.map((move, index) => (
            <Reveal key={move.heading} className="panel" delay={index * 160}>
              <h3 className="panel__heading">{move.heading}</h3>
              <p>{move.detail}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section" variant="fade">
        <p className="section__badge">Synthesis</p>
        <h2 className="section__heading">Working thesis for the Learner Portfolio</h2>
        <Reveal className="glass-card" delay={80}>
          <p>
            Romanticism teaches that feeling, wild landscapes, and the outsider’s imagination can rescue humanity from soulless progress. <em>Frankenstein</em> stages that lesson by letting Victor chase innovation without emotional accountability, while the Creature—Romanticism’s eloquent outsider—demands compassion. The novel ultimately proposes that scientific ambition must stay in dialogue with Romantic empathy.
          </p>
        </Reveal>
      </Reveal>
    </>
  )
}

export default Connections
