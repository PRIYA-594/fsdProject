function showMore() {

    var listData = Array.prototype.slice.call(document.querySelectorAll('#dataLi li:not(.shown)')).slice(0, 4);

  for (var i=0; i < listData.length; i++)
  {
    listData[i].className  = 'shown';
  }
  switchButtons();
}

function showLess() {
    var listData = Array.prototype.slice.call(document.querySelectorAll('#dataLi li:not(.hidden)')).slice(-4);
  for (var i=0; i < listData.length; i++)
  {
    listData[i].className  = 'hidden';
  }
  switchButtons();
}

function switchButtons() {
    var hiddenElements = Array.prototype.slice.call(document.querySelectorAll('#dataLi li:not(.shown)'));
  if(hiddenElements.length == 0)
  {
    document.getElementById('moreButton').style.display = 'none';
  }
  else
  {
    document.getElementById('moreButton').style.display = 'block';
  }

  var shownElements = Array.prototype.slice.call(document.querySelectorAll('#dataLi li:not(.hidden)'));
  if(shownElements.length == 0)
  {
    document.getElementById('lessButton').style.display = 'none';
  }
  else
  {
    document.getElementById('lessButton').style.display = 'block';
  }
}

onload= function(){
    showMore();
}