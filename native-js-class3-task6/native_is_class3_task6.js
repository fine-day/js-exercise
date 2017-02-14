window.onload = function(){
    var oInput = document.getElementsByTagName("input");
    var number_Value = parseInt(oInput[0].value);
    oInput[0].onkeyup = function () {
        oInput[0].value = oInput[0].value.replace(/[^\d]/, "");
    };
    oInput[1].onclick = function () {
        if (oInput[0].value.length==2){
            alert("这是两位数");
        }
        else {
            alert("这是"+oInput[0].value.length+"位数");
        }
    };
};
