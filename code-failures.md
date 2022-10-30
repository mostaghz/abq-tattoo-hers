# Sort artists by name #

**This one seems to be the function I need to sort the artistDirectory by name, but I have no idea where to put it... tried after my array, inside my fucntion onLoadEvent... NEED HELP

```
artists.sort((a, b) => {
const nameA = a.name.toUpperCase(); // ignore upper and lowercase
const nameB = b.img.toUpperCase(); // ignore upper and lowercase
if (nameA < nameB) {
return -1;
}
if (nameA > nameB) {
return 1;
}

// names must be equal
return 0;

});

console.log(artists.sort)
```

TRY THIS FROM STACK OVERFLOW

```
function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

objs.sort( compare );
```

and this one

```
function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

objs.sort( compare );
```

this one too

```
function compare(a, b) {
  if (a.last_nom > b.last_nom) return 1;
  if (a.last_nom < b.last_nom) return -1;
  return 0;
}
objs.sort(compare);
console.log(objs)
```