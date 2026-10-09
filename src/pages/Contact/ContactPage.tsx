import { FormEvent } from "react"
import { images } from "../../data/images"
import { Arrow } from "../../components/ui/Arrow"

export default function ContactPage() {
  const sendMail = (event: FormEvent<HTMLFormElement>) => {
    event.currentTarget.action = "https://formsubmit.co/elysium.techvn@gmail.com"
  }
  return (
    <main>
      <section className="contact-page page-top">
        <div className="shell contact-page__grid">
          <div className="contact-info">
            <p className="eyebrow">Liên hệ Elysium</p>
            <h1>Chia sẻ nhu cầu. Elysium phản hồi trong 24 giờ.</h1>
            <div className="contact-cards">
              <a href="mailto:elysium.techvn@gmail.com">
                <span>Email</span>
                <strong>elysium.techvn@gmail.com</strong>
              </a>
              <a href="tel:0338994373">
                <span>Điện thoại / Zalo</span>
                <strong>0338 994 373</strong>
              </a>
              <div>
                <span>Phản hồi</span>
                <strong>Trong 24 giờ</strong>
              </div>
            </div>
            <img
              src={images.architecture}
              alt="Kiến trúc hiện đại đại diện cho tư duy hệ thống của Elysium"
            />
          </div>
          <form className="contact-form" method="POST" onSubmit={sendMail}>
            <input type="hidden" name="_subject" value="Yêu cầu tư vấn từ website Elysium" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <label>
              <span>Tên *</span>
              <input required name="name" placeholder="Nguyễn Văn A" />
            </label>
            <label>
              <span>Số điện thoại / Zalo *</span>
              <input
                required
                name="phone"
                type="tel"
                placeholder="0338 994 373"
              />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="ban@example.com" />
            </label>
            <label>
              <span>Nhu cầu *</span>
              <input
                required
                name="need"
                placeholder="Website, chatbot, AI tool..."
              />
            </label>
            <label>
              <span>Ngân sách dự kiến</span>
              <input
                name="budget"
                placeholder="Ví dụ: 3–5 triệu hoặc chưa xác định"
              />
            </label>
            <label>
              <span>Mô tả yêu cầu *</span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Mục tiêu, số trang, tính năng cần có hoặc mẫu bạn thích..."
              />
            </label>
            <button type="submit" className="button button--primary">
              Gửi yêu cầu qua Email <Arrow />
            </button>
            <a
              className="zalo-button"
              href="https://zalo.me/0338994373"
              target="_blank"
              rel="noreferrer"
            >
              Nhắn Zalo
            </a>
          </form>
        </div>
      </section>
    </main>
  )
}
