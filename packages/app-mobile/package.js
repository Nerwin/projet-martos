Package.describe({
    name: 'app-mobile',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.2.4');
    api.use([
        'iron:router',
        'fortawesome:fontawesome',
        'fourseven:scss@2.0.0',
        'momentjs:moment',
        'meteoric:ionic-sass',
        'meteoric:ionic',
        'meteoric:ionicons-sass'
    ]);
    api.addAssets([
        'view/home.html',
        'view/meetings.html',
        'view/surveys.html',
        'view/profile.html',
        'javascript/routes.js',
        'javascript/home.js',
        'javascript/meetings.js',
        'javascript/surveys.js',
        'javascript/profile.js',
        'stylesheet/main.scss',
        'stylesheet/main.css'
    ], ['web.cordova']);
});

Cordova.depends({
    "org.apache.cordova.statusbar": "0.1.10"
});
