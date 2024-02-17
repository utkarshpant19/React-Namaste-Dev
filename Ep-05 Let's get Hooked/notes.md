## Ep -07: Finding the path

### When useEffect is called?

- Depending upon the second argument of useEffect (deps[]), behaviour of calling useEffect can be changed in 3 ways

Case 1: When no deps array
* In this case, useEffect will be called everytime the component is rendered.

```Javascript
useEffect(()=>{
  console.log('UseEffect is Called everytime the component renders');
})

```
Case 2: When empty deps array: []
* In this case, useEffect is called after initial render (only once) then never again.

```Javascript

useEffect(()=>{
  console.log('UseEffect is called only once')
}, []);
```
Case 3: When deps array has dependency
```Javascript

const [btnName, setBtnName] = useState('');

useEffect(()=>{
  console.log('UseEffect is called when value of dependency changes')
},[btnName])

```
