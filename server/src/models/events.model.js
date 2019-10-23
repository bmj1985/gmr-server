// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const events = new mongooseClient.Schema(
    {
      dateTime: { type: Date },
      details: { type: [String] },
      trailheadLink: { type: String },
      trailheadAddress: { type: String },
      runRouteLink: { type: String },
      time: { type: String },
      title: { type: String }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('events', events);
};
