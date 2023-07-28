// import { IDBPDatabase, openDB } from 'idb';

class IDXDB {
    private indexedDB: IDBFactory
    private db: any
    private dbName: string

    constructor(idxDB: IDBFactory, databaseName: string) {
        this.indexedDB = idxDB
        this.dbName = databaseName
    }
    
    // creating the tables in our current db
    public async createObjectStore(tableNames: string[]) {
        try {
            const request = await this.indexedDB.open(this.dbName)
            this.db = request.result

            for (const tableName of tableNames) {
                this.db.createObjectStore(tableName, { autoIncrement: true, keyPath: "id" })
            }

            // create the posible queries
            // tasksTable.createIndex("title", ["title"], { unique: false });
        } catch(error) {
            console.error(error)
        }
    }

    public async getValue(tableName: string, id: number) {
        const transaction = this.db.transaction(tableName, 'readonly');
        const store = transaction.objectStore(tableName);
        const result = await store.get(id);
        console.log('Get Data ', JSON.stringify(result));
        return result;
    }

    public async getAllValue(tableName: string) {
        const tx = this.db.transaction(tableName, 'readonly');
        const store = tx.objectStore(tableName);
        const result = await store.getAll();
        console.log('Get All Data', JSON.stringify(result));
        return result;
    }

    public async putValue(tableName: string, value: object) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        const result = await store.put(value);
        console.log('Put Data ', JSON.stringify(result));
        return result;
    }

    public async deleteValue(tableName: string, id: number) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        const result = await store.get(id);
        if (!result) {
            console.log('Id not found', id);
            return result;
        }
        await store.delete(id);
        console.log('Deleted Data', id);
        return id;
    }
}

export default IDXDB

