const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  day: {
    type: String,
    trim: true,
    required: "Enter a name for exercise"
  },
  exercises: [{
    name: {
      type: String,
      trim: true,
      required: "Enter a name"
    },
    duration: {
      type: String,
      trim: true,
      required: "Enter and duration"
    },
    weight: {
      type: String,
      trim: true,
      required: "Enter a weight"
    },
    reps: {
      type: String,
      trim: true,
      required: "Enter number of reps"
    },
    sets: {
      type: String,
      trim: true,
      required: "Enter number of sets"
    },
    distance: {
      type: String,
      trim: true,
      required: "Enter distance"
    },
  }
]
},
 {
  toJSON: {
    virtuals: true
  }
 }
);

exerciseSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;