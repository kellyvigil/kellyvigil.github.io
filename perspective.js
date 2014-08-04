
$(document).ready(function() {

  $('#left').click(function() {
    $('#minecraft').css({
            'display' : ''
        });
    $('#baseball').css({
            'display' : 'none'
        });
    $('#whitehouse').css({
            'display' : 'none'
        });
    });

  $('#middle').click(function() {
    $('#minecraft').css({
            'display' : 'none'
        });
    $('#baseball').css({
            'display' : ''
        });
    $('#whitehouse').css({
            'display' : 'none'
        });
    });

  $('#right').click(function() {
    $('#minecraft').css({
            'display' : 'none'
        });
    $('#baseball').css({
            'display' : 'none'
        });
    $('#whitehouse').css({
            'display' : ''
        });
  });
  
  });



  
