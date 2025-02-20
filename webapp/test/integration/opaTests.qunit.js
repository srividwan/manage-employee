sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'anu/emp/manageemployee/test/integration/FirstJourney',
		'anu/emp/manageemployee/test/integration/pages/EmployeeSetList',
		'anu/emp/manageemployee/test/integration/pages/EmployeeSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeSetList, EmployeeSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('anu/emp/manageemployee') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeSetList: EmployeeSetList,
					onTheEmployeeSetObjectPage: EmployeeSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);