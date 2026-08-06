<parameter name="path">/tmp/vercel-setup/pages/index.js</parameter>

<parameter name="content">import { useState, useEffect } from 'react';

import Link from 'next/link';


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

    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>

      {/* Navbar */}

      <nav style={{

        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

        color: 'white',

        padding: '20px 0',

        position: 'sticky',

        top: 0,

        zIndex: 100

      }}>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>🎀 KLCFER</h1>

          <div style={{ display: 'flex', gap: '20px' }}>

            <Link href="/">خانه</Link>

            <Link href="/shop">فروشگاه</Link>

            <Link href="/cart">سبد خرید</Link>

            <Link href="/admin">ادمین</Link>

          </div>

        </div>

      </nav>


      {/* Hero */}

      <section style={{

        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

        color: 'white',

        padding: '100px 20px',

        textAlign: 'center'

      }}>

        <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>کالکشن جدید اکسسوری</h2>

        <p style={{ fontSize: '20px', marginBottom: '30px' }}>بهترین انتخاب برای استایل شما</p>

        <Link href="/shop" style={{

          display: 'inline-block',

          background: '#ff4757',

          color: 'white',

          padding: '12px 30px',

          borderRadius: '5px',

          textDecoration: 'none'

        }}>مشاهده محصولات</Link>

      </section>


      {/* Categories */}

      <section style={{ padding: '60px 20px', background: 'white' }}>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <h3 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>🛍️ دسته‌بندی‌ها</h3>

          <div style={{

            display: 'grid',

            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',

            gap: '20px'

          }}>

            {['دستبند زنانه', 'دستبند مردانه', 'گردنبند زنانه', 'گردنبند مردانه', 'پیرسینگ زنانه', 'پیرسینگ مردانه', 'انگشتر زنانه', 'انگشتر مردانه'].map(cat => (

              <Link key={cat} href={`/shop?category=${cat}`} style={{

                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

                color: 'white',

                padding: '30px 20px',

                borderRadius: '10px',

                textAlign: 'center',

                textDecoration: 'none',

                cursor: 'pointer'

              }}>

                {cat}

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* Products */}

      <section style={{ padding: '60px 20px' }}>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <h3 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>🏆 محصولات پرفروش</h3>

          <div style={{

            display: 'grid',

            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',

            gap: '20px'

          }}>

            {products.map(product => (

              <div key={product.id} style={{

                background: 'white',

                borderRadius: '10px',

                overflow: 'hidden',

                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',

                transition: 'transform 0.3s'

              }}>

                <div style={{

                  width: '100%',

                  height: '200px',

                  background: '#f0f0f0',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  fontSize: '60px'

                }}>

                  {product.image}

                </div>

                <div style={{ padding: '20px' }}>

                  <h4 style={{ marginBottom: '10px' }}>{product.name}</h4>

                  <p style={{ color: '#666', marginBottom: '10px' }}>{product.category}</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#667eea' }}>

                      {product.price.toLocaleString()} تومان

                    </span>

                    <button style={{

                      background: '#667eea',

                      color: 'white',

                      border: 'none',

                      padding: '8px 15px',

                      borderRadius: '5px',

                      cursor: 'pointer'

                    }}>

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

      <footer style={{

        background: '#333',

        color: 'white',

        padding: '40px 20px',

        textAlign: 'center'

      }}>

        <p>📞 تماس: 09378012212 | 📧 ایمیل: Matinsama30@gmail.com</p>

        <p>&copy; 2024 KLCFER. تمام حقوق محفوظ است.</p>

      </footer>

    </div>

  );

}
