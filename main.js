/**
 * Created by HUQ on 8/28/15.
 */
'use strict':

$(document).ready(init);

var count = 0;

function init() {
  console.log('ready');
  $('#title').on('click', titleClicked);
  $('#myButton').click(buttonClicked);
}

function buttonClicked(event) {
  event.preventDefault();

  console.log($('#title').attrb('id', 'somethingElse'));
  console.log('button clicked');
  //getters vs. setters: look up that shit.

}

function titlesClicked(event) {
  console.log('count:', ++count);
}

