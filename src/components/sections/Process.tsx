export function Process() {
  const steps = [
    [
      "01",
      "Tư vấn",
      "Lắng nghe mục tiêu, khách hàng, quy trình hiện tại và ngân sách để chọn giải pháp phù hợp.",
    ],
    [
      "02",
      "Thiết kế",
      "Xây dựng giao diện, luồng trải nghiệm và kịch bản AI rõ ràng trước khi lập trình.",
    ],
    [
      "03",
      "Phát triển",
      "Triển khai website, chatbot, AI tool hoặc automation theo đúng phạm vi đã thống nhất.",
    ],
    [
      "04",
      "Bàn giao",
      "Hướng dẫn sử dụng, tối ưu tốc độ, SEO cơ bản và hỗ trợ chỉnh sửa sau nghiệm thu.",
    ],
  ] as const

  return (
    <section className="section process">
      <div className="shell">
        <h2 className="process-title">Quy trình triển khai</h2>
        <div className="process__grid">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <i />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
