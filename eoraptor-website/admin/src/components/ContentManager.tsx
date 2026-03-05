import { useState, useEffect } from 'react';
import axios from 'axios';
import './Manager.css';

interface Content {
  _id: string;
  key: string;
  valueZh: string;
  valueEn: string;
}

function ContentManager() {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Content | null>(null);
  const [formData, setFormData] = useState({
    key: '',
    valueZh: '',
    valueEn: ''
  });

  const token = localStorage.getItem('token');
  const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: { Authorization: `Bearer ${token}` }
  });

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const response = await api.get('/content');
      setContents(response.data);
    } catch (err) {
      alert('获取内容失败');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/content/${formData.key}`, {
        valueZh: formData.valueZh,
        valueEn: formData.valueEn
      });
      fetchContents();
      resetForm();
    } catch (err) {
      alert('保存失败');
    }
  };

  const resetForm = () => {
    setFormData({ key: '', valueZh: '', valueEn: '' });
    setEditing(null);
  };

  if (loading) return <div>加载中...</div>;

  return (
    <div className="manager">
      <h2>内容管理</h2>
      
      <form onSubmit={handleSubmit} className="manager-form">
        <input
          type="text"
          placeholder="内容键名（如：hero.title）"
          value={formData.key}
          onChange={(e) => setFormData({...formData, key: e.target.value})}
          required
          disabled={!!editing}
        />
        <textarea
          placeholder="内容（中文）"
          value={formData.valueZh}
          onChange={(e) => setFormData({...formData, valueZh: e.target.value})}
          rows={4}
          required
        />
        <textarea
          placeholder="内容（英文）"
          value={formData.valueEn}
          onChange={(e) => setFormData({...formData, valueEn: e.target.value})}
          rows={4}
          required
        />
        <div className="form-actions">
          <button type="submit">{editing ? '更新' : '添加'}</button>
          {editing && <button type="button" onClick={resetForm}>取消</button>}
        </div>
      </form>

      <div className="manager-list">
        {contents.map(content => (
          <div key={content._id} className="manager-item">
            <div className="item-info">
              <h4>{content.key}</h4>
              <p><strong>中文：</strong>{content.valueZh}</p>
              <p><strong>英文：</strong>{content.valueEn}</p>
            </div>
            <div className="item-actions">
              <button onClick={() => { setEditing(content); setFormData(content); }}>编辑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentManager;
