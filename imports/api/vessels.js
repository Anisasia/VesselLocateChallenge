import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import seedVessels from './mockData/seedVessels'

/**
 *  Collections
 */
export const Vessels = new Mongo.Collection('vessels')

/**
 *  Initialization
 */
seedVessels.forEach(vessel => Vessels.insert(vessel))

/**
 *  Methods
 */
Meteor.methods({
  suggestVessels (name) {
    const LIMIT = 10
    const searchPattern = new RegExp('.*' + name + '.*', 'i')

    return Vessels.find({Name: {$regex: searchPattern}}, {limit: LIMIT, fields: {Name: 1}}).fetch()
  }
})
