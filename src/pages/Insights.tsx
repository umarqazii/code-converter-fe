import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { Chart, ChartConfiguration } from 'chart.js/auto';

const Insights: React.FC = () => {
  const usageChartRef = useRef<HTMLCanvasElement | null>(null);
  const trendsChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let usageChart: Chart | undefined;
    let trendsChart: Chart | undefined;

    if (usageChartRef.current) {
      const usageChartConfig: ChartConfiguration = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Active Users',
            data: [500, 800, 900, 1200, 1500, 2000, 2500],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true,
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            }
          }
        }
      };
      usageChart = new Chart(usageChartRef.current, usageChartConfig);
    }

    if (trendsChartRef.current) {
      const trendsChartConfig: ChartConfiguration = {
        type: 'bar',
        data: {
          labels: ['Python', 'JavaScript', 'C++', 'Java'],
          datasets: [{
            label: 'Popularity in %',
            data: [35, 30, 15, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            }
          }
        }
      };
      trendsChart = new Chart(trendsChartRef.current, trendsChartConfig);
    }

    return () => {
      usageChart?.destroy();
      trendsChart?.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
    <div className="insights-container bg-transparent p-6">
      <h1 className="text-4xl text-white font-bold text-center mb-10 mt-10">Insights</h1>

      {/* Popular Conversions Section */}
      <div className="popular-conversions text-white mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Popular Conversions</h2>
        <p className="text-lg">JavaScript to Python is the most popular conversion on our platform.</p>
        <p className="text-lg">Other common conversions include Python to C++ and Java to JavaScript.</p>
      </div>

      {/* User Statistics Section */}
      <div className="user-statistics text-white mb-12">
        <h2 className="text-3xl font-semibold text-center mb-4">User Statistics</h2>
        <p className="text-lg text-center">Over 1000+ developers use our tool daily to convert code between different languages.</p>
        <p className="text-lg text-center mb-4">Monthly active users: <strong>2,500+</strong></p>
        <div className='flex justify-center'>
          <div className="chart-wrapper bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-white text-center">Monthly Usage Graph</h3>
            <canvas ref={usageChartRef}></canvas>
          </div>
        </div>
      </div>

      {/* Coding Trends Section */}
      <div className="coding-trends text-white mb-12">
        <h2 className="text-3xl font-semibold text-center mb-4">Coding Trends</h2>
        <p className="text-lg text-center">Python usage has increased by 30% in 2023 due to its popularity in AI and Machine Learning.</p>
        <p className="text-lg text-center mb-4">JavaScript remains a favorite for web development, growing steadily at 20% this year.</p>
        <div className='flex justify-center'>
          <div className="chart-wrapper bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-white text-center">Programming Language Popularity</h3>
            <canvas ref={trendsChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Insights;
