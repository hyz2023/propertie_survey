'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { buildPropertyRecordFromForm } from '../../lib/data.mjs';

const initialForm = {
  name: '',
  marketingName: '',
  registeredName: '',
  district: '',
  address: '',
  developer: '',
  tags: '',
  metrics: '官方已售=待补充\n官方未售=待补充\n粗算去化率=待补充',
  highlights: '',
  risks: '',
  nextActions: '补充官方销控\n补充 GIS 周边\n补充第三方辅助线索'
};

export default function AdminPage() {
  const [form, setForm] = useState(initialForm);
  const [saved, setSaved] = useState([]);
  const record = useMemo(() => buildPropertyRecordFromForm(form), [form]);

  function update(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function saveDraft() {
    const next = [record, ...saved].slice(0, 10);
    setSaved(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('property-portal-drafts', JSON.stringify(next));
    }
  }

  function loadDrafts() {
    if (typeof window === 'undefined') return;
    const raw = window.localStorage.getItem('property-portal-drafts');
    setSaved(raw ? JSON.parse(raw) : []);
  }

  return (
    <div className="page">
      <nav className="nav"><Link href="/" className="brand">楼盘资料库</Link><div className="nav-links"><Link href="/properties">楼盘</Link><Link href="/staff">店员</Link></div></nav>
      <section className="hero"><h1>录入助手</h1><p>先在网页里录入楼盘信息，实时生成标准 JSON。当前版本不会写入线上数据库；你可以复制 JSON 给我，我会把它正式挂到仓库并部署。</p></section>
      <section className="grid">
        <article className="card full">
          <h2>新增楼盘</h2>
          <div className="form-grid">
            <Field label="楼盘显示名" name="name" value={form.name} onChange={update} placeholder="例如：阅江府 / 某某项目" />
            <Field label="营销名" name="marketingName" value={form.marketingName} onChange={update} />
            <Field label="官方备案名" name="registeredName" value={form.registeredName} onChange={update} />
            <Field label="行政区" name="district" value={form.district} onChange={update} placeholder="例如：天河区" />
            <Field label="地址" name="address" value={form.address} onChange={update} className="full" />
            <Field label="开发商" name="developer" value={form.developer} onChange={update} />
            <Field label="标签（逗号分隔）" name="tags" value={form.tags} onChange={update} placeholder="天河区, 阳光家缘, 改善盘" />
            <Field label="指标（每行 label=value）" name="metrics" value={form.metrics} onChange={update} multiline className="full" />
            <Field label="客观亮点（每行一条）" name="highlights" value={form.highlights} onChange={update} multiline />
            <Field label="风险与边界（每行一条）" name="risks" value={form.risks} onChange={update} multiline />
            <Field label="下一步待补充（每行一条）" name="nextActions" value={form.nextActions} onChange={update} multiline className="full" />
          </div>
          <p><button className="button primary" onClick={saveDraft}>保存到本机草稿</button> <button className="button" onClick={loadDrafts}>读取本机草稿</button></p>
        </article>
        <article className="card">
          <h2>实时预览</h2>
          <h3>{record.name}</h3>
          <p>{record.address}</p>
          <div className="tags">{record.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          <div className="metrics">{record.metrics.map((metric) => <div className="metric" key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}</div>
        </article>
        <article className="card">
          <h2>可复制 JSON</h2>
          <pre>{JSON.stringify(record, null, 2)}</pre>
        </article>
        <article className="card full">
          <h2>本机草稿</h2>
          {saved.length ? saved.map((item) => <p key={item.slug}><strong>{item.name}</strong> · slug: <code>{item.slug}</code></p>) : <p>暂无草稿。点击“保存到本机草稿”后会保存在当前浏览器 localStorage。</p>}
        </article>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, placeholder, multiline = false, className = '' }) {
  const props = { name, value, placeholder, onChange: (event) => onChange(name, event.target.value) };
  return <label className={`field ${className}`}><span>{label}</span>{multiline ? <textarea {...props} /> : <input {...props} />}</label>;
}
