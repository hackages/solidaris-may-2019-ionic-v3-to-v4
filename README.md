# Migration v3 to v4

The goal of this exercices is to migrate a simple application built in ionic v3 to v4.

The assets, theme and providers are already copied in the righ place so don't touch them.

## Migration steps

- Let's align the v3 `app.module.ts` with v4 `app.module.ts` by importing all missing 'Modules'
- Register all services in `providers` folder using `Tree Shakeable Providers`
- Copy v3 `app.component.scss` to v4 `app.component.scss` and do the TODO
- Load the `app.component.scss` style in `app.component.ts`
- Copy v3 `app.component.ts` to v4 `app.component.ts` function by function except the content of `presentFilter` function. Fix all issues:

  - Remove unused imports
  - A lot of imports have changed, fix them
  - Some types has changed their names such `List`,`ItemSliding`. Hints: IonList, HTMLIonItemSlidingElement
  - Some services doesn't exist anymore such `App`, remove it and delete the code that call it.
  - Some services has changed their implementation such as `AlertController`, `LoadingController`, `ModalController`, `ToastController`. Hint: overlay components are asynchrone now

- Copy v3 `app.component.html` to v4 `app.component.html` and fix all issues:

  - Some components doesn't exist anymore, refactor them using the migration `v4-migration-tslint` tool
  - If the tool can not fix it, fix it manually

At this stage, you should have a working application but the filter button is not working. Let's solve that

- Copy v3 `page` folder to v4 `app` folder. Then, we could now add the content of `presentFilter` function. Fix all issues:
  - Remove unused imports
  - A lot of imports have changed, fix them
  - Some types has changed their names.
  - Some services doesn't exist anymore such `NavParams`.
  - Some services has changed their implementation such as `ViewController`. Hint: `ModalController`
