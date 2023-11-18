
db.createCollection( 'order', {validator: {$jsonSchema: {bsonType: 'object',title:'order',required: [         'day_time',          'order type',          'cant_hamburguesa',          'cant_bebida',          'cant_pizza',          'total price',          'pizza',          'bebida',          'hamburguesa',          'sucursal'],properties: {day_time: {bsonType: 'date'},order type: {bsonType: 'object',
title:'object',required: [         'delivery'],properties: {delivery: {bsonType: 'bool'}}},cant_hamburguesa: {bsonType: 'int'},cant_bebida: {bsonType: 'int'},cant_pizza: {bsonType: 'int'},total price: {bsonType: 'decimal'},pizza: {bsonType: 'objectId'},bebida: {bsonType: 'objectId'},hamburguesa: {bsonType: 'objectId'},sucursal: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  