// Projects paths
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth.js');
const { check } = require('express-validator');


// create task
// api/tasks
router.post('/',
    auth,
    [
        check('name', 'Task name is required').not().isEmpty(),
        check('project', 'project is required').not().isEmpty()
    ],
    taskController.createTask
);


router.get('/',
    auth,
    taskController.getTasks
)

router.put('/:id',
    auth,
    taskController.updateTask
)

router.delete('/:id',
    auth,
    taskController.deleteTask
)

module.exports = router;