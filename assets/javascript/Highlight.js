<script>

function highlight(text)
{
    inputText = document.getElementById("inputText")
    var innerHTML = inputText.innerHTML
    var index = innerHTML.indexOf(text);
    if ( index >= 0 )
    { 
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML 
    }

}
</script>

<button onclick="highlight("")">Highlight</button>

<style>
.highlight
{
background-color:yellow;
}
</style>

<div id="inputText">
That is your answer.
</div>