$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    var craft = data['craft']
    $('#spacepeeps').html(number);

    data['people'].forEach(function (d) {
         $('#astronames').append('<li>' + d['name'] + ' is on ' + d['craft'] + '</li>');
    });
});

