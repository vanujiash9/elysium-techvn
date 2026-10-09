import { services } from "../../data/services"
import { PageLink } from "../ui/PageLink"
import { Brand } from "./Brand"
import { SOCIALS } from "./socials"

function FooterSocials() {
  return (
    <div className="footer-socials">
      {SOCIALS.map(({ label, href, icon }) => (
        <a
          href={href}
          target={label === "Gmail" ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          key={label}
        >
          <img src={icon} alt="" />
        </a>
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__about">
            <Brand />
            <p>
              Thiết kế Website & AI, chatbot và automation theo yêu cầu cho cá
              nhân, cửa hàng và doanh nghiệp.
            </p>
            <FooterSocials />
          </div>
          <div>
            <p className="footer-title">Dịch vụ</p>
            {services.map((service) => (
              <PageLink key={service.code} to="/dich-vu">
                {service.title}
              </PageLink>
            ))}
          </div>
          <div>
            <p className="footer-title">Liên kết</p>
            <PageLink to="/san-pham">Dự án mẫu</PageLink>
            <PageLink to="/">Gói dịch vụ</PageLink>
            <PageLink to="/">Góc chia sẻ</PageLink>
            <PageLink to="/lien-he">Liên hệ</PageLink>
          </div>
          <div className="footer-contact">
            <p className="footer-title">Tư vấn nhanh</p>
            <a href="tel:0338994373">0338 994 373</a>
            <a href="mailto:elysium.techvn@gmail.com">
              elysium.techvn@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-mobile">
          <div className="footer-mobile__brand">
            <Brand />
            <p>Website, AI và automation theo yêu cầu.</p>
            <FooterSocials />
          </div>
          <details>
            <summary>
              Dịch vụ <span>+</span>
            </summary>
            <div>
              {services.map((service) => (
                <PageLink key={service.code} to="/dich-vu">
                  {service.title}
                </PageLink>
              ))}
            </div>
          </details>
          <details>
            <summary>
              Liên kết <span>+</span>
            </summary>
            <div>
              <PageLink to="/san-pham">Dự án mẫu</PageLink>
              <PageLink to="/">Gói dịch vụ</PageLink>
              <PageLink to="/lien-he">Liên hệ</PageLink>
            </div>
          </details>
          <details>
            <summary>
              Liên hệ <span>+</span>
            </summary>
            <div>
              <a href="tel:0338994373">0338 994 373</a>
              <a href="mailto:elysium.techvn@gmail.com">
                elysium.techvn@gmail.com
              </a>
            </div>
          </details>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Elysium - Thiết kế Website & AI.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
