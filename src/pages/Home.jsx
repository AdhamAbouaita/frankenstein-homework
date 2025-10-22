import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const highlightCards = [
  {
    meta: 'Romantic Ideal',
    title: 'Emotion over Mechanization',
    body: 'Romantic thinkers answered the noise of factories with a new trust in feeling. Their art insists that intuition and awe are just as vital as reason when we decide what matters.',
  },
  {
    meta: 'Sense of Place',
    title: 'Nature as Sanctuary',
    body: 'From Wordsworth’s daffodils to Cole’s Niagara Falls, the movement presents landscapes as sacred spaces. Nature becomes the cathedral where modern people rediscover meaning.',
  },
  {
    meta: 'Voice of the Outsider',
    title: 'The Sensitive Rebel',
    body: 'Chatterton, Werther, and later Shelley herself amplify the heroic figure who refuses to flatten their feelings to fit a “sensible” society, even when the cost is alienation.',
  },
]

const assignments = [
  {
    title: 'Map the Cultural Shockwave',
    description:
      'Track how Rousseau, Goya, Cole, and Baudelaire helped Romanticism challenge industrial values. You will use this on the timeline page to anchor the historical narrative.',
  },
  {
    title: 'Connect Romantic DNA to Frankenstein',
    description:
      'Identify where Mary Shelley’s choices echo Romantic priorities—especially scenes that elevate untamed nature, heroic feeling, or the outsider’s voice.',
  },
  {
    title: 'Curate a Reflective Response',
    description:
      'Synthesize the research into a polished, portfolio-ready reflection that captures your personal understanding of why Romanticism matters to the novel.',
  },
]

const insightColumns = [
  {
    heading: 'Romanticism in One Breath',
    text: 'A counter-movement to the industrial age that insists life is more than output. It listens to waterfalls, champions misunderstood geniuses, and believes childhood wonder can heal a bruised world.',
  },
  {
    heading: 'Frankenstein Through This Lens',
    text: 'Shelley lets nature critique technology, centers emotional responsibility, and gives her “monster” the eloquence of every Romantic outsider—making the novel a case study in Romantic ethics.',
  },
  {
    heading: 'Why This Portfolio Matters',
    text: 'Documenting these links sharpens how we read both the 19th century and today. It turns a class assignment into a nuanced, visual story ready for a modern showcase like Vercel.',
  },
]

const Home = () => {
  return (
    <>
      <Reveal as="section" className="hero" variant="fade">
        <Reveal className="hero__meta" delay={80}>
          <p className="section__badge">Learner Portfolio &middot; Romanticism</p>
          <h1 className="hero__headline">Romanticism, Reimagined for Mary Shelley’s <em>Frankenstein</em></h1>
          <p className="hero__intro">
            A curated, multi-page studio experience that translates the Romantic movement’s radical energy into a digital portfolio. Dive into the history, surface the thematic threads, and watch them pulse through Shelley’s novel.
          </p>
          <div className="hero__cta">
            <Link className="button primary" to="/timeline">
              Explore the Movement
            </Link>
            <Link className="button secondary" to="/connections">
              Bridge to Frankenstein
            </Link>
          </div>
        </Reveal>
        <Reveal className="glass-card" variant="slide-right" delay={160}>
          <p className="card__meta">Signature Studio Outline</p>
          <h2 className="card__title">Three-page journey, one coherent story</h2>
          <p className="card__body">
            Inside you’ll find a living timeline, textual analysis, and a creative reflection. Each page is intentionally designed to feel like an Apple product reveal—sleek gradients, cinematic typography, and scroll-worthy pacing.
          </p>
        </Reveal>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="section__badge">Core Romantic Motifs</p>
        <h2 className="section__heading">Ideas that powered the movement &mdash; and fuel this portfolio</h2>
        <p className="section__description">
          The video reframes Romanticism as the pulse beneath modern creative life. These cards distill that pulse into focal points that will keep echoing as you move through the site.
        </p>
        <div className="card-grid">
          {highlightCards.map((card, index) => (
            <Reveal as="article" key={card.title} className="glass-card" delay={index * 160}>
              <p className="card__meta">{card.meta}</p>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__body">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="section__badge">Assignment Focus</p>
        <h2 className="section__heading">What this web application delivers for the Learner Portfolio</h2>
        <div className="card-grid">
          {assignments.map((step, index) => (
            <Reveal as="article" key={step.title} className="glass-card" delay={index * 140}>
              <h3 className="card__title">{step.title}</h3>
              <p className="card__body">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="section__badge">Orientation</p>
        <h2 className="section__heading">How to move through the experience</h2>
        <p className="section__description">
          Start with the timeline to absorb the movement’s origin story, then shift into textual connections before closing with the creative reflection. Each page adds another layer to your argument.
        </p>
        <div className="grid-panels">
          {insightColumns.map((column, index) => (
            <Reveal key={column.heading} className="panel" delay={index * 160}>
              <h3 className="panel__heading">{column.heading}</h3>
              <p>{column.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </>
  )
}

export default Home
