import { Arrow } from "../ui/Arrow"
import { PageLink } from "../ui/PageLink"
import { SectionHead } from "../ui/SectionHead"

export function Pricing() {
  const plans = [
    {
      name: "Website Cơ Bản",
      price: "Từ 1tr",
      desc: "Dành cho cá nhân, sinh viên, shop nhỏ hoặc người cần landing page gọn đẹp.",
      features: [
        "1 landing page hoặc web giới thiệu",
        "3–5 section theo nội dung",
        "Responsive tốt trên điện thoại",
        "Form liên hệ và nút gọi nhanh",
      ],
    },
    {
      name: "Website Chuyên Nghiệp",
      price: "Từ 3tr",
      desc: "Dành cho dịch vụ, cửa hàng hoặc doanh nghiệp cần hình ảnh chỉn chu hơn.",
      features: [
        "3–5 trang theo thương hiệu",
        "Tối ưu trải nghiệm người dùng",
        "SEO cơ bản, tốc độ tải tốt",
        "Hiệu ứng chuyển động nhẹ",
      ],
      popular: true,
    },
    {
      name: "Web App, CRM & AI",
      price: "Báo giá riêng",
      desc: "Dành cho doanh nghiệp cần tool riêng, dashboard, chatbot hoặc automation.",
      features: [
        "Khảo sát nghiệp vụ",
        "Báo giá theo module",
        "AI tool và automation",
        "Tích hợp API và dữ liệu",
      ],
    },
  ]

  return (
    <section className="section pricing">
      <div className="shell">
        <SectionHead
          label="Bảng giá tham khảo"
          title="Gói dịch vụ linh hoạt theo nhu cầu."
          text="Khởi đầu chỉ từ 1 triệu với một website cơ bản, responsive và sẵn sàng để trải nghiệm."
        />
        <div className="pricing__grid">
          {plans.map((plan) => (
            <article className={plan.popular ? "popular" : ""} key={plan.name}>
              {plan.popular && <span className="popular-label">Phổ biến</span>}
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.desc}</p>
              <ul>
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <PageLink to="/lien-he" className="card-link">
                Nhận tư vấn <Arrow />
              </PageLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
