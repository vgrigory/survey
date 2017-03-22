import multyAnswerQuestionTemplate from './multyAnswerQuestion.html';

export default () => {
    return {
        templateUrl: multyAnswerQuestionTemplate,
        bindings: {
            'questionText': '@',
            'questionAnswers': '=',
            'questionColor': '@',
            'questionId': '@'
        },
        controller: ($scope, $http, $injector, $attrs, $rootScope) => {
            $scope.$ctrl.multyAnswer = {'questionId': $attrs.questionId, answers: []};

            $scope.$ctrl.answerQuestion = (answer) => {
                if (answer.isChecked) {
                    $scope.$ctrl.multyAnswer.answers.push(answer.id);
                } else {
                    $scope.$ctrl.multyAnswer.answers.splice(
                        $scope.$ctrl.multyAnswer.answers.indexOf(answer.id),
                        1
                    );
                }

                if (!$scope.$ctrl.multyAnswer.answers.length) {
                    return;
                }

                let eventData = {};

                eventData[$attrs.questionId] = $scope.$ctrl.multyAnswer.answers;

                $rootScope.$broadcast(
                    'MultyAnswerQuestion:answerQuestion',
                    eventData
                );
            };

            $scope.$on('Survey:submitSurvey', (event) => {
                $scope.$ctrl.multyAnswer = {'questionId': $attrs.questionId, answers: []};
                $scope.$ctrl.questionAnswers.forEach((answer) => {
                    delete answer.isChecked;
                });
            });
        }
    };
};