	// opt for break instead of return in the for loop
	/*let early = 0;
	for (let i = 0; i < a.length; i++){
	  if (a[i] <= 0){
	    early++;
	    if (early >= k) break;
	  }
	}
	return early >= k ? 'YES': 'NO';*/

	const angryProfessor = (k, a) =>
		a.reduce((a, c) => a += c < 1 ? 1 : 0, 0) >= k ? 'NO' : 'YES';

	console.log(angryProfessor(3, [-1, -3, 4, 2]));
	console.log(angryProfessor(2, [0, -1, 2, 1]));