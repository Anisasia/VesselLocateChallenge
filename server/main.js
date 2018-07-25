import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

import seedVessels from './mockData/seedVessels'

Meteor.startup(() => {
  const Vessels = new Mongo.Collection('vessels')
  seedVessels.forEach(vessel => Vessels.insert(vessel))

  // TODO: Continue here
  console.log(Vessels.find().fetch()[0])
})
