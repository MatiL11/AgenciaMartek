import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Registrar la fuente Satoshi globalmente para Chart.js
ChartJS.defaults.font.family = 'Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const KeywordChart = ({ activeTab }) => {
  const getChartData = () => {
    const baseData = {
      labels: ['19', '20', '21', '22', '23', '24', '25'],
      datasets: [
        {
          label: 'Returning',
          data: [35, 50, 30, 60, 55, 90, 80],
          borderColor: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: 'Newcomers',
          data: [20, 30, 45, 35, 40, 50, 40],
          borderColor: '#06B6D4',
          backgroundColor: 'rgba(6, 182, 212, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
        {
          label: 'Abandoned',
          data: [55, 40, 25, 20, 15, 10, 25],
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 6,
          borderWidth: 2,
        },
      ],
    };

    // Personalizar datos según la pestaña activa
    switch (activeTab) {
      case 'target':
        return {
          labels: ['NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MEI'],
          datasets: [
            {
              label: 'Click Summary',
              data: [0, 50, 30, 80, 50, 110, 70,],
              borderColor: '#10B981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 8,
              borderWidth: 3,
              pointBackgroundColor: '#10B981',
              pointBorderColor: '#ffffff',
              pointBorderWidth: 3,
            },
          ],
        };
      case 'social':
        return {
          ...baseData,
          datasets: baseData.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.map(val => val * 0.8),
          })),
        };
      case 'email':
        return {
          ...baseData,
          datasets: baseData.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.map(val => Math.min(val * 1.5, 120)),
          })),
        };
      default:
        return baseData;
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: activeTab !== 'social',
        position: 'top',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            family: 'Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            size: 13,
            weight: '500',
          },
          color: '#6B7280',
        },
      },
      title: {
        display: true,
        text: activeTab === 'target' ? 'Click Summary' : activeTab === 'social' ? 'Overview' : 'Customers',
        align: 'start',
        font: {
          family: 'Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          size: 18,
          weight: '600',
        },
        padding: {
          top: 0,
          bottom: 30,
        },
        color: '#374151',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        titleFont: {
          family: 'Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          weight: '600',
        },
        bodyFont: {
          family: 'Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          weight: '500',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: activeTab === 'target' ? 120 : activeTab === 'social' ? 80 : 120,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: activeTab === 'target' ? 200 : activeTab === 'social' ? 20 : 30,
          font: {
            family: 'Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            size: 11,
            weight: '500',
          },
          color: '#9CA3AF',
          padding: 10,
          callback: function(value) {
            if (activeTab === 'target') {
              return value + 'K';
            }
            return value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            size: 11,
            weight: '500',
          },
          color: '#9CA3AF',
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Barra superior oscura como en la imagen */}
      <div className="bg-gray-800 h-8 flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Contenido del gráfico */}
      <div className="p-6 relative">
        {/* Gráfico */}
        <div className="h-80 mt-4">
          {activeTab === 'social' ? (
            <Bar data={getChartData()} options={options} />
          ) : (
            <Line data={getChartData()} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default KeywordChart;