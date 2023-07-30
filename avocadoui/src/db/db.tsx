import { IDBPDatabase, openDB } from 'idb';
import Task from '../objects/Task';

class IDXDB {

    private db: any
    private dbName: string
 
    constructor(databaseName: string) {
        this.dbName = databaseName
    }
    
    // creating the tables in our current db
    public async createTable(tableNames: string[]) {
        try {
            console.log("creating tables")
            this.db = await openDB(
                this.dbName, 
                1, 
                { 
                    upgrade(db: IDBPDatabase) {
                        for(const name of tableNames) {
                            if (db.objectStoreNames.contains(name)) {
                                continue;
                            }
                            db.createObjectStore(`${name}`, { autoIncrement: true, keyPath: 'id' })
                        }
                    } 
                } 
            )

            


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
        console.log(`type of this getall ${this}`)
        console.log(this.db)
        const tx = this.db.transaction(tableName, 'readonly');
        console.log(tx)
        const store = tx.objectStore(tableName);
        const result = await store.getAll();
        console.log('Get All Data', JSON.stringify(result));
        return result;

    }

    public async putValue(tableName: string, value: object) {
        console.log(`type of this put ${this}`)
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        const result = await store.put(value);
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


    // SPECIFIC FUNCTIONS: depending on the CRUD ones above
    public async toggleTaskCompleted(task: Task) {
        task.completed = !task.completed
        await this.putValue('task', task)
    }
}

export default IDXDB;

