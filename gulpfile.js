const gulp = require("gulp");

const plugins = require("gulp-load-plugins")();

const path = require("path");

const config = {
  projectDir: __dirname,
  configDir: path.join(__dirname, "config"),
  taskDir: path.join(__dirname, "tasks"),
  srcDir: path.join(__dirname, "src"),
  tsLintSrcConf: path.join(__dirname, "tslint.json")
};

function tasks(task, options) {
    return require( path.join(config.taskDir, task) )(gulp, plugins, options);
}

function getWebpackConfig(configEnv){
    return require( path.join(config.configDir, configEnv) );
}

// Linting typescript files with tslint
gulp.task("lint", tasks("tslint", { config: path.join(__dirname, "tslint.json") } ));

// Watch
gulp.task("lint:w", () => {
  gulp.watch("src/**/*.ts", ["lint"]);
});