import Link from 'next/link';
import { getDashboardStats, getProperties, getStaffList, propertyUrl, staffUrl } from '../lib/data.mjs';

function Nav() {
  return <nav className="nav"><Link href="/" className="brand">楼盘资料库</Link><div className="nav-links"><Link href="/properties">楼盘</Link><Link href="/staff">店员</Link></div></nav>;
}

export default function HomePage() {
  const stats = getDashboardStats();
  const properties = getProperties();
  const staff = getStaffList();
  return (
    <div className="page">
      <Nav />
      <section className="hero">
        <h1>楼盘、店员、调研报告统一挂载成链接</h1>
        <p>这是一个面向 Vercel 部署的 Web 应用。以后新增楼盘或店员，只要追加数据记录，就会自动生成可分享链接，例如 /properties/chenyao-garden 和 /staff/demo-sales-01。</p>
      </section>
      <section className="grid">
        <div className="card third"><h3>楼盘数量</h3><div className="metric"><b>{stats.propertyCount}</b><span>properties</span></div></div>
        <div className="card third"><h3>店员数量</h3><div className="metric"><b>{stats.staffCount}</b><span>staff</span></div></div>
        <div className="card third"><h3>覆盖区域</h3><div className="metric"><b>{stats.districts.join('、') || '待补充'}</b><span>districts</span></div></div>
        <div className="card">
          <h2>最近楼盘</h2>
          {properties.map((property) => <p key={property.slug}><Link className="button" href={propertyUrl(property)}>{property.name}</Link></p>)}
        </div>
        <div className="card">
          <h2>店员信息</h2>
          {staff.map((member) => <p key={member.slug}><Link className="button" href={staffUrl(member)}>{member.name} · {member.store}</Link></p>)}
        </div>
        <div className="card full notice">
          数据原则：官方一手数据优先；第三方平台、店员口径和价格线索必须标明来源与更新时间，避免把营销资料误当事实。
        </div>
      </section>
      <footer className="footer">最后更新：{stats.latestUpdate}</footer>
    </div>
  );
}
