import Image from "next/image";
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Turmeric Powder",
    origin: "Jalgaon, India",
    desc: "Golden, earthy, and deeply aromatic. Essential in every Indian kitchen for both flavour and health. Our turmeric is stone-ground to preserve its natural oils and curcumin content.",
    image: "/turmeric.png",
    sizes: [
        {weight: "200g", price: "₹80"},
        {weight: "500g", price: "₹95"},
        {weight: "1Kg", price: "₹190"}
    ]
  },
  {
    id: 2,
    name: "Mirch Powder",
    origin: "Kolhapur, India",
    desc: "Bold, fiery, and vibrant red. Adds authentic heat and rich colour to every dish. Made from sun-dried red chillies, ground fresh to lock in maximum flavour and aroma.",
    image: "/mirch.png",
    sizes: [
        {weight: "200g", price: "₹90"},
        {weight: "500g", price: "₹135"},
        {weight: "1Kg", price: "₹270"}
    ]
  },
  {
    id: 3,
    name: "Coriander Powder",
    origin: "Jalgaon, India",
    desc: "Mild, citrusy, and wonderfully fragrant. The backbone of countless Indian gravies and curries. Slow-roasted before grinding for a deeper, more complex flavour.",
    image: "/coriander.png",
    sizes: [
        {weight: "200g", price: "₹70"},
        {weight: "500g", price: "₹80"},
        {weight: "1Kg", price: "₹155"}
    ]
  },
  {
    id: 4,
    name: "Cumin Seed",
    origin: "Rajasthan, India",
    desc: "Warm, nutty, and deeply aromatic. Perfect for tempering, breads, and spice blends. Hand-cleaned and carefully dried to preserve their essential oils and fragrance.",
    image: "/cumin.png",
    sizes: [
        {weight: "200g", price: "₹100"},
        {weight: "500g", price: "₹160"},
        {weight: "1Kg", price: "₹320"}
    ]
  },
  {
    id: 5,
    name: "Mustard Whole",
    origin: "Jalgaon, India",
    desc: "Sharp, pungent, and full of character. Crackling mustard seeds are the very foundation of South Indian cooking. Sorted by hand for consistent quality in every pack.",
    image: "/mustard.png",
    sizes: [
        {weight: "200g", price: "₹60"},
        {weight: "500g", price: "₹75"},
        {weight: "1Kg", price: "₹150"}
    ]
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [selectedSize, setSelectedSize] = useState(0)

  return (
    <div className="product-card">
      <div className="card-img-wrap">
        <Image src={product.image} alt={product.name} fill className="packet-img"/>
        <span className="card-badge">✓ 100% Pure</span>
      </div>
      <div className="card-body">
        <div className="card-origin">{product.origin}</div>
        <div className="card-name">{product.name}</div>
        <div className="card-desc">{product.desc}</div>
        <div className="size-selector">
          {product.sizes.map((size, index) => (
            <button
              key={size.weight}
              className={`size-btn ${selectedSize === index ? 'size-btn-active' : ''}`}
              onClick={() => setSelectedSize(index)}
            >
              {size.weight}
            </button>
          ))}
        </div>
        <div className="card-footer">
          <div>
            <div className="card-price">{product.sizes[selectedSize].price}</div>
            <div className="card-weight">{product.sizes[selectedSize].weight}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section className="products" id="masalas">
      <div className="section-header">
        <p className="section-tag">— Our Collection</p>
        <h2 className="section-title">Five <em>Essentials</em></h2>
        <div className="section-divider"></div>
      </div>
      <div className="products-grid-top">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="products-grid-bottom">
        {products.slice(3, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}