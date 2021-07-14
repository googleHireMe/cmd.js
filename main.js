const { Tree }  = require('./tools/tree');
const { commandPresets: tasksList } = require('./config/config.json');


const task = tasksList.find(task => task.name === 'runMIDCwithRxApp');
const tree = new Tree(task, tasksList);
tree.executeRootCommand();
