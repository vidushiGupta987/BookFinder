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
            var title = document.createElement('h2');
            title.className="mt-0";
            title.innerHTML= book.items[i].volumeInfo.title;
             //append title to the inner div
            div.appendChild(title);
            //append image,inner div to the main div
             divMain.appendChild(image);
             divMain.appendChild(div);
             //creating element for displaying author
             var author=document.createElement('p');
             author.innerHTML = '<b>Author: </b>' + book.items[i].volumeInfo.authors;
             div.appendChild(author);
              //creating element for displaying country
             var place=document.createElement('p');
             place.innerHTML = '<b>Sale in: </b>' + book.items[i].accessInfo.country;
             div.appendChild(place);
             //creating element for displaying category
             var category=document.createElement('p');
             category.innerHTML='<b>Category: </b>' + book.items[i].volumeInfo.categories;
             div.appendChild(category);
             //creating element for displaying pagecount
             var page = document.createElement('p');
             page.innerHTML='<b>Page Count: </b>' + book.items[i].volumeInfo.pageCount;
             div.appendChild(page);
             //creating element for displaying publisher
             var publish= document.createElement('p');
             publish.innerHTML='<b>Publisher: </b>'+ book.items[i].volumeInfo.publisher;
             div.appendChild(publish);
             //creating element for displaying publishedDate
             var year = document.createElement('p');
             year.innerHTML='<b>Published Date: </b>' + book.items[i].volumeInfo.publishedDate;
             div.appendChild(year);
             //creating element for displaying book description
             var desc = document.createElement('p');
             desc.innerHTML= book.items[i].volumeInfo.description;
             div.appendChild(desc);
             //create a link to display more information about a particular book
             var link = document.createElement('a');
             link.innerHTML='View more';
             link.href=book.items[i].volumeInfo.previewLink;
             div.appendChild(link);
             //create hr element to seperate books in different lines
             var text = document.createElement('hr');
            
             //appending main div to the final search result
		    bookResult.appendChild(divMain);
		    //giving space between every book,displays single book in a line 
		    bookResult.appendChild(text);
		
	}}
})
}