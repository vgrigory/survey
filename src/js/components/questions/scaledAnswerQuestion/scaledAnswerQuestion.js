import scaledAnswerQuestionTemplate from './scaledAnswerQuestion.html';

export default () => {
    return {
        templateUrl: scaledAnswerQuestionTemplate,
        bindings: {
            'questionText': '@',
            'scaleLength': '@',
            'questionColor': '@',
            'questionId': '@'
        },
        controller: ($scope, $http, $injector, $attrs, $rootScope) => {
            $scope.answerQuestion = (answer) => {
                if (!answer) {
                    delete $scope.$ctrl.scaledAnswer;
                    return;
                }

                let eventData = {};

                eventData[$attrs.questionId] = answer;

                $rootScope.$broadcast(
                    'ScaledAnswerQuestion:answerQuestion',
                    eventData
                );
            };

            $scope.$on('Survey:submitSurvey', (event) => {
                delete $scope.$ctrl.scaledAnswer;
            });
        }
    };
};