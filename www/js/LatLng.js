GEOlocation = {
    getLocation: function()
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
    },
    showPosition: function(position)
    {
        $("#lat").val(position.coords.latitude);//Nerby coffe set curren lat and lng of user line:138
        $("#lng").val(position.coords.longitude);
    }
};
