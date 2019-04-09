const libraryFine = (d1, m1, y1, d2, m2, y2) =>
	(y1 > y2) ? 10000 :
	(m1 > m2 && y1 === y2) ? (m1 - m2) * 500 :
	(d1 > d2 && m1 === m2 && y1 === y2) ? (d1 - d2) * 15 : 0;

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(2, 7, 1014, 1, 1, 1015));