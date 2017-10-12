$( document ).ready(
   $(document).on('click',function(e){
        if(($(e.target).prop("class") == "logo")){
            $("ul.nav").toggleClass( "nav--show" )
        }
        else{
            $('.nav').removeClass('nav--show');
        }
    }),

   /* $("button").click(function(){
        $("ul.nav").toggleClass( "nav--show" )
    })*/
)



