
document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="application"]');
    const fields = {
        'conference-reg': document.getElementById('conference-reg-fields'),
        'conference-pub': document.getElementById('conference-pub-fields'),
        'journal-pub': document.getElementById('journal-pub-fields'),
        'book-chp-pub': document.getElementById('book-chp-pub-fields'),
        'book': document.getElementById('book-fields')
    };

    function hideAllFields() {
        for (const key in fields) {
            fields[key].classList.add('hidden');
        }
    }

    function showFields(selectedValue) {
        if (fields[selectedValue]) {
            fields[selectedValue].classList.remove('hidden');
        }
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            hideAllFields();
            showFields(this.value);
        });
    });

    // Initialize form with the checked radio button's fields displayed
    const checkedRadio = document.querySelector('input[name="application"]:checked');
    if (checkedRadio) {
        showFields(checkedRadio.value);
    }
}); 