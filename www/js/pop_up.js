var dialog = function(){
    this.empty = function(self,msg){
        $(self).simpledialog({
                'prompt': msg,
                'cleanOnClose': true,
                'buttons': {
                    'OK': {
                        click: function() {
                            $('#simplestringout').text($('#simplestring').attr('data-string'));
                        },
                        theme: "b"
                    }
                }
            });
            $("#close-dialog").click(function() {
                $('.ui-dialog').dialog('close');
            });
    };
};