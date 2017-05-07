$('#search-artist').on('click', function(e) {
    e.preventDefault()
    $('a[id=name_artist]').show();
    var nameArtist = $('#artist-name').val()
    var urlSearchArtist = 'https://api.spotify.com/v1/search?type=artist&query=' + nameArtist

    $.ajax({
        url: urlSearchArtist,
        success: function(data) {
            var artistsFound = data.artists.items // we create a filter(data.artists.items) we just want items in our array of objects
            var optionsArtists = '<option selected disabled>Select an Artist</option>' //we'll put all the option artist here

            artistsFound.forEach(function(artistData) { //now with our array filtered and full of artists searched previously, can create and put the results
                optionsArtists += '<option value="' + artistData.id + '">' + artistData.name + '</option>'
            })
            $('#artists-selection').html(optionsArtists);
        }
    })
})

// Albums

$('#artists-selection').on('change', function(e) {
    var idArtist = $(this).val();
    var name = $(this).find(":selected").text();
    $('#name_artist').text(name)
    console.log(name)
    var urlAlbums = 'https://api.spotify.com/v1/artists/' + idArtist + '/albums'
    $.ajax({
        url: urlAlbums,
        success: function(data) {
            var albumsFound = data.items
            console.log(data.items)
            var optionsAlbums = ''
            albumsFound.forEach(function(albumData) {
                optionsAlbums += '<div class="albumsBox" value="' + albumData.id + '"><p class="albumName">' + albumData.name + '</p>' + "<img src=" + albumData.images[1].url + ">" + '</img></div>'
            })
            $('.albums').html(optionsAlbums)
            $('.albumsBox img').width(150); // Units are assumed to be pixels
            $('.albumsBox img').height(150);
        }
    })

})

// Tracks

// $('.albumsBox').on('click', function(e) {
//  console.log("heyy!")
//  var idAlbum = $(this).val();
//  urlTracks = 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks'
//  $.ajax({
//      url: urlTracks,
//      success: function(data) {
//          var tracksFound = data.items
//          var listTracks = ''
//          //console.log(data)
//          tracksFound.forEach(function(trackData) {
//              listTracks += '<li class="list-group-item"><a href="' + trackData.external_urls.spotify + '" target="_blank">' + trackData.name + '</a></li>'
//          })
//          $('#tracks-selection').html(listTracks)
//      }
//  })
// })

// // Covers

// $('')
