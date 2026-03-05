# Vercel 部署指南

## 1. 注册 Vercel
- 访问 https://vercel.com
- 用 GitHub 账号登录

## 2. 创建 GitHub 仓库
```bash
# 在 eoraptor-website 目录下
git init
git add .
git commit -m "Initial commit"
git branch -M main
# 在 GitHub 创建仓库后
git remote add origin https://github.com/YOUR_USERNAME/eoraptor-website.git
git push -u origin main
```

## 3. Vercel 部署
1. 登录 Vercel 后点击 "Add New Project"
2. 导入 GitHub 仓库
3. 框架预设选择 "Next.js"
4. 根目录选择 `frontend`
5. 点击 Deploy

## 4. 配置域名
1. 部署完成后，进入项目设置
2. 点击 "Domains"
3. 添加域名 `eoraptorx.com`
4. 按提示在 GoDaddy 添加 DNS 记录

## 5. 后端部署（可选）
后端 API 需要部署到 Railway/Render：
- Railway: https://railway.app
- Render: https://render.com

## 6. 环境变量
在 Vercel 项目设置中添加：
- `NEXT_PUBLIC_API_URL` = 你的后端地址

---

部署完成后即可通过 eoraptorx.com 访问官网！
