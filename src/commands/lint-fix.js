const shellSpawn = require('../shellSpawn');
const path = require('path');
const pathFinder = require('../utils/pathFinder');
const log = require('../log');

function lintFix() {
    const eslintConfigPath = pathFinder(
        './eslint.config.js',
        path.resolve(__dirname, '../../etc/config/eslint.config.js'),
    );

    log(`eslint config located in ${eslintConfigPath}`);
    shellSpawn('./node_modules/.bin/eslint', [ '--config', eslintConfigPath, '--ext', '.js,.jsx,.ts,.tsx', '--fix', './src/' ]);
}

module.exports = lintFix;
