/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Inbox 
 */


 // Email Checked
$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).parent().parent().parent().parent().addClass("mail-selected");
    } else {
        $(this).parent().parent().parent().parent().removeClass("mail-selected");
    }
});


// Email Compose
!function ($) {
    "use strict";

    var SimpleMDEEditor = function () {
    };

    /* Initializing */
    SimpleMDEEditor.prototype.init = function () {
        // e.g.
        var simplemde = new SimpleMDE({
            element: document.getElementById("simplemde1"),
            spellChecker: false,
            placeholder: "Write something..",
            tabSize: 2,
            status: false,
            autosave: {
                enabled: false
            }
        });
    },
     //init SimpleMDE
     $.SimpleMDEEditor = new SimpleMDEEditor, $.SimpleMDEEditor.Constructor = SimpleMDEEditor

}(window.jQuery),
    
//initializing 
function ($) {
    "use strict";
    $.SimpleMDEEditor.init();
}(window.jQuery);
    