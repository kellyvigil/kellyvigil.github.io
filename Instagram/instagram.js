var tag = "uonyc2013";
var url = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id=bd5b06bec64b41f9a9d75aba40c05962&callback=?"

$.getJSON(url).success(function(response) {
    var photos = response.data;
    $.each(photos, function(index, photo) {
        var photo_el = "<div class='ig'><a href='" + photo.link + "'><img src='" + photo.images.standard_resolution.url + "' /><p>" + photo.caption.text + "</p></a></div>";
        $('.main').append(photo_el);
        console.log(photo);
	});
}).error(function(error) {
    alert(error);
});
