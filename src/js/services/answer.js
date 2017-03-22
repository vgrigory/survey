export default class AnswerMicroservice {
    constructor() {
        this.answersMap = {
            '01C9494E9A7E40F5A73370B176CA18A8': 'Mel summo',
            '75E6FAA1B8AD4D49A57418D8A2E6DDEC': 'Usu ei',
            '123A1DAA03B54E8EBA5931C7B4C6155B': 'Latine deterruisset',
            '1B315096B93B42A5A64C7D74AB18B261': 'Et pro justo',
            'E4F746133FFA478FB5E769FA172FF9ED': 'Mei at dicam',
            'B753CFCB9B0A461FA68FA9C6BE565F86': 'Ut eos semper',
            '9B9FA327E7984440A88832BF78E8FD65': 'Duo et',
            '2ABCF1D2768C49348F6F1657F4AB9C63': 'Quando labores',
            '5329154D869046E7ADDF9534DACA5C6D': 'Utinam hendrerit',
            '58848D90F76A4560944E09B63FEC2D77': 'Enim',
            '07325AF015B94142B6120C95650C6B9A': 'Lorem',
            '254D470919DD433FBEEB2C1A93F093ED': 'Singulis',
            '1A7ADEF3DB144E1D8015CF21A21CB1DE': 'Malis.',
            '68B78781AE534A7E9F1F17FB6666AA85': 'Nostrum suscipiantur',
            '12BDDB2F1F144EDEB61E912828A70D1A': 'Ridens'
        };
    }

    getAnswerLabelByGuid(answerGuid) {
        return this.answersMap[answerGuid];
    }
}