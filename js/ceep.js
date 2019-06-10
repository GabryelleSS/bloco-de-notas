const ceep = (function() {

    function _setUpNotepad() {
        const containerNotes = document.querySelector('.container-notes');

        const confitPostIt = document.querySelectorAll('.btn-config-post-it');

        containerNotes.addEventListener('click', function() {
            
            confitPostIt.classList.add('--is-visible');
        })
    }
    
    function init() {
        _setUpNotepad()
    }

    return {
        init: init,
    }
}());