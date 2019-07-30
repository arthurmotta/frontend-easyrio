(function () {

    angular.module('myApp')
        .config(['$stateProvider', ($stateProvider) => {
            $stateProvider.state({
                name: 'home',
                url: '/',
                controller: HomeController,
                controllerAs: '$ctrl',
                template: `
            <div class="ui container" style="padding-top: 30px;padding-bottom: 30px;height: auto;">
      <div class="ui grid">
          <div class="sixteen wide column">
              <div class="ui four stackable cards">
                  <div class="card" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;">
                      <div class="image">
                          <a tabindex="4" ui-sref="hospital"><img class="img-fluid" alt="hospital" src="assets/img/hospital.png" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"></a>

                      </div>
                  </div>
                  <div class="card">
                      <div class="image">
                          <a tabindex="5" ui-sref="delegacia"><img class="img-fluid" alt="delegacias" src="assets/img/delegacias.png" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"></a>
                      </div>
                  </div>
                  <div class="card">
                      <div class="image">
                          <a tabindex="6" ui-sref="turismo"><img class="img-fluid" alt="turismo" src="assets/img/pontos.png" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"></a>
                      </div>
                  </div>
                  <div class="card">
                      <div class="image">
                          <a tabindex="7" ui-sref="praias"><img class="img-fluid" alt="praias" src="assets/img/praias.png" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="ui grid">
          <div class="sixteen wide column">
              <div class="ui four stackable cards">
                  <div class="card">
                      <div class="image">
                          <a tabindex="8" ui-sref="comer"><img class="img-fluid" alt="restaurantes" src="assets/img/ondecomer.png" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"></a>
                      </div>
                  </div>
                  <div class="card">
                      <div class="image">
                          <a tabindex=9 ui-sref="dormir"><img class="img-fluid" alt="hoteis" src="assets/img/ondedormir.png" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"></a>
                      </div>
                  </div>
                  <div class="card">
                      <div class="image">
                          <a tabindex="10" ui-sref="eventos"><img class="img-fluid" alt="eventos" src="assets/img/eventos.png" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"></a>
                      </div>
                  </div>
                  <div class="card">
                      <div class="image">
                          <a tabindex="11" ui-sref="esportes"><img class="img-fluid" alt="esportes" src="assets/img/esportes.png" style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
          `
            });
        }]);

    function HomeController() {
        this.titulo = 'Home';
    }

})();