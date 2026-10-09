export const images = {
  studio:
    "https://images.unsplash.com/photo-1623479322729-28b25c16b011?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600",
  code: "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  workspace:
    "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  laptop:
    "https://images.unsplash.com/photo-1525373698358-041e3a460346?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  servers:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  abstract:
    "https://images.unsplash.com/photo-1536924491042-b0466800ce46?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  architecture:
    "https://images.unsplash.com/photo-1569258592171-357ea26da4df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  team: "https://images.unsplash.com/photo-1746712241490-869f5352b1fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
  contentLensDashboard: "/images/content_lens/ContentLens – Piano Research project cover.png",
  contentLensAvt: "/images/content_lens/Screenshot 2026-10-09 133417.png",
  contentLensBrief: "/images/content_lens/Screenshot 2026-10-09 133821.png",
  contentLensEditor: "/images/content_lens/Screenshot 2026-10-09 133835.png",
  contentLensAnalysis: "/images/content_lens/Screenshot 2026-10-09 133916.png",
  contentLensWorkflow: "/images/content_lens/Screenshot 2026-10-09 134017.png",
  contentLensReview: "/images/content_lens/Screenshot 2026-10-09 134042.png",
  contentLensExport: "/images/content_lens/Screenshot 2026-10-09 134052.png",
  weddingInvitation: "/images/wedding_invitation/Screenshot 2026-10-09 145822.png",
  weddingInvitationDetails: "/images/wedding_invitation/Screenshot 2026-10-09 145838.png",
  weddingInvitationRsvp: "/images/wedding_invitation/Screenshot 2026-10-09 145901.png",
  weddingInvitationGallery: "/images/wedding_invitation/Screenshot 2026-10-09 145916.png",
  dentalWebsite: "/images/dental_website/Screenshot 2026-10-09 153116.png",
  dentalWebsiteServices: "/images/dental_website/Screenshot 2026-10-09 153146.png",
  dentalWebsiteDoctors: "/images/dental_website/Screenshot 2026-10-09 153202.png",
  dentalWebsiteBooking: "/images/dental_website/Screenshot 2026-10-09 153217.png",
  aura: "/images/aura/Screenshot 2026-10-09 154031.png",
  auraExperience: "/images/aura/Screenshot 2026-10-09 154215.png",
  auraSystems: "/images/aura/Screenshot 2026-10-09 154235.png",
  auraContact: "/images/aura/Screenshot 2026-10-09 154312.png",
  momoBaby: "/images/momo_baby/Screenshot 2026-10-09 162510.png",
  momoBabyProducts: "/images/momo_baby/Screenshot 2026-10-09 162522.png",
  momoBabyDetails: "/images/momo_baby/Screenshot 2026-10-09 162541.png",
  momoBabyCart: "/images/momo_baby/Screenshot 2026-10-09 162605.png",
  realEstateCrm: "/images/real_estate_crm/Screenshot 2026-10-09 164347.png",
  realEstateCrmPipeline: "/images/real_estate_crm/Screenshot 2026-10-09 164413.png",
  realEstateCrmProperties: "/images/real_estate_crm/Screenshot 2026-10-09 164429.png",
  realEstateCrmAnalytics: "/images/real_estate_crm/Screenshot 2026-10-09 164454.png",
  highEndPortfolio: "/images/high_end_portfolio/Screenshot 2026-10-09 171351.png",
  highEndPortfolioAbout: "/images/high_end_portfolio/Screenshot 2026-10-09 171415.png",
  highEndPortfolioWork: "/images/high_end_portfolio/Screenshot 2026-10-09 171503.png",
  highEndPortfolioShowcase: "/images/high_end_portfolio/Screenshot 2026-10-09 171520.png",
  highEndPortfolioServices: "/images/high_end_portfolio/Screenshot 2026-10-09 171612.png",
  highEndPortfolioContact: "/images/high_end_portfolio/Screenshot 2026-10-09 171635.png",
} as const

export const contentLensImages = [
  images.contentLensDashboard,
  images.contentLensAvt,
  images.contentLensBrief,
  images.contentLensEditor,
  images.contentLensAnalysis,
  images.contentLensWorkflow,
  images.contentLensReview,
  images.contentLensExport,
] as const

export const weddingInvitationImages = [
  images.weddingInvitation,
  images.weddingInvitationDetails,
  images.weddingInvitationRsvp,
  images.weddingInvitationGallery,
] as const

export const dentalWebsiteImages = [
  images.dentalWebsite,
  images.dentalWebsiteServices,
  images.dentalWebsiteDoctors,
  images.dentalWebsiteBooking,
] as const

export const auraImages = [
  images.aura,
  images.auraExperience,
  images.auraSystems,
  images.auraContact,
] as const

export const momoBabyImages = [
  images.momoBaby,
  images.momoBabyProducts,
  images.momoBabyDetails,
  images.momoBabyCart,
] as const

export const realEstateCrmImages = [
  images.realEstateCrm,
  images.realEstateCrmPipeline,
  images.realEstateCrmProperties,
  images.realEstateCrmAnalytics,
] as const

export const highEndPortfolioImages = [
  images.highEndPortfolio,
  images.highEndPortfolioAbout,
  images.highEndPortfolioWork,
  images.highEndPortfolioShowcase,
  images.highEndPortfolioServices,
  images.highEndPortfolioContact,
] as const

export type ImageKey = keyof typeof images
