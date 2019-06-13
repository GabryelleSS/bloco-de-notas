const ceep = (function() {
    const containerNotes = document.querySelector('.container-notes');
    const elTextNotePad = document.querySelector('textarea');
    
    function DrawNotepad() {
        const btnSave = document.querySelector('.btn-save');

        btnSave.addEventListener('click', function() {
            const elDivPostIt = document.createElement('div');
            elDivPostIt.classList.add('post-it');
            containerNotes.appendChild(elDivPostIt);

            const elDivBtnConfig = document.createElement('div');
            elDivBtnConfig.classList.add('btn-config-post-it');
            elDivPostIt.appendChild(elDivBtnConfig);

            const elBtnTrash = document.createElement('button');
            elBtnTrash.classList.add('trash');

            const iconTrash = document.createElement('i');
            iconTrash.classList.add('far');
            iconTrash.classList.add('fa-trash-alt');
            elBtnTrash.appendChild(iconTrash);

            elDivBtnConfig.appendChild(elBtnTrash);

            const elBtnRed = document.createElement('button');
            elBtnRed.classList.add('red');
            elDivBtnConfig.appendChild(elBtnRed);

            const elBtnGreen= document.createElement('button');
            elBtnGreen.classList.add('green');
            elDivBtnConfig.appendChild(elBtnGreen);

            const elBtnBlue = document.createElement('button');
            elBtnBlue.classList.add('blue');
            elDivBtnConfig.appendChild(elBtnBlue);

            const elBtnYellow = document.createElement('button');
            elBtnYellow.classList.add('yellow');
            elDivBtnConfig.appendChild(elBtnYellow);

            const textContentNotePad = elTextNotePad.value;
            const elNotePad = document.createElement('p');
            elNotePad.classList.add('notes');
            elNotePad.textContent = textContentNotePad;
            elDivPostIt.appendChild(elNotePad);

            function _btnConfigOn() {
                elDivPostIt.addEventListener('click', function() {
                    elDivBtnConfig.classList.toggle('--is-visible');
                })
            }

            function _removeContainerNotes() {
                elBtnTrash.addEventListener('click', function() {
                    elDivPostIt.remove('post-it');
                })
            }

            _btnConfigOn();
            _removeContainerNotes();
        })
    }

    function init() {
        DrawNotepad();
        
    }

    return {
        init: init,
    }
}());