'use client';

import { useState } from 'react';
import { Lock, Save, Image, Type, Globe } from 'lucide-react';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('hero');
  
  // Content state
  const [heroContent, setHeroContent] = useState({
    title: 'Eoraptor 交易所',
    subtitle: '面向全球用户的高性能数字资产交易平台',
    description: '安全、快速、专业的加密货币交易服务',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('密码错误');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
        <div className="glass-card rounded-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
              <Lock className="w-8 h-8 text-brand-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">后台管理</h1>
            <p className="text-gray-400">请输入密码登录</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 mb-4"
            />
            <button
              type="submit"
              className="w-full py-3 bg-brand-500 hover:bg-brand-600 text-dark-900 font-semibold rounded-xl transition"
            >
              登录
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Admin Header */}
      <nav className="glass-card border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-brand-400">Eoraptor 后台管理</span>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-gray-400 hover:text-white transition"
          >
            退出登录
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen glass-card border-r border-white/10">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab('hero')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === 'hero' ? 'bg-brand-500/20 text-brand-400' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <Type className="w-5 h-5" />
              Hero 区域
            </button>
            
            <button
              onClick={() => setActiveTab('features')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === 'features' ? 'bg-brand-500/20 text-brand-400' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <Globe className="w-5 h-5" />
              功能特性
            </button>
            
            <button
              onClick={() => setActiveTab('images')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === 'images' ? 'bg-brand-500/20 text-brand-400' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <Image className="w-5 h-5" />
              图片管理
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'hero' && (
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Hero 区域设置</h2>
              
              <div className="glass-card rounded-2xl p-6 space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">标题</label>
                  <input
                    type="text"
                    value={heroContent.title}
                    onChange={(e) => setHeroContent({...heroContent, title: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white focus:outline-none focus:border-brand-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">副标题</label>
                  <input
                    type="text"
                    value={heroContent.subtitle}
                    onChange={(e) => setHeroContent({...heroContent, subtitle: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white focus:outline-none focus:border-brand-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">描述</label>
                  <textarea
                    value={heroContent.description}
                    onChange={(e) => setHeroContent({...heroContent, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white focus:outline-none focus:border-brand-500"
                  />
                </div>
                
                <button className="flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-dark-900 font-semibold rounded-xl transition">
                  <Save className="w-5 h-5" />
                  保存更改
                </button>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">功能特性设置</h2>
              <p className="text-gray-400">功能特性内容管理（开发中）</p>
            </div>
          )}

          {activeTab === 'images' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">图片管理</h2>
              <div className="glass-card rounded-2xl p-6">
                <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center">
                  <Image className="w-12 h-12 mx-auto mb-4 text-gray-500" />
                  <p className="text-gray-400 mb-4">拖拽图片到这里，或点击上传</p>
                  <button className="px-6 py-2 bg-brand-500/20 text-brand-400 rounded-lg hover:bg-brand-500/30 transition">
                    选择文件
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}