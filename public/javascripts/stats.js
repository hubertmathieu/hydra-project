/*******************************************
 * VARIABLES
 *******************************************/

const hotspots = $('.hotspot');

/*******************************************
 * FUNCTIONS
 *******************************************/

$(function () {
    hotspots.tooltip({
        html: true
    });
    console.log('Module Stats chargé!');
});