import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sampleProducts = [
      { id: 1, name: 'دستبند طلایی', category: 'دستبند زنانه', price: 150000, image: '💎' },
      { id: 2, name: 'گردنبند نقره‌ای', category: 'گردنبند مردانه', price: 200000, image: '⛓️' },
      { id: 3, name: 'انگشتر الماسی', category: 'انگشتر زنانه', price: 300000, image: '💍' },
      { id: 4, name: 'پیرسینگ طلا', category: 'پیرسینگ زنانه', price: 120000, image: '👂' },
      { id: 5, name: 'دستبند چرمی', category: 'دستبند مردانه', price: 180000, image: '⌚' },
      { id: 6, name: 'گردنبند مردانه', category: 'گردنبند مردانه', price: 250000, image: '🔗' },
      { id: 7, name: 'انگشتر مردانه', category: 'انگشتر مردانه', price: 220000, image: '💍' },
      { id: 8, name: 'پیرسینگ نقره', category: 'پیرسینگ مردانه', price: 100000, image: '💎' }
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>🎀 KLCFER</h1>
          <div className={styles.navMenu}>
            <Link href="/">
              <span className={styles.navLink}>خانه</span>
            </Link>
            <Link href="/shop">
              <span className={styles.navLink}>فروشگاه</span>
            </Link>
            <Link href="/cart">
              <span className={styles.navLink}>سبد خرید</span>
            </Link>
            <Link href="/admin">
              <span className={styles.navLink}>ادمین</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <h2 className={styles.heroTitle}>کالکشن جدید اکسسوری</h2>
        <p className={styles.heroSubtitle}>بهترین انتخاب برای استایل شما</p>
        <Link href="/shop">
          <span className={styles.heroBtn}>مشاهده محصولات</span>
        </Link>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.sectionContainer}>
          <h3 className={styles.sectionTitle}>🛍️ دسته‌بندی‌ها</h3>
          <div className={styles.categoryGrid}>
            {['دستبند زنانه', 'دستبند مردانه', 'گردنبند زنانه', 'گردنبند مردانه', 'پیرسینگ زنانه', 'پیرسینگ مردانه', 'انگشتر زنانه', 'انگشتر مردانه'].map(cat => (
              <Link key={cat} href={`/shop?category=${cat}`}>
                <span className={styles.categoryCard}>
                  {cat}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className={styles.productsSection}>
        <div className={styles.sectionContainer}>
          <h3 className={styles.sectionTitle}>🏆 محصولات پرفروش</h3>
          <div className={styles.productsGrid}>
            {products.map(product => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  {product.image}
                </div>
                <div className={styles.productInfo}>
                  <h4 className={styles.productName}>{product.name}</h4>
                  <p className={styles.productCategory}>{product.category}</p>
                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>
                      {product.price.toLocaleString()} تومان
                    </span>
                    <button className={styles.productBtn}>
                      خرید
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>📞 تماس: 09378012212 | 📧 ایمیل: Matinsama30@gmail.com</p>
        <p>&copy; 2024 KLCFER. تمام حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}
