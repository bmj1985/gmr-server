// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const gmrEvents = new mongooseClient.Schema(
    {
      date: { type: Date },
      details: { type: String },
      trailhead: { name: { type: String }, id: { type: String } },
      route: { name: { type: String }, id: { type: String } },
      title: { type: String }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('gmr-events', gmrEvents);
};
