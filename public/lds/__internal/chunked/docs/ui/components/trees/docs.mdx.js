var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/trees/docs.mdx.js"]=function(e){function t(t){for(var l,i,c=t[0],o=t[1],m=t[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(s&&s(t);u.length;)u.shift()();return r.push.apply(r,m||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(l=!1)}l&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},n={80:0},r=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var s=o;return r.push([668,0]),a()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},668:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return Y})),a.d(t,"getContents",(function(){return z}));var l=a(0),n=a.n(l),r=a(4),i=a(2),c=(a(25),a(14),a(37)),o=a(3),m=a.n(o),s=a(5),d=a.n(s),u=a(7),h=a(1);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=v(e);if(t){var n=v(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return f(this,a)}}function f(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){var t=function(t){return e.termToMark?n.a.createElement("span",{dangerouslySetInnerHTML:{__html:(a=t,l=e.termToMark,a.replace(new RegExp(l,"gi"),(function(e){return"<mark>".concat(e,"</mark>")})))}}):n.a.createElement(n.a.Fragment,null,t);var a,l};return n.a.createElement("div",{className:d()("slds-tree__item",e.className)},n.a.createElement(u.b,{"aria-hidden":"true",assistiveText:"Expand ".concat(e.itemLabel),className:d()("slds-m-right_x-small",(!e.isBranch||e.isDisabled)&&"slds-hidden"),iconClassName:"slds-button__icon_small",symbol:"chevronright",tabIndex:"-1",title:"Expand ".concat(e.itemLabel)}),n.a.createElement("span",{className:"slds-has-flexi-truncate"},n.a.createElement("span",{className:"slds-tree__item-label slds-truncate",title:e.itemLabel},t(e.itemLabel)),e.metaTextLabel&&n.a.createElement("span",{className:"slds-tree__item-meta slds-truncate",title:e.metaTextLabel},n.a.createElement("span",{className:"slds-assistive-text"},":"),t(e.metaTextLabel))),e.children)};T.displayName="TreeItem",T.propTypes={children:m.a.node,isBranch:m.a.bool,isDisabled:m.a.bool,itemLabel:m.a.string,metaTextLabel:m.a.string,termToMark:m.a.string},T.defaultProps={itemLabel:"Tree Item"};var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(i,e);var t,a,l,r=g(i);function i(){return p(this,i),r.apply(this,arguments)}return t=i,(a=[{key:"getBranchAriaLabel",value:function(e,t){return t?e+": "+t:e}},{key:"render",value:function(){var e=this.props,t=e.ariaLevel,a=e.tabIndex,l=e.isBranch,r=e.isExpanded,i=e.isSelected,c=e.isDisabled,o=e.itemLabel,m=e.metaTextLabel;return n.a.createElement("li",{"aria-expanded":l?r||!1:null,"aria-label":l?this.getBranchAriaLabel(o,m):null,"aria-level":t,"aria-selected":i,"aria-disabled":c,role:"treeitem",tabIndex:a},this.props.children)}}])&&E(t.prototype,a),l&&E(t,l),i}(l.Component);y.displayName="TreeListItem",y.propTypes={ariaLevel:m.a.number.isRequired,children:m.a.node.isRequired,isBranch:Object(h.b)("itemLabel",m.a.bool),isExpanded:Object(h.b)("isBranch",m.a.bool),isSelected:m.a.bool,itemLabel:m.a.string,metaTextLabel:Object(h.b)("itemLabel",m.a.string),tabIndex:m.a.number};var x=function(e){return n.a.createElement("h4",{className:"slds-tree__group-header",id:e.id},e.children)};x.displayName="TreeHeader",x.propTypes={children:m.a.node,id:m.a.string.isRequired};var B=function(e){return n.a.createElement("ul",{"aria-labelledby":e.headerId,className:"slds-tree",id:e.id,role:"tree"},e.children)};B.displayName="TreeList",B.propTypes={children:m.a.node,headerId:m.a.string,id:m.a.string};var w=function(e){return n.a.createElement("ul",{role:"group"},e.children)};w.displayName="TreeGroup",w.propTypes={children:m.a.node};var I=function(e){return n.a.createElement("div",{className:"slds-tree_container"},e.children)};I.displayName="TreeContainer",I.propTypes={children:m.a.node};var O=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{ariaLevel:1,tabIndex:0},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"},n.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};O.displayName="DefaultTree";var _=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{ariaLevel:1,tabIndex:0},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"},n.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};_.displayName="ExpandedTree";var S=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{ariaLevel:1},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2,isSelected:!0,tabIndex:0},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1},n.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};S.displayName="SelectedTree";var k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{ariaLevel:1,tabIndex:0},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:2,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:3},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:3},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:3,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:4},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:3,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:4},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:4},n.a.createElement(T,{itemLabel:"Another Tree Item with Really Really Long Text That Should Truncate"})),n.a.createElement(y,{ariaLevel:4},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:4,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:5},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:5},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:5},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:4},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:3},n.a.createElement(T,null)))))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1},n.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};k.displayName="DeeplyNestedTree";var N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{ariaLevel:1,tabIndex:0},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2,itemLabel:"Tree Item",metaTextLabel:"Tree Item Metatext with a Really Really Long Name That Should Truncate"},n.a.createElement(T,{itemLabel:"Tree Item",metaTextLabel:"Tree Item Metatext with a Really Really Long Name That Should Truncate"})))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch",metaTextLabel:"Tree Branch Metatext"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch",metaTextLabel:"Tree Branch Metatext"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1},n.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};N.displayName="MetaTextTree";var j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{ariaLevel:1,tabIndex:0},n.a.createElement(T,{className:"slds-is-hovered"})),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"},n.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};j.displayName="TreeWithItemHovered";var R=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{ariaLevel:1,isDisabled:!0},n.a.createElement(T,null)),n.a.createElement(y,{ariaLevel:1,isBranch:!0,isDisabled:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,isDisabled:!0,itemLabel:"Tree Branch",metaTextLabel:"Tree Branch Metatext"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,tabIndex:0,isBranch:!0,itemLabel:"Tree Branch"},n.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch",metaTextLabel:"Tree Branch Metatext"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))),n.a.createElement(y,{ariaLevel:1,itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"},n.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};R.displayName="TreeWithItemDisabled";var M=a(8),D=a(16),F=a(11),H=n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Tree Group Header"),n.a.createElement(B,{headerId:"treeheading"},n.a.createElement(O,null))),A=[{id:"expanded",label:"Expanded",element:n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Tree Group Header"),n.a.createElement(B,{headerId:"treeheading"},n.a.createElement(_,null)))},{id:"selected",label:"Item Selected",element:n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Tree Group Header"),n.a.createElement(B,{headerId:"treeheading"},n.a.createElement(S,null)))},{id:"deep-nesting",label:"Deeply nested branches",element:n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Tree Group Header"),n.a.createElement(B,{headerId:"treeheading"},n.a.createElement(k,null)))},{id:"metatext",label:"Metatext",element:n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Tree Group Header"),n.a.createElement(B,{headerId:"treeheading"},n.a.createElement(N,null)))},{id:"item-hovered",label:"Item Hovered",element:n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Tree Group Header"),n.a.createElement(B,{headerId:"treeheading"},n.a.createElement(j,null)))},{id:"item-disabled",label:"Item Disabled",element:n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Tree Group Header"),n.a.createElement(B,{headerId:"treeheading"},n.a.createElement(R,null)))}],C=[{id:"filterable-tree",label:"Fliterable Tree",element:n.a.createElement("div",null,n.a.createElement("div",{className:"slds-m-bottom_small"},n.a.createElement(M.b,{hasHiddenLabel:!0,hasLeftIcon:!0,inputId:"filter-id",labelContent:"Filter navigation items"},n.a.createElement(F.a,{className:"slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default",sprite:"utility",symbol:"search"}),n.a.createElement(D.a,{"aria-controls":"tree-id",id:"filter-id",placeholder:"Quick Find",type:"search"}))),n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Components"),n.a.createElement(B,{headerId:"treeheading",id:"tree-id"},n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"lightning",tabIndex:0},n.a.createElement(T,{isBranch:!0,itemLabel:"lightning"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2,itemLabel:"lightning-button"},n.a.createElement(T,{itemLabel:"lightning-button"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"lightning-checkbox-button"},n.a.createElement(T,{itemLabel:"lightning-checkbox-button"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"lightning-radio-button"},n.a.createElement(T,{itemLabel:"lightning-radio-button"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"lightning-toggle",metaTextLabel:"vaiant a checkbox button"},n.a.createElement(T,{itemLabel:"lightning-toggle",metaTextLabel:"variant a checkbox button"})))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"ui"},n.a.createElement(T,{isBranch:!0,itemLabel:"ui"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2,itemLabel:"ui:button"},n.a.createElement(T,{itemLabel:"ui:button"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"ui:checkboxButton"},n.a.createElement(T,{itemLabel:"ui:checkboxButton"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"ui:radioButton"},n.a.createElement(T,{itemLabel:"ui:radioButton"})))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,itemLabel:"lightningcommunities",metaTextLabel:"Community components"},n.a.createElement(T,{isBranch:!0,itemLabel:"lightningcommunities",metaTextLabel:"Community components"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2},n.a.createElement(T,null)))))))},{id:"filterabled-tree",label:"Flitered Tree",element:n.a.createElement("div",null,n.a.createElement("div",{className:"slds-m-bottom_small"},n.a.createElement(M.b,{hasHiddenLabel:!0,hasLeftIcon:!0,inputId:"filter-id",labelContent:"Filter navigation items"},n.a.createElement(F.a,{className:"slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default",sprite:"utility",symbol:"search"}),n.a.createElement(D.a,{"aria-controls":"tree-id",defaultValue:"butto",id:"filter-id",placeholder:"Quick Find",type:"search"}))),n.a.createElement(I,null,n.a.createElement(x,{id:"treeheading"},"Components"),n.a.createElement(B,{headerId:"treeheading",id:"tree-id"},n.a.createElement(y,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"lightning",tabIndex:0},n.a.createElement(T,{isBranch:!0,itemLabel:"lightning"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2,itemLabel:"lightning-button"},n.a.createElement(T,{itemLabel:"lightning-button",termToMark:"butto"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"lightning-checkbox-button"},n.a.createElement(T,{itemLabel:"lightning-checkbox-button",termToMark:"butto"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"lightning-radio-button"},n.a.createElement(T,{itemLabel:"lightning-radio-button",termToMark:"butto"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"lightning-toggle",metaTextLabel:"variant a checkbox button"},n.a.createElement(T,{itemLabel:"lightning-toggle",metaTextLabel:"variant a checkbox button",termToMark:"butto"})))),n.a.createElement(y,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"ui"},n.a.createElement(T,{isBranch:!0,itemLabel:"ui"}),n.a.createElement(w,null,n.a.createElement(y,{ariaLevel:2,itemLabel:"ui:button"},n.a.createElement(T,{itemLabel:"ui:button",termToMark:"butto"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"ui:checkboxButton"},n.a.createElement(T,{itemLabel:"ui:checkboxButton",termToMark:"butto"})),n.a.createElement(y,{ariaLevel:2,itemLabel:"ui:radioButton"},n.a.createElement(T,{itemLabel:"ui:radioButton",termToMark:"butto"})))))))}],P=r.c.code,G=r.c.h2,W=r.c.h3,q=r.c.h4,J=r.c.li,U=r.c.p,K=r.c.strong,Q=r.c.ul,Y=function(){return Object(l.createElement)(r.b,{},Object(l.createElement)("div",{className:"doc lead"},"A tree is visualization of a structure hierarchy. A branch can be expanded or collapsed."),Object(l.createElement)(i.a,{exampleOnly:!0},Object(h.f)(A,"selected")),G({id:"About-Trees"},"About Trees"),U({},"A tree is composed of two core elements ",P({},".slds-tree")," and ",P({},".slds-tree__item"),". The tree wrapper, the outermost parent ",P({},"ul"),", will receive the class ",P({},".slds-tree"),". This class will be used for scoping a tree, which allows for particular styling based on states in which the tree may enter."),U({},"A tree will need helper classes added and removed to help structure the layout. Each child node list item needs an ",P({},"aria-level")," attribute with its value being the number of levels deep it is nested to indicate the distinct grouping is nested within."),U({},"Whenever the tree has a nested group, the nested ",P({},"ul")," element should receive the ARIA role ",P({},"group"),". The parent ",P({},'li[role="treeitem"]')," requires the ",P({},"aria-expanded")," attribute to be applied. Toggling ",P({},"aria-expanded")," to ",P({},"true")," or ",P({},"false")," will show or hide the child ",P({},"group"),". The parent ",P({},'li[role="treeitem"]')," also requires ",P({},"aria-label")," to be applied and set to the tree items text value, this ensures child groups are announced to screen readers as you interact with that branch."),U({},"Whenever a ",P({},'role="treeitem"')," node is selected, ",P({},'aria-selected="true"')," needs to be applied to display the selected styles."),U({},"In our example, we are using a chevron icon on tree branches to help indicate to the user what action clicking the tree branch will perform, whether opening or closing it. The effect of rotating the icon 90° to indicate open/closed status is achieved by applying the ARIA attribute ",P({},"aria-expanded")," to the ",P({},"treeitem"),". ",P({},'aria-hidden="true"')," and ",P({},'tabindex="-1"')," must be placed on the toggle button."),U({},"Tree items can only contain text values, no actionable elements, apart from our toggle button, can be placed inside a Tree item."),U({},"Trees can only contain a single focusable tree item and ",P({},'tabindex="0"')," must be placed on the ",P({},'li[role="treeitem]')," that takes current focus. Every other actionable and non-actionable element must be made unfocused by adding ",P({},'tabindex="-1"')," or removing ",P({},"tabindex"),", respectively."),U({},"When implementing collapsed rows, we suggest showing the content DOM nodes within each collapsed row only once the row is expanded for performance reasons. You can additionally toggle the hidden row with ",P({},"slds-show")," and ",P({},"slds-hide")," if you intend to keep all of the content in the DOM."),U({},"You can add metatext (see: metatext state) to any tree item, which adds a smaller, second line of text below tree node labels to provide supplemental information (to provide users with added context, aid with identification/disambiguation). To add metatext, include an additional ",P({},"span")," within the treeitem with the class ",P({},"slds-tree__item-meta"),". We've added an additional parent span around the label/title and metatext to ensure the spacing works properly when metatext is included. If adding metatext to a tree item with child nodes (i.e. a branch), be sure to update the ",P({},"aria-label")," to include the metatext. For example: ",P({},'aria-label="Tree Branch Label: Tree Branch Metatext"')),W({id:"Accessibility"},"Accessibility"),q({id:"Markup"},"Markup"),Q({},J({},P({},'role="tree"')," is placed on the ",P({},"ul")),J({},P({},'role="tree"')," element also has ",P({},"aria-labelledby")," applied which points to the trees heading element"),J({},P({},'role="treeitem"')," is placed on the tree ",P({},"li")," elements"),J({},P({},"aria-level")," is applied to ",P({},"treeitem")," elements to indicate their nesting depth"),J({},P({},"aria-expanded")," is applied to ",P({},"treeitem")," elements that have child tree nodes. It is set to ",P({},"true")," or ",P({},"false")),J({},P({},"aria-label")," is applied to ",P({},"treeitem")," elements that have child tree nodes. Be sure to add any metatext to the label, if applicable"),J({},P({},'aria-selected="true"')," is applied to ",P({},"treeitem")," elements that are selected"),J({},P({},'aria-disabled="true"')," is applied to ",P({},"treeitem")," elements that are disabled. They do not receive a ",P({},"tabindex"),"."),J({},P({},'tabindex="0"')," is applied to the ",P({},"treeitem")," that is in focus"),J({},P({},'role="group"')," is applied to child tree node containers, ",P({},"ul"))),q({id:"Interactions"},"Interactions"),Q({},J({},"Only a single action per tree item"),J({},"Only 1 focused item per Tree"),J({},"Actionable elements in a tree item are mouse only and should not be focusable, they should be presentational and should be hidden from screen readers and keyboard users"),J({},"Focus is placed on the entire ",P({},'li[role="treeitem"]'),". If that item has child items, focus must include those as well.")),q({id:"Keyboard-Navigation"},"Keyboard Navigation"),Q({},J({},"Clicking on a tree item creates a selection"),J({},P({},"Up")," and ",P({},"Down")," arrow keys move ",P({},":focus")," ",K({},"and")," ",P({},"aria-selected"),". Previous selections are cleared"),J({},P({},"Right")," arrow key to expand collapsed node."),J({},P({},"Left")," arrow key to collapse expanded node."),J({},P({},"Left")," arrow key on an end child node, collapses the group and moves ",P({},":focus")," and ",P({},"aria-selected")," to the parent ",P({},"treeitem")),J({},P({},"Enter")," performs the default action on an end tree item (if there is one)."),J({},P({},"Ctrl")," + ",P({},"Up")," and ",P({},"Ctrl")," + ",P({},"Down")," moves focus. Current selection is maintained"),J({},P({},"Ctrl")," + ",P({},"Space")," will add or remove the currently focused tree item to the selection")),W({id:"Filtering"},"Filtering"),U({},"When filtering a tree you should couple the tree with a search input. The search input will control the contents of the tree and as such should the attribute ",P({},"aria-controls")," added to it. The value of the ",P({},"aria-controls")," attribute should be the ID of the tree it controls. The search input should also be of type ",P({},"search"),"."),U({},"Upon typing in the input the tree should start filtering immediately, expanding all nodes that have matching tree items to display, and highlighting the search term in each of the matching items. The highlight is provided by wrapping the term in ",P({},"<mark />")," elements."),G({id:"Base"},"Base"),Object(l.createElement)(i.a,null,Object(h.f)(H)),W({id:"States"},"States"),q({id:"Expanded-Item"},"Expanded Item"),Object(l.createElement)(i.a,null,Object(h.f)(A,"expanded")),q({id:"Item-Selected"},"Item Selected"),Object(l.createElement)(i.a,null,Object(h.f)(A,"selected")),q({id:"Deeply-Nested-Branches"},"Deeply Nested Branches"),Object(l.createElement)(i.a,null,Object(h.f)(A,"deep-nesting")),q({id:"Item-with-Metatext"},"Item with Metatext"),Object(l.createElement)(i.a,null,Object(h.f)(A,"metatext")),q({id:"Item-Hovered"},"Item Hovered"),Object(l.createElement)(i.a,null,Object(h.f)(A,"item-hovered")),q({id:"Items-Disabled"},"Items Disabled"),Object(l.createElement)(i.a,null,Object(h.f)(A,"item-disabled")),G({id:"Examples"},"Examples"),W({id:"Filterable-Tree"},"Filterable Tree"),Object(l.createElement)(i.a,null,Object(h.f)(C,"filterable-tree")),W({id:"Filtered-Tree"},"Filtered Tree"),Object(l.createElement)(i.a,null,Object(h.f)(C,"filterabled-tree")),G({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(l.createElement)(c.a,{name:"trees",type:"component"}))},z=function(){return Object(r.a)(Y())}}});