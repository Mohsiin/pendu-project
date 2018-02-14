var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    var mots = new Array(10);

    mots[0] = "manger";
    mots[1] = "acheter";
    mots[2] = "amour";
    mots[3] = "bonjour";
    mots[4] = "journée";
    mots[5] = "lettre";
    mots[6] = "coeur";
    mots[7] = "monde";
    mots[8] = "triste";
    mots[9] = "doucement";
    var mot = mots[parseInt(Math.random()*10)];
    chargement();

    function chargement()

    {
        $scope.mot = "";
        $scope.nbreperdu = 0;
        $scope.tester = "";
        $scope.essai = 0;
        $scope.total=5;
        for(var i = 0; i < mot.length; i++){
            $scope.mot+="-";
        }

    }
    $scope.verif = function ()
    {
        $scope.tester = $scope.tester+" "+$scope.lettre;
        $scope.ajouter = false;
        if($scope.nbreperdu < 5)
          $scope.essai++;

        if ($scope.lettre.length<2)
        {for (var i = 0; i < $scope.mot.length; i++)
            if (mot.charAt(i) == $scope.lettre){
                $scope.mot = $scope.mot.substring(0,i)+$scope.lettre+$scope.mot.substring(i+1,$scope.mot.length);
                $scope.ajouter=true;}


            if ($scope.mot == mot){alert("Bravo tu as gagné !!!");
        }

        if($scope.ajouter == false) $scope.nbreperdu = parseInt($scope.nbreperdu)+1;


        if( $scope.nbreperdu == 5 )
        {
            alert("Perdu!!! , le mot est "+mot);
        }



      }

    }
});