# HamR 官网 (hamr.store)

HamR 家庭智能助理平台的官方网站。

## 项目信息

- **项目名称**: HamR 官网建设
- **项目编号**: PROJ-002
- **域名**: hamr.store
- **技术栈**: React + TypeScript + Vite + Tailwind CSS
- **部署**: Cloudflare Pages / Vercel

## 功能特性

- 产品介绍和核心价值展示
- 品牌视觉设计
- 产品下载/注册入口
- 响应式设计（移动端适配）
- SEO 优化

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
hamr-website/
├── src/
│   ├── components/     # React 组件
│   ├── pages/          # 页面组件
│   ├── assets/         # 静态资源
│   ├── styles/         # 样式文件
│   ├── App.tsx         # 应用入口
│   └── main.tsx        # 主入口
├── public/             # 公共资源
├── index.html          # HTML 模板
└── package.json        # 依赖配置
```

## 部署

项目使用 Cloudflare Pages 或 Vercel 进行部署，支持自动部署。

```bash
# 构建
npm run build

# dist/ 目录为构建输出
```

## 相关文档

- [项目文档](../../projects/active/官网建设-20260305.md)
- [域名规划](../../projects/active/域名规划与基础设施-20260304.md)

## License

MIT
