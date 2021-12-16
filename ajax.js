class MyAszinkron{
    constructor(){}
    getAdat(apivegpont, tomb, myCallBack,myColbackHiba) {
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                    tomb=result;
                    myCallBack(tomb);
            },
            error:function(hibakod){
                myColbackHiba(hibakod);
            }

        });
    }
  }