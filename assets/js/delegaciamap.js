(function () {

    angular.module('myApp').config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state({
            name: 'delegaciamap',
            url: '/delegaciamap',
            controller: MapController,
            controllerAs: '$ctrl',
            template: `

            <div>

                      <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 d-md-flex align-items-md-center" style="padding-left: 0px;"><button
                       ui-sref="home" class="btn btn-primary btn-lg" type="button">{{'BACK' | translate}}</button></div>
                <div class="col-md-4 d-md-flex justify-content-md-center align-items-md-center">
                    <h1 class="d-flex d-md-flex justify-content-center" translate="POLICESTATION">DELEGACIAS</h1>
                </div>
                <div class="col-md-4 d-md-flex align-items-md-center justify-content-end" style="padding-right: 0px;"><button
                       ui-sref="delegacia" class="btn btn-primary btn-lg " type="button">{{'LIST' | translate}}</button></div>
            </div>
        </div>
    </div>

    <!--  -->

    <!--  -->
    <div class="iframe-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29400.959023061936!2d-43.22845275751398!3d-22.908948827922025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdelegacia!5e0!3m2!1spt-BR!2sbr!4v1559870463612!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>

            </div>
        </div>
    </div>

          `
        });
    }]);

    function MapController() {
        this.titulo = 'Home';
    }

})();