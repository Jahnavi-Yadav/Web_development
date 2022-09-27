$(function() {
    $('li').on('click' ,function(e) {
        $('li span').remove();
        var date=new Date();
        date.setTime(e.timeStamp);
        var c=date.toDateString();
        $(this).append('<span class="date">' + c +' '+e.type +'</span>');

        


    });
    }
);