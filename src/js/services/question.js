export default class QuestionMicroservice {
    constructor() {
        this.questionsMap = {
            '5C227595FBD0446A8E72AF52C9D5A175': 'Ius iisque suscipit in, soluta?',
            '68BC2E7FB6AB4A8A946ED47B0489EBE2': 'Ius odio consequat eu, has electram?',
            '10BF67E5DA664F3B85FF7CE751E81FFB': 'Populo molestie mea ex?',
            '1C4212713324410EBC30A34AC2A59158': 'Ex diam sint dignissim?',
            '6D598DED6A1F4411AE1EFDA32B24BB30': 'No ceteros placerat.',
            '09BA6F8E282542CBBE9A68E86FE7D4BB': 'Sit voluptaria intellegam?',
            '477B1E0258B04C76B0BA2532492397C7': 'Dicam animal oporteat vis?'
        };
    }

    getQuestionLabelByGuid(questionGuid) {
        return this.questionsMap[questionGuid];
    }
}