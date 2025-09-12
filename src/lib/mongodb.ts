import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI || ''

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient> | undefined

if (uri) {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    })
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
}

export async function getDb(dbName = process.env.MONGODB_DB || 'iconic_app') {
  if (!uri) throw new Error('MONGODB_URI env var is required')
  if (!clientPromise) throw new Error('MongoDB client not initialized')
  const client = await clientPromise
  return client.db(dbName)
}


