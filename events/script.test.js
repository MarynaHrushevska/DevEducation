const { init } = require('./script');

describe('init', function() {
    it('init should be defined', function() {
        expect(init).toBeDefined();
    })
    it('should show popup', function () {
        const button = document.createElement('button');
        button.classList.add('hideShowAllPopup');
        function showPopup (button) {
            button.classList.remove('hideShowAllPopup')
        }
        showPopup(button);
        expect(button.classList.contains('hideShowAllPopup')).toBe(false);
    })
    it('should hide popup', function () {
        const button = document.createElement('button');
        function showPopup (button) {
            button.classList.add('hideShowAllPopup')
        }
        showPopup(button);
        expect(button.classList.contains('hideShowAllPopup')).toBe(true);
    })
})