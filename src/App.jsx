const lineLink = "https://line.me/R/ti/p/@lovefamily521688";
const mapLink = "https://maps.app.goo.gl/DN4jf8tnQKVcXsgE8";
const mapEmbed = "https://www.google.com/maps?q=桃園市桃園區桃鶯路298之1號&output=embed";

const services = [
  "家電銷售",
  "冷氣安裝",
  "冷氣家電維修",
  "冷氣保養",
  "洗衣機保養",
  "音響銷售",
];

const brands = ["LG 樂金", "三菱", "日立", "三洋", "國際牌", "奇美", "金鼎"];

const featured = [
  { title: "變頻冷氣優惠中", tag: "夏季主打", desc: "安裝快速，現場評估報價，歡迎來電或 LINE 詢價。" },
  { title: "大容量冰箱", tag: "家庭推薦", desc: "多品牌可選，適合家庭使用，容量與功能可依需求推薦。" },
  { title: "洗衣機特價", tag: "限時優惠", desc: "直立式、滾筒、洗脫烘機種，歡迎到店洽詢。" },
];

const info = [
  { label: "店名", value: "正昇電器行" },
  { label: "電話", value: "(03) 362-2663 / 367-8584" },
  { label: "LINE", value: "@lovefamily521688" },
  { label: "地址", value: "桃園市桃園區桃鶯路298之1號" },
  { label: "營業時間", value: "週一至週六 09:30 - 21:30｜週日公休" },
];

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="section-title">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {desc ? <p>{desc}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="brand-name">正昇電器行</div>
            <div className="brand-subtitle">在地專業家電銷售與維修</div>
          </div>

          <div className="topbar-actions">
            <a className="btn btn-light" href="#contact">聯絡我們</a>
            <a className="btn btn-line" href={lineLink} target="_blank" rel="noreferrer">LINE 詢價</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">正昇電器行 LOVE FAMILY</div>
              <h1>在地專業家電服務</h1>
              <p>
                提供冷氣、冰箱、洗衣機與各式家電銷售，並協助冷氣安裝、
                家電維修、冷氣保養與洗衣機保養，歡迎來電或加入 LINE 詢價。
              </p>

              <div className="hero-actions">
                <a className="btn btn-dark" href={lineLink} target="_blank" rel="noreferrer">立即 LINE 詢價</a>
                <a className="btn btn-light" href={mapLink} target="_blank" rel="noreferrer">Google 地圖導航</a>
              </div>

              <div className="hero-info-list">
                <div><strong>電話：</strong>(03) 362-2663 / 367-8584</div>
                <div><strong>地址：</strong>桃園市桃園區桃鶯路298之1號</div>
                <div><strong>時間：</strong>週一至週六 09:30 - 21:30｜週日公休</div>
              </div>
            </div>

            <div className="hero-media">
              <img src="/store.jpg" alt="正昇電器行店面照片" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="服務項目"
              title="家裡需要的家電與售後服務，這裡都能處理"
              desc="這一區已先整理成網站可展示的樣子，之後還能再加上更多品牌、型號與促銷內容。"
            />

            <div className="service-grid">
              {services.map((item) => (
                <div className="card service-card" key={item}>
                  <div className="service-dot" />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <SectionTitle
              eyebrow="精選商品"
              title="首頁主打商品示意"
              desc="這三格之後可以直接替換成你們想推的商品、活動或季節優惠。"
            />

            <div className="featured-grid">
              {featured.map((item) => (
                <article className="card featured-card" key={item.title}>
                  <div className="tag">{item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="合作品牌"
              title="目前展示品牌"
              desc="已先依照你提供的名片資訊放入，之後可再自由增減。"
            />

            <div className="brand-grid">
              {brands.map((brand) => (
                <div className="brand-pill" key={brand}>{brand}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="contact">
          <div className="container contact-grid">
            <div className="card contact-card">
              <SectionTitle
                eyebrow="聯絡我們"
                title="歡迎來電、加 LINE，或直接導航到店"
              />

              <div className="contact-list">
                {info.map((item) => (
                  <div className="contact-item" key={item.label}>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="contact-actions">
                <a className="btn btn-line" href={lineLink} target="_blank" rel="noreferrer">加入 LINE</a>
                <a className="btn btn-dark" href={mapLink} target="_blank" rel="noreferrer">開啟導航</a>
              </div>

              <div className="qr-wrap">
                <div className="qr-title">LINE QR Code</div>
                <img src="/line-qr.png" alt="正昇電器行 LINE QR Code" className="qr-image" />
              </div>
            </div>

            <div className="card map-card">
              <iframe
                title="正昇電器行地圖"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <a className="floating-line" href={lineLink} target="_blank" rel="noreferrer">
        LINE 詢價
      </a>
    </div>
  );
}
