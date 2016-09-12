$(document).ready(start);

function start() {
  alert("hello")
  $('#showContent').click(showParagraph);
}

function showParagraph(event) {
    event.preventDefault();
    $('#showThisOnClick').show();

}
