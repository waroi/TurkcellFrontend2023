
import { getWeather } from './utilities/api';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeather('ankara');
        console.log('Weather Data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Diğer bileşenler */}
    </div>
  );
}

export default App;
