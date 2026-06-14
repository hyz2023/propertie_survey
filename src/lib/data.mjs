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

const propertyReports = {
  'chenyao-garden': {
    title: '保利天曜楼盘调研报告',
    summary: '基于阳光家缘官方备案/销控、高德位置线索和第三方辅助价格线索整理；官方事实与辅助线索分开呈现。',
    sections: [
      {
        heading: '官方事实',
        items: [
          '营销名“保利天曜”对应阳光家缘备案名“晨曜花园”。',
          '官方返回 9 个备案项目/楼栋，开发商一致为守鸿置地（广州）有限公司。',
          '官方合计已售 656 套、未售 271 套，按已售/未售粗算去化率约 70.77%。'
        ]
      },
      {
        heading: '价格边界',
        items: [
          '阳光家缘公开接口未稳定暴露单楼盘长期真实成交价序列，因此不伪造成交价曲线。',
          '第三方平台价格只能作为辅助市场线索，不能等同于官方网签成交价。'
        ]
      },
      {
        heading: '后续补充',
        items: ['补充高德 GIS 通勤/POI 表格。', '补充正式 HTML 报告附件下载入口。']
      }
    ]
  },
  'xipai-tianhe': {
    title: '西派天河序楼盘调研报告',
    summary: '基于阳光家缘备案名“雅序苑”、官方销控和高德 GIS 线索整理。',
    sections: [
      {
        heading: '官方事实',
        items: [
          '营销名“西派天河序”对应阳光家缘备案名“雅序苑”。',
          '官方返回 14 个备案项目/楼栋，开发商为广州市天河区顺信房地产有限公司。',
          '官方合计已售 512 套、未售 210 套，粗算去化率约 70.9%。'
        ]
      },
      {
        heading: 'GIS 事实',
        items: ['高德定位到牛利岗北街23号附近。', '到梅花园地铁站步行约 674m/9分钟。']
      },
      {
        heading: '价格边界',
        items: ['官方公开数据未提供可直接用于单盘价格曲线的长期成交价序列，因此不伪造成交价曲线。']
      }
    ]
  }
};

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

export function getPropertyReport(slug) {
  return propertyReports[slug] ?? null;
}

function splitLines(value) {
  return String(value ?? '')
    .split(/\r?\n|[,，]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function slugifyName(value) {
  const phrases = [
    ['测试', 'ceshi'],
    ['楼盘', 'loupan']
  ];
  let mapped = String(value ?? '').trim();
  for (const [from, to] of phrases) {
    mapped = mapped.replaceAll(from, ` ${to} `);
  }
  const dictionary = {
    '测': 'ce',
    '试': 'shi',
    '楼': 'lou',
    '盘': 'pan'
  };
  mapped = mapped
    .split('')
    .map((char) => dictionary[char] ?? char)
    .join('');
  return mapped
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'new-property';
}

function parseMetrics(value) {
  return String(value ?? '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split(/[=:：]/);
      return { label: label.trim(), value: rest.join('=').trim() || '待补充' };
    });
}

export function buildPropertyRecordFromForm(form) {
  const name = String(form.name ?? '').trim() || '新楼盘';
  return {
    slug: String(form.slug ?? '').trim() || slugifyName(name),
    name,
    marketingName: String(form.marketingName ?? '').trim() || name,
    registeredName: String(form.registeredName ?? '').trim() || '待补充',
    district: String(form.district ?? '').trim() || '待补充',
    address: String(form.address ?? '').trim() || '待补充',
    developer: String(form.developer ?? '').trim() || '待补充',
    status: String(form.status ?? '').trim() || '待核验',
    sourceType: String(form.sourceType ?? '').trim() || '待补充',
    updatedAt: String(form.updatedAt ?? '').trim() || new Date().toISOString().slice(0, 10),
    metrics: parseMetrics(form.metrics),
    highlights: splitLines(form.highlights),
    risks: splitLines(form.risks),
    tags: splitLines(form.tags),
    sourceUrls: [],
    nextActions: splitLines(form.nextActions)
  };
}
