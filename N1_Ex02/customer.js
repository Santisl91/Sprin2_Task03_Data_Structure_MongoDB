
db.createCollection( 'customer', {validator: {$jsonSchema: {bsonType: 'object',title:'customer',required: [         'name',          'surname',          'cp',          'phone',          'address',          'location',          'order'],properties: {name: {bsonType: 'string'},surname: {bsonType: 'string'},cp: {bsonType: 'int'},phone: {bsonType: 'int'},address: {bsonType: 'string'},location: {bsonType: 'object',
title:'object',properties: {province: {bsonType: 'string'}}},order: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  