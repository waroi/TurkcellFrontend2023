import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Graph = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coinstats.app/public/v1/charts?period=3m&coinId=bitcoin'
        );
        const data = await response.json();
        const chartData = transformChartData(data.chart);
        console.log(chartData)
        const chartOptions = {
          layout: {
            textColor: 'white',
            background: { type: 'solid', color: '#1A1A1D' },
          },
        };

        const chart = createChart(chartContainerRef.current, chartOptions);

        const lineSeries = chart.addLineSeries();
        lineSeries.setData(chartData);

        const baselineSeriesOptions = {
          topLineColor: 'rgba(38, 166, 154, 1)',
          topFillColor1: 'rgba(38, 166, 154, 0.28)',
          topFillColor2: 'rgba(38, 166, 154, 0.05)',
          bottomLineColor: 'rgba(239, 83, 80, 1)',
          bottomFillColor1: 'rgba(239, 83, 80, 0.05)',
          bottomFillColor2: 'rgba(239, 83, 80, 0.28)',
        };

        const baselineSeries = chart.addBaselineSeries(baselineSeriesOptions);
        baselineSeries.setData(chartData);

        chart.timeScale().fitContent();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to transform the chart data format
  const transformChartData = (data) => {
    return data.map((item) => ({
      time: (new Date(item[0] * 1000).getTime() / 1000), // Convert timestamp to milliseconds
      value: item[1], // Use the appropriate value from the data array
    }));
  };
  return <div id="container" style={{ width: '1400px', height: '500px', margin: '0 auto' }}ref={chartContainerRef}></div>;
};

export default Graph;