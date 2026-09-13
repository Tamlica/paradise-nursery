import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectIsInCart } from '../store/cartSlice'
import PlantIllustration from './PlantIllustration'
import './ProductCard.css'

export default function ProductCard({ plant }) {
  const dispatch = useDispatch()
  const isInCart = useSelector(selectIsInCart(plant.id))

  return (
    <div className="product-card">
      <div className="product-card__thumb">
        <PlantIllustration category={plant.category} hue={plant.hue} />
      </div>
      <h3 className="product-card__name">{plant.name}</h3>
      <p className="product-card__price">${plant.price.toFixed(2)}</p>
      <button
        className="product-card__button"
        disabled={isInCart}
        onClick={() => dispatch(addToCart(plant))}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}
