import { MongoClient } from 'mongodb'
import { Sort } from 'mongodb'
/** 连接数据库 */
export async function connectDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://liuhaoqi:bISXlbJjacCzscq1@next-course.sq1r8eb.mongodb.net/?retryWrites=true&w=majority'
    )
    return client
}
/** 插入数据库 */
export async function insertDocument(
    client: MongoClient,
    collection: string,
    document: any
) {
    const db = client.db('events')
    const result = await db.collection(collection).insertOne(document)
    return result
}
/** 获取所有文档 */
export async function getAllDocuments(
    client: MongoClient,
    collection: string,
    sort: Sort | string
) {
    const db = client.db('events')
    const documents = await db
        .collection(collection)
        .find()
        .sort(sort)
        .toArray()
    return documents
}
