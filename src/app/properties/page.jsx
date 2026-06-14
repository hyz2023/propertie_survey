import Link from 'next/link';
import { getProperties, propertyUrl } from '../../lib/data.mjs';

export const metadata = { title: '楼盘列表 · 楼盘资料库' };

export default function PropertiesPage() {
  const properties = getProperties();
  return (
    <div className="page">
      <nav className="nav"><Link href="/" className="brand">楼盘资料库</Link><div className="nav-links"><Link href="/staff">店员</Link></div></nav>
      <section className="hero"><h1>楼盘列表</h1><p>每个楼盘都有独立链接，可直接发给团队或客户阅读。</p></section>
      <section className="grid">
        {properties.map((property) => (
          <article className="card" key={property.slug}>
            <h2><Link href={propertyUrl(property)}>{property.name}</Link></h2>
            <p>{property.address}</p>
            <div className="tags">{property.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <div className="metrics">{property.metrics.map((metric) => <div className="metric" key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}</div>
            <Link className="button primary" href={propertyUrl(property)}>打开楼盘链接</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
