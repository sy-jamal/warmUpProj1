$(document).ready(function(){
    function currentBoard()
    {
        var boardArray=[];
        for(var i =0; i<9;i++)
        {
            boardArray[i]= $("#cell"+i).text();
        }
        return boardArray;
    }
    function updateBoard(arr)
    {
        for(var i =0; i<9;i++)
        {
            $("#cell"+i).text(arr[i]);
        }
    }

    $("td").click(function(event){
        
        if($("#"+this.id).text() ==" " ){
            $("#"+this.id).text("X");
            $.post("/ttt/play", {grid: currentBoard()}, function(data){});
        }
        
    });

});