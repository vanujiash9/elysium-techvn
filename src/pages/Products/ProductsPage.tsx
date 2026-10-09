import { useState } from "react"
import { images } from "../../data/images"
import { products } from "../../data/products"
import { Dialog } from "../../components/ui/Dialog"
import { Arrow } from "../../components/ui/Arrow"
import { ButtonRow } from "../../components/ui/ButtonRow"
import { PageLink } from "../../components/ui/PageLink"
import "./ProductsPage.css"

const demos = [
  {
    type: "high-end-portfolio",
    label: "High-end Portfolio",
    title: "Portfolio thương hiệu cao cấp",
    image: images.highEndPortfolio,
    slug: "high-end-portfolio",
    externalUrl: "https://high-end-portfolio-green.vercel.app/",
  },
  {
    type: "crm",
    label: "Real Estate CRM",
    title: "Quản lý lead bất động sản",
    image: images.realEstateCrm,
    slug: "real-estate-crm",
    externalUrl: "https://real-estate-crm-one-neon.vercel.app/",
  },
  {
    type: "momo-baby",
    label: "E-commerce mẹ & bé",
    title: "MoMo Baby shopping experience",
    image: images.momoBaby,
    slug: "momo-baby-ecommerce",
    externalUrl: "https://e-commerce-momo-baby.vercel.app/",
  },
]

function DemoPreview({ type }: { type: string }) {
  if (type === "crm")
    return (
      <div className="preview-crm">
        <aside>
          <strong>E.</strong>
          <span>Tổng quan</span>
          <span>Khách hàng</span>
          <span>Báo cáo</span>
        </aside>
        <main>
          <p>Dashboard vận hành</p>
          <div>
            {["1.284 Lead", "94% Hoàn thành", "36 Đang xử lý"].map((item) => (
              <article key={item}>{item}</article>
            ))}
          </div>
          <section>
            {[45, 70, 52, 88, 64, 95, 74].map((height, index) => (
              <i style={{ height: `${height}%` }} key={index} />
            ))}
          </section>
        </main>
      </div>
    )
  if (type === "shop")
    return (
      <div className="preview-shop">
        <nav>
          <strong>MONO.</strong>
          <span>New arrivals</span>
          <span>Collection</span>
          <b>Bag 02</b>
        </nav>
        <div>
          <p>New / 2026</p>
          <h2>
            Objects for
            <br />
            everyday living.
          </h2>
          <button>Khám phá bộ sưu tập →</button>
        </div>
      </div>
    )
  return (
    <div className="preview-service">
      <nav>
        <strong>NORTH.</strong>
        <span>Dịch vụ</span>
        <span>Dự án</span>
        <span>Liên hệ</span>
      </nav>
      <div>
        <small>Digital product studio</small>
        <h2>
          Xây trải nghiệm số
          <br />
          tạo ra tăng trưởng.
        </h2>
        <p>Website, sản phẩm số và hệ thống dành cho doanh nghiệp hiện đại.</p>
        <button>Bắt đầu dự án →</button>
      </div>
    </div>
  )
}

function DirectDemos() {
  const [active, setActive] = useState<typeof demos[number] | null>(null)
  return (
    <section className="direct-demos section">
      <div className="shell">
        <div className="direct-demos__head">
          <p className="eyebrow">Trải nghiệm sản phẩm trực tiếp</p>
        </div>
        <div className="direct-demos__grid">
          {demos.map((demo) => (
            <article key={demo.type}>
              <div className="demo-browser">
                <div>
                  <i />
                  <i />
                  <i />
                  <span>demo.elysium.vn</span>
                </div>
                <img src={demo.image} alt={demo.title} />
              </div>
              <p>{demo.label}</p>
              <h3>{demo.title}</h3>
              <div>
                <button onClick={() => setActive(demo)} type="button">
                  Mở demo <Arrow diagonal />
                </button>
                <PageLink to={`/san-pham/${demo.slug}`}>
                  Cách triển khai
                </PageLink>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Dialog
        isOpen={active !== null}
        className="demo-modal"
        titleId="demo-modal-title"
        onClose={() => setActive(null)}
      >
        {active && (
          <>
            <header>
              <span id="demo-modal-title">{active.label} · Live demo</span>
              <button onClick={() => setActive(null)} type="button">
                ×
              </button>
            </header>
            {"externalUrl" in active ? (
              <div className="preview-iframe">
                <iframe
                  src={active.externalUrl}
                  title={`${active.title} live preview`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a href={active.externalUrl} target="_blank" rel="noreferrer">
                  Mở website trong tab mới nếu không hiển thị →
                </a>
              </div>
            ) : (
              <DemoPreview type={active.type} />
            )}
          </>
        )}
      </Dialog>
    </section>
  )
}

export default function ProductsPage() {
  const [filter, setFilter] = useState("Tất cả")
  const filters = [
    "Tất cả",
    "Website",
    "AI Tool",
    "AI Chatbot",
    "Automation",
    "Dashboard / CRM",
  ]
  const visible =
    filter === "Tất cả"
      ? products
      : products.filter((item) => item.category === filter)
  return (
    <main>
      <section className="product-hero page-top">
        <div className="shell product-hero__grid">
          <div className="page-title page-title--wide">
            <p className="eyebrow">Sản phẩm thực tế</p>
            <h1>
              Những trải nghiệm số được xây để <em>vận hành.</em>
            </h1>
            <p>
              Khám phá website, AI tool, chatbot và dashboard qua hình ảnh,
              luồng demo và câu chuyện triển khai cụ thể.
            </p>
            <ButtonRow />
          </div>
          <div className="product-marquee">
            {[
              images.code,
              images.abstract,
              images.laptop,
              images.workspace,
              images.servers,
            ].map((src, index) => (
              <img src={src} alt="" key={index} />
            ))}
          </div>
        </div>
      </section>
      <DirectDemos />
      <section className="section products-section">
        <div className="shell">
          <div className="filters">
            {filters.map((item) => (
              <button
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
                key={item}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="products-grid">
            {visible.map((product, index) => (
              <article
                className={index === 0 ? "featured" : ""}
                key={product.title}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  <span>Selected work</span>
                </div>
                <p className="eyebrow">{product.category}</p>
                <h2>{product.title}</h2>
                <p>{product.desc}</p>
                <div className="tags">
                  {product.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <PageLink
                  to={`/san-pham/${product.slug}`}
                  className="product-link"
                >
                  Xem case study & demo <Arrow diagonal />
                </PageLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
