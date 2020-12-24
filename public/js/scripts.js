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
			//creating Main div that wraps all the elements 
			var divMain = document.createElement('div');
			divMain.className='media';
			//creating element for displaying images
		var image = document.createElement('img');
		image.className="mr-3";
		image.src= book.items[i].volumeInfo.imageLinks.thumbnail;
		    //creating inner div that wraps title and other info
            var div=document.createElement('div');
            div.className="media-body";
            //creating title element to display title of the book
            var title = document.createElement('h5');
            title.className="mt-0";
            title.innerHTML= book.items[i].volumeInfo.title;
             //append title to the inner div
            div.appendChild(title);
            //append image,inner div to the main div
             divMain.appendChild(image);
             divMain.appendChild(div);
             //create hr element to seperate books in different lines
             var text = document.createElement('hr');
            
             //appending main div to the final search result
		    bookResult.appendChild(divMain);
		    //giving space between every book,displays single book in a line 
		    bookResult.appendChild(text);
		
	}}
})
}