```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection('myCollection').aggregate([
  {$match: { /*some filter*/ } },
  {$group: {_id: '$field', sum: {$sum: '$value'}}}, //potential error here
  {$sort: {sum: -1}},
  {$limit: 10}
])
```