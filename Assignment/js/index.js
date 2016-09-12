$(document).ready(start);

function start() {
  $('#showContent').click(showParagraph);
}

function showParagraph(event) {
    event.preventDefault();
    $('#showThisOnClick').show();
    $('#showContent').hide();
    $('#readLess').show();

}
