const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Proxy middleware for OData API
app.use('/odata', createProxyMiddleware({
  target: 'https://grupoplantar.mendixcloud.com',
  changeOrigin: true,
  secure: true,
  pathRewrite: {
    '^/odata': '/odata/pos_apontamento/v1'
  },
  headers: {
    'Authorization': 'Basic ' + Buffer.from('ws.plantarforest:PLws@2025').toString('base64')
  },
  onProxyReq: (proxyReq, req, res) => {
    // Add authorization header
    proxyReq.setHeader('Authorization', 'Basic ' + Buffer.from('ws.plantarforest:PLws@2025').toString('base64'));
  },
  logLevel: 'debug'
}));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Proxying /odata/* to https://grupoplantar.mendixcloud.com`);
});