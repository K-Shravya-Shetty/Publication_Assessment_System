document.addEventListener('DOMContentLoaded', () => {
    const applicationRadios = document.querySelectorAll('input[name="application"]');
    const conferenceRegFields = document.getElementById('conference-reg-fields');
    const conferencePubFields = document.getElementById('conference-pub-fields');
    const journalPubFields = document.getElementById('journal-pub-fields');
    const bookChpPubFields = document.getElementById('book-chp-pub-fields');
    const bookFields = document.getElementById('book-fields');

    applicationRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            conferenceRegFields.classList.add('hidden');
            conferencePubFields.classList.add('hidden');
            journalPubFields.classList.add('hidden');
            bookChpPubFields.classList.add('hidden');
            bookFields.classList.add('hidden');

            if (radio.checked) {
                switch (radio.value) {
                    case 'conference-reg':
                        conferenceRegFields.classList.remove('hidden');
                        break;
                    case 'conference-pub':
                        conferencePubFields.classList.remove('hidden');
                        break;
                    case 'journal-pub':
                        journalPubFields.classList.remove('hidden');
                        break;
                    case 'book-chp-pub':
                        bookChpPubFields.classList.remove('hidden');
                        break;
                    case 'book':
                        bookFields.classList.remove('hidden');
                        break;
                }
            }
        });
    });
});
