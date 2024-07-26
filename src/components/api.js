import React, { useState, useEffect } from 'react';

const ApiExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("access token":

"eyJhb@ci0ilIUzI1NiIsInR5cCI6IkpXVC39.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEwODM1MjY4LCJpYXQ10jE3MTA4MzQ5Nj EsImZzcyI6IkFmZm9yZG1lZCIsImp@aSI6IjM3YmI0OTNjLTczZDMtNDd1YS04Njc1LTIxZjY2ZWY5YjczNSIsInN1YiI6InJhaH VsQGF1Yy51ZHUifSwiY29tcGFueU5hbWUiOiJnb@1hcnQiLCJjbGllbnRJRCI6IjM3YmI00TNjLTczZDMtNDd1YS04Njc1LTIxZj YZZWYSYjczNSIsImNsaWVudFN1Y3J1dCI6IkhWSVFCVmJxbVRHRW1hRUQiLCJvd25lck5hbWUi0iJSYWh1bCIsIm93bmVyRW1haw wi013yYWh1bEBhYmMuZWR1Iiwicm9sbE5vIjoiMSJ9.gmk2F73GZ7q7EaIGDShc4oDKK1zWQ9Up3xQ-4Dbsu8A",

"expires_in": 1718835268

);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default api;