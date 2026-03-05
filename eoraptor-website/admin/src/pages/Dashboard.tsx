import { useState, useEffect } from 'react';
import axios from 'axios';
import BannerManager from '../components/BannerManager';
import ContentManager from '../components/ContentManager';
import DocsManager from '../components/DocsManager';
import './Dashboard.css';

interface DashboardProps {
  onLogout: () => void;
}

function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('banner');
  const [stats, setStats] = useState({ banners: 0, contents: 0, docs: 0 });

  const token = localStorage.getItem('token');
  const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: { Authorization: `Bearer ${token}` }
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [banners, contents, docs] = await Promise.all([
        api.get('/banner'),
        api.get('/content'),
        api.get('/docs')
      ]);
      setStats({
        banners: banners.data.length,
        contents: contents.data.length,
        docs: docs.data.length
      });
    } catch (err) {
      console.error('Failed to fetch stats');
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Eoraptor 管理后台</h1>
        <button onClick={onLogout} className="logout-btn">退出登录</button>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Banner</h3>
          <p>{stats.banners}</p>
        </div>
        <div className="stat-card">
          <h3>内容项</h3>
          <p>{stats.contents}</p>
        </div>
        <div className="stat-card">
          <h3>文档</h3>
          <p>{stats.docs}</p>
        </div>
      </div>

      <nav className="dashboard-nav">
        <button
          className={activeTab === 'banner' ? 'active' : ''}
          onClick={() => setActiveTab('banner')}
        >
          Banner管理
        </button>
        <button
          className={activeTab === 'content' ? 'active' : ''}
          onClick={() => setActiveTab('content')}
        >
          内容管理
        </button>
        <button
          className={activeTab === 'docs' ? 'active' : ''}
          onClick={() => setActiveTab('docs')}
        >
          文档管理
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'banner' && <BannerManager />}
        {activeTab === 'content' && <ContentManager />}
        {activeTab === 'docs' && <DocsManager />}
      </div>
    </div>
  );
}

export default Dashboard;
