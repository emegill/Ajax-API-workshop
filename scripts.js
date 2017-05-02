$.ajax({
 url: "https://api-practice-wdi.herokuapp.com/posts",
 method: "GET",
 data: {
 
},
 success: function(response){
     console.log(response)

     for(let i = 0; i < response.posts.length ; i++){

	console.log(response.posts[i]);
	console.log(response.posts[i].title);

	chrisApi(response.posts[i]);

}
}
})

function dateChange(date) {
    var grabDate = document.getElementsByClassName("results")[0];
    var dateSplit = date.split("/");
    var month = dateSplit[0];
    var day = dateSplit[1];
    var month = "Feb ";

    var date = month + day

    return date;

}

function chrisApi(post) {
    var searchResults = document.getElementsByClassName("results")[0];

    var resultDiv = "<div class='output'><img src='" 
    resultDiv += post.img 
    resultDiv += "'> " 
        resultDiv += "<div class = 'date'>" 
        resultDiv += dateChange(post.date) 
        resultDiv += "</div>" 
    resultDiv += " " 
        resultDiv += "<div class='title'>" 
        resultDiv += post.title 
        resultDiv += "</div></div>";
    
    searchResults.innerHTML += resultDiv;

    console.log(post);

}




