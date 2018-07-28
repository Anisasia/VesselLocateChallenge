import { Meteor } from 'meteor/meteor'
import aprs from '../imports/api/aprs'
import seedVessels from './mockData/seedVessels'
import {Vessels} from '../imports/api/vessels'
import {APRS_FI_API_KEY} from '../Keys'

Meteor.startup(() => {
  // initialize collection with fake data
  seedVessels.forEach(vessel => Vessels.insert(vessel))
})

Meteor.methods({
  async getVesselCoordinates (vesselId) {
    const mmsi = Vessels.findOne({_id: vesselId}, {fields: {MMSI: 1}}).MMSI

    const response = await aprs.get('', {
      params: {
        name: mmsi, // use 275304000 to debug
        what: 'loc',
        apikey: APRS_FI_API_KEY,
        format: 'json'
      }
    })

    return response.data
  }
})
