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


function chrisApi(post) {
    var searchResults = document.getElementsByClassName("results")[0];
    var resultDiv = "<div class='output'><img src='" + post.img + "'> " + post.date + " " + post.title + "</div>";
    searchResults.innerHTML += resultDiv;

    console.log(post);

}