import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../store/cartSlice'
import './Header.css'

export default function Header() {
  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <header className="site-header">
      <div className="site-header__brand">🌿 Paradise Nursery</div>
      <nav className="site-header__nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="cart-icon" aria-label="Shopping cart">
            🛒
            <span className="cart-icon__badge">{totalQuantity}</span>
          </span>
          Cart
        </NavLink>
      </nav>
    </header>
  )
}
