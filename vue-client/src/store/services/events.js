import feathersClient, {
  makeServicePlugin,
  BaseModel
} from '../feathers-client'
import { addDays, eachDay, isTuesday, addHours, addMinutes } from 'date-fns'

function nextTuesday() {
  const oneWeekFromToday = addDays(new Date(), 7)
  const daysArr = eachDay(new Date(), oneWeekFromToday)
  const tuesday = daysArr.find(v => isTuesday(v))
  const tuesdayAtSix = addHours(tuesday, 18)
  const tuesdayAtSixFifteen = addMinutes(tuesdayAtSix, 15)
  return tuesdayAtSixFifteen
}

class GmrEvent extends BaseModel {
  // constructor(data, options) {
  //   super(data, options)
  // }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = 'GmrEvent'
  // Define default properties here
  static instanceDefaults() {
    // Needs to be stubbed out.
    return {
      date: nextTuesday(),
      details: '',
      trailheadLink: '',
      trailheadAddress: '',
      runRouteLink: '',
      time: '',
      title: ''
    }
  }
}
const servicePath = 'gmrEvents'
const servicePlugin = makeServicePlugin({
  Model: GmrEvent,
  service: feathersClient.service(servicePath),
  servicePath
})

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
})

export default servicePlugin
