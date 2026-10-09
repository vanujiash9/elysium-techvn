import { SectionHead } from "../ui/SectionHead"

export function Faq() {
  const items = [
    [
      "Bao lâu xong?",
      "Website cơ bản thường hoàn thiện trong 3–7 ngày. AI tool và automation cần 5–14 ngày tùy phạm vi.",
    ],
    [
      "Có hỗ trợ domain/hosting không?",
      "Có. Elysium tư vấn, cài đặt và bàn giao toàn bộ thông tin để bạn chủ động quản lý.",
    ],
    [
      "Có chỉnh sửa sau bàn giao không?",
      "Có. Mỗi dự án đều có giai đoạn nghiệm thu và hỗ trợ chỉnh sửa theo phạm vi đã thống nhất.",
    ],
    [
      "Có xuất hóa đơn/hợp đồng không?",
      "Có thể ký hợp đồng dự án và cung cấp chứng từ phù hợp theo nhu cầu.",
    ],
    [
      "Có bảo trì không?",
      "Có gói bảo trì linh hoạt theo tháng hoặc theo lần, tùy hệ thống và nhu cầu vận hành.",
    ],
  ] as const

  return (
    <section className="section faq">
      <div className="shell faq__grid">
        <SectionHead
          label="FAQ"
          title="Câu hỏi thường gặp."
          text="Những điểm khách hàng thường hỏi trước khi bắt đầu website, AI tool hoặc automation cùng Elysium."
        />
        <div className="faq__list">
          {items.map(([question, answer], index) => (
            <details key={question}>
              <summary>
                <span>0{index + 1}</span>
                {question}
                <i>+</i>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
