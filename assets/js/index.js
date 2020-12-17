$(document).ready(function () {
    $("a.format-menu").on("click", function (e) {
        e.preventDefault();
        $("a.format-menu").removeClass("active");
        $(this).addClass("active");
    });
    $(".list-group-item").on("click", function(e){
        e.preventDefault();
        $(".list-group-item").removeClass("active");
        $(this).addClass("active");
    });
    $('#btn-rs-password').on("click", function(){
        $('#staticBackdrop').modal('hide');
        $("#modalResetPassword").modal("show");
    });
    $("#btn-del-user").on("click", function(){
        $('#staticBackdrop').modal('hide');
        $("#modalDelete").modal('show');
    });
    $("#abc").on("click", function(){
        $('#modalResetPassword').modal('hide');
        $("#staticBackdrop").modal("show");
    })
    
});