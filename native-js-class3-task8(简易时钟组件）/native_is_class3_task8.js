/**
 * Created by Administrator on 2017/1/5.
 */
window.onload = function () {
    var oSpan = document.getElementsByTagName("span");
    function getTime() {
        var now = new Date();
        var oHour = now.getHours();
        var oMin = now.getMinutes();
        var oSecond = now.getSeconds();
        oSpan[0].innerHTML = oHour;
        oSpan[1].innerHTML = oMin;
        oSpan[2].innerHTML = oSecond;
    }
    setInterval(getTime,1000);
};