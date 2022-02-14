var DATA = 
$(document).ready(function(){
    $.getJSON("optic.json", function(data){
        var myData = '';
        $.each(data, function(key, value){
            myData += '<tr>';
            myData += '<td>'+value.id+'</td>';
            myData += '<td><img src="'+value.image+'" width="100px"></td>';
            myData += '<td>'+value.name+'</td>';
            myData += '<td>'+value.reference+'</td>';
            myData += '<td>'+value.color+'</td>';
            myData += '<td>'+value.brand+'</td>';
            myData += '<td>'+value.gender+'</td>';
            myData += '<td>'+value.price+'</td>';
            myData += '<td>'+value.stock+'</td>';
            myData += '<td>'+'<li>'+value.provider.social+'</li>'+'<li>'+value.provider.address+'</li>'+'</td>';
            myData += '</tr>';
        });
        $('#tbody').append(myData);
    });
});

$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

function sort(e, direction){
    if(direction == "desc"){
        data.sort(function(a,b){
            if(a[e] > b[e]){
                return -1
            }
        })
    }
    else if(direction == "asc"){
        data.sort(function(a,b){
            if(a[e] < b[e]){
                return -1  
    }
})
}
$("#tbody").html("");
fill(data);
}
