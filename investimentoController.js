angular.module('Wallet').controller('investimentoCtrl', [
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

google.load('vizualization','1.0', {'packages':['corechat']});

google.setOnLoadCallback(demonstrar);

function demonstrar()
{
  var data = new google.vizualization.Datatable();
  data.addColumn('string', 'Credito');
  data.addColumn('string', 'Debito');
  data.addRowls(
  [
   ['aluguel', 1500],
   ['comida', 1000],

  ]
  );
var options = {'title': 'Resumo',
              'width': 500,
              'height': 300};

var graphic = new google.vizualization.PieChart(document.getElementById('charts'));
graphic.draw(data, options);              
  
}