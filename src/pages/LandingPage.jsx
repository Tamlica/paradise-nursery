import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <div className="landing__overlay">
        <h1 className="landing__title">Paradise Nursery</h1>
        <p className="landing__blurb">
          Paradise Nursery brings thoughtfully grown houseplants straight to your door. From
          low-maintenance succulents to air-purifying greenery and fragrant herbs, every plant is
          nurtured with care so it arrives ready to thrive in your home. Explore our collection and
          bring a little more life into your space.
        </p>
        <button className="landing__cta" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  )
}
