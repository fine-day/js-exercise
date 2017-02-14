/**
 * Created by Administrator on 2016/12/26.
 */
window.onload = function () {
    var oInput = document.getElementsByTagName("input")[0];
    oInput.onclick = function () {
        oInput.value = parseInt(oInput.value)+1;
        alert(oInput.value);
    }
};