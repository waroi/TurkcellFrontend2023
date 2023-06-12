/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { useTheme } from '../../context/ThemeContext';
import { Button } from './chartStyle';

const CoinChart = ({data,chartDay,setChartDay}) => {

  const {theme} = useTheme();

    const chartContainerRef = useRef();
    const chart = useRef();
    const lineSeries = useRef();
    const resizeObserver = useRef();

    function transformData(chartData) {
        return chartData?.map(data => ({
            time: data[0] / 1000,
          value: data[1],
        }));
      }
      

      useEffect(() => {
        if (!chart.current) {
          chart.current = createChart(chartContainerRef.current, { width: 400, height: 300 });
          lineSeries.current = chart.current.addLineSeries();
          resizeObserver.current = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            chart.current.applyOptions({ width, height });
          });
          resizeObserver.current.observe(chartContainerRef.current);
    
          return () => resizeObserver.current.disconnect();
        }
        
      }, []);

      useEffect(() => {
        if (chart.current && data) {
          const transformedData = transformData(data);
          lineSeries.current.setData(transformedData);
        }
      }, [data]);



  return (
    <>
      <Button active={chartDay===1} theme={theme} onClick={()=>setChartDay(1)}>1d</Button>
      <Button active={chartDay===7} theme={theme} onClick={()=>setChartDay(7)}>7d</Button>
      <Button active={chartDay===15} theme={theme} onClick={()=>setChartDay(15)}>15d</Button>
      <Button active={chartDay===30} theme={theme} onClick={()=>setChartDay(30)}>30d</Button>
      <div ref={chartContainerRef} style={{ width: '90%', height: '300px' }}>
        {/* Chart will be inserted here */}
      </div>
    </>
  )
}

export default CoinChart