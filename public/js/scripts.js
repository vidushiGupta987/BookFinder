function findBook(){
var userSearch = document.getElementById('userInput').value;
var bookResult= document.getElementById('result');
bookResult.innerHTML = "";

$.ajax({
	type:"GET",
	url:"https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
	datatype:"JSON",
	success: function(Book){
		console.log(Book);
	}
})
}