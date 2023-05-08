var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// initialValue 없이 reduce()
console.log([ { x: 22 }, { x: 42 } ].reduce( maxCallback )); // 42
[ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
// [                      ].reduce( maxCallback ); // TypeError

// map/reduce로 개선 - 비었거나 더 큰 배열에서도 동작함
console.log([ { x: 22 }, { x: 42 } ].map( el => el.x ).reduce( maxCallback2, -Infinity ));
