import $ from "jquery";



var changes = {
      documentReadyChanges: () => $("body").html("Hello")
}

module.exports = changes;