export const siteConfig = {
  name: 'MouthGuard DAO',
  description: '一个专注于口腔健康研究的去中心化科学平台，结合 Web3 和 AI 技术，支持用户贡献健康数据、训练 AI 模型并获得激励。',
  url: 'https://mouthguard-dao.com',
  ogImage: 'https://mouthguard-dao.com/og.jpg',
  links: {
    twitter: 'https://x.com/MouthGuard_Dao',
    github: 'https://github.com/mouthguard-dao',
  },
  navigation: [
    { name: '首页', href: '/' },
    { name: '研究', href: '/research' },
    { name: '技术', href: '/technology' },
    { name: '生态', href: '/ecosystem' },
    { name: '联系我们', href: '/contact' },
  ],
  features: [
    {
      title: '去中心化研究',
      description: '使用区块链技术的开放科研平台',
      icon: 'Microscope',
    },
    {
      title: 'AI 驱动分析',
      description: '用于分析口腔图像的 AI 模型',
      icon: 'Database',
    },
    {
      title: '安全数据共享',
      description: '端到端加密 + 用户隐私保障',
      icon: 'Shield',
    },
  ],
  researchRoles: [
    { label: '研究员', value: 'researcher' },
    { label: '医生', value: 'doctor' },
    { label: '开发者', value: 'developer' },
    { label: '学生', value: 'student' },
    { label: '用户', value: 'user' },
    { label: '合作机构', value: 'organization' },
  ],
  dataTypes: [
    { label: '图像（如 X-ray）', value: 'image' },
    { label: '匿名问卷', value: 'survey' },
    { label: '结构化 JSON/CSV', value: 'structured' },
  ],
  contactTypes: [
    { label: '数据隐私问题', value: 'privacy' },
    { label: '研究合作请求', value: 'collaboration' },
    { label: '上链数据申请', value: 'onchain' },
    { label: 'AI 模型建议/反馈', value: 'feedback' },
    { label: '商务合作/投资洽谈', value: 'business' },
  ],
} 