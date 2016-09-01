(function ($,window,document,undefined){
                
   var pluginName ="geunPlugin",
       defaults = { 
           width:1100,               //navigation 넓이
           height:50,               //navigation 높이
           time:300
       };

    function Plugin(element,options){
        this.element = element;
        this.options = $.extend({},defaults,options);
        this._defaults = defaults;
        this._name = pluginName;
        genuNavInitSize(element,this.options);
        this.init();
    }

    function genuNavInitSize(selector,options){
        $(selector).css("position","relative");
        var thisIndex = $(selector).find("ul").find("li:last-child").index();
        
        
        var widthLi = options.width / (thisIndex+1);
        $(selector).find("ul").find("li").css("width",widthLi).css("height",options.height).css("line-height",options.height+"px");
        
        /*var widthLi = 100 / (thisIndex+1);*/
        $(selector).find("ul").find("li").mouseover(function(){
            $(this).find(".geunSubDiv").stop().slideDown(options.time);
        }).mouseleave(function(){
            $(this).find(".geunSubDiv").stop().slideUp(options.time);
        });
        $(".geunSubDiv").css("width",widthLi);
        $(".geunSpanWrap").css("width","100%");
        /*$(selector).find("ul").find("li").css("width",widthLi+"%").css("height",options.height).css("line-height",options.height+"px");*/
        $(selector).find("ul").filter(function(){
            $(this).css("width",options.width).css("height",options.height);
        });
    }

    Plugin.prototype ={
        init : function(){
            var defaults = defaults;
            var element = $(this.element);
        }    
    }

    $.fn[pluginName] = function(options){
      return   this.each(function(){
          $.data(this,"plugin_"+pluginName,new Plugin(this,options));
      });
    };

})(jQuery,window,document);   


