angular.module('primeiraApp').controller('investimentoCtrl', [
  '$scope',
  investimentoController
])

function investimentoController($scope){
  $scope.valor ;
  $scope.meses;
  $scope.valorPoupanca ;
  $scope.calcular = function(){
    $scope.valorPoupanca = $scope.valor * ( Math.pow(1.0046 , $scope.meses)) ;
    $scope.valorSelic= $scope.valor * ( Math.pow(1.00462 , $scope.meses)) ;
    $scope.valorCdb = $scope.valor * ( Math.pow(1.008176 , $scope.meses)) ;
  };
}
