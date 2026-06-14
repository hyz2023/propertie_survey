import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getStaffBySlug, getStaffList, getPropertiesForStaff, propertyUrl } from '../../../lib/data.mjs';

export function generateStaticParams() {
  return getStaffList().map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = getStaffBySlug(slug);
  return { title: member ? `${member.name} · 店员资料` : '店员不存在' };
}

export default async function StaffDetailPage({ params }) {
  const { slug } = await params;
  const member = getStaffBySlug(slug);
  if (!member) notFound();
  const properties = getPropertiesForStaff(member);

  return (
    <div className="page">
      <nav className="nav"><Link href="/" className="brand">楼盘资料库</Link><div className="nav-links"><Link href="/staff">全部店员</Link><Link href="/properties">楼盘</Link></div></nav>
      <section className="hero"><h1>{member.name}</h1><p>{member.role} · {member.store}</p></section>
      <section className="grid">
        <article className="card full">
          <h2>店员信息</h2>
          <dl className="kv"><dt>电话</dt><dd>{member.phone}</dd><dt>微信</dt><dd>{member.wechat}</dd><dt>状态</dt><dd>{member.status}</dd><dt>更新时间</dt><dd>{member.updatedAt}</dd></dl>
        </article>
        <article className="card">
          <h2>负责/关联楼盘</h2>
          {properties.map((property) => <p key={property.slug}><Link className="button" href={propertyUrl(property)}>{property.name}</Link></p>)}
        </article>
        <article className="card">
          <h2>备注</h2>
          <ul className="list">{member.notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </article>
      </section>
    </div>
  );
}
