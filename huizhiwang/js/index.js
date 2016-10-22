/**
 * Created by Administrator on 2016/10/16 0016.
 */
var i=1
setInterval(function(){
    if(i>3){
        i=1
    }
    var img=$("#nav_left>*:eq(1) img").css("bottom",'0'+i+'px')
    i+=2;
},300)
// var j=0;
// setInterval(function(){
//     $("#nav_left>*:eq(6)").css("background-color",'#7EA5C9')
//     j++;
//     if(j>2){
//         j=0
//         $("#nav_left>*:eq(6)").css("background-color",'#69C3DB')
//
//     }
// },200)
$(function(){


})