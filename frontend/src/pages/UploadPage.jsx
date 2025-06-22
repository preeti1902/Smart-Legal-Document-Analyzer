import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UploadPage() {
  const [file, setFile] = useState(null);
  const [contracts, setContracts] = useState([]);

  const token = localStorage.getItem('token');
  const authHeader = React.useMemo(
    () => ({ headers: { Authorization: `Bearer ${token}` } }),
    [token]
  );

  const upload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('/api/contracts/upload', formData, authHeader);
    fetchContracts();
  };

  const fetchContracts = React.useCallback(async () => {
    const res = await axios.get('/api/contracts', authHeader);
    setContracts(res.data);
  }, [authHeader]);

  const download = (id) => {
    window.open(`/api/contracts/download/${id}`, '_blank');
  };

  useEffect(() => {
    fetchContracts();
  }, [fetchContracts]);

  return (
    <div>
      <h2>Upload Contract</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>

      <h3>Uploaded Contracts</h3>
      <ul>
        {contracts.map(c => (
          <li key={c.id}>
            {c.filename} - {c.status}
            <button onClick={() => download(c.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UploadPage;
