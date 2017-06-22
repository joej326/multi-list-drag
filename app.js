$(document).ready(function() {
    $('div.sort li').disableSelection();

    $('#pending ul').sortable({
        revert: 'true',
        connectWith: "#inbound ul, #outbound ul",
        items: "li.inbound"
    });

    $('#outbound ul').sortable({
        revert: 'true',
        connectWith: "#inbound ul, #pending ul",
        items: "li.inbound"
    });

    $('#inbound ul').sortable({
        revert: 'true',
        connectWith: "#pending ul, #outbound ul",
        items: "li.inbound"
    });

});
