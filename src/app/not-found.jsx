import Link from 'next/link';

export default function NotFound() {
  return <div className="page"><div className="card full"><h1>没有找到页面</h1><p>这个链接暂时不存在，可能是 slug 还没挂载。</p><Link className="button primary" href="/">返回首页</Link></div></div>;
}
