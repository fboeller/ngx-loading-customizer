(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{SEnx:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var o=n("fXoL"),a=n("7KVi"),l=n("Fh2I"),s=n("4ZhR"),i=n("ofXK");const c=["content"];function r(t,e){1&t&&o.bc(0,0,["*ngIf","showNgContent"])}function d(t,e){1&t&&o.Mb(0)}function p(t,e){if(1&t&&(o.Ob(0),o.jc(1,d,1,0,"ng-container",2),o.Nb()),2&t){const t=o.Yb(),e=o.gc(3);o.Ab(1),o.dc("ngTemplateOutlet",t.templateRef?t.templateRef:e)("ngTemplateOutletContext",t.templateContext)}}function u(t,e){}const b=["*"];let h=(()=>{class t{constructor(t,e){this.resolver=t,this.defaultComponents=e,this.loadable=l.b,this.templates={},this.showNgContent=!1}get loadingState(){return Object(a.a)(this.loadable)}updateContent(){if("loaded"===this.loadingState)return;this.templateRef=this.templates[this.loadingState];const t=this.defaultComponents[this.loadingState];if(!this.templateRef&&t&&this.content){this.content.clear();const o=this.resolver.resolveComponentFactory(t);this.defaultComponentRef=this.content.createComponent(o),(e=this.defaultComponentRef).instance.type=(n=this.loadable).type,Object(a.e)(n)?e.instance.value=n.value:Object(a.b)(n)&&(e.instance.error=n.error)}var e,n}ngOnChanges(t){var e,n,o;"loadable"in t&&(this.showNgContent=Object(a.e)(this.loadable),this.templateContext=Object.assign(Object.assign({},(n={idle:()=>({}),loading:()=>({}),loaded:t=>({value:t}),error:t=>({error:t})},o=this.loadable,Object(a.e)(o)?n.loaded(o.value):Object(a.b)(o)?n.error(o.error):Object(a.c)(o)?n.idle():n.loading())),{type:this.loadable.type})),("loadable"in t||"templates"in t)&&(null===(e=this.defaultComponentRef)||void 0===e||e.destroy(),this.updateContent())}ngAfterViewInit(){setTimeout(()=>this.updateContent())}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(o.j),o.Kb(s.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["ld-loadable"]],viewQuery:function(t,e){if(1&t&&o.nc(c,1,o.Q),2&t){let t;o.fc(t=o.Xb())&&(e.content=t.first)}},inputs:{loadable:"loadable",templates:"templates"},features:[o.yb],ngContentSelectors:b,decls:4,vars:2,consts:[[4,"ngIf"],["content",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(o.cc(),o.jc(0,r,1,0,"ng-content",0),o.jc(1,p,2,2,"ng-container",0),o.jc(2,u,0,0,"ng-template",null,1,o.kc)),2&t&&(o.dc("ngIf",e.showNgContent),o.Ab(1),o.dc("ngIf",!e.showNgContent))},directives:[i.j,i.m],styles:[""]}),t})()}}]);