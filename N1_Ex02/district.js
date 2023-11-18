
db.createCollection( 'district', {validator: {$jsonSchema: {bsonType: 'object',title:'district',required: [         'name'],properties: {name: {bsonType: 'string'}}         }      },
autoIndexId:true
});  