// Projects paths
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const projectController = require('../controllers/projectController.js');
const auth = require('../middleware/auth.js');

// create projects
// api/projects
router.post('/',
    auth,
    [
        check('name', 'Project name is required').not().isEmpty()
    ],
    projectController.createProject
);

router.get('/',
    auth,
    projectController.getProjects
);

router.put('/:id',
    auth,
    [
        check('name', 'Project name is required').not().isEmpty()
    ],
    projectController.updateProject
);

router.delete('/:id',
    auth,
    projectController.deleteProject
);

module.exports = router;