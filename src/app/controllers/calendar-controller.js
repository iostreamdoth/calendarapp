(function() {
    angular.module('myCalendarApp')
        .controller('CalendarController', CalendarController)
    CalendarController.$inject = ["$timeout"]

    function CalendarController($timeout) {
        var ccVm = this;


        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();




        ccVm.calendarInfo = [];
        ccVm.dt = null;
        ccVm.options = {
            minDate: new Date(),
            showWeeks: true
        };
        ccVm.events = [

        ];


        ccVm.calendarHash = [];

        ccVm.calendarInfo = [ccVm.events];

        ccVm.addHash = function(obj) {
            var mm = this.getMonth() + 1;
            var dd =
                var dd = this.getDate();
            var yy = this.getYear();
            if (mm.length == 1) {
                mm = "0" + mm;
            }

            if (dd.length == 1) {
                dd = "0" + dd;
            }

            var hash = "" + mm + dd + yyyy;

            var schedule;

            if (calendarHash[hash] == undefined) {
                calendarHash[hash] = [];
            }
            schedule = calendarHash[hash];

            var conflict = false;
            
            // Resolve conflict algorithm -- Not finshed yet

            for (var i = 0; i < schedule.length; i++) {

                if (schedule[i].start.getTime() <= obj.start.getTime()) {
                   
                } else {
                    if (obj.end.getTime >= schedule[i].start.getTime()) {
                        conflict = true;
                    }


                }

            }





            calendarHash[hash].push(obj)

        }

        console.log(ccVm.options.minDate);

        ccVm.addToCalendar = function() {
            var newEvent = {
                title: ccVm.eventName,
            }
            if (ccVm.eventType == "a") {
                newEvent.addlDay = true
            } else {
                console.log(ccVm.eventDate);
                console.log(ccVm.startTime);
                console.log((new Date(y, m, d)));

                newEvent.start = new Date(ccVm.eventDate.getTime() + (ccVm.startTime.getTime() - (new Date(y, m, d)).getTime()));
                //console.log(start)
                newEvent.addlDay = false

                newEvent.end = newEvent.start.getTime() + ccVm.duration * 60 * 60000;
            }



            ccVm.events.push(newEvent)
        }



    }
})();
