/**
 * Created by Administrator on 2016/12/26.
 */
window.onload = function () {
    var oInput = document.getElementsByTagName("input");
    oInput[2].onclick = function () {
        oInput[2].value= Math.max(parseInt(oInput[0].value),parseInt(oInput[1].value));
    }
};