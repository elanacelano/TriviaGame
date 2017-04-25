<span id ="symbol"> </span>
<input type="submit" class="btn btn-info" id="subButton" value="Submit">
//Javascript code;
var tickSymbol = "&#x2714";
var crossSymbol = "&#x2717";
$('#subButton').on("click",function(){
$("#symbol").html(tickSymbol);
});