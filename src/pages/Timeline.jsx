import Reveal from '../components/Reveal'

const timelineEntries = [
  {
    year: '1762',
    location: 'Paris',
    title: 'Rousseau publishes <em>Emile, or On Education</em>',
    description:
      'Rousseau lifts childhood into a sacred space. He argues that children—untainted by bureaucratic expectations—carry a natural wisdom adults must relearn. He even opens a conversation about maternal care by urging mothers to breastfeed their own children.',
    pulse:
      'Romanticism begins by trusting feeling and instinct. Purity is associated with spontaneity, not discipline or hierarchy.',
  },
  {
    year: '1770',
    location: 'London',
    title: 'Thomas Chatterton: the myth of the doomed prodigy',
    description:
      'At seventeen, Chatterton ends his life after the adult world cannot see value in his gothic forgeries. Artists elevate him as a martyr for youthful genius, an early template for the Romantic hero who refuses to become commercially obedient.',
    pulse:
      'Suffering for authenticity becomes glamorous. The artist stands apart from a vulgar marketplace.',
  },
  {
    year: '1774',
    location: 'Leipzig',
    title: 'Goethe releases <em>The Sorrows of Young Werther</em>',
    description:
      'Werther breaks every practical rule in the name of love. Readers caught “Werther Fever,” dressing like the hero and embracing the idea that devotion to feeling—even fatal devotion—is noble.',
    pulse:
      'Romantic love becomes a rite of rebellion against rational marriage contracts and social class expectations.',
  },
  {
    year: '1798',
    location: 'Madrid',
    title: 'Goya dreams on copper: <em>The Sleep of Reason Produces Monsters</em>',
    description:
      'Goya’s etching shows reason literally asleep while fantastical creatures emerge. Rather than dismiss the irrational, the artwork dignifies the subconscious, nightmares, and even madness.',
    pulse:
      'Romantics make space for the uncanny. Imagination is not a flaw; it is a portal to truths logic cannot hold.',
  },
  {
    year: '1799',
    location: 'Lake District',
    title: 'Wordsworth at Dove Cottage',
    description:
      'William and Dorothy Wordsworth relocate to the Lake District. There, poetry about daffodils, clouds, and rustic life reshapes the English imagination and convinces urban dwellers that wilderness is holy.',
    pulse:
      'Landscape becomes therapy. Nature is cast as mentor, antidote, and collaborator.',
  },
  {
    year: '1829',
    location: 'Niagara Falls',
    title: 'Thomas Cole paints the American sublime',
    description:
      'Cole’s monumental canvases frame people as tiny inside overwhelming vistas. Even without a traditional deity, viewers encounter awe bordering on spiritual transcendence.',
    pulse:
      'The Romantic sublime delivers secular spirituality—powerful emotion without organized religion.',
  },
  {
    year: '1847',
    location: 'London',
    title: 'A neo-gothic Parliament by Augustus Pugin',
    description:
      'After a fire, Pugin redesigns Parliament to look medieval on purpose. The building celebrates a chivalric past over an industrial, profit-driven present.',
    pulse:
      'Looking backward becomes a political act. The Middle Ages feel more honourable than factories and stock exchanges.',
  },
  {
    year: '1863',
    location: 'Paris',
    title: 'Charles Baudelaire and the flâneur',
    description:
      'Baudelaire crowns the aimless city wanderer as a prince of perception. The flâneur watches rather than hustles, drifting through boulevards to savour fleeting impressions.',
    pulse:
      'Idleness transforms into a creative practice. Observation is valuable even without tangible output.',
  },
  {
    year: '1891',
    location: 'Le Havre → Tahiti',
    title: 'Paul Gauguin sails for the South Seas',
    description:
      'Convinced that “civilisation is what made us sick,” Gauguin abandons Paris to paint what he sees as unspoiled life in Tahiti. His work, complex and problematic, reinforces the Romantic hunger for the exotic “elsewhere.”',
    pulse:
      'Escaping modernity becomes a cure. The childlike, the distant, and the naive are prized over the urban and calculated.',
  },
]

const throughlines = [
  {
    heading: 'Nature over Industry',
    detail:
      'Whether in Grasmere or Niagara, Romantic artists lean on geography to critique industrial smoke. Nature is positioned as a moral compass and a space to repair the spirit.',
  },
  {
    heading: 'Feeling over Calculation',
    detail:
      'Werther’s heartbreak, Chatterton’s despair, and the flâneur’s leisure all reject the clock and the ledger. They invite us to measure life in intensity rather than productivity.',
  },
  {
    heading: 'Outsiders as Visionaries',
    detail:
      'From Rousseau’s idealised child to Gauguin’s self-imposed exile, Romanticism keeps trusting the perspective of those who do not fit the mainstream. That outsider gaze will matter for the Creature in <em>Frankenstein</em>.',
  },
]

const Timeline = () => {
  return (
    <>
      <Reveal as="section" className="section" variant="fade">
        <p className="section__badge">Timeline</p>
        <h1 className="section__heading">Romanticism as a wave of creative resistance</h1>
        <p className="section__description">
          Rather than one event, Romanticism is a constellation of artists deciding that feeling, instinct, and wild landscapes are legitimate guides for modern life. Follow the milestones from Rousseau’s educational manifesto to Gauguin’s South Pacific escape.
        </p>
      </Reveal>

      <section className="section">
        <div className="timeline">
          {timelineEntries.map((entry, index) => (
            <Reveal as="article" key={entry.year + entry.title} className="timeline__item glass-card" delay={index * 140}>
              <div className="timeline__meta">
                <span>{entry.year}</span>
                <span>{entry.location}</span>
              </div>
              <h3 className="timeline__title" dangerouslySetInnerHTML={{ __html: entry.title }} />
              <p className="card__body">{entry.description}</p>
              <p className="card__body" style={{ marginTop: '0.9rem', color: 'rgba(210, 220, 255, 0.7)' }}>
                <strong>Pulse:</strong> {entry.pulse}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="section">
        <p className="section__badge">Recurring Energy</p>
        <h2 className="section__heading">Threads to carry into the Frankenstein analysis</h2>
        <div className="grid-panels">
          {throughlines.map((item, index) => (
            <Reveal key={item.heading} className="panel" delay={index * 160}>
              <h3 className="panel__heading" dangerouslySetInnerHTML={{ __html: item.heading }} />
              <p dangerouslySetInnerHTML={{ __html: item.detail }} />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </>
  )
}

export default Timeline
