
⚠ Warning: It looks like you're passing --spec a space-separated list of arguments:

"--browser chrome"

This will work, but it's not recommended.

If you are trying to pass multiple arguments, separate them with commas instead:
  cypress run --spec arg1,arg2,arg3
  
The most common cause of this warning is using an unescaped glob pattern. If you are
trying to pass a glob pattern, escape it using quotes:
  cypress run --spec "**/*.spec.js"


Cypress encountered an error while parsing the argument: --spec

You passed: true

The error was: spec must be a string or comma-separated list
