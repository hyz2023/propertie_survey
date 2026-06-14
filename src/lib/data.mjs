const properties = [
  {
    slug: 'chenyao-garden',
    name: '晨曜花园 / 保利天曜',
    marketingName: '保利天曜',
    registeredName: '晨曜花园',
    district: '天河区',
    address: '广州市天河区员村街员村水厂路10号',
    developer: '守鸿置地（广州）有限公司',
    status: '在售/官方销控可查',
    sourceType: '广州市住建局阳光家缘 + 第三方辅助线索',
    updatedAt: '2026-06-14',
    metrics: [
      { label: '官方候选项目', value: '9 个' },
      { label: '官方已售', value: '656 套' },
      { label: '官方未售', value: '271 套' },
      { label: '粗算去化率', value: '70.77%' }
    ],
    highlights: [
      '阳光家缘备案名为“晨曜花园”，营销名“保利天曜”直接检索不稳定。',
      '官方地址集中在天河区员村街员村水厂路10号。',
      '样本楼栋 B-3# 预售证 20250141，分户销控可核验。'
    ],
    risks: [
      '官方公开接口未稳定提供单盘长期真实成交价序列。',
      '第三方价格只能作为辅助线索，不能替代官方网签口径。'
    ],
    tags: ['天河区', '金融城', '阳光家缘', '改善盘'],
    sourceUrls: [
      { label: '阳光家缘项目检索接口', url: 'https://zfcj.gz.gov.cn/ysqgk/Api/WebApi/fdcxmxxlb.ashx' },
      { label: '国家统计局价格指数入口', url: 'https://www.stats.gov.cn/sj/' }
    ],
    nextActions: ['补充高德 GIS 路线结果', '补充第三方平台价格线索并标注非官方口径', '把正式 HTML 调研报告挂为附件或详情区块']
  },
  {
    slug: 'xipai-tianhe',
    name: '雅序苑 / 西派天河序',
    marketingName: '西派天河序',
    registeredName: '雅序苑',
    district: '天河区',
    address: '广州市天河区兴华街牛利岗社区牛利岗北街23号',
    developer: '广州市天河区顺信房地产有限公司',
    status: '在售/官方销控可查',
    sourceType: '广州市住建局阳光家缘 + 高德 GIS 辅助',
    updatedAt: '2026-06-14',
    metrics: [
      { label: '官方候选项目', value: '14 个' },
      { label: '官方已售', value: '512 套' },
      { label: '官方未售', value: '210 套' },
      { label: '粗算去化率', value: '约 70.9%' }
    ],
    highlights: [
      '阳光家缘备案名为“雅序苑”，营销名“西派天河序”直接检索不稳定。',
      '高德定位到牛利岗北街23号附近，到梅花园站步行约 674m/9分钟。',
      '样本楼栋自编2# 预售证 20240345，官方销控可核验。'
    ],
    risks: [
      '多楼栋项目需要区分全项目汇总和样本楼栋口径。',
      '学校 POI 不等于学位，需教育局招生地段核验。'
    ],
    tags: ['天河区', '天河北北侧', '阳光家缘', '高德GIS'],
    sourceUrls: [
      { label: '阳光家缘项目检索接口', url: 'https://zfcj.gz.gov.cn/ysqgk/Api/WebApi/fdcxmxxlb.ashx' },
      { label: '高德开放平台', url: 'https://lbs.amap.com/api/webservice/summary' }
    ],
    nextActions: ['补充最新官方销控快照', '核验教育局招生地段', '把正式 HTML 调研报告挂为附件或详情区块']
  }
];

const staff = [
  {
    slug: 'demo-sales-01',
    name: '示例店员',
    role: '置业/门店顾问',
    phone: '待补充',
    wechat: '待补充',
    store: '示例门店',
    status: '待核验',
    assignedPropertySlugs: ['chenyao-garden', 'xipai-tianhe'],
    notes: ['这里先放示例结构；后续可以把真实店员信息按同样字段挂上去。'],
    updatedAt: '2026-06-14'
  }
];

export function getProperties() {
  return properties;
}

export function getStaffList() {
  return staff;
}

export function getPropertyBySlug(slug) {
  return properties.find((item) => item.slug === slug) ?? null;
}

export function getStaffBySlug(slug) {
  return staff.find((item) => item.slug === slug) ?? null;
}

export function propertyUrl(property) {
  return `/properties/${property.slug}`;
}

export function staffUrl(member) {
  return `/staff/${member.slug}`;
}

export function getDashboardStats() {
  return {
    propertyCount: properties.length,
    staffCount: staff.length,
    districts: [...new Set(properties.map((item) => item.district))].sort(),
    latestUpdate: [...properties.map((item) => item.updatedAt), ...staff.map((item) => item.updatedAt)].sort().at(-1) ?? null
  };
}

export function getPropertiesForStaff(member) {
  return member.assignedPropertySlugs
    .map((slug) => getPropertyBySlug(slug))
    .filter(Boolean);
}
