import Reveal from '../components/Reveal'

const insightMoments = [
  'Victor’s alpine retreat mirrors my own need to unplug and process grief in nature.',
  'The Creature’s literacy journey spotlights education as an emotional right, not a privilege.',
  'Walton’s letters frame the novel as a travelogue, so I designed this site as a navigation-based journey.',
  'Romanticism is not anti-science—it demands that discovery stays braided with empathy.',
]

const creativeSteps = [
  {
    title: 'Moodboarding the interface',
    description:
      'Collected stills from Apple product launches, misty alpine photography, and scans of Goya’s etchings. This palette guided the gradients, glassmorphism, and typography system used across the site.',
  },
  {
    title: 'Storyboarding the pages',
    description:
      'Sketched a three-act flow: historical immersion, textual alignment, reflective synthesis. Each page functions like a chapter, so the navigation cues feel cinematic rather than academic.',
  },
  {
    title: 'Writing in layers',
    description:
      'Drafted raw notes from the Romanticism timeline, then translated them into concise UI copy. The final text balances accessibility with scholarly precision for a portfolio audience.',
  },
]

const Reflection = () => {
  return (
    <>
      <Reveal as="section" className="section" variant="fade">
        <p className="section__badge">Creative Portfolio</p>
        <h1 className="section__heading">Reflection &amp; application of Romantic insight</h1>
        <p className="section__description">
          This page captures the “process journal” side of the assignment—an explicit reflection on how the Romanticism research reshapes my reading of <em>Frankenstein</em> and how that understanding guided the design of this digital artefact.
        </p>
      </Reveal>

      <Reveal as="section" className="section">
        <Reveal className="reflection-callout" delay={80}>
          <h3>Artist Statement</h3>
          <p>
            Building this site felt like walking Walton’s deck at midnight: cold air, endless horizon, and a stubborn desire to see what lies past the map. Romanticism insists that curiosity must stay tethered to compassion. Translating that ethos into UI decisions—soft gradients, generous breathing room, and emotionally resonant language—turns the assignment into an immersive story rather than a worksheet.
          </p>
          <p>
            The portfolio format mirrors Shelley’s nested narratives. Each route on the site is a “letter” to the reader, layering history, analysis, and reflection so the argument unfolds with momentum.
          </p>
        </Reveal>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="section__badge">Process Snapshots</p>
        <h2 className="section__heading">Design moves inspired by Romantic logic</h2>
        <div className="card-grid">
          {creativeSteps.map((step, index) => (
            <Reveal as="article" key={step.title} className="glass-card" delay={index * 140}>
              <h3 className="card__title">{step.title}</h3>
              <p className="card__body">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="section__badge">Personal Takeaways</p>
        <h2 className="section__heading">Insights I am carrying forward</h2>
        <Reveal className="panel" delay={100}>
          <p>
            In crafting this response, I realised that Romanticism is less about rejecting technology and more about calibrating it with empathy. Victor’s tragedy stems from emotional negligence, not the spark of innovation itself. That nuance gives me a framework for evaluating modern breakthroughs—from AI to biotech—through a Romantic lens.
          </p>
          <div className="badge-row">
            {insightMoments.map((moment) => (
              <span key={moment} className="badge">
                {moment}
              </span>
            ))}
          </div>
        </Reveal>
      </Reveal>
    </>
  )
}

export default Reflection
