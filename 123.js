let arr = [];
function create() {
	let size = parseInt(document.getElementById('len').value);
  for (let i = 0; i < size; i++) {
  	arr[i] = Math.floor(Math.random() * 10)
  }
  let div = document.getElementById('massiv')

  for (let i = 0; i < arr.length; i++) {
	div.innerHTML += arr[i] + ' ';
}


}






