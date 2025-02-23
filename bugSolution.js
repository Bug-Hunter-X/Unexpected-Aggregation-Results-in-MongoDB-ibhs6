```javascript
//Corrected aggregation pipeline
db.collection('myCollection').aggregate([
  {$match: { /*some filter*/ } },
  {$group: {_id: '$field', sum: {$sum: '$value'}}}, //Corrected stage
  {$sort: {sum: -1}},
  {$limit: 10}
])
```