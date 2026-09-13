import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import CartItem from '../components/CartItem'
import { selectCartItems, selectTotalQuantity, selectTotalCost } from '../store/cartSlice'
import './CartPage.css'

export default function CartPage() {
  const navigate = useNavigate()
  const items = useSelector(selectCartItems)
  const totalQuantity = useSelector(selectTotalQuantity)
  const totalCost = useSelector(selectTotalCost)
  const [showComingSoon, setShowComingSoon] = useState(false)

  return (
    <div className="cart-page">
      <Header />
      <main className="cart-page__content">
        <h1>Your Cart</h1>

        {items.length === 0 ? (
          <p className="cart-page__empty">Your cart is empty.</p>
        ) : (
          <div className="cart-page__list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="cart-page__summary">
          <p>
            Total Items: <strong>{totalQuantity}</strong>
          </p>
          <p>
            Total Cost: <strong>${totalCost.toFixed(2)}</strong>
          </p>
        </div>

        {showComingSoon && (
          <p className="cart-page__coming-soon">Checkout is coming soon!</p>
        )}

        <div className="cart-page__actions">
          <button className="cart-page__continue" onClick={() => navigate('/products')}>
            Continue Shopping
          </button>
          <button
            className="cart-page__checkout"
            disabled={items.length === 0}
            onClick={() => setShowComingSoon(true)}
          >
            Checkout
          </button>
        </div>
      </main>
    </div>
  )
}
