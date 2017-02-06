$(function(){
console.log('Ready!');
$('#searchform').submit(function(e){
  e.preventDefault();
})
function search(){

  //Search Query Input
  // q = $('#queryInput').val();
    q = 'Overwatch';
  $.get(
    "https://www.googleapis.com/youtube/v3/search" , {
      part: 'snippet, id',
      q: q,
      type: 'video',
      key: 'AIzaSyAyxoLI4ts4pPVcDJQcuaBKMIDZLupVYKY'},
      function(data){
        var nextPage = data.nextPageToken;
        var prevPage = data.prevPageToken;

        console.log(data);
        console.log(data.items[0].snippet.channelId);



        $.each(data.items, function(i, item){
          var output = getOutput(item);
          // $('#results').append('<li><p>' + data.items[0].snippet.channelId + '</p></li>');
          $('#results').append(output);
        });
      }
  )
}

function getOutput(item){

  var idVideo = item.id.videoId;
  var title = item.snippet.title;
  var description = item.snippet.description;
  var thumbnail = item.snippet.thumbnails.high.url;
  var channelTitle = item.snippet.channelTitle;
  var date = item.snippet.publishedAt;

  var output = '<li>' +
  '<div class="thumbnail"> ' +
  '<img src="' + thumbnail + '">' +
  '</div>' +
  '<h3>' + title + '</h3>' +
  '<h3>' + channelTitle + '</h3>' +
  '<h3>' + date + '</h3>' +
  '<h6>' + description + '</h6>' +
  '</li>' ;

  var output = '<li>' +
  '<div class="output"><div class="thumbnail"> ' +
  '<img src="' + thumbnail + '">' +
  '</div>' +
  '<div class="data-container"><h4>' + title + '</h4>' +
  '<h5>' + channelTitle + '</h5>' +
  '<h6>' + date + '</h6></div></div>' +
  '</li><hr>';

  return output;
}

search();

})
