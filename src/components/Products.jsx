import React from 'react';
import { Link } from 'react-router-dom';

const productList = [
  {
    id: 'galvanized-steel',
    title: 'Galvanized Steel',
    desc: 'Strong rust-resistant sleek panels for durable reliable long-lasting roofs',
    price: '$22.50 - $28.50',
    image: '/images/699eaf2c0b305f35776a20bd_Product-6.webp',
    srcset: '/images/699eaf2c0b305f35776a20bd_Product-6-p-500.webp 500w, /images/699eaf2c0b305f35776a20bd_Product-6-p-800.webp 800w, /images/699eaf2c0b305f35776a20bd_Product-6-p-1080.webp 1080w, /images/699eaf2c0b305f35776a20bd_Product-6.webp 1320w'
  },
  {
    id: 'zinc-alloy-panels',
    title: 'Zinc Alloy Panels',
    desc: 'Durable stylish modern panels for contemporary homes elegant finish',
    price: '$25.00 - $31.00',
    image: '/images/699eaed756b8747f9c7a4abd_Product-5.webp',
    srcset: '/images/699eaed756b8747f9c7a4abd_Product-5-p-500.webp 500w, /images/699eaed756b8747f9c7a4abd_Product-5-p-800.webp 800w, /images/699eaed756b8747f9c7a4abd_Product-5-p-1080.webp 1080w, /images/699eaed756b8747f9c7a4abd_Product-5.webp 1320w'
  },
  {
    id: 'asphalt-shingles',
    title: 'Asphalt Shingles',
    desc: 'Affordable colorful weatherproof shingles for everyday roofs easy installation',
    price: '$18.89 - $24.89',
    image: '/images/699eae80546d68173ba38192_Product-4.webp',
    srcset: '/images/699eae80546d68173ba38192_Product-4-p-500.webp 500w, /images/699eae80546d68173ba38192_Product-4-p-800.webp 800w, /images/699eae80546d68173ba38192_Product-4-p-1080.webp 1080w, /images/699eae80546d68173ba38192_Product-4.webp 1320w'
  },
  {
    id: 'polycarbonate-sheets',
    title: 'Polycarbonate Sheets',
    desc: 'Lightweight translucent panels for bright sunlit spaces protects from rain',
    price: '$20.50 - $27.50',
    image: '/images/699eae219dfd46ae68917b4e_Product-3.webp',
    srcset: '/images/699eae219dfd46ae68917b4e_Product-3-p-500.webp 500w, /images/699eae219dfd46ae68917b4e_Product-3-p-800.webp 800w, /images/699eae219dfd46ae68917b4e_Product-3-p-1080.webp 1080w, /images/699eae219dfd46ae68917b4e_Product-3.webp 1320w'
  },
  {
    id: 'clay-tiles',
    title: 'Clay Tiles',
    desc: 'Elegant fire-resistant classic tiles for timeless roofs enhances curb appeal',
    price: '$30.00 - $40.00',
    image: '/images/699eadb1bf4a453177ff0615_Product-2.webp',
    srcset: '/images/699eadb1bf4a453177ff0615_Product-2-p-500.webp 500w, /images/699eadb1bf4a453177ff0615_Product-2-p-800.webp 800w, /images/699eadb1bf4a453177ff0615_Product-2-p-1080.webp 1080w, /images/699eadb1bf4a453177ff0615_Product-2.webp 1320w'
  },
  {
    id: 'copper-panels',
    title: 'Copper Panels',
    desc: 'Premium luxurious panels that age beautifully with patina elegant charm',
    price: '$45.00 - $55.00',
    image: '/images/699e903cca8fc4d5e728d32f_Product-1.webp',
    srcset: '/images/699e903cca8fc4d5e728d32f_Product-1-p-500.webp 500w, /images/699e903cca8fc4d5e728d32f_Product-1-p-800.webp 800w, /images/699e903cca8fc4d5e728d32f_Product-1-p-1080.webp 1080w, /images/699e903cca8fc4d5e728d32f_Product-1.webp 1320w'
  }
];

export default function Products() {
  return (
    <section className="section hero-product">
      <div className="container">
        <div className="product-title-box">
          <div data-w-id="9307ce04-9aab-22f9-73ff-04dd145150aa" style={{ opacity: 0 }} className="section-sub-title gray">Our Products</div>
          <h3 data-w-id="410b75db-075b-d5f8-f46f-a86657d91074" style={{ opacity: 0 }} className="product-title">Durable, stylish, and ready to elevate your roof — choose the perfect material for your next build.</h3>
        </div>
        <div className="products-wrap">
          <div className="w-dyn-list">
            <div role="list" className="hero-products-collection-list w-dyn-items">
              {productList.map((product) => (
                <div key={product.id} className="w-dyn-item">
                  <div data-w-id="7b48413c-eae9-5f10-513b-8a0e39344ac0" style={{ opacity: 0 }} className="products-single-card">
                    <div data-w-id="7b48413c-eae9-5f10-513b-8a0e39344ac1" style={{ opacity: 0 }} className="products-card-image-box">
                      <Link to={`/product/${product.id}`} className="image-wrap radius w-inline-block">
                        <img 
                          style={{
                            WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          alt={product.title} 
                          loading="lazy" 
                          src={product.image} 
                          srcSet={product.srcset}
                          sizes="100vw"
                          className="view-image" 
                        />
                        <div className="view-image-overlay black"></div>
                      </Link>
                    </div>
                    <div data-w-id="7b48413c-eae9-5f10-513b-8a0e39344ac5" style={{ opacity: 0 }} className="products-card-content-box">
                      <Link to={`/product/${product.id}`} className="products-card-title white">{product.title}</Link>
                      <div className="product-card-text">{product.desc}</div>
                      <div data-w-id="7b48413c-eae9-5f10-513b-8a0e39344ac8" style={{ width: '0%', opacity: 0 }} className="products-card-divider gray"></div>
                      <div className="products-card-price-box">
                        <div className="products-card-price white">{product.price}</div>
                        <div className="description white">/m²</div>
                      </div>
                      <div className="products-card-button-box">
                        <Link to={`/product/${product.id}`} data-w-id="61f2ac83-c066-6d3b-4939-d9bdd6414372" className="primary-button full-with w-inline-block">
                          <div className="primary-button-text-wrap">
                            <div className="primary-button-text">Buy</div>
                            <div className="primary-button-hover-text">Buy</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
