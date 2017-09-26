import * as Pouch from 'pouchdb'

/**
 * Create methods for creating, deleting and updating items from database.
 * @class pouch 
 */

const db = new Pouch('items')

class pouch {
    async fetch() {
        try {
            let result = await db.allDocs({
                include_docs: true,
                descending: true
            });
        }
        catch (error) { console.log(error) }
    }

    async create(name) {
        try{ let reponse = await db.post({name}) }
        catch (error) { console.log(error) }
    }

    async delete(item) { 
        try { let result = await item.remove() } 
        catch (error) { console.log(error)  }
    }

    async update(item, Name) {
        try {
            let doc = await db.get(item)
            let response = await db.put({
                name: Name
            });
        }
        catch (error) { console.log(error)} 
    }
}

export default pouch