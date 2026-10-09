import { useState } from "react"
import type { FormEvent } from "react"
import { images } from "../../data/images"
import { products } from "../../data/products"
import { services } from "../../data/services"
import { Faq } from "../../components/sections/Faq"
import { Pricing } from "../../components/sections/Pricing"
import { Process } from "../../components/sections/Process"
import { Arrow } from "../../components/ui/Arrow"
import { ButtonRow } from "../../components/ui/ButtonRow"
import { PageLink } from "../../components/ui/PageLink"
import { SectionHead } from "../../components/ui/SectionHead"
import "./HomePage.css"

function Counter({ value }: { value: number }) {
  return <span>{value.toLocaleString("vi-VN")}</span>
}

function Kpis() {
  const kpis = [
    [3500, "Khách hàng hài lòng"],
    [1500, "Dự án hoàn thành"],
    [40, "Thành viên"],
    [9, "Năm kinh nghiệm"],
  ] as const
  return (
    <section className="kpis">
      <div className="shell kpis__grid">
        {kpis.map(([value, label]) => (
          <div key={label}>
            <strong>
              <Counter value={value} />
              <sup>+</sup>
            </strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

const homeProductImages: Record<string, string> = {
  "aura-digital-flagship":
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
  "momo-baby-ecommerce":
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
  "real-estate-crm":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
  "website-ban-hang-dich-vu":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
  "landing-page-thiep-cuoi":
    "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
  "premium-dental-website":
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800",
}

function HeroGallery() {
  const slides = [
    [images.heroAiStudio, "AI Studio", "Không gian công nghệ cao cấp"],
    [images.heroProductShowcase, "Website flagship", "Giao diện sắc nét · rõ CTA"],
    [images.heroAutomation, "Dashboard & CRM", "Dữ liệu vận hành tập trung"],
    [images.servers, "Automation", "Luồng hệ thống liền mạch"],
    [images.workspace, "Digital product", "Từ ý tưởng đến bản chạy thật"],
  ]
  return (
    <div className="hero-gallery">
      <span className="live-label">
        <i /> Live preview
      </span>
      <div className="hero-gallery__track">
        {[...slides, ...slides].map(([src, title, meta], index) => (
          <figure key={`${title}-${index}`}>
            <img src={src} alt={title} />
            <figcaption>
              <strong>{title}</strong>
              <span>{meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

function SolutionBuilder() {
  const [service, setService] = useState("Website")
  const [business, setBusiness] = useState("Dịch vụ")
  const [goal, setGoal] = useState("Thu hút khách hàng")
  const [showContact, setShowContact] = useState(false)

  const recommendations: Record<string, {
    package: string
    time: string
    price: string
  }> = {
    Website: {
      package: "Website Chuyên Nghiệp",
      time: "7–14 ngày",
      price: "Từ 3 triệu",
    },
    "AI Tool": {
      package: "AI Tool Theo Quy Trình",
      time: "10–21 ngày",
      price: "Báo giá theo phạm vi",
    },
    Automation: {
      package: "Automation Vận Hành",
      time: "7–14 ngày",
      price: "Từ 5 triệu",
    },
  }
  const result = recommendations[service]
  const sendConfiguration = (event: FormEvent<HTMLFormElement>) => {
    event.currentTarget.action = "https://formsubmit.co/elysium.techvn@gmail.com"
  }

  return (
    <section className="solution-builder section">
      <div className="shell">
        <SectionHead
          label="Elysium Solution Builder"
          title="Tìm giải pháp phù hợp trong chưa đầy một phút."
          text="Chọn nhanh nhu cầu hiện tại. Elysium sẽ gợi ý gói, thời gian và hướng triển khai ban đầu."
        />
        <div className="solution-builder__grid">
          <div className="solution-steps">
            <div className="solution-step">
              <span>01</span>
              <h3>Bạn đang cần gì?</h3>
              <div>
                {["Website", "AI Tool", "Automation"].map((item) => (
                  <button
                    className={service === item ? "active" : ""}
                    onClick={() => setService(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="solution-step">
              <span>02</span>
              <h3>Mô hình của bạn?</h3>
              <div>
                {["Dịch vụ", "Cửa hàng", "Đội ngũ nội bộ"].map((item) => (
                  <button
                    className={business === item ? "active" : ""}
                    onClick={() => setBusiness(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="solution-step">
              <span>03</span>
              <h3>Mục tiêu chính?</h3>
              <div>
                {[
                  "Thu hút khách hàng",
                  "Giảm việc thủ công",
                  "Trình bày dữ liệu",
                ].map((item) => (
                  <button
                    className={goal === item ? "active" : ""}
                    onClick={() => setGoal(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <aside className="solution-result">
            <p>Đề xuất dành cho bạn</p>
            <h3>{result.package}</h3>
            <div>
              <span>Phù hợp</span>
              <strong>{business}</strong>
            </div>
            <div>
              <span>Mục tiêu</span>
              <strong>{goal}</strong>
            </div>
            <div>
              <span>Thời gian</span>
              <strong>{result.time}</strong>
            </div>
            <div>
              <span>Chi phí dự kiến</span>
              <strong>{result.price}</strong>
            </div>
            {!showContact ? (
              <button
                className="solution-result__open"
                onClick={() => setShowContact(true)}
              >
                Gửi cấu hình cho Elysium <Arrow />
              </button>
            ) : (
              <form className="solution-lead" method="POST" onSubmit={sendConfiguration}>
                <input type="hidden" name="_subject" value="Cấu hình dự án từ website Elysium" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="Nhu cầu" value={service} />
                <input type="hidden" name="Mô hình" value={business} />
                <input type="hidden" name="Mục tiêu" value={goal} />
                <input type="hidden" name="Gói đề xuất" value={result.package} />
                <input type="hidden" name="Thời gian dự kiến" value={result.time} />
                <input type="hidden" name="Chi phí dự kiến" value={result.price} />
                <p>Để Elysium liên hệ lại</p>
                <input name="name" required placeholder="Tên của bạn" />
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Số điện thoại / Zalo"
                />
                <button type="submit">
                  Gửi cấu hình <Arrow />
                </button>
              </form>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main>
      <section className="home-hero page-top">
        <div className="shell home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Website • AI Tool • Automation</p>
            <h1>
              Website & AI automation <em>ra mắt nhanh.</em>
            </h1>
            <p className="lead">
              Thiết kế gọn, demo sớm, đo lường rõ và bàn giao dễ vận hành.
            </p>
            <ButtonRow />
          </div>
          <HeroGallery />
        </div>
      </section>
      <Kpis />

      <section className="section service-overview">
        <div className="shell">
          <SectionHead
            label="Dịch vụ của Elysium"
            title="Website, AI và automation — gọn trong một hệ thống."
          />
          <div className="service-mini-grid">
            {services.map((service) => (
              <PageLink
                to="/dich-vu"
                className="service-mini"
                key={service.code}
              >
                <div className="service-mini__top">
                  <span>{service.code}</span>
                </div>
                <div className="service-mini__body">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                </div>
                <Arrow diagonal />
              </PageLink>
            ))}
          </div>
          <PageLink className="section-link" to="/dich-vu">
            Xem tất cả dịch vụ <Arrow />
          </PageLink>
        </div>
      </section>

      <section className="section selected-products">
        <div className="shell">
          <SectionHead
            label="Sản phẩm chọn lọc"
            title="Demo rõ ràng. Hình ảnh thật. Hướng triển khai thực tế."
          />
          <div className="home-products">
            {products.slice(0, 4).map((product, index) => (
              <PageLink
                to={`/san-pham/${product.slug}`}
                className={`home-product home-product--${index + 1}`}
                key={product.title}
              >
                <div className="home-product__image">
                  <img
                    src={homeProductImages[product.slug] ?? product.image}
                    alt={product.title}
                  />
                  <span>0{index + 1}</span>
                </div>
                <p>{product.category}</p>
                <h3>{product.title}</h3>
              </PageLink>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <SolutionBuilder />
      <Pricing />
      <Faq />
    </main>
  )
}
