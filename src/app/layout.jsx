import './globals.css';

export const metadata = {
  title: '楼盘与店员资料库',
  description: '可部署到 Vercel 的楼盘调研与店员信息 Web 应用'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
