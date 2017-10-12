$( document ).ready(
    $(document).on('click',function(e){
        if(($(e.target).prop("class") == "logo")){
            $('.nav').addClass('nav--show');
        }
        else{
            $('.nav').removeClass('nav--show');
        }
    }),
)

