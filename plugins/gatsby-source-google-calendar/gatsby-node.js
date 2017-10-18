'use strict';

const config = require('./config/settings');
const crypto = require('crypto');
const CalendarAPI = require('node-google-calendar');
const calendarIdList = config.calendarId;

const cal = new CalendarAPI(config);

/*
 * getAllEvents
 * @param {string} calendarName - Name of calendar (specified in settings.js)
 */
function getAllEvents(calendarName) {
	let eventsArray = [];
  let params = {
    singleEvents: true,
    orderBy: 'startTime',
  };
  
  const calendarId = calendarIdList[calendarName];

	return cal.Events.list(calendarId, params)
		.then(json => {
			for (let i = 0; i < json.length; i++) {
				eventsArray.push(json[i]);
			}
      return eventsArray;
		}).catch(err => {
			console.error(`Error: failed to load all events from cal ${calendarName} - ${err}`);
		});
}

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  const events = await getAllEvents('saig');

  // Create a node for each event (we'll filter in the client)
  events.forEach(event => {
    const digest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(event))
      .digest(`hex`);

    const node = Object.assign(
      event,
      {
        description: event.description || '',
        parent: '__SOURCE__',
        children: [],
        internal: {
          type: `googleCalendarEvent`,
          contentDigest: digest,
        },
      }
    );

    createNode(event);
  });
}