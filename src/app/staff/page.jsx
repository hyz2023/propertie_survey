import Link from 'next/link';
import { getStaffList, staffUrl } from '../../lib/data.mjs';

export const metadata = { title: '店员列表 · 楼盘资料库' };

export default function StaffPage() {
  const staff = getStaffList();
  return (
    <div className="page">
      <nav className="nav"><Link href="/" className="brand">楼盘资料库</Link><div className="nav-links"><Link href="/properties">楼盘</Link></div></nav>
      <section className="hero"><h1>店员列表</h1><p>每个店员都有独立资料链接，后续可以挂联系方式、负责楼盘和备注。</p></section>
      <section className="grid">
        {staff.map((member) => (
          <article className="card" key={member.slug}>
            <h2><Link href={staffUrl(member)}>{member.name}</Link></h2>
            <p>{member.role} · {member.store}</p>
            <dl className="kv"><dt>电话</dt><dd>{member.phone}</dd><dt>微信</dt><dd>{member.wechat}</dd><dt>状态</dt><dd>{member.status}</dd></dl>
            <p><Link className="button primary" href={staffUrl(member)}>打开店员链接</Link></p>
          </article>
        ))}
      </section>
    </div>
  );
}
