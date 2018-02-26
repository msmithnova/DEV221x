angular.module('app').controller('ContactUsController', [
    function () {
        var vm = this;
        vm.sentAlert = sentAlert;
        function sentAlert() {
            alert('Contact Sent');
        }
    }
]);