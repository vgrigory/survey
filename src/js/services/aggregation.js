export default class AggregationMicroservice {
    constructor() {
        this.aggregationPool = {
            'DADA5136549C4D00AC9DD179F3D4707F': {
                'SingleAnswerQuestion': {
                    '5C227595FBD0446A8E72AF52C9D5A175': {
                        '01C9494E9A7E40F5A73370B176CA18A8': 0,
                        '75E6FAA1B8AD4D49A57418D8A2E6DDEC': 0,
                        '123A1DAA03B54E8EBA5931C7B4C6155B': 0
                    }
                },
                'MultyAnswerQuestion': {
                    '68BC2E7FB6AB4A8A946ED47B0489EBE2': {
                        '1B315096B93B42A5A64C7D74AB18B261': 0,
                        'E4F746133FFA478FB5E769FA172FF9ED': 0,
                        'B753CFCB9B0A461FA68FA9C6BE565F86': 0
                    }
                },
                'ScaledAnswerQuestion': {
                    '10BF67E5DA664F3B85FF7CE751E81FFB': {}
                }
            },
            '8EB7BE12882F46B394515C4C01B2AB87': {
                'SingleAnswerQuestion': {
                    '1C4212713324410EBC30A34AC2A59158': {
                        '9B9FA327E7984440A88832BF78E8FD65': 0,
                        '2ABCF1D2768C49348F6F1657F4AB9C63': 0,
                        '5329154D869046E7ADDF9534DACA5C6D': 0
                    },
                    '6D598DED6A1F4411AE1EFDA32B24BB30': {
                        '58848D90F76A4560944E09B63FEC2D77': 0,
                        '07325AF015B94142B6120C95650C6B9A': 0,
                        '254D470919DD433FBEEB2C1A93F093ED': 0
                    }
                },
                'MultyAnswerQuestion': {
                    '09BA6F8E282542CBBE9A68E86FE7D4BB': {
                        '1A7ADEF3DB144E1D8015CF21A21CB1DE': 0,
                        '68B78781AE534A7E9F1F17FB6666AA85': 0,
                        '12BDDB2F1F144EDEB61E912828A70D1A': 0
                    }
                },
                'ScaledAnswerQuestion': {
                    '477B1E0258B04C76B0BA2532492397C7': {
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0,
                        6: 0,
                    }
                }
            }
        };
    }

    getAggregationBySurveyGuid(surveyGuid) {
        return this.aggregationPool[surveyGuid];
    }
}