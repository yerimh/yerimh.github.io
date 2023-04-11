var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('ethpres', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      console.log(player)

var ytSeconds = 0;
onYouTubeIframeAPIReady();

// jQuery(document).ready(function ()
//     {
//     player = new YT.Player('yt-embed', {events: {
//       'onStateChange': onPlayerStateChange
//       }
//       });
//     });

function onPlayerStateChange(e)
{
  if (e.data == 1 && ytSeconds > 0) {
    e.target.seekTo(ytSeconds);
    ytSeconds = 0;
  }
}

function seekTo(seconds)
{
  if (player.getPlayerState() == 1) {
    player.seekTo(seconds);
  }
  else {
    ytSeconds = seconds;
    player.playVideo();
  }
}