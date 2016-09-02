(function ($,window,document,undefined){
                
   var pluginName ="geunPlugin",
       defaults = { 
           width:1100,              //navigation 넓이
           height:50,               //navigation 높이
           time:200,                //navigation drop&down timer
           dropType:"all"           //navigation drop&down type menu all default stript
       };

    function Plugin(element,options){
        this.element = element;
        this.options = $.extend({},defaults,options);
        this._defaults = defaults;
        this._name = pluginName;
        geunNavInitSize(element,this.options);
        this.init();
    }

    function geunNavInitSize(selector,options){
        
        $(selector).css("position","relative");
        var thisIndex = $(selector).find("ul").find("li:last-child").index();
        var widthLi = options.width / (thisIndex+1);
        $(selector).find("ul").find("li").css("width",widthLi).css("height",options.height).css("line-height",options.height+"px");
        
        /*
        var widthLi = 100 / (thisIndex+1);
        
        $(selector).find("ul").find("li").css("width",widthLi+"%").css("height",options.height).css("line-height",options.height+"px");
        */
       
        $(".geunSubDiv").css("width",widthLi);
        $(".geunSpanWrap").css("width","100%");
        $(selector).find("ul").filter(function(){
            $(this).css("width",options.width).css("height",options.height);
        }); 
        
        switch(options.dropType){
            case("stript") :
                geunStriptInit(selector,options);
                break;
            case("all") : 
                geunAllInit(selector,options);
                break;
            default : 
                geunStriptInit(selector,options);
                break;
        }
    }
    
    function geunStriptInit(selector,options){
        
        $(selector).find("ul").find("li").mouseover(function(){
            $(this).find(".geunSubDiv").stop().slideDown(options.time);
        }).mouseleave(function(){
            $(this).find(".geunSubDiv").stop().slideUp(options.time);
        });
        
    }
    
     function geunAllInit(selector,options){
         var geunSubDivHeight = 0;
         $(selector).find(".geunSubDiv").each(function(){
             if(geunSubDivHeight < $(this).height()){
                geunSubDivHeight = $(this).height();    
             }
         });
         
        $(".geunSubDiv").height(geunSubDivHeight);  
         
        $(selector).find("ul").find("li").mouseover(function(){
            $(".geunSubDiv").stop().slideDown(options.time);
        }).mouseleave(function(){
            $(".geunSubDiv").stop().slideUp(options.time);
        });
         
    }
    

    Plugin.prototype ={
        init : function(){
            var defaults = defaults;
            var element = $(this.element);
        }    
    }

    $.fn[pluginName] = function(options){
      return  new Plugin(this,options);
    };

})(jQuery,window,document);   