# Angular Loadable

Angular Loadable is a library that helps you represent and show data that needs to be loaded from a backend and can therefore be in a loading state.

- **Loadable type** - The type `Loadable<T>` lets you represent the full state of your loading data with a single object. No more additional booleans passed to your components.
- **Loadable component** - The component `ld-loadable` shows your loaded data, a loading animation or an error state depending on the state of the loadable object.
- **Global defaults** - You can define a default custom loading animation and a default custom error state globally per lazy-loaded module. Once you want to refine the individual loading animations per loaded data, you can simply define local loading animations that overrule the default.
- **Observable and NgRx Compatibility** - Both the loadable type and loadable component integrate well with observables and NgRx. Via the operator `toLoadable` a loadable can be extracted from an observable.
- **No dependencies** — Besides Angular this library does not have any dependencies.

## Installation

```
npm install --save ngx-loadable
```

## Try it

This repo includes an example application showcasing the usage of ngx-loadable.

```
$ git clone https://github.com/fboeller/ngx-loadable.git
$ cd ngx-loadable
$ npm install
$ npm start example-app
```

## Usage

### Construct a loadable

Given an observable, you can construct a loadable with the operator `toLoadable`.

```typescript
import { toLoadable } from "ngx-loadable";
import { of } from "rxjs";

const loadable$ = of({ id: 42 }).pipe(toLoadable);
```

### Display a loadable

If you have an object of type `Loadable<T>`, you can display it with the `ld-loadable` component.

First, make sure to import the `LoadableModule` in your module.

```typescript
import { NgModule } from "@angular/core";
import { LoadableModule } from "ngx-loadable";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [LoadableModule],
})
export class AppModule {}
```

Define a loadable object in your component.
You can use `idle`, `loading`, `loaded('value')` and `errored('error')` to construct a loadable.

```typescript
import { Component } from "@angular/core";
import { idle, Loadable } from "ngx-loadable";

@Component({
  selector: "app-some",
  templateUrl: "./some.component.html",
})
export class SomeComponent {
  loadable: Loadable<object> = idle;
}
```

Then, you can display the loadable by passing it as input to the `ld-loadable` component and by defining the template for the `loaded` state.
With the pipe `loadedValue` you can extract the loaded value from the loadable.

```html
<ld-loadable [loadable]="loadable">
  <p>Loaded</p>
  <pre>{{ loadable | loadedValue | json }}</pre>
</ld-loadable>
```

Note that this inner template is only rendered in the `loaded` state and this example defaults to the standard loading animation and error state.

### Define a custom default loading animation

You can define a custom default loading animation within your application.
Note that the way Angular providers work, these defaults are global within your lazy-loaded module.

Create your custom loading animation component and pass it to the `LoadableModule`. Each `ld-loadable` component now defaults to this loading animation component.

```typescript
import { NgModule } from "@angular/core";
import { LoadableModule } from "ngx-loadable";
import { CustomLoadingAnimationComponent } from "./custom-loading-animation.component";

@NgModule({
  declarations: [CustomLoadingAnimationComponent],
  imports: [
    LoadableModule.forRoot({
      defaultComponents: {
        loading: CustomLoadingAnimationComponent,
      },
    }),
  ],
})
export class AppModule {}
```

### Define a custom local loading animation

In cases where you would like to refine the loading animation for the concrete usage of an `ld-loadable`, you can define and pass a loading template to the component.

```html
<ld-loadable [loadable]="loadable" [templates]="{ loading: loading }">
  <h3>Loaded</h3>
  <pre>{{ loadable | loadedValue | json }}</pre>
</ld-loadable>
<ng-template #loading>
  <p>The answer is currently being computed.</p>
</ng-template>
```

### Define a custom error state

The presented mechanism for a custom default loading animation and a custom local loading animation can also be used to change the presentation of the error state.

### Change the presentation of the idle state

A loadable is in the idle state before any loading has started.
In this state, the `ld-loadable` component does not render anything by default, leading to a white page.
In case you would like to show a loading animation immediately, you can change the default behavior.

```typescript
import { NgModule } from "@angular/core";
import { LoadableModule } from "ngx-loadable";
import { LoadableLoadingComponent } from "ngx-loadable";

@NgModule({
  imports: [
    LoadableModule.forRoot({
      defaultComponents: {
        idle: LoadableLoadingComponent,
      },
    }),
  ],
})
export class AppModule {}
```

### Transform a loadable

A loadable is a functional data structure.
It defines some utility functions to work with it.

If you have a loadable and want to change its value once it is loaded, you can use `map`.

```typescript
import { map, loaded } from "ngx-loadable";
const loadable = loaded(5);
const result = map((x) => x + 10, loadable); // loaded(15)
```

If you have a loadable and want to map it to another loadable once it is loaded, you can use `flatMap`.

```typescript
import { flatMap, loaded } from "ngx-loadable";
const loadable = loaded(5);
const result = flatMap((x) => loaded(x + 10), loadable); // loaded(15)
```
