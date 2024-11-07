const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()
const app = express()
const port = 3000
const morgan = require('morgan')
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
const path = require('path')
const dirname = require('path')
//const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, './client/dist')))
app.use(cors())
const apiProxy = createProxyMiddleware({
  target: 'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('x-zocom', process.env.PIZZA_API_KEY)
  },
})
app.use('/api', apiProxy)

app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, './client/dist', 'index.html')) //server in root folder
  res.sendFile(
    path.resolve(__dirname, './client/dist/index.html', 'index.html')
  )
})

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`)
})
