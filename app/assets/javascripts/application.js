// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
    var faye = new Faye.Client('http://localhost:9292/faye');
    faye.subscribe('/tweets', function(data) {
        var elem = '<div class="tweet" style="display: none;">' + data + '</div>';
        /*
        var rows = $('tr');
        for (var i = 1; i < rows.length; i++) {
            if (data.toLowerCase().indexOf($(rows[i]).children()[0]) 
                !== -1) {
                $($(rows[i]).children()[1]).html(parseInt($($(rows[i]).children()[1]).html()) + 1);
            }
        }
        */
        $('.tweets').prepend(elem);
        $('.tweet').slideDown();
    });
});
