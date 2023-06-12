/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const CoinChart = ({data,setChartDay}) => {

    const chartContainerRef = useRef();
    const chart = useRef();
    const resizeObserver = useRef();

    function transformData(prices) {

        // prices.sort((a, b) => a[0] - b[0]);

        return prices?.map(price => ({
            time: price[0] / 1000,
          value: price[1],
        }));
      }

      useEffect(() => {
        chart.current = createChart(chartContainerRef.current, { width: 400, height: 300 });
        const lineSeries = chart.current.addLineSeries();
        
        const transformedData = transformData(data);
        lineSeries.setData(transformedData);
      
        resizeObserver.current = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            chart.current.applyOptions({ width, height });
        });

        resizeObserver.current.observe(chartContainerRef.current);

        return () => resizeObserver.current.disconnect();

      }, [data]);



  return (
    <>
    <button onClick={()=>setChartDay(1)}>1d</button>
    <button onClick={()=>setChartDay(7)}>7d</button>
    <button onClick={()=>setChartDay(15)}>15d</button>
        <div ref={chartContainerRef} style={{ width: '90%', height: '300px' }}>
                {/* Chart will be inserted here */}
            </div>
    </>
  )
}

export default CoinChart