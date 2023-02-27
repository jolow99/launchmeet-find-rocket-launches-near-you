Read more at <https://devpost.com/software/launchmeet-0k34ls>

# Inspiration
We were inspired by the latest Twitter acquisition, which made us realise that social applications and community are not exclusively engineering problems.

# What it does
launchmeet. makes it easy for people to find rocket launches near them and to find a community of like-minded space enthusiasts. We have a 3D interactive visualisation of rocket launches near you and also provide a service which notifies you about upcoming launches in your area via SMS.

Additionally, we automatically create Discord threads for every upcoming launch in the launchmeet community Discord server which enables space enthusiasts to organically organise local meetups.

# Integration with DeSo
Our Discord bot is also able to get all messages from each thread representing an upcoming rocket launch and write it to our DeSo node. This enables us to create social analytics such as the most popular rocket launches or the most active community member. Additionally, we expose the indexed data on our node which enables us to tap on the composable nature of the blockchain, to further engage our community in building apps upon community-owned data for a healthy, thriving ecosystem.

In the future, we hope to also integrate with DeSo messenger instead of Discord as it enables a better, more aligned way of engaging and building the space community.

# How we built it
- Interactive 3D Globe The 3D globe was built using three.js, specifically the globe.gl library. We used RocketLaunch.live to get data on rocket launches, and used positionstack, a geocoding API to turn the street address into latitude and longitude.
- Real-Time Notifications A form was setup on the React frontend and the phone number was stored in an Airtable database. The Airtable is integrated with Twilio to provide SMS updates on upcoming launches.
- Social Integrations A worker was setup to monitor upcoming launches, which was integrated with a Discord bot that would announce the location and time of these launches.

# Challenges we ran into
We initially wanted to utilise Google's Geocoding API but could not get the Google credits in time. Fortunately, we were able to find a free public alternative.

As for the positionstack and Discord APIs, we were having issues with rate limiting, and had to throttle our queries to overcome them.

# Accomplishments that we're proud of
We are proud of the frontend globe we completed, and also the number of external APIs and integrations we had.

# What we learned
Three.js, integrations with Discord, Airtable, Twilio and other APIs.
