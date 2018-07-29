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
  async getVesselInfo (vesselId) {
    const mmsi = Vessels.findOne({_id: vesselId}, {fields: {MMSI: 1}}).MMSI

    const response = await aprs.get('', {
      params: {
        name: mmsi, // use 275304000 to debug
        what: 'loc',
        apikey: APRS_FI_API_KEY,
        format: 'json'
      }
    })

    // TODO: some checks
    const result = {
      vessel: {
        title: response.data.entries[0].name
      },
      coordinates: {
        lat: Number(response.data.entries[0].lat),
        lng: Number(response.data.entries[0].lng)
      }
    }

    return result
  }
})
