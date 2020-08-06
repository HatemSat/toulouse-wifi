import wifis from "../assets/wifi2.json";

function getGeoLocation() {
    return new Promise((resolve, reject) => {
        function positionSuccess(position) {
            resolve(position);
        }
        function error(err) {
            reject(err);
        }
        navigator.geolocation.getCurrentPosition(positionSuccess, error, {
            enableHighAccuracy: true,
        });
    });
}

function closestSpotFrom(lat1, lon1) {
    let la, lo, min, dist, index;
    wifis.map((wifispot, i) => {
        lo = wifispot.fields.geo_shape.coordinates[0];
        la = wifispot.fields.geo_shape.coordinates[1];
        dist = distanceBetween2Coords(lat1, lon1, la, lo);
        if (i === 0) {
            min = dist;
            index = 0;
        }
        if (dist < min) {
            min = dist;
            index = i;
        }
    });

    return { ...wifis[index].fields, id: wifis[index].recordid, distance: min };
}

function distanceBetween2Coords(lat1, lon1, lat2, lon2) {
    if (lat1 == lat2 && lon1 == lon2) {
        return 0;
    } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515 * 1.609344;
        return dist;
    }
}

export { closestSpotFrom, getGeoLocation };
