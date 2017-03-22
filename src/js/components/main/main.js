import {survey, singleAnswerQuestion, multyAnswerQuestion, scaledAnswerQuestion} from '../../components/survey/survey';
import answerAggregator from '../../components/answerAggregator/answerAggregator';
import mainTemplate from './main.html';
import aboutDialogTemplate from './aboutDialog.html';

import './main.scss';

let main = () => {
    return {
        templateUrl: mainTemplate,
        controller: ($scope, $http, $injector, $attrs, $uibModal) => {
            $scope.openDialog = () => {
                $scope.aboutDialog = $uibModal.open({
                    animation: true,
                    templateUrl: aboutDialogTemplate,
                    scope: $scope,
                    size: 'lg'
                });
            };
        }
    };
};

export {main, survey, singleAnswerQuestion, multyAnswerQuestion, scaledAnswerQuestion, answerAggregator};