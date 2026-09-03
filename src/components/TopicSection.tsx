type TopicSectionProps = {
  id: string;
  heading: string;
  intro: string;
  badge: string;
  cardTitle: string;
  body: string;
  items: string[];
};

export function TopicSection({ id, heading, intro, badge, cardTitle, body, items }: TopicSectionProps) {
  return (
    <section className='section' id={id}>
      <h2>{heading}</h2>
      <p className='section-intro'>{intro}</p>
      <div className='topic-card'>
        <div className='topic-card__badge'>{badge}</div>
        <h3 className='topic-card__title'>{cardTitle}</h3>
        <p className='topic-card__body'>{body}</p>
        <ul className='topic-card__list'>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
