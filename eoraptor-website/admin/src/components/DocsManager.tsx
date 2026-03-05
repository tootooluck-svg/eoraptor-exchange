import { useState, useEffect } from 'react';
import axios from 'axios';
import './Manager.css';

interface Doc {
  name: string;
  url: string;
}

function DocsManager() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const token = localStorage.getItem('token');
  const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: { Authorization: `Bearer ${token}` }
  });

  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    try {
      const response = await api.get('/docs');
      setDocs(response.data);
    } catch (err) {
      alert('获取文档失败');
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    const data = new FormData();
    data.append('doc', selectedFile);

    try {
      await api.post('/docs', data);
      fetchDocs();
      setSelectedFile(null);
    } catch (err) {
      alert('上传失败');
    }
  };

  const handleDelete = async (filename: string) => {
    if (!confirm('确定删除？')) return;
    try {
      await api.delete(`/docs/${filename}`);
      fetchDocs();
    } catch (err) {
      alert('删除失败');
    }
  };

  if (loading) return <div>加载中...</div>;

  return (
    <div className="manager">
      <h2>文档管理</h2>
      
      <form onSubmit={handleUpload} className="manager-form">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
        />
        <button type="submit" disabled={!selectedFile}>上传文档</button>
      </form>

      <div className="manager-list">
        {docs.map(doc => (
          <div key={doc.name} className="manager-item">
            <div className="item-info">
              <h4>{doc.name}</h4>
              <a href={doc.url} target="_blank" rel="noopener noreferrer">查看</a>
            </div>
            <div className="item-actions">
              <button onClick={() => handleDelete(doc.name)} className="delete">删除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocsManager;
