# Tests

```js
console.log(getPages(2, 5));
console.log(getPages(4, 7));
console.log(getPages(5, 8));
console.log(getPages(6, 8));
console.log(getPages(7, 8));
console.log(getPages(8, 8));

const pages = 100;
for(let k = 0; k <= pages; k++) {
   console.log(getPages(k, pages)); 
}

```
Output:

```

[ 1, 2, "(3)", 4, 5 ]
[ 1, 2, 3, 4, "(5)", 6, 7 ]
[ 1, "...", 4, "(5)", 6, "...", 8 ]
[ 1, "...", 4, 5, "(6)", 7, 8 ]
[ 1, "...", 4, 5, 6, "(7)", 8 ]
[ 1, "...", 4, 5, 6, 7, "(8)" ]
[ 1, 2, 3, 4, 5, "...", 100 ]
[ "(1)", 2, 3, 4, 5, "...", 100 ]
[ 1, "(2)", 3, 4, 5, "...", 100 ]
[ 1, 2, "(3)", 4, 5, "...", 100 ]
[ 1, "...", 3, "(4)", 5, "...", 100 ]
[ 1, "...", 4, "(5)", 6, "...", 100 ]
[ 1, "...", 5, "(6)", 7, "...", 100 ]
[ 1, "...", 6, "(7)", 8, "...", 100 ]
[ 1, "...", 7, "(8)", 9, "...", 100 ]
[ 1, "...", 8, "(9)", 10, "...", 100 ]
[ 1, "...", 9, "(10)", 11, "...", 100 ]
[ 1, "...", 10, "(11)", 12, "...", 100 ]
[ 1, "...", 11, "(12)", 13, "...", 100 ]
[ 1, "...", 12, "(13)", 14, "...", 100 ]
[ 1, "...", 13, "(14)", 15, "...", 100 ]
[ 1, "...", 14, "(15)", 16, "...", 100 ]
[ 1, "...", 15, "(16)", 17, "...", 100 ]
[ 1, "...", 16, "(17)", 18, "...", 100 ]
[ 1, "...", 17, "(18)", 19, "...", 100 ]
[ 1, "...", 18, "(19)", 20, "...", 100 ]
[ 1, "...", 19, "(20)", 21, "...", 100 ]
[ 1, "...", 20, "(21)", 22, "...", 100 ]
[ 1, "...", 21, "(22)", 23, "...", 100 ]
[ 1, "...", 22, "(23)", 24, "...", 100 ]
[ 1, "...", 23, "(24)", 25, "...", 100 ]
[ 1, "...", 24, "(25)", 26, "...", 100 ]
[ 1, "...", 25, "(26)", 27, "...", 100 ]
[ 1, "...", 26, "(27)", 28, "...", 100 ]
[ 1, "...", 27, "(28)", 29, "...", 100 ]
[ 1, "...", 28, "(29)", 30, "...", 100 ]
[ 1, "...", 29, "(30)", 31, "...", 100 ]
[ 1, "...", 30, "(31)", 32, "...", 100 ]
[ 1, "...", 31, "(32)", 33, "...", 100 ]
[ 1, "...", 32, "(33)", 34, "...", 100 ]
[ 1, "...", 33, "(34)", 35, "...", 100 ]
[ 1, "...", 34, "(35)", 36, "...", 100 ]
[ 1, "...", 35, "(36)", 37, "...", 100 ]
[ 1, "...", 36, "(37)", 38, "...", 100 ]
[ 1, "...", 37, "(38)", 39, "...", 100 ]
[ 1, "...", 38, "(39)", 40, "...", 100 ]
[ 1, "...", 39, "(40)", 41, "...", 100 ]
[ 1, "...", 40, "(41)", 42, "...", 100 ]
[ 1, "...", 41, "(42)", 43, "...", 100 ]
[ 1, "...", 42, "(43)", 44, "...", 100 ]
[ 1, "...", 43, "(44)", 45, "...", 100 ]
[ 1, "...", 44, "(45)", 46, "...", 100 ]
[ 1, "...", 45, "(46)", 47, "...", 100 ]
[ 1, "...", 46, "(47)", 48, "...", 100 ]
[ 1, "...", 47, "(48)", 49, "...", 100 ]
[ 1, "...", 48, "(49)", 50, "...", 100 ]
[ 1, "...", 49, "(50)", 51, "...", 100 ]
[ 1, "...", 50, "(51)", 52, "...", 100 ]
[ 1, "...", 51, "(52)", 53, "...", 100 ]
[ 1, "...", 52, "(53)", 54, "...", 100 ]
[ 1, "...", 53, "(54)", 55, "...", 100 ]
[ 1, "...", 54, "(55)", 56, "...", 100 ]
[ 1, "...", 55, "(56)", 57, "...", 100 ]
[ 1, "...", 56, "(57)", 58, "...", 100 ]
[ 1, "...", 57, "(58)", 59, "...", 100 ]
[ 1, "...", 58, "(59)", 60, "...", 100 ]
[ 1, "...", 59, "(60)", 61, "...", 100 ]
[ 1, "...", 60, "(61)", 62, "...", 100 ]
[ 1, "...", 61, "(62)", 63, "...", 100 ]
[ 1, "...", 62, "(63)", 64, "...", 100 ]
[ 1, "...", 63, "(64)", 65, "...", 100 ]
[ 1, "...", 64, "(65)", 66, "...", 100 ]
[ 1, "...", 65, "(66)", 67, "...", 100 ]
[ 1, "...", 66, "(67)", 68, "...", 100 ]
[ 1, "...", 67, "(68)", 69, "...", 100 ]
[ 1, "...", 68, "(69)", 70, "...", 100 ]
[ 1, "...", 69, "(70)", 71, "...", 100 ]
[ 1, "...", 70, "(71)", 72, "...", 100 ]
[ 1, "...", 71, "(72)", 73, "...", 100 ]
[ 1, "...", 72, "(73)", 74, "...", 100 ]
[ 1, "...", 73, "(74)", 75, "...", 100 ]
[ 1, "...", 74, "(75)", 76, "...", 100 ]
[ 1, "...", 75, "(76)", 77, "...", 100 ]
[ 1, "...", 76, "(77)", 78, "...", 100 ]
[ 1, "...", 77, "(78)", 79, "...", 100 ]
[ 1, "...", 78, "(79)", 80, "...", 100 ]
[ 1, "...", 79, "(80)", 81, "...", 100 ]
[ 1, "...", 80, "(81)", 82, "...", 100 ]
[ 1, "...", 81, "(82)", 83, "...", 100 ]
[ 1, "...", 82, "(83)", 84, "...", 100 ]
[ 1, "...", 83, "(84)", 85, "...", 100 ]
[ 1, "...", 84, "(85)", 86, "...", 100 ]
[ 1, "...", 85, "(86)", 87, "...", 100 ]
[ 1, "...", 86, "(87)", 88, "...", 100 ]
[ 1, "...", 87, "(88)", 89, "...", 100 ]
[ 1, "...", 88, "(89)", 90, "...", 100 ]
[ 1, "...", 89, "(90)", 91, "...", 100 ]
[ 1, "...", 90, "(91)", 92, "...", 100 ]
[ 1, "...", 91, "(92)", 93, "...", 100 ]
[ 1, "...", 92, "(93)", 94, "...", 100 ]
[ 1, "...", 93, "(94)", 95, "...", 100 ]
[ 1, "...", 94, "(95)", 96, "...", 100 ]
[ 1, "...", 95, "(96)", 97, "...", 100 ]
[ 1, "...", 96, "(97)", 98, "...", 100 ]
[ 1, "...", 96, 97, "(98)", 99, 100 ]
[ 1, "...", 96, 97, 98, "(99)", 100 ]
[ 1, "...", 96, 97, 98, 99, "(100)" ]

???


```
