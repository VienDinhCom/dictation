$(document).ready(function(){
  $.get("https://api.github.com/repos/maxvien/dictation/releases/latest", function(data, status){
    if (status !== 'success') return;

    var assets = data.assets;

    assets = assets.filter(function(item) {
      return item.name.indexOf('.yml') < 0;
    });

    assets = assets.filter(function(item) {
      return item.name.indexOf('.blockmap') < 0;
    });

    assets = assets.filter(function(item) {
      return item.name.indexOf('.zip') < 0;
    });

    var forWin = {
      text: 'Download Dictation for Windows',
      link: assets.find(function(item) { return item.name.indexOf('.exe') >= 0 }).browser_download_url
    };

    var forMac = {
      text: 'Download Dictation for MacOS',
      link: assets.find(function(item) { return item.name.indexOf('.dmg') >= 0 }).browser_download_url
    };

    var forLin = {
      text: 'Download Dictation for Linux',
      link: assets.find(function(item) { return item.name.indexOf('.AppImage') >= 0 }).browser_download_url
    }

    var downloadList = $('.download .list-group');

    downloadList.find('*').remove();

    if (is.mac()) {
      downloadList.append('<a href="' + forMac.link + '" class="list-group-item list-group-item-action active">' + forMac.text + '</a>');
      downloadList.append('<a href="' + forWin.link + '" class="list-group-item list-group-item-action">' + forWin.text + '</a>');
      downloadList.append('<a href="' + forLin.link + '" class="list-group-item list-group-item-action">' + forLin.text + '</a>');
    } else if (is.linux()) {
      downloadList.append('<a href="' + forLin.link + '" class="list-group-item list-group-item-action active">' + forLin.text + '</a>');
      downloadList.append('<a href="' + forWin.link + '" class="list-group-item list-group-item-action">' + forWin.text + '</a>');
      downloadList.append('<a href="' + forMac.link + '" class="list-group-item list-group-item-action">' + forMac.text + '</a>');
    } else {
      downloadList.append('<a href="' + forWin.link + '" class="list-group-item list-group-item-action active">' + forWin.text + '</a>');
      downloadList.append('<a href="' + forMac.link + '" class="list-group-item list-group-item-action">' + forMac.text + '</a>');
      downloadList.append('<a href="' + forLin.link + '" class="list-group-item list-group-item-action">' + forLin.text + '</a>');
    }

  });
});