/**
 * Created by jocommitte on 12/9/15.
 */
$(document).ready(function() {
    $('#my-tooltip').tooltipster({
        content: $('<span><img src="../images/baby.jpg" /> <strong>This is my baby, Victoria, in a different theme called noir</strong></span>'),
        theme:'tooltipster-noir'
    });
    $('#myMap').tooltipster({
        content:'my custom theme',
        theme: 'my-custom-theme'
    });
});