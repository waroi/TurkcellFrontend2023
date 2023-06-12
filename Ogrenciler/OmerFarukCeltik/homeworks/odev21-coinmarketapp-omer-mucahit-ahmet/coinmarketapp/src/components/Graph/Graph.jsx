/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { useTheme } from "../../context/ThemeContext";

const Graph = ({ item }) => {
  const chartContainerRef = useRef(null);
  const { theme } = useTheme();
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${item}`
        );
        const charted = await response.json();
        const chartData = transformChartData(charted.chart);


        if (chartInstanceRef.current) {
          chartInstanceRef.current.remove();
        }

        const chartOptions = {
          layout: {
            textColor: theme === "light" ? "black" : "white",
            background: { type: 'solid', color: 'transparent' },
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

       
        chartInstanceRef.current = chart;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [item, theme]);

  const transformChartData = (data) => {
    return data.map((item) => ({
      time: new Date(item[0] * 1000).getTime() / 1000, 
      value: item[1], 
    }));
  };

  return <div id="container" style={{ width: '1400px', height: '500px', margin: '0 auto' }} ref={chartContainerRef}></div>;
};

export default Graph;