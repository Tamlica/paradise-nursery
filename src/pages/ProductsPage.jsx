import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, plants } from '../data/plants'
import './ProductsPage.css'

export default function ProductsPage() {
  return (
    <div className="products-page">
      <Header />
      <main className="products-page__content">
        {CATEGORIES.map((category) => (
          <section key={category} className="products-page__category">
            <h2>{category}</h2>
            <div className="products-page__grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <ProductCard key={plant.id} plant={plant} />
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
