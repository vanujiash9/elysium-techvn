import { images } from "../../data/images"
import { services } from "../../data/services"
import { Arrow } from "../../components/ui/Arrow"
import { ButtonRow } from "../../components/ui/ButtonRow"
import { PageLink } from "../../components/ui/PageLink"

export default function ServicesPage() {
  return (
    <main>
      <section className="service-hero page-top">
        <div className="shell">
          <div className="page-title">
            <p className="eyebrow">Giải pháp số cho doanh nghiệp</p>
            <h1>
              Một đội ngũ cho website, AI và <em>vận hành tự động.</em>
            </h1>
            <p>
              Từ trang giới thiệu đến công cụ nội bộ — triển khai đúng phần cần
              thiết, có demo trước và bàn giao rõ ràng.
            </p>
            <ButtonRow />
          </div>
          <div className="service-orbit">
            <img
              src={images.team}
              alt="Đội ngũ sản phẩm đang trao đổi giải pháp website và AI"
            />
            {services.slice(0, 5).map((service, index) => (
              <span className={`orbit orbit--${index + 1}`} key={service.code}>
                {service.code}
                <small>{service.title}</small>
              </span>
            ))}
            <i className="orbit-note">Website • AI • Automation</i>
          </div>
        </div>
      </section>
      <section className="section services-detail">
        <div className="shell">
          <div className="services-statement">
            <p className="eyebrow">Một đội ngũ</p>
            <h2>
              Một luồng triển khai <em>rõ ràng.</em>
            </h2>
            <span>
              Từ chiến lược, thiết kế đến phát triển và bàn giao trong cùng một
              quy trình.
            </span>
          </div>
          <div className="services-detail__grid">
            {services.map((service) => (
              <article key={service.code}>
                <div className="service-code">{service.code}</div>
                <p className="eyebrow">{service.kicker}</p>
                <h2>{service.title}</h2>
                <p className="service-desc">{service.desc}</p>
                <div className="service-pills">
                  <span>{service.time}</span>
                  <span>{service.price}</span>
                </div>
                <ul>
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <PageLink to="/lien-he" className="card-link">
                  Tư vấn {service.code.toLowerCase()} <Arrow />
                </PageLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
