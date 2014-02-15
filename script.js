// ==UserScript==
// @name         Tchibo Affiliate Marketing Group Selector Fix
// @namespace    https://affiliate.tchibo.hu
// @version      0.1
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @description  Ha mar unod, hogy a form elfelejti az aktualis marketing csoportot
// @match        https://affiliate.tchibo.hu/idevaffiliate/account.php*
// @copyright    2014 billsuxx http://github.com/billsuxx
// ==/UserScript==

(function() {
  
    //csak ilyen randa selectorral tudtam megtalalni az eppen aktualisan kivalasztott bannert
    var bannerIdContainer = jQuery('html').find('.tartalom b font')[2], 
    bannerId = $(bannerIdContainer).text();

    if (bannerId) {    
        jQuery(".tartalom select").find("option").filter(function(index) {
            return bannerId === $(this).text();
        }).prop("selected", "selected");
    }

})();
