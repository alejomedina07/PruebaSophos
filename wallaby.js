module.exports = function () {
    return {
        files: [
            'index.js',
            'src/**/*.js'
        ],

        tests: [
            'test/**/*.spec.js'
        ],

        env: {
            type: 'node'
        }
    };
};
