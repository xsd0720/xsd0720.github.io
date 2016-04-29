/**
 * Created by xwmedia01 on 16/4/29.
 */
//var xcodeArray = ["ed595a84cc5cf2e0950303364c1b1607cd6d83255b2cdc616ef179d66843ac13", "adebceb717448faf800bae5240fb3fa2cd6d83255b2cdc616ef179d66843ac13", "0a691bb1f1c960c0a2b2f363ee90e30acd6d83255b2cdc616ef179d66843ac13"];
var replaceYuming = "http://61.55.188.184/dl.cdn.baidu.com";


function abc()
{
    var textStrin = document.getElementById("oldAddress").value;
    if(textStrin.length <= 0)
    {
        alert("啥都不填,你是在逗我?")
        return;
    }

    //选择第一个file
    var fileIndex = textStrin.indexOf("/file");
    var headSomeString = textStrin.substring(0, fileIndex);

    //xcode index
    var xcodeIndex = textStrin.indexOf("xcode=");

    var  xcodeString = textStrin.substring(xcodeIndex, textStrin.length);
    var  xcodeStringFirstIndex = xcodeString.indexOf("&");

    var  xcodeSomeString = xcodeString.substring(0, xcodeStringFirstIndex);

    var newString =  textStrin.replace(headSomeString, replaceYuming);
    var randomindex = Math.round(Math.random()*2);

    var newXcode = document.getElementById("oldAddressXcode").value;

    var reslultString = newString.replace(xcodeSomeString , "xcode="+newXcode);
    document.getElementById("reslut").innerHTML = reslultString;

}