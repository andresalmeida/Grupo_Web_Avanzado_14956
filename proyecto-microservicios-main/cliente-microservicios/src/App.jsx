import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [microservicio1Data, setMicroservicio1Data] = useState('');
  const [microservicio2Data, setMicroservicio2Data] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:3001');
        setMicroservicio1Data(response1.data);
      } catch (error) {
        console.error('Error fetching microservice 1:', error);
      }

      try {
        const response2 = await axios.get('http://localhost:3002');
        setMicroservicio2Data(response2.data);
      } catch (error) {
        console.error('Error fetching microservice 2:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Microservices Web Interface</h1>
      <div>
        <h2>Microservice 1</h2>
        <p>{microservicio1Data}</p>
      </div>
      <div>
        <h2>Microservice 2</h2>
        <p>{microservicio2Data}</p>
      </div>
    </div>
  );
}

export default App;