# 楼盘与店员资料库

一个可直接部署到 Vercel 的 Next.js Web 应用，用来把楼盘调研、店员信息挂载为稳定链接。

## 本地运行

```bash
npm install
npm run dev
```

访问：

- 首页：`http://localhost:3000/`
- 楼盘列表：`http://localhost:3000/properties`
- 楼盘详情：`http://localhost:3000/properties/chenyao-garden`
- 店员列表：`http://localhost:3000/staff`
- 店员详情：`http://localhost:3000/staff/demo-sales-01`
- 楼盘 API：`http://localhost:3000/api/properties`
- 单楼盘 API：`http://localhost:3000/api/properties/chenyao-garden`
- 店员 API：`http://localhost:3000/api/staff`

## Vercel 部署

1. 把本目录提交到 GitHub 仓库。
2. 在 Vercel 导入仓库。
3. Framework 选择 Next.js，默认构建命令 `npm run build`。
4. 部署后每个页面都会有线上链接。

项目已包含 `vercel.json`，Vercel 可以直接识别。

## 新增楼盘/店员

当前数据在：

```text
src/lib/data.mjs
```

新增楼盘：往 `properties` 数组追加一条记录，并设置唯一 `slug`，例如：

```js
{
  slug: 'new-property',
  name: '新楼盘',
  marketingName: '新楼盘营销名',
  registeredName: '官方备案名',
  district: '天河区',
  address: '详细地址',
  developer: '开发商',
  status: '待核验',
  sourceType: '数据来源',
  updatedAt: '2026-06-14',
  metrics: [],
  highlights: [],
  risks: [],
  tags: []
}
```

新增后访问：`/properties/new-property`。

新增店员：往 `staff` 数组追加记录，并用 `assignedPropertySlugs` 关联楼盘。

## 数据原则

- 楼盘调研优先挂官方一手数据。
- 店员、渠道、第三方价格线索必须标注来源和更新时间。
- 第三方数据不等于官方网签或阳光家缘官方口径。
