// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const gmrEvents = new mongooseClient.Schema(
    {
      date: { type: Date, required: true },
      details: { content: { type: Array } },
      trailhead: { name: { type: String }, address: { type: String } },
      route_id: { type: String },
      title: { type: String, required: true },
      runRouteLink: String
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('gmr-events', gmrEvents);
};
