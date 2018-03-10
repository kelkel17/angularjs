var app = angular.module('app', []);
app.controller('test', function($scope,$http){
    $scope.header = {
        school : 'School',
        delegates: 'Delegates',
        paids: 'Paid',
        amounts: 'Amount'
    }
    $scope.data = [];
    $http.get('itkang-ce342-export.json')
    .then(function(response){
        $scope.data = Object.values(response.data.delegate);
        $scope.schools = [];
        for(var i in $scope.data){
            var key = i;
            var val = $scope.data[i];
            for(var j in val){
                var sub_key = j;
                var sub_val = val[j];
                if(sub_key == 'school'){
                    $scope.schools.push(sub_val);
                }
            }
        }
        $scope.schoolList = function(){
            $scope.counts = [];
            for(var i = 0; i <= $scope.schools.length; i++){
                if($scope.counts[$scope.schools[i]] === undefined){
                    $scope.counts[$scope.schools[i]] = 1;
                }else{
                    $scope.counts[$scope.schools[i]] = 0;
                }
            }
        }
        // console.log($scope.schools);
        // $scope.schoolList = function(){
        //     for(var i = 0; i < $scope.data.length; i++){
        //         if($scope.schools[i] == $scope.data[i].school){
        //             // console.log($scope.schools[i]);
        //             $scope.data.push($scope.schools[i]);
        //             // break;
        //         }
        //     }
        // }
    });
}); 