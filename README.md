# HamR 官网 (hamr.store)

> HamR 品牌展示门户 - 温暖可信赖的家庭智能助理

[![Status](https://img.shields.io/badge/status-开发中-yellow)](https://github.com/hamr-hub/hamr-website)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Framework](https://img.shields.io/badge/framework-Vite+React-61dafb)](https://vitejs.dev)

## 📋 项目概述

**项目编号**: PROJ-002  
**域名**: hamr.store  
**优先级**: ⭐⭐⭐ 高  
**状态**: 待开发  

HamR 官网是品牌对外展示的第一窗口，负责向用户传达产品理念、介绍核心功能、引导用户注册体验。

## 🎯 核心职责

### 1. 品牌传达
- 传递"温暖可信赖"的产品理念
- 展示 HamR 的产品愿景和价值主张
- 建立用户信任基础

### 2. 产品介绍
- **HamR 管家**: 五维家庭数据管理（人/时/事/物/境）
- **JiaBu 决策**: 智能决策辅助与幸福感评估
- 功能详解、使用场景、用户价值

### 3. 用户导流
- 引导用户注册账号（跳转 `account.hamr.store`）
- 引导用户体验产品（跳转 `app.hamr.store`）
- 引导开发者部署（跳转 `deploy.hamr.top`）

### 4. 信任建立
- 隐私承诺与安全保障说明
- 开源理念与社区透明
- 数据主权与私有部署优势

## 📁 页面结构

```
/                    # 首页 Landing Page
/features            # 产品功能页
/about               # 关于我们
/privacy             # 隐私与安全
```

## 🛠️ 技术栈

| 技术 | 用途 | 备注 |
|-----|------|------|
| **Vite** | 构建工具 | 快速开发体验 |
| **React 18** | 前端框架 | TypeScript 严格模式 |
| **Tailwind CSS** | 样式框架 | 响应式设计 |
| **React Router** | 路由管理 | 单页应用导航 |
| **Framer Motion** | 动画库 | 流畅交互体验 |
| **Vercel** | 部署托管 | 零运维成本 |

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📦 项目结构

```
hamr-website/
├── src/
│   ├── components/      # 可复用组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── FeatureCard.tsx
│   ├── pages/          # 页面组件
│   │   ├── Home.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   └── Privacy.tsx
│   ├── styles/         # 样式文件
│   ├── App.tsx
│   └── main.tsx
├── public/             # 静态资源
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 设计规范

### 品牌色彩
- **主色调**: 温暖橙色 (#FF6B35) - 代表温暖与活力
- **辅助色**: 深蓝色 (#2C3E50) - 代表可信与专业
- **背景色**: 浅灰色 (#F8F9FA) - 简洁清爽

### 字体
- **标题**: Inter / 思源黑体
- **正文**: Roboto / 苹方

### 响应式断点
- 移动端: < 768px
- 平板: 768px - 1024px
- 桌面: > 1024px

## 📊 里程碑

- [ ] **2026-03-10**: 需求确认
- [ ] **2026-03-20**: 视觉设计
- [ ] **2026-04-05**: 开发完成
- [ ] **2026-04-15**: 测试上线

## 🔗 相关链接

- [账号中心](https://account.hamr.store) - 用户注册与登录
- [HamR 管家](https://app.hamr.store) - 核心应用
- [帮助中心](https://help.hamr.store) - 用户支持
- [开发者门户](https://hamr.top) - 技术社区

## 📝 开发规范

### Git 提交规范

```
feat: 新功能
fix: 修复问题
docs: 文档更新
style: 样式调整
refactor: 重构代码
test: 测试相关
chore: 构建/工具配置
```

### 代码风格
- 使用 ESLint + Prettier
- TypeScript 严格模式
- 组件使用函数式写法
- 遵循 React Hooks 最佳实践

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 👥 维护者

- **HamR Team** - [GitHub Organization](https://github.com/hamr-hub)

## 📞 联系方式

- 项目主页: https://hamr.store
- 问题反馈: https://github.com/hamr-hub/hamr-website/issues
- 邮箱: support@hamr.store

---

**最后更新**: 2026-03-05  
**项目状态**: 待开发  
**部署环境**: https://hamr.store (即将上线)
