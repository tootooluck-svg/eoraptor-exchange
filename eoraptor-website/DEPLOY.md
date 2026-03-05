# Eoraptor 部署配置

## 环境要求
- Node.js 18+
- MongoDB 5.0+
- Nginx (反向代理)
- PM2 (进程管理)

## 部署步骤

### 1. 后端部署
```bash
cd backend
npm install
npm start
```

### 2. 前端部署
```bash
cd frontend
npm install
npm run build
# 静态文件部署到 nginx
```

### 3. 管理后台部署
```bash
cd admin
npm install
npm run build
# 静态文件部署到 nginx
```

## 域名配置
- 官网：eoraptorx.com → frontend
- API：api.eoraptorx.com → backend:3001
- 后台：admin.eoraptorx.com → admin

## 环境变量
```
MONGODB_URI=mongodb://localhost:27017/eoraptor
JWT_SECRET=your-secret-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=a123456
```
