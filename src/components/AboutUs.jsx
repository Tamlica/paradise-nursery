import './AboutUs.css'

const stats = [
  { label: 'Years in business', value: '12+' },
  { label: 'Plants shipped', value: '50,000+' },
  { label: 'Happy customers', value: '18,000+' },
]

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__content">
        <h2>About Paradise Nursery</h2>
        <p>
          Founded in 2013 by a pair of lifelong plant enthusiasts, Paradise Nursery started as a
          single greenhouse with a simple goal: make it easy for anyone, anywhere, to bring a
          little more green into their life. Today we grow and hand-select every plant we sell,
          from easy-care succulents to air-purifying greenery and fragrant herbs.
        </p>
        <p>
          We believe healthy plants start with healthy practices. Our growers use
          peat-free, sustainably sourced soil, and every order is packed in recyclable materials
          so your new plant arrives safely and your conscience stays clear. Each plant also comes
          with a care guide tailored to its species, because we want it to thrive in your home for
          years to come, not just look good on delivery day.
        </p>
        <div className="about-us__stats">
          {stats.map((stat) => (
            <div className="about-us__stat" key={stat.label}>
              <span className="about-us__stat-value">{stat.value}</span>
              <span className="about-us__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
