import { useDispatch } from 'react-redux'
import { incrementQty, decrementQty, removeFromCart } from '../store/cartSlice'
import PlantIllustration from './PlantIllustration'
import './CartItem.css'

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const lineTotal = item.quantity * item.price

  return (
    <div className="cart-item">
      <div className="cart-item__thumb">
        <PlantIllustration category={item.category} hue={item.hue} />
      </div>
      <div className="cart-item__details">
        <h3>{item.name}</h3>
        <p className="cart-item__unit-price">${item.price.toFixed(2)} each</p>
      </div>
      <div className="cart-item__qty">
        <button
          onClick={() => dispatch(decrementQty(item.id))}
          disabled={item.quantity <= 1}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch(incrementQty(item.id))}
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>
      <p className="cart-item__line-total">${lineTotal.toFixed(2)}</p>
      <button
        className="cart-item__delete"
        onClick={() => dispatch(removeFromCart(item.id))}
        aria-label={`Remove ${item.name} from cart`}
      >
        Delete
      </button>
    </div>
  )
}
