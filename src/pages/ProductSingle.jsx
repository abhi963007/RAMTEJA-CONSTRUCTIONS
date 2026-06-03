import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = {
  'galvanized-steel': {
    title: 'Galvanized Steel',
    desc: 'Strong rust-resistant sleek panels for durable reliable long-lasting roofs',
    price: '$22.50 - $28.50',
    image: '/images/699eaf2c0b305f35776a20bd_Product-6.webp',
    details: 'Galvanized steel roofing is renowned for its high corrosion resistance, strength, and durability. Ideal for both commercial and residential projects, it delivers long-lasting structural protection.'
  },
  'zinc-alloy-panels': {
    title: 'Zinc Alloy Panels',
    desc: 'Durable stylish modern panels for contemporary homes elegant finish',
    price: '$25.00 - $31.00',
    image: '/images/699eaed756b8747f9c7a4abd_Product-5.webp',
    details: 'Zinc alloy panels provide a premium contemporary aesthetic with superb weathering properties. It forms a natural protective patina over time, ensuring a maintenance-free finish.'
  },
  'asphalt-shingles': {
    title: 'Asphalt Shingles',
    desc: 'Affordable colorful weatherproof shingles for everyday roofs easy installation',
    price: '$18.89 - $24.89',
    image: '/images/699eae80546d68173ba38192_Product-4.webp',
    details: 'Asphalt shingles are an economical, reliable, and versatile choice. Offering excellent wind and rain resistance, they come in a wide variety of colors to complement any home style.'
  },
  'polycarbonate-sheets': {
    title: 'Polycarbonate Sheets',
    desc: 'Lightweight translucent panels for bright sunlit spaces protects from rain',
    price: '$20.50 - $27.50',
    image: '/images/699eae219dfd46ae68917b4e_Product-3.webp',
    details: 'Polycarbonate panels are lightweight and offer high impact resistance. Perfect for skylights and canopies, they filter UV rays while allowing natural light to illuminate the space.'
  },
  'clay-tiles': {
    title: 'Clay Tiles',
    desc: 'Elegant fire-resistant classic tiles for timeless roofs enhances curb appeal',
    price: '$30.00 - $40.00',
    image: '/images/699eadb1bf4a453177ff0615_Product-2.webp',
    details: 'Clay tiles are classic, sustainable, and highly insulating. They offer natural fire resistance and a timeless look that significantly enhances the resale value of residential properties.'
  },
  'copper-panels': {
    title: 'Copper Panels',
    desc: 'Premium luxurious panels that age beautifully with patina elegant charm',
    price: '$45.00 - $55.00',
    image: '/images/699e903cca8fc4d5e728d32f_Product-1.webp',
    details: 'Copper is the ultimate premium roofing material. Over decades, it shifts from metallic bright to rich brown and finally a distinct green patina, providing an incredibly durable and beautiful roof.'
  }
};

export default function ProductSingle() {
  const { id } = useParams();
  const product = products[id] || products['galvanized-steel'];

  return (
    <div className="inner-page-content" style={{ padding: '120px 0 80px', backgroundColor: '#0f0f0f', color: '#fff' }}>
      <div className="container">
        <Link to="/product-page" style={{ color: '#aaa', textDecoration: 'none', display: 'inline-block', marginBottom: '30px' }}>&larr; Back to Products</Link>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '12px', border: '1px solid #222' }} />
          </div>
          <div>
            <div className="section-sub-title">Product details</div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{product.title}</h1>
            <h3 style={{ color: '#8cd462', fontSize: '1.5rem', marginBottom: '20px' }}>{product.price} <span style={{ fontSize: '1rem', color: '#aaa' }}>/ m²</span></h3>
            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '30px' }}>{product.details}</p>
            
            <div style={{ padding: '20px', backgroundColor: '#161616', borderRadius: '8px', marginBottom: '30px' }}>
              <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '5px' }}>Specifications</div>
              <div style={{ color: '#fff' }}><strong>Type:</strong> High-Grade Roofing Panel</div>
              <div style={{ color: '#fff' }}><strong>Availability:</strong> In stock</div>
            </div>

            <Link to="/contact" className="primary-button w-inline-block" style={{ width: '100%', textAlign: 'center' }}>
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">Inquire About This Product</div>
                <div className="primary-button-hover-text">Inquire About This Product</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
