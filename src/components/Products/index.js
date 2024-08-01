// Write your JS code here
import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-container">
      <div className="product-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
          alt="clothes that get you noticed"
          className="product-mobile-img"
        />
      </div>
    </div>
  </>
)
export default Products
