

// var imgExt = new Array(".png",".jpg",".jpeg",".bmp",".gif");//图片文件的后缀名
// var docExt = new Array(".doc",".docx");//word文件的后缀名
// var xlsExt = new Array(".xls",".xlsx");//excel文件的后缀名
// var cssExt = new Array(".css");//css文件的后缀名
// var jsExt = new Array(".js");//js文件的后缀名

// //获取文件名后缀名
// String.prototype.extension = function(){
//     var ext = null;
//     var name = this.toLowerCase();
//     var i = name.lastIndexOf(".");
//     if(i > -1){
//     var ext = name.substring(i);
//     }
//     return ext;
// }

// //判断Array中是否包含某个值
// Array.prototype.contain = function(obj){
//     for(var i=0; i<this.length; i++){
//         if(this[i] === obj)
//             return true;
//     }
//     return false;
// };

// String.prototype.extMatch = function(extType){
//     if(extType.contain(this.extension()))
//         return true;
//     else
//         return false;
// }

// new_element=document.createElement("script"); 
// new_element.setAttribute("type","text/javascript"); 
// new_element.setAttribute("src","js/show/file_type.js");// 在这里引入了a.js 
// document.head.appendChild(new_element);
//通过路径来读取内容
var show_content = function(filename){

    //判断是否图片文件
    // var filename = "dfsd.png";//文件名
    if(filename.extMatch(imgExt))
        alert("图片文件");
    else
        alert("非图片文件");
}

show_content($('#abc').text())