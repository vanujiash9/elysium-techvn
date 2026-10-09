import { useRef, useState } from "react"
import type { CSSProperties } from "react"
import { useAutoScrollGallery } from "../../hooks/useAutoScrollGallery"
import { navigateTo } from "../../hooks/useNavigation"
import type { Product } from "../../models/site"
import "./ProductDetailPage.css"

const detailImages = [
  "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1500",
  "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1500",
  "https://images.unsplash.com/photo-1525373698358-041e3a460346?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1500",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1500",
]

export default function ProductDetailPage({ product }: { product: Product }) {
  const gallery = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [device, setDevice] = useState("desktop")
  const [demoTab, setDemoTab] = useState("Tổng quan")
  const [comparison, setComparison] = useState(52)
  const [healthReply, setHealthReply] = useState(
    "Xin chào, tôi có thể giúp bạn tìm hiểu dịch vụ, chuyên khoa hoặc tiếp nhận yêu cầu đặt lịch.",
  )
  const images = product.galleryImages ?? [product.image, ...detailImages]
  const hasProductGallery = Boolean(product.galleryImages)
  const hasLivePreview = Boolean(product.livePreviewUrl)
  const isHealthcare = product.slug === "chatbot-tu-van-tu-dong"
  const healthQuestions: Record<string, string> = {
    "Phòng khám có những chuyên khoa nào?":
      "Phòng khám hiện có Nội tổng quát, Tim mạch, Da liễu và Nhi khoa. Bạn muốn tìm hiểu chuyên khoa nào?",
    "Tôi muốn đặt lịch khám.":
      "Bạn vui lòng để lại họ tên, số điện thoại và thời gian mong muốn. Nhân viên phòng khám sẽ xác nhận lịch sớm nhất.",
    "Chi phí khám tổng quát bao nhiêu?":
      "Chi phí phụ thuộc vào gói khám và danh mục xét nghiệm. Tôi có thể ghi nhận nhu cầu để nhân viên gửi bảng giá chính xác.",
    "Tôi cần chuẩn bị gì trước khi khám?":
      "Bạn nên mang giấy tờ tùy thân, hồ sơ khám cũ và danh sách thuốc đang sử dụng. Một số xét nghiệm có thể yêu cầu nhịn ăn.",
  }
  useAutoScrollGallery(gallery, paused)

  const moveGallery = (direction: number) => {
    gallery.current?.scrollBy({
      left: direction * gallery.current.clientWidth,
      behavior: "smooth",
    })
  }

  const showImage = (index: number) => {
    gallery.current?.scrollTo({
      left: index * gallery.current.clientWidth,
      behavior: "smooth",
    })
  }

  return (
    <main className="product-detail page-top">
      <section className="product-showcase">
        <div className="shell product-showcase__grid">
          <div
            className={
              hasProductGallery
                ? "product-gallery product-gallery--screenshots"
                : "product-gallery"
            }
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
          >
            <div className="product-gallery__viewport" ref={gallery}>
              {images.map((image, index) => (
                <figure key={`${image}-${index}`}>
                  <img
                    src={image}
                    alt={`${product.title} — giao diện ${index + 1}`}
                  />
                  <span>0{index + 1}</span>
                </figure>
              ))}
            </div>
            <div className="product-gallery__controls">
              <div className="product-thumbs">
                {images.map((image, index) => (
                  <button
                    onClick={() => showImage(index)}
                    key={`${image}-thumb`}
                  >
                    <img src={image} alt={`Xem ảnh ${index + 1}`} />
                  </button>
                ))}
              </div>
              <div className="gallery-arrows">
                <button onClick={() => moveGallery(-1)} aria-label="Ảnh trước">
                  ←
                </button>
                <button
                  onClick={() => moveGallery(1)}
                  aria-label="Ảnh tiếp theo"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <aside className="product-summary">
            <button
              className="product-back"
              onClick={() => navigateTo("/san-pham")}
            >
              ← Quay lại sản phẩm
            </button>
            <p className="eyebrow">{product.category} · Selected work</p>
            <h1>{product.title}</h1>
            <p className="product-summary__desc">
              {product.desc} Giải pháp được thiết kế theo quy trình thật, có thể
              demo sớm và phát triển theo từng giai đoạn.
            </p>
            <div className="product-tags">
              {product.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <dl>
              <div>
                <dt>Thời gian triển khai</dt>
                <dd>4–6 tuần</dd>
              </div>
              <div>
                <dt>Phạm vi</dt>
                <dd>UX/UI · Development</dd>
              </div>
              <div>
                <dt>Bàn giao</dt>
                <dd>Source · Tài liệu · Training</dd>
              </div>
            </dl>
            {product.externalUrl ? (
              <a
                className="product-primary"
                href={product.externalUrl}
                target="_blank"
                rel="noreferrer"
              >
                Xem website thực tế →
              </a>
            ) : (
              <button
                className="product-primary"
                onClick={() => navigateTo("/lien-he")}
              >
                Yêu cầu demo dự án →
              </button>
            )}
            <a
              className="product-secondary"
              href="https://zalo.me/0396808020"
              target="_blank"
              rel="noreferrer"
            >
              Trao đổi nhanh qua Zalo
            </a>
          </aside>
        </div>
      </section>

      {isHealthcare && (
        <section className="health-chat-demo">
          <div className="shell health-chat-demo__head">
            <p className="eyebrow">Demo chatbot y tế</p>
            <h2>Thử một cuộc hội thoại mẫu.</h2>
            <p>
              Chatbot hỗ trợ thông tin dịch vụ và đặt lịch. Không chẩn đoán bệnh
              hoặc thay thế tư vấn của bác sĩ.
            </p>
          </div>
          <div className="shell health-chat-demo__grid">
            <div className="health-use-cases">
              <article>
                <span>01</span>
                <h3>Giải đáp dịch vụ</h3>
                <p>
                  Thông tin chuyên khoa, giờ làm việc, quy trình và chi phí tham
                  khảo.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Tiếp nhận đặt lịch</h3>
                <p>
                  Thu tên, số điện thoại, thời gian mong muốn và chuyển cho nhân
                  viên.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Chuyển tiếp an toàn</h3>
                <p>
                  Nhận biết câu hỏi cần con người xử lý và hướng dẫn liên hệ phù
                  hợp.
                </p>
              </article>
            </div>
            <div className="health-chat-window">
              <header>
                <span>E</span>
                <div>
                  <strong>Trợ lý phòng khám</strong>
                  <small>Đang trực tuyến</small>
                </div>
              </header>
              <div className="health-chat-messages">
                <p>Xin chào, tôi cần hỗ trợ.</p>
                <p>{healthReply}</p>
              </div>
              <div className="health-chat-questions">
                {Object.keys(healthQuestions).map((question) => (
                  <button
                    onClick={() => setHealthReply(healthQuestions[question])}
                    key={question}
                  >
                    {question}
                  </button>
                ))}
              </div>
              <footer>Nội dung demo · Không sử dụng để chẩn đoán y khoa</footer>
            </div>
          </div>
        </section>
      )}

      {hasLivePreview && product.livePreviewUrl && (
        <section className="live-preview-section">
          <div className="shell live-preview__head">
            <p className="eyebrow">Live preview</p>
            <h2>Trải nghiệm website trực tiếp.</h2>
            <p>
              {product.detailIntro ??
                "Website được dựng như một thiệp mời online hoàn chỉnh, giúp khách mời xem thông tin và phản hồi nhanh trên mọi thiết bị."}
            </p>
          </div>
          <div className="shell live-preview__grid">
            <div className="live-preview__features">
              {(product.detailFeatures ?? [
                "RSVP",
                "Countdown",
                "Gallery",
                "Timeline",
              ]).map((feature, index) => (
                <article key={feature}>
                  <span>0{index + 1}</span>
                  <h3>{feature}</h3>
                </article>
              ))}
            </div>
            <div className="live-preview__frame">
              <div className="live-preview__bar">
                <i />
                <i />
                <i />
                <span>{new URL(product.livePreviewUrl).hostname}</span>
              </div>
              <iframe
                src={product.livePreviewUrl}
                title={`${product.title} live preview`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={product.livePreviewUrl} target="_blank" rel="noreferrer">
                Mở website trong tab mới →
              </a>
            </div>
          </div>
        </section>
      )}

      {!isHealthcare && !hasLivePreview && (
        <section className="interactive-product">
          <div className="shell interactive-product__head">
            <div>
              <p className="eyebrow">Live product demo</p>
              <h2>Thử giao diện ngay trên trang.</h2>
            </div>
            <div className="device-switcher">
              {["desktop", "tablet", "mobile"].map((item) => (
                <button
                  className={device === item ? "active" : ""}
                  onClick={() => setDevice(item)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="shell demo-stage">
            <div className={`demo-device demo-device--${device}`}>
              <div className="demo-device__bar">
                <i />
                <i />
                <i />
                <span>preview.elysium.vn</span>
              </div>
              <div className="demo-product-ui">
                <nav>
                  <strong>E.</strong>
                  {["Tổng quan", "Khách hàng", "Báo cáo"].map((item) => (
                    <button
                      className={demoTab === item ? "active" : ""}
                      onClick={() => setDemoTab(item)}
                      key={item}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
                <div className="demo-product-ui__content">
                  <header>
                    <div>
                      <small>Không gian làm việc</small>
                      <h3>{demoTab}</h3>
                    </div>
                    <button>+ Tạo mới</button>
                  </header>
                  {demoTab === "Tổng quan" && (
                    <>
                      <div className="demo-metrics">
                        <article>
                          <span>Khách hàng mới</span>
                          <strong>128</strong>
                          <small>+18.4%</small>
                        </article>
                        <article>
                          <span>Đang xử lý</span>
                          <strong>36</strong>
                          <small>Hôm nay</small>
                        </article>
                        <article>
                          <span>Hoàn thành</span>
                          <strong>94%</strong>
                          <small>Tháng này</small>
                        </article>
                      </div>
                      <div className="demo-bars">
                        {[42, 65, 54, 83, 68, 92, 75, 100].map(
                          (height, index) => (
                            <i key={index} style={{ height: `${height}%` }} />
                          ),
                        )}
                      </div>
                    </>
                  )}
                  {demoTab === "Khách hàng" && (
                    <div className="demo-table">
                      {[
                        "Northstar Studio",
                        "Aether Labs",
                        "Vertex Retail",
                        "Orion Systems",
                      ].map((name, index) => (
                        <div key={name}>
                          <b>{name.slice(0, 1)}</b>
                          <span>
                            {name}
                            <small>Lead #{2048 + index}</small>
                          </span>
                          <i>{index % 2 ? "Đang tư vấn" : "Đã xác nhận"}</i>
                        </div>
                      ))}
                    </div>
                  )}
                  {demoTab === "Báo cáo" && (
                    <div className="demo-report">
                      <div>
                        <span>Hiệu suất tổng</span>
                        <strong>87.6%</strong>
                      </div>
                      <div className="demo-donut">
                        <i />
                      </div>
                      <p>
                        Dữ liệu được cập nhật tự động từ các kênh đang kết nối.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {!isHealthcare && !hasLivePreview && (
        <section className="before-after">
          <div className="shell before-after__head">
            <p className="eyebrow">Before / After</p>
            <h2>Kéo để xem trải nghiệm thay đổi.</h2>
          </div>
          <div
            className="shell comparison-frame"
            style={{ "--comparison": `${comparison}%` } as CSSProperties}
          >
            <img src={detailImages[1]} alt="Giao diện sau khi thiết kế lại" />
            <div className="comparison-before">
              <img
                src={detailImages[2]}
                alt="Giao diện trước khi thiết kế lại"
              />
            </div>
            <span className="comparison-label comparison-label--before">
              Trước
            </span>
            <span className="comparison-label comparison-label--after">
              Sau
            </span>
            <i className="comparison-line" />
            <input
              aria-label="So sánh giao diện trước và sau"
              type="range"
              min="10"
              max="90"
              value={comparison}
              onChange={(event) => setComparison(Number(event.target.value))}
            />
          </div>
        </section>
      )}
    </main>
  )
}
