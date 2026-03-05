import { useState, useEffect } from 'react';
import axios from 'axios';
import './Manager.css';

interface Banner {
  _id: string;
  title: string;
  titleEn: string;
  image: string;
  link: string;
  order: number;
  isActive: boolean;
}

function BannerManager() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Banner | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    titleEn: '',
    link: '',
    order: 0,
    isActive: true
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const token = localStorage.getItem('token');
  const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: { Authorization: `Bearer ${token}` }
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await api.get('/banner');
      setBanners(response.data);
    } catch (err) {
      alert('获取Banner失败');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value.toString());
    });
    if (selectedFile) data.append('image', selectedFile);

    try {
      if (editing) {
        await api.put(`/banner/${editing._id}`, data);
      } else {
        await api.post('/banner', data);
      }
      fetchBanners();
      resetForm();
    } catch (err) {
      alert('保存失败');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定删除？')) return;
    try {
      await api.delete(`/banner/${id}`);
      fetchBanners();
    } catch (err) {
      alert('删除失败');
    }
  };

  const resetForm = () => {
    setFormData({ title: '', titleEn: '', link: '', order: 0, isActive: true });
    setSelectedFile(null);
    setEditing(null);
  };

  if (loading) return <div>加载中...</div>;

  return (
    <div className="manager">
      <h2>Banner管理</h2>
      
      <form onSubmit={handleSubmit} className="manager-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="标题（中文）"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="标题（英文）"
            value={formData.titleEn}
            onChange={(e) => setFormData({...formData, titleEn: e.target.value})}
            required
          />
        </div>
        <input
          type="text"
          placeholder="链接地址"
          value={formData.link}
          onChange={(e) => setFormData({...formData, link: e.target.value})}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
        />
        <div className="form-actions">
          <button type="submit">{editing ? '更新' : '添加'}</button>
          {editing && <button type="button" onClick={resetForm}>取消</button>}
        </div>
      </form>

      <div className="manager-list">
        {banners.map(banner => (
          <div key={banner._id} className="manager-item">
            <img src={banner.image} alt={banner.title} className="item-image" />
            <div className="item-info">
              <h4>{banner.title}</h4>
              <p>{banner.titleEn}</p>
              <span className={banner.isActive ? 'active' : 'inactive'}>
                {banner.isActive ? '启用' : '禁用'}
              </span>
            </div>
            <div className="item-actions">
              <button onClick={() => { setEditing(banner); setFormData(banner); }}>编辑</button>
              <button onClick={() => handleDelete(banner._id)} className="delete">删除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerManager;
