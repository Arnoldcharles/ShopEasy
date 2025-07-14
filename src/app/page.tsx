'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading products
    setTimeout(() => {
      setProducts([
        {
          _id: '1',
          name: 'Wireless Headphones',
          price: 150,
          image: 'https://via.placeholder.com/300x200?text=Product',
        },
        {
          _id: '2',
          name: 'Smart Watch',
          price: 200,
          image: '/placeholder.png',
        },
        {
          _id: '3',
          name: 'Gaming Mouse',
          price: 70,
          image: '/placeholder.png',
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Shop the Latest Tech</h1>
        <p>Discover amazing gadgets and accessories at great prices.</p>
      </section>

      <section className={styles.featured}>
        <h2>Featured Products</h2>
        <div className={styles.grid}>
          {loading
            ? Array(3).fill(0).map((_, i) => (
                <div key={i} className={styles.skeletonCard}></div>
              ))
            : products.map((product) => (
                <div key={product._id} className={styles.card}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
}
