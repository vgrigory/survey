import template from './answerAggregator.html';

export default () => {
    return {
        templateUrl: template,
        bindings: {
            'surveyGuid': '@'
        },
        controller: ($scope, $http, $injector, $attrs,
            aggregationMicroservice, questionMicroservice, answerMicroservice, surveyMicroservice
        ) => {
            $scope.$ctrl.questionMicroservice = questionMicroservice;
            $scope.$ctrl.answerMicroservice = answerMicroservice;

            $scope.aggregatedData = aggregationMicroservice.getAggregationBySurveyGuid($attrs.surveyGuid);

            $scope.$on('Survey:submitSurvey', (event, surveyData) => {
                Object.keys(surveyData).forEach((questionType) => {
                    if ($scope.aggregatedData[questionType] == undefined) {
                        $scope.aggregatedData[questionType] = {};
                    }

                    Object.keys(surveyData[questionType]).forEach((questionId) => {
                        if ($scope.aggregatedData[questionType][questionId] == undefined) {
                            $scope.aggregatedData[questionType][questionId] = {};
                        }

                        let answer = surveyData[questionType][questionId];

                        if (angular.isArray(answer)) {
                            answer.forEach((ans) => {
                                if ($scope.aggregatedData[questionType][questionId][ans] == undefined) {
                                    $scope.aggregatedData[questionType][questionId][ans] = 1;
                                } else {
                                    $scope.aggregatedData[questionType][questionId][ans] += 1;
                                }
                            });
                        } else {
                            if ($scope.aggregatedData[questionType][questionId][answer] == undefined) {
                                $scope.aggregatedData[questionType][questionId][answer] = 1;
                            } else {
                                $scope.aggregatedData[questionType][questionId][answer] += 1;
                            }
                        }
                    });
                });
            });
        }
    };
};