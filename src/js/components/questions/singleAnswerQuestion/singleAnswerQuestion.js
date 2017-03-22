import singleAnswerQuestionTemplate from './singleAnswerQuestion.html';

export default () => {
    return {
        templateUrl: singleAnswerQuestionTemplate,
        bindings: {
            'questionText': '@',
            'questionAnswers': '=',
            'questionColor': '@',
            'questionId': '@'
        },
        controller: ($scope, $http, $injector, $attrs, $rootScope) => {
            $scope.answerQuestion = (answer) => {
                let eventData = {};

                eventData[$attrs.questionId] = answer.id;

                $rootScope.$broadcast('SingleAnswerQuestion:answerQuestion', eventData);
            };

            $scope.$on('Survey:submitSurvey', (event) => {
                delete $scope.$ctrl.singleAnswer;
            });
        }
    };
};