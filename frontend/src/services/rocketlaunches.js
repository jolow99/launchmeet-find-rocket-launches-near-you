let URL = "https://fdo.rocketlaunch.live/json/launches/next/5"

// make fetch request and return data
export const getRocketLaunches = async () => {
    const response = await fetch(URL)
    const data = await response.json()


    var Airtable = require('airtable');
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: process.env.REACT_APP_AIRTABLE_KEY
    });
    var base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE);

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
