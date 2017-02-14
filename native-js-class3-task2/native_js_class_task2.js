/**
 * Created by Administrator on 2016/12/24.
 */
window.onload = function () {
    var oInput = document.getElementsByTagName("input");
    var oSpan = document.getElementsByTagName("span")[0];
    var oTotal = oInput[2];
    oTotal.onclick = function () {
        oSpan.innerHTML = parseInt(oInput[0].value)+parseInt(oInput[1].value);
    };
};