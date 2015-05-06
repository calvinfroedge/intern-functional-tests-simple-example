define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    registerSuite({
        name: 'index',

        'link exists': function () {
          return this.remote
            .get(require.toUrl('src/index.html'))
            .setFindTimeout(2000)
            .findById('testme')
            .getVisibleText()
            .then(function(text){
              assert.strictEqual(text, 'Test me', 'Link text should be "Test me"')
            });
        }
    });
});
