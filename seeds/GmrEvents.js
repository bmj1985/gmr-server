exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('GmrEvents')
        .del()
        .then(() =>
            // Inserts seed entries
            knex('GmrEvents').insert([
                {
                    id: 4,
                    date: '2020-01-22T01:15:00.000Z',
                    details:
                        "<p>Looks like more dry trails this week. Lets shoot for the Lubhan Loop! we will start and finish at Mountain Toad this week. The route will be a relatively short one, so for those interested in more miles we may have a few variations to add on some additional miles. Base route posted below. Don't forget about happy hour priced beers after the run! See you Tuesday!</p>",
                    trailheadId: 1,
                    trailheadName: 'Mountain Toad',
                    routeId: null,
                    runRouteLink: 'https://www.gmap-pedometer.com/?r=6774324',
                    title: 'South Table - Lubhan Loop',
                    createdAt: '2020-01-24T22:12:12.605Z',
                    updatedAt: '2020-01-24T22:12:12.605Z',
                },
                {
                    id: 3,
                    date: '2020-01-15T01:15:00.000Z',
                    details:
                        '<p>Through the great efforts of the research department of Golden Mountain Runners, it has been determined that there are a few trails near Golden that are actually owned and managed by the City of Golden.  Golden Trails are open 24/7.  This means we can run some more trails during the winter when the trail conditions allow for it, without infringing on Jeffco Open Space closure hours!    Below is a link to a 4.6 mile route we will be doing this week!    After the run we can enjoy some Happy Hour Priced beers at <a href="https://www.facebook.com/Mountain-Toad-Brewing-201445813323279/" rel="noopener noreferrer nofollow">Mountain Toad Brewing</a>  See you out there!</p>',
                    trailheadId: 1,
                    trailheadName: 'Mountain Toad',
                    routeId: null,
                    runRouteLink: 'https://www.strava.com/routes/23380530',
                    title: 'North Table - City of Golden Trail',
                    createdAt: '2020-01-25T01:59:00.801Z',
                    updatedAt: '2020-01-25T01:59:00.801Z',
                },
                {
                    id: 2,
                    date: '2020-01-08T01:15:00.000Z',
                    details:
                        '<p>It seems like the weather is going to cooperate and we are going to get some dry trails this week! We will meet at the Green Mountain Rooney Road Lot. From there we will head up Box O’ Rox down Rooney Valley <a href="https://www.gmap-pedometer.com/?r=7171709" rel="noopener noreferrer nofollow">https://www.gmap-pedometer.com/?r=7171709</a> (Note: this route says its 5.1 miles, but due to additional switchbacks being added to Rooney Valley it will likely be 6ish miles). After the run we will head to Mountain Toad Brewing for some Happy Hour priced beers!</p><p>See you Tuesday!</p>',
                    trailheadId: 2,
                    trailheadName: 'Green Mountain/Rooney',
                    routeId: null,
                    runRouteLink: 'https://www.gmap-pedometer.com/?r=7171709 ',
                    title: 'Green Mountain Box O Rox',
                    createdAt: '2020-01-25T02:00:39.496Z',
                    updatedAt: '2020-01-25T02:00:39.496Z',
                },
                {
                    id: 1,
                    date: '2020-01-01T01:15:00.000Z',
                    details:
                        '<p>*<strong>Note the Special Start Time</strong>*</p><p>Hey y\'all...let\'s get together one last time in 2019! For this one we will start at&nbsp;<a href="https://www.facebook.com/Mountain-Toad-Brewing-201445813323279/" rel="noopener noreferrer nofollow">Mountain Toad Brewing</a>. We will do a run up South Table to the Castle Rock. If you want to pack a small bottle of champagne to have a quick year end toast at the top I\'m sure not gonna stop you! After the run we can all share one last beer and a few more laughs before heading out to whatever soiree you may have planned for the evening. Happy New Year!</p>',
                    trailheadId: 1,
                    trailheadName: 'Mountain Toad',
                    routeId: null,
                    runRouteLink: null,
                    title: 'New Years Eve Run',
                    createdAt: '2020-01-25T02:01:58.592Z',
                    updatedAt: '2020-01-25T02:01:58.592Z',
                },
                {
                    id: 5,
                    date: '2020-01-29T01:15:00.000Z',
                    details:
                        '<p>The weather held off and the trails look good, we will run the North Table Mountain Trail that we ran a couple weeks ago. After the run we can gather around the fire pit and enjoy some kombuchas or HAPPY HOUR PRICED BEERS!<br>See you Tuesday!</p><p><s>Looking like we have a decent chance of rain and snow today leading into tomorrow. Not quite sure what that will mean for trail conditions. With that said, let\'s meet at&nbsp;</s><a href="https://www.facebook.com/Mountain-Toad-Brewing-201445813323279/" rel="noopener noreferrer nofollow"><s>Mountain Toad Brewing</s></a><s>&nbsp;again this week. Plan for a 5ish mile road run. If the weather does hold off and the trails are good, maybe we will pivot and run the North Table Mountain Trail that we ran a couple weeks ago. After the run we can gather around the fire pit and enjoy some kombuchas or HAPPY HOUR PRICED BEERS!</s></p>',
                    trailheadId: 1,
                    trailheadName: 'Mountain Toad',
                    routeId: null,
                    runRouteLink: 'https://www.strava.com/routes/23380530',
                    title: 'Golden North Table Mountain Trail',
                    createdAt: '2020-01-27T18:53:43.616Z',
                    updatedAt: '2020-01-27T18:53:43.616Z',
                },
                {
                    id: 6,
                    date: '2020-02-12T01:15:00.000Z',
                    details:
                        '<p>Ok y’all…The trails may not be so great tonight. It’s been a while since we’ve done a path run so let’s play it safe. We will meet at Mountain toad and run a counter clockwise loop up Tucker Gulch bike path until we hit the bike path that parallels Hwy 93. We will run back down to the clear creek path and back to the Toad. Total distance is a little over 4 miles. After the run its time for Happy Hour priced beers!</p>',
                    trailheadId: 1,
                    trailheadName: 'Mountain Toad',
                    routeId: null,
                    runRouteLink: 'https://www.gmap-pedometer.com/?r=7322946',
                    title: 'Golden Town Loop',
                    createdAt: '2020-02-11T18:39:50.162Z',
                    updatedAt: '2020-02-11T18:39:50.162Z',
                },
                {
                    id: 7,
                    date: '2020-02-05T01:15:00.000Z',
                    details:
                        '<p>Tonight is going to be a "See What You are Made Of Run". Cold and snow packed (or just snowy) trails will make things challenging. But hey, isn\'t that what we do this for? Dress warm, bring your best headlamp, traction if you want it. But most importantly bring your sense of adventure. We will be sure to wait as a group at all trail intersections to make sure no one gets left in a snowbank. the run will be approximately 5 miles (see route below). After we are done running we can all go back to <a href="https://www.facebook.com/Mountain-Toad-Brewing-201445813323279/" rel="noopener noreferrer nofollow">Mountain Toad Brewing</a> and warm up by the fire pit with some kombucha or happy hour priced beers.</p>',
                    trailheadId: 2,
                    trailheadName: 'Green Mountain/Rooney',
                    routeId: null,
                    runRouteLink: 'https://www.gmap-pedometer.com/?r=6881676',
                    title: 'Green Mountain Snow Trail Run',
                    createdAt: '2020-02-11T18:44:17.315Z',
                    updatedAt: '2020-02-11T18:44:17.315Z',
                },
                {
                    id: 8,
                    date: '2020-02-19T01:15:00.000Z',
                    details:
                        '<p>Another "no-go" on the trails this week. We will meet at Mountain Toad and shoot 5 mile loop around town. We will run up Clear Creek and then take the bike path along Hwy 6 toward Apex. Then back through town, adding a little loop to get to an exact 5 mile distance. After the run, as always, HAPPY HOUR PRICED BEERS at <a href="https://www.facebook.com/Mountain-Toad-Brewing-201445813323279/" rel="noopener noreferrer nofollow">Mountain Toad Brewing</a>!</p>',
                    trailheadId: 1,
                    trailheadName: 'Mountain Toad',
                    routeId: null,
                    runRouteLink: 'https://www.strava.com/routes/23952540',
                    title: 'Golden Bike Path Run',
                    createdAt: '2020-02-18T20:26:43.483Z',
                    updatedAt: '2020-02-18T20:26:43.483Z',
                },
            ])
        )
        .then(() => knex.raw('ALTER SEQUENCE gmrEvents_id_seq RESTART WITH 9;'))
}
