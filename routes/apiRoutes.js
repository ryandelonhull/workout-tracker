const router = require("express").Router();
const Workout = require("../models/exercise-plan");
const { model } = require("../models/exercise-plan");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", ({ body, params }, res) => {
Workout.findByIdAndUpdate(
    params.id,
    {$push:{exercises: body}},
    {new: true, runValidators: true}
)
    .then(dbExercise => {
    res.json(dbExercise);
    })
    .catch(err => {
    res.status(400).json(err);
    });
}); 

router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(6)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.delete("/api/workouts/", ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;