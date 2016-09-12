$(document).ready(start);

function start() {
  $('#showContent').click(showParagraph);
  $('#showMore').click(showMoreSideBar);
}

function showParagraph(event) {
    event.preventDefault();
    $('#showThisOnClick').show();
    $('#showContent').hide();
    $('#readLess').show();

}

function showMoreSideBar(event) {
  event.preventDefault();
  $('#learnmoretext').show();
  $('#showMore').hide();


}
