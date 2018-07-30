import axios from 'axios'
import { Meteor } from 'meteor/meteor'
import { Vessels } from './vessels'
import { APRS_FI_API_KEY } from '../../Keys'

/**
 *  Initialization
 */
const aprs = axios.create({
  baseURL: 'https://api.aprs.fi/api/get',
  timeout: 10000,
  params: {} // Add params later in the config
})

/**
 *  Methods
 */
Meteor.methods({
  async getVesselInfo (vesselId) {
    const mmsi = Vessels.findOne({_id: vesselId}, {fields: {MMSI: 1}}).MMSI

    const response = await aprs.get('', {
      params: {
        name: mmsi,
        what: 'loc',
        apikey: APRS_FI_API_KEY,
        format: 'json'
      }
    })
    const data = response.data

    if (data.result === 'fail') {
      throw new Meteor.Error(data.code, data.description)
    }

    const result = {
      vessel: {
        title: data.entries[0].name
      },
      coordinates: {
        lat: Number(data.entries[0].lat),
        lng: Number(data.entries[0].lng)
      }
    }

    return result
  }
})
