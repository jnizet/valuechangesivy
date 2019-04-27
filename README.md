# ng-bootstrap + Ivy bugs

This project illustrates three bugs I've found with ng-bootstrap combined with Ivy.

## Building and running

 - yarn
 - ng serve

## First bug: dropdown positioning

Click on the *User* dropdown menu at the top right: nothing happens (apparently). 

Click again twice: the dropdown menu finally appears. 

The problem in fact is that the menu doesn't appear at the right position the first time it's opened, but to the right (and thus hidden). This is obvious if you do the same thing with the *Tasks* dropdown menu.
 
## Second bug: datepicker console error

Navigate to the Stats page.

Open your browser console.

Click on one of the *Open* buttons to open a datepicker: the following error is displayed in the console:

```
ERROR TypeError: Cannot read property 'nativeElement' of undefined
    at ng-bootstrap.js:4162
    at ZoneDelegate.invoke (zone-evergreen.js:359)
    at Zone.run (zone-evergreen.js:124)
    at NgZone.runOutsideAngular (core.js:30819)
    at NgbDatepicker.ngAfterContentInit (ng-bootstrap.js:4160)
    at callHook (core.js:4842)
    at callHooks (core.js:4806)
    at executeHooks (core.js:4757)
    at refreshDescendantViews (core.js:11598)
    at renderComponentOrTemplate (core.js:11976)
```

## Third bug: minDate input causes valueChanges to emit twice even though there is no value change at all

Go back to the home page and clear your browser console

Navigate to *Stats*. The following messages appear in the console:

```
should not be displayed when just loading the page
should not be displayed when just loading the page
```

This is caused by the `minDate` input of the datepicker: it causes a valueChanges to be emitted, even though there has been no change at all. Removing the minDate input makes the bug disappear.

Note that these three bugs don't happen without Ivy. If you edit the `tsconfig.app.json` file and switch Ivy off:

```
    "enableIvy": false
```

And then restart the app (`ng serve`). Those three bugs don't happen anymore.

So I'm not sure if it's an Ivy bug or a bug in ng-bootstrap. Since Ivy is supposed to be backward compatible, I'd say that those are Ivy bugs.
