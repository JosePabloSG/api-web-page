import cors from 'cors'

const acceptedOrigins = [
  'http://localhost:8080',
  'http://localhost:3000'
]

const corsOptions = {
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  credentials: true
}

export const corsMiddleware = (options = {}) => cors(Object.assign({}, corsOptions, options))
