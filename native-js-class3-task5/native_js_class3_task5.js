/**
 * Created by Administrator on 2017/1/5.
 */
window.onload = function(){
    var oNumber = document.getElementsByTagName("span")[0];
    function upDateNumber() {
        oNumber.innerHTML ++;
    }
    setInterval(upDateNumber,1000);
};