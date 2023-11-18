
db.createCollection( 'delivey', {validator: {$jsonSchema: {bsonType: 'object',title:'delivey',required: [         'day_time ',          'delivey man'],properties: {day_time : {bsonType: 'date'},delivey man: {bsonType: 'object',
title:'object',}}         }      }});  