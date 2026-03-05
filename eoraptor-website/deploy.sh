#!/bin/bash

# Eoraptor 部署脚本

echo "开始部署 Eoraptor 项目..."

# 安装依赖
echo "安装后端依赖..."
cd backend && npm install && cd ..

echo "安装前端依赖..."
cd frontend && npm install && cd ..

echo "安装管理后台依赖..."
cd admin && npm install && cd ..

# 构建前端
echo "构建前端..."
cd frontend && npm run build && cd ..

# 构建管理后台
echo "构建管理后台..."
cd admin && npm run build && cd ..

# 创建上传目录
mkdir -p backend/uploads/docs

# 启动后端
echo "启动后端服务..."
cd backend && pm2 start ../ecosystem.config.json

echo "部署完成！"
echo ""
echo "访问地址："
echo "- 官网: http://localhost:3000"
echo "- API: http://localhost:3001"
echo "- 后台: http://localhost:5173 (开发模式)"
