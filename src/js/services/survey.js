export default class SurveyMicroservice {
    constructor() {
        this.surveyPool = [{
            id: 'DADA5136549C4D00AC9DD179F3D4707F',
            name: 'Survey #1 - Doming everti recteque cum.',
            questions: [{
                id: '5C227595FBD0446A8E72AF52C9D5A175',
                type: 'singleAnswer',
                color: '#a00',
                text: 'Ius iisque suscipit in, soluta?',
                answers: [
                    {label: 'Mel summo', id: '01C9494E9A7E40F5A73370B176CA18A8'},
                    {label: 'Usu ei', id: '75E6FAA1B8AD4D49A57418D8A2E6DDEC'},
                    {label: 'Latine deterruisset', id: '123A1DAA03B54E8EBA5931C7B4C6155B'}
                ]
            }, {
                id: '68BC2E7FB6AB4A8A946ED47B0489EBE2',
                type: 'multyAnswer',
                color: '#0a0',
                text: 'Ius odio consequat eu, has electram?',
                answers: [
                    {label: 'Et pro justo', 'id': '1B315096B93B42A5A64C7D74AB18B261'},
                    {label: 'Mei at dicam', 'id': 'E4F746133FFA478FB5E769FA172FF9ED'},
                    {label: 'Ut eos semper', 'id': 'B753CFCB9B0A461FA68FA9C6BE565F86'}
                ]
            }, {
                id: '10BF67E5DA664F3B85FF7CE751E81FFB',
                type: 'scaledAnswer',
                color: '#00a',
                text: 'Populo molestie mea ex?',
                scaleLength: 4
            }]
        }, {
            id: '8EB7BE12882F46B394515C4C01B2AB87',
            name: 'Survey #2 - Quis nobis in vel',
            questions: [{
                id: '1C4212713324410EBC30A34AC2A59158',
                type: 'singleAnswer',
                color: '#722',
                text: 'Ex diam sint dignissim?',
                answers: [
                    {label: 'Duo et', 'id': '9B9FA327E7984440A88832BF78E8FD65'},
                    {label: 'Quando labores', 'id': '2ABCF1D2768C49348F6F1657F4AB9C63'},
                    {label: 'Utinam hendrerit', 'id': '5329154D869046E7ADDF9534DACA5C6D'}
                ]
            }, {
                id: '6D598DED6A1F4411AE1EFDA32B24BB30',
                type: 'singleAnswer',
                color: '#272',
                text: 'No ceteros placerat.',
                answers: [
                    {label: 'Enim', id: '58848D90F76A4560944E09B63FEC2D77'},
                    {label: 'Lorem', id: '07325AF015B94142B6120C95650C6B9A'},
                    {label: 'Singulis', id: '254D470919DD433FBEEB2C1A93F093ED'}
                ]
            }, {
                id: '09BA6F8E282542CBBE9A68E86FE7D4BB',
                type: 'multyAnswer',
                color: '#227',
                text: 'Sit voluptaria intellegam?',
                answers: [
                    {label: 'Malis.', id: '1A7ADEF3DB144E1D8015CF21A21CB1DE'},
                    {label: 'Nostrum suscipiantur', id: '68B78781AE534A7E9F1F17FB6666AA85'},
                    {label: 'Ridens', id: '12BDDB2F1F144EDEB61E912828A70D1A'}
                ]
            }, {
                id: '477B1E0258B04C76B0BA2532492397C7',
                type: 'scaledAnswer',
                color: '#46b',
                text: 'Dicam animal oporteat vis?',
                scaleLength: 6
            }]
        }];
    }

    getSurveyByGuid(surveyGuid) {
        let i;
        let length = this.surveyPool.length;
        let surveyToReturn;

        // using regular "for" loop instead of "forEach"
        // to be able to break it when match is found
        for (i = 0; i < length; i++) {
            if (this.surveyPool[i].id == surveyGuid) {
                surveyToReturn = this.surveyPool[i];
                break;
            }
        }

        return surveyToReturn;
    }
}