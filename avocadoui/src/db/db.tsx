import { IDBPDatabase, openDB } from 'idb';

class IDXDB {
    public db: any
    public dbName: string
 
    constructor(databaseName: string) {
        this.dbName = databaseName
    }
    
    // creating the tables in our current db
    public async createTable(tableName: string) {
        try {
            console.log("creating tables")
            this.db = await openDB(this.dbName, 1, { upgrade(db: IDBPDatabase) {
                            db.createObjectStore('tasks', { autoIncrement: true, keyPath: 'id' })
                        }, } )


                        
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
        console.log(tx)
        const store = tx.objectStore(tableName);
        const result = await store.getAll();
        console.log('Get All Data', JSON.stringify(result));
        return result;
    }

    public async putValue(tableName: string, value: object) {
        console.log(this)
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

export default IDXDB;

