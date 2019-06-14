const ceep = (function() {
    const containerNotes = document.querySelector('.container-notes');
    const elTextNotePad = document.querySelector('textarea');
    const btnSave = document.querySelector('.btn-save');

    function _drawNotepad() {   
        btnSave.addEventListener('click', function() {
            const containerNotePad = document.createElement('div');
            containerNotePad.classList.add('container-note-pad');
            containerNotes.appendChild(containerNotePad);

            const elDivPostIt = document.createElement('textarea');
            elDivPostIt.classList.add('post-it');
            containerNotePad.appendChild(elDivPostIt);

            const elDivBtnConfig = document.createElement('div');
            elDivBtnConfig.classList.add('btn-config-post-it');
            containerNotePad.appendChild(elDivBtnConfig);

            const btnTrash = document.createElement('button');
            const iconTrash = document.createElement('i');
            btnTrash.classList.add('trash');
            iconTrash.classList.add('fa');
            iconTrash.classList.add('fa-trash-alt');
            btnTrash.appendChild(iconTrash);
            elDivBtnConfig.appendChild(btnTrash);
            
            const btnRed = document.createElement('button');
            btnRed.classList.add('red');
            elDivBtnConfig.appendChild(btnRed);

            const btnGreen = document.createElement('button');
            btnGreen.classList.add('green');
            elDivBtnConfig.appendChild(btnGreen);

            const btnBlue = document.createElement('button');
            btnBlue.classList.add('blue');
            elDivBtnConfig.appendChild(btnBlue);

            const btnYellow = document.createElement('button');
            btnYellow.classList.add('yellow');
            elDivBtnConfig.appendChild(btnYellow);

            function colorsNotePad() {
                btnRed.addEventListener('click', function() {
                    elDivPostIt.style.backgroundColor = '#8a1414';
                });

                btnGreen.addEventListener('click', function() {
                    elDivPostIt.style.backgroundColor = '#3c6510';
                });

                btnBlue.addEventListener('click', function() {
                    elDivPostIt.style.backgroundColor = '#0d3e7b';
                });

                btnYellow.addEventListener('click', function() {
                    elDivPostIt.style.backgroundColor = '#d6ab0a';
                });
            }

            function _configNotePad() {
                elDivPostIt.addEventListener('click', function() {
                    elDivBtnConfig.classList.toggle('--is-visible');
                })
            }

            function _notesSave() {
                const note = elTextNotePad.value;
                elDivPostIt.value = note;
            }

            function _removeNote() {
                btnTrash.addEventListener('click', function() {
                    containerNotePad.remove();
                })
            }
            colorsNotePad();
            _notesSave();
            _configNotePad();
            _removeNote();
        })
    }


    function init() {
        _drawNotepad();
    }

    return {
        init: init,
    }
}());