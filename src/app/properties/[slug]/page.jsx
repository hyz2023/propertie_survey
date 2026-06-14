import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProperties, getPropertyBySlug, getPropertyReport } from '../../../lib/data.mjs';

export function generateStaticParams() {
  return getProperties().map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  return { title: property ? `${property.name} · 楼盘资料库` : '楼盘不存在' };
}

export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();
  const report = getPropertyReport(slug);

  return (
    <div className="page">
      <nav className="nav"><Link href="/" className="brand">楼盘资料库</Link><div className="nav-links"><Link href="/properties">全部楼盘</Link><Link href="/staff">店员</Link></div></nav>
      <section className="hero"><h1>{property.name}</h1><p>{property.address}</p></section>
      <section className="grid">
        <article className="card full">
          <h2>基础信息</h2>
          <dl className="kv">
            <dt>营销名</dt><dd>{property.marketingName}</dd>
            <dt>备案名</dt><dd>{property.registeredName}</dd>
            <dt>行政区</dt><dd>{property.district}</dd>
            <dt>开发商</dt><dd>{property.developer}</dd>
            <dt>状态</dt><dd>{property.status}</dd>
            <dt>数据来源</dt><dd>{property.sourceType}</dd>
            <dt>更新时间</dt><dd>{property.updatedAt}</dd>
          </dl>
          <div className="tags">{property.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        </article>
        <article className="card full">
          <h2>核心指标</h2>
          <div className="metrics">{property.metrics.map((metric) => <div className="metric" key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}</div>
        </article>
        {report ? <article className="card full report-card">
          <h2>{report.title}</h2>
          <p>{report.summary}</p>
          <div className="report-grid">
            {report.sections.map((section) => <section key={section.heading} className="report-section"><h3>{section.heading}</h3><ul className="list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
          </div>
        </article> : null}
        <article className="card"><h2>客观亮点</h2><ul className="list">{property.highlights.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="card"><h2>风险与边界</h2><ul className="list">{property.risks.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="card">
          <h2>证据来源</h2>
          <ul className="list">{property.sourceUrls.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
        </article>
        <article className="card">
          <h2>下一步待补充</h2>
          <ul className="list">{property.nextActions.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>
    </div>
  );
}
