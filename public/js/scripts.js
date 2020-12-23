function findBook(){
var userSearch = document.getElementById('userInput').value;
var bookResult= document.getElementById('result');
bookResult.innerHTML = "";

$.ajax({
	type:"GET",
	url:"https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
	datatype:"JSON",
	success: function(book){
		console.log(book);
		for(var i=0;i<book.items.length;i++){
		var image = document.createElement('img');
		image.src= book.items[i].volumeInfo.imageLinks.thumbnail;
		document.getElementById('result').appendChild(image);
		
	}}
})
}