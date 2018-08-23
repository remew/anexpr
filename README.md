# anexpr
anexpr is calculate Animated value for React Native's Animated.Value

**note: This library is not production ready. highly experimental implementation.**

# Motivation
React Native has powerful animation feature, `Animated`.

`Animated` is almost very useful. However, sometime, I wrote very ugly animation expression like this.
```js
const top = Animated.subtract(Animated.divide(Animated.subtract(containerHeight, height), 2), 16);
```
That expression is meaning "Vertically center but move up 16px". if `containerHeight` and `height` is not `Animated.Value` but just a JavaScript's number, I could more simply like this.
```js
const top = (containerHeight - height) / 2 - 16;
```

By the way, Do you know the JavaScript feature that is called `tagged template literal`?. it is special usage of `template lietral`.
and use it as follow.
```js
function tag(strings, ...values) {
    console.log(strings, values);
}

const a = 42;
const b = 420;
const c = 4200;
tag`abc ${a} def ${b} ghi ${c} jkl`; // => ['abc ', ' def ', ' ghi ', ' jkl'], [42, 420, 4200]
```

`template literal` accept zero or more variables. and `tag function` takes string array that is split on where variable is placed and that variables.

I noticed that I can parse and eval given expression by `tagged template literal`. So I implement this library.

# installation
```
yarn add anexpr
or
npm install --save anexpr
```

# example
```js
import anexpr from 'anexpr';

// const top = Animated.subtract(Animated.divide(Animated.subtract(containerHeight, height), 2), 16);
const top = anexpr`(${containerHeight} - ${height}) / 2 - 16`;
```

# limitation
This library can parse four arithmetic operations(`+, -, *, /`) only now.
