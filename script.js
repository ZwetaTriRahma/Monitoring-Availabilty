/* ══════════════════════════════
   TEMPERATURE CHART
══════════════════════════════ */
const tempCtx = document.getElementById('tempChart').getContext('2d');

new Chart(tempCtx, {
  type: 'line',
  data: {
    labels: ['09:00', '12:00', '15:00', '18:00', '21:00'],
    datasets: [{
      data: [29, 32, 31, 28, 26],
      borderColor: '#f5a623',
      backgroundColor: 'rgba(245, 166, 35, 0.10)',
      borderWidth: 2,
      pointBackgroundColor: '#f5a623',
      pointRadius: 4,
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => ctx.parsed.y + '°C'
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 }, color: '#888' }
      },
      y: {
        display: false,
        min: 22,
        max: 36
      }
    }
  }
});

/* ══════════════════════════════
   TRAFFIC CHART
══════════════════════════════ */
const trafikCtx = document.getElementById('trafikChart').getContext('2d');

new Chart(trafikCtx, {
  type: 'bar',
  data: {
    labels: ['1 Mar', '5 Mar', '10 Mar', '15 Mar', '20 Mar'],
    datasets: [
      {
        label: 'Penumpang (×100)',
        data: [420, 680, 1120, 1580, 980],
        backgroundColor: 'rgba(0, 48, 135, 0.75)',
        borderRadius: 3
      },
      {
        label: 'Kendaraan',
        data: [210, 340, 560, 790, 490],
        backgroundColor: 'rgba(0, 153, 204, 0.65)',
        borderRadius: 3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { font: { size: 11 }, boxWidth: 12 }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 }, color: '#888' }
      },
      y: {
        ticks: { font: { size: 10 }, color: '#888' },
        grid: { color: '#f0f0f0' }
      }
    }
  }
});

/* ══════════════════════════════
   LEAFLET MAP
══════════════════════════════ */
const map = L.map('map', {
  zoomControl: true,
  attributionControl: true
}).setView([-5.990, 106.035], 15);

// Satellite tile layer (Esri World Imagery)
L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Leaflet | © Esri',
    maxZoom: 19
  }
).addTo(map);

// Buffer Area – Lancar (green)
L.polygon([
  [-5.985, 106.028],
  [-5.985, 106.038],
  [-5.993, 106.038],
  [-5.993, 106.028]
], {
  color: '#4caf50',
  fillColor: '#4caf50',
  fillOpacity: 0.35,
  weight: 1.5
}).addTo(map).bindPopup('Buffer Area – Lancar');

// Buffer Area – Padat (red)
L.polygon([
  [-5.993, 106.038],
  [-5.993, 106.048],
  [-6.000, 106.048],
  [-6.000, 106.038]
], {
  color: '#e53935',
  fillColor: '#e53935',
  fillOpacity: 0.35,
  weight: 1.5
}).addTo(map).bindPopup('Buffer Area – Padat');

// Ship markers
L.circleMarker([-5.988, 106.031], {
  radius: 7,
  color: '#fff',
  weight: 2,
  fillColor: '#0077cc',
  fillOpacity: 1
}).addTo(map).bindPopup('Kapal 1 – Dermaga Utara');

L.circleMarker([-5.991, 106.034], {
  radius: 7,
  color: '#fff',
  weight: 2,
  fillColor: '#0077cc',
  fillOpacity: 1
}).addTo(map).bindPopup('Kapal 2 – Dermaga Timur');