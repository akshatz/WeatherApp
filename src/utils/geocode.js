const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXphbGEiLCJhIjoiY2tpZnZicnQ4MWZrZDJzcG83ejN3MDI4aCJ9.mC1rf-aNwxnX_JKh00lo0g&limit=1'

    request({url, json:true}, (error, { body }) =>{
        if (error){
            callback('Unable to connect to geocoding services!', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location', undefined)
        } else{
            callback( undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
        })}
    })
}

module.exports = geocode