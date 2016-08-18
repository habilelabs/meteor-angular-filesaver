Package.describe({
    name: 'morwal89:angular-meteor-filesaver',
    // Brief, one-line summary of the package.
    // URL to the Git repository containing the source code for this package.
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md',
    summary: "angular-file-saver packaged for use in Meteor.",
    version: "0.0.1",
    git: "https://github.com/habilelabs/meteor-angular-filesaver.git"
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.0.1');
    api.versionsFrom("METEOR@1.0");
    api.add_files('lib/angular-file-saver.bundle.min.js', 'client');
});
