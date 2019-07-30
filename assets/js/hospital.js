(function () {

    angular.module('myApp').controller("HospitalController", ['$http', '$scope', function ($http, $scope) {

        var baseUrl = 'https://api.jsonbin.io/b/5d0075f62132b7426dffaa74/2';

        $http.get(baseUrl).then(function (result) {
            $scope.data = result.data;
        });

    }]).config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state({
            name: 'hospital',
            url: '/hospital',
            controller: HospitalController,
            controllerAs: '$ctrl',
            template: `
                    <div ng-controller="HospitalController">
                    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 d-md-flex align-items-md-center" style="padding-left: 0px;"><button
                       ui-sref="home" class="btn btn-primary btn-lg" type="button" >{{'BACK' | translate}}</button></div>
                <div class="col-md-4 d-md-flex justify-content-md-center align-items-md-center">
                    <h1 class="d-flex d-md-flex justify-content-center" translate="HOSPITAL" >HOSPITAIS</h1>
                </div>
                <div class="col-md-4 d-flex justify-content-center justify-content-md-end justify-content-lg-end justify-content-xl-end"><button
                       ui-sref="hospitalmap" class="btn btn-primary btn-lg " type="button">{{'MAP' | translate}}</button></div>
            </div>
        </div>
    </div>

    <!--  -->

    <!--  -->

    <div class="container">
        <div class="row row-margin-bottom" >
        <!--  -->
            <div class="col-md-6 no-padding lib-item" data-category="view" ng-repeat='x in data.features' >
                <div class="lib-panel">
                    <div class="row box-shadow">
                        <div class="col-md-6">
                            <img class="lib-img-show" alt="hospitais" src="{{x.attributes.Image}}">
                        </div>
                        <div class="col-md-6">
                        <div class="dentro-card">
                            <div class="lib-row lib-header">
                                <h3>{{x.attributes.NOME}}</h3>
                                <div class="lib-header-seperator"></div>
                            </div>
                            <div class="lib-row lib-desc">
                                <p>{{x.attributes.ENDERECO}}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>

            </div>
            <!-- -->
            </div>
        </div>
    </div>
          `
        });
    }]);

    function HospitalController() {
        this.titulo = 'Home';
    }

})();