const Realm = require('realm');
import Products from './schemas/Products';

//get an instance from realm db
export let realmInstance = new Realm({
  schema: [
    Products
  ],
  schemaVersion: 4,
  migration: function (oldRealm, newRealm) {
    var oldObjects = oldRealm.objects("Products");
    var newObjects = newRealm.objects("Products");
    for (let r in oldObjects) {
      newObjects[r]['id'] = String(oldObjects[r]['id'])
    }

  }
})

/*
  Show a debug message
  @record object = the record as json object
  @msg string = a message to show 
*/
const showUpDebugMsg = (record, msg) => {
  const recordAsString = JSON.stringify(record)
  console.log(`${recordAsString} ${msg} `)
}

/*
  Save one record
  @schemaName string = name of the schema 
  @record object = object to insert
*/
export const saveOneRecord = (schemaName, record) => {
  realmInstance.write(() => {
    try {
      realmInstance.create(schemaName, record)
      showUpDebugMsg(record, 'product was saved')
    }
    catch (error) {
      showUpDebugMsg(record, error)
    }
  })
}

/*
  Save one by one all received records
  @schemaName string = name of the schema 
  @data array = an array of objects
*/
export const saveAllRecords = (schemaName, data) => {
  let errorFound = false
  realmInstance.write(() => {
    for (var i = 0; i < data.length; i++) {
      let record = data[i]
      try {
        realmInstance.create(schemaName, record)
      }
      catch (error) {
        errorFound = true
        console.log('error ', error)
        showUpDebugMsg(record, error)
        //stop the process
        break;
      }
    }

    if (!errorFound) showUpDebugMsg({}, 'All products were saved')

  });
}

/*
  Get all records from db for a specific schema
  @schemaName string = name of the schema 
*/
export const getAllRecords = schemaName => {
  //get all records from db
  return realmInstance.objects(schemaName)
}

/*
  Delete all records in your database
  @schemaName string = name of the schema 
*/
const deleteAllRecords = schemaName => {
  realmInstance.write(() => {
    const allRecords = realmInstance.objects(schemaName);
    realmInstance.delete(allRecords)
    showUpDebugMsg({}, 'All records has been deleted')
  });
}

const RealmDb = {
  saveOneRecord,
  saveAllRecords,
  getAllRecords,
  deleteAllRecords
}

export default RealmDb