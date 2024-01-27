## Ep -04 : Talk is Cheap ,Show me the Code

1. Q.Why we need keys in React? When do we need keys in React?

Ans: In React when we render `list` of Components like ngFor in Angular. It is important to pass in `key `as a `prop` so that when any new item is added in the list in the future, it does uniquely identify that object and does not have to `rerender` whole list again. Hence this results in improved performance.

```javascript
<div className="res-container">
  {resList.map((restaurant, index) => (
    <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
  ))}

</div>
```

2. Can we use index as keys in React? 

Ans: Yes we can use index as key in React but it is not Recommended in case if the order of items may change.
