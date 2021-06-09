class Options {
    constructor(optionsSelector = '.options__block',
                selectedOptionSelector = '.option__selected',
                optionArrowSelector = '.option-arrow') {
        this.optionsContainer = document.querySelector(optionsSelector);
        this.selectedOption = document.querySelector(selectedOptionSelector)
        this.optionArrow = document.querySelector(optionArrowSelector)

        this._init();
    }
    _init() {
        this._setOptionsStyle();
        this.selectedOption.addEventListener('click', () => this._toggleOptions());
        this.optionsContainer.addEventListener('click', event => this._chooseOption(event));
    }
    _toggleOptions() {
        this.optionsContainer.classList.toggle('options__block_hide');
        this.optionArrow.classList.toggle('option-arrow_rotate')
    }
    _setOptionsStyle() {
        const percent = this.optionsContainer.childElementCount * 65;
        this.optionsContainer.style.bottom = `-${percent}%`;
    }
    _chooseOption(event) {
        const targetClick = event.target;
        if (targetClick.classList.contains('option')) {
            this._changeCitizenship(targetClick);
            this._changeFlag(targetClick);
            this._toggleOptions();
        } else {
            this._changeCitizenship(targetClick.parentNode);
            this._changeFlag(targetClick.parentNode);
            this._toggleOptions();
        }
    }
    _changeCitizenship(targetClick) {
        const citizenship = targetClick.dataset.option;
        this.selectedOption.querySelector('.flag-name').textContent = `${citizenship}`
    }
    _changeFlag(targetClick) {
        const flag = targetClick.dataset.flag;
        this.selectedOption.querySelector('.flag').src = `${flag}`;
    }
}

const options = new Options();
