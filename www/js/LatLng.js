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
        $("#lat").val(position.coords.latitude);
        $("#lng").val(position.coords.longitude);
    }
};
