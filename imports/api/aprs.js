import axios from 'axios'
import { Meteor } from 'meteor/meteor'
import { Vessels } from './vessels'
import { APRS_FI_API_KEY } from '../../Keys'

const aprs = axios.create({
  baseURL: 'https://api.aprs.fi/api/get',
  timeout: 10000,
  params: {} // Add params later in the config
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
