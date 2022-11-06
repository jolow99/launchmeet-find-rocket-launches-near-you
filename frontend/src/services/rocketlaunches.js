let URL = "https://fdo.rocketlaunch.live/json/launches/next/5"

// make fetch request and return data
export const getRocketLaunches = async () => {
    const response = await fetch(URL)
    const data = await response.json()


    var Airtable = require('airtable');
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyZpRe1ogEkf8nVw'
    });
    var base = Airtable.base('appFmVqJ14iFkUNbK');

    base('Table 2').create([
        {
            "fields": {
                "Name": "doesnt matter",
                "Phone Number": "123456789",
                "Postal Code": "123456789"
            }
        }
    ], function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
    return data
}
