data="abcdfefagd我来了打手机费拉拉给你撒东欧按个房价撒都结构撒酒疯爬山的奇偶少司法局搜啊加工商登记富婆啊发杀狗的三公那速度赛季枢纽法术公司的 公司及读后感一滑丝ug161632161616161616416161616161616461351654616165416nasijgniu"

function isChina(s)
{
  var patrn=/[/u4E00-/u9FA5]|[/uFE30-/uFFA0]/gi;
     if (!patrn.exec(s)){
   return false ;
     } else {
   return true ;
     }
}
function isNewElement()
{

}

// data.forEach(element => {
// });

for (var i=0;i<data.length;i++)
{
    $('#ul_text').append('<li class="ui-state-default ui-corner-all" title=".ui-icon-minus">'+data[i]+'</li>')
}
$(function() {
    $( "#ul_text" ).selectable({
      stop: function() {
        var indexs = new Array();
        $( ".ui-selected", this ).each(function() {
          indexs.push($( "#ul_text li" ).index( this ));
        });
        var result = $( "#select-result" ).empty();
        len = Math.max.apply(null, indexs);
        for (let index = Math.min.apply(null, indexs); index < len; index++) {
            $('#ul_text').children('li').eq(index).addClass("ui-selected");
            result.append($('#ul_text').children('li').eq(index).html());            
        }
      }
    });
  });
