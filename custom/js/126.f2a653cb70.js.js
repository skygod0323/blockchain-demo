(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{"./src/modals/Settings/TwoStepSetup/index.js":function(e,t,n){"use strict";n.r(t);var o=n("../../node_modules/redux/es/redux.js"),r=n("../../node_modules/react-redux/es/index.js"),a=n("../../node_modules/react/index.js"),i=n.n(a),s=n("./src/data/index.ts"),l=n("./src/providers/ModalEnhancer/index.tsx"),c=n("../blockchain-info-components/src/index.js"),u=n("../../node_modules/react-intl/lib/index.es.js"),p=n("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),d=n("./src/services/ResponsiveService/index.ts");function _objectWithoutProperties(e,t){if(null==e)return{};var n,o,r=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function _templateObject4(){var e=_taggedTemplateLiteral(["\n    width: 30%;\n  "]);return _templateObject4=function _templateObject4(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  width: 100%;\n  cursor: pointer;\n  text-align: center;\n\n  & > * {\n    margin-top: 10px;\n  }\n  & > :last-child {\n    margin-bottom: 10px;\n  }\n  &:hover {\n    background-color: ",";\n  }\n\n  ","\n"]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n    flex-direction: row;\n  "]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 20px 0;\n  box-sizing: border-box;\n\n  ","\n"]);return _templateObject=function _templateObject(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=p.d.div(_templateObject(),d.a.atLeastMobile(_templateObject2())),f=p.d.div(_templateObject3(),(function(e){return e.theme.white}),(function(e){return e.theme.grey000}),d.a.atLeastMobile(_templateObject4())),m=function TwoStepSetup(e){var t=e.position,n=e.total,o=e.close,r=e.closeAll,a=_objectWithoutProperties(e,["position","total","close","closeAll"]),s=a.handleGoogleAuthenticator,l=a.handleMobile,p=a.handleYubico,d=a.handleDisable;return 0!==a.authType?i.a.createElement(c.v,{size:"large",position:t,total:n},i.a.createElement(c.y,{onClose:r},i.a.createElement(u.b,{id:"modals.twostepsetup.title1",defaultMessage:"Disable Two Factor Verification"})),i.a.createElement(c.w,null,i.a.createElement(c.P,{size:"14px",weight:400},i.a.createElement(u.b,{id:"modals.twostepsetup",defaultMessage:"Are you sure to disable two factor authentication ?"}))),i.a.createElement(c.x,{align:"spaced"},i.a.createElement(c.u,{size:"13px",weight:400,onClick:o},i.a.createElement(u.b,{id:"buttons.cancel",defaultMessage:"Cancel"})),i.a.createElement(c.e,{nature:"warning",onClick:d},i.a.createElement(u.b,{id:"modals.twostepsetup.disable",defaultMessage:"Disable"})))):i.a.createElement(c.v,{size:"large",position:t,total:n},i.a.createElement(c.y,{onClose:r},i.a.createElement(u.b,{id:"modals.twostepsetup.title2",defaultMessage:"Enable Two-Step Verification"})),i.a.createElement(c.w,null,i.a.createElement(c.R,null,i.a.createElement(c.P,{size:"14px",weight:400},i.a.createElement(u.b,{id:"modals.twostepsetup.explain",defaultMessage:"Protect your wallet from unauthorized access by enabling 2-step Setup."})),i.a.createElement(c.P,{size:"14px",weight:400},i.a.createElement(u.b,{id:"modals.twostepsetup.explain2",defaultMessage:"You can choose to use a free app or your mobile phone number to secure your wallet."}))),i.a.createElement(b,null,i.a.createElement(f,{onClick:s},i.a.createElement(c.t,{name:"google-authenticator",height:"100px"}),i.a.createElement(c.P,{size:"14px",weight:400},i.a.createElement(u.b,{id:"modals.twostepsetup.usegoogle",defaultMessage:"Google Authenticator"}))),i.a.createElement(f,{onClick:p},i.a.createElement(c.t,{name:"yubikey",height:"100px"}),i.a.createElement(c.P,{size:"14px",weight:400},i.a.createElement(u.b,{id:"modals.twostepsetup.useyubikey",defaultMessage:"Yubikey"}))),i.a.createElement(f,{onClick:l},i.a.createElement(c.t,{name:"smartphone",height:"100px"}),i.a.createElement(c.P,{size:"14px",weight:400},i.a.createElement(u.b,{id:"modals.twostepsetup.usemobile",defaultMessage:"Mobile number"}))))),i.a.createElement(c.x,null,i.a.createElement(c.u,{size:"13px",weight:400,onClick:o},i.a.createElement(u.b,{id:"buttons.cancel",defaultMessage:"Cancel"}))))};function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(TwoStepSetupContainer,e);var t=function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}(TwoStepSetupContainer);function TwoStepSetupContainer(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TwoStepSetupContainer),(n=t.call(this,e)).handleGoogleAuthenticator=n.handleGoogleAuthenticator.bind(_assertThisInitialized(n)),n.handleMobile=n.handleMobile.bind(_assertThisInitialized(n)),n.handleYubico=n.handleYubico.bind(_assertThisInitialized(n)),n.handleDisable=n.handleDisable.bind(_assertThisInitialized(n)),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(TwoStepSetupContainer,[{key:"handleGoogleAuthenticator",value:function handleGoogleAuthenticator(){this.props.settingsActions.showGoogleAuthenticatorSecretUrl()}},{key:"handleYubico",value:function handleYubico(){this.props.modalActions.showModal("TwoStepYubico")}},{key:"handleMobile",value:function handleMobile(){var e=this.props,t=e.smsNumber,n=e.smsVerified;t?n?this.props.settingsActions.enableTwoStepMobile():this.props.modalActions.showModal("MobileNumberVerify",{mobileNumber:t}):this.props.modalActions.showModal("MobileNumberChange")}},{key:"handleDisable",value:function handleDisable(){this.props.settingsActions.disableTwoStep()}},{key:"render",value:function render(){return i.a.createElement(m,_extends({},this.props,{handleGoogleAuthenticator:this.handleGoogleAuthenticator,handleMobile:this.handleMobile,handleYubico:this.handleYubico,handleDisable:this.handleDisable}))}}]),TwoStepSetupContainer}(i.a.PureComponent),y=Object(o.d)(Object(l.a)("TwoStepSetup"),Object(r.c)((function mapStateToProps(e){return{authType:s.f.core.settings.getAuthType(e),smsNumber:s.f.core.settings.getSmsNumber(e),smsVerified:s.f.core.settings.getSmsVerified(e)}}),(function mapDispatchToProps(e){return{modalActions:Object(o.b)(s.b.modals,e),settingsActions:Object(o.b)(s.b.modules.settings,e)}})));t.default=y(h)},"./src/providers/ModalEnhancer/index.tsx":function(e,t,n){"use strict";var o=n("./src/data/index.ts"),r=n("../../node_modules/redux/es/redux.js"),a=n("../../node_modules/react-redux/es/index.js"),i=n("../../node_modules/ramda/es/equals.js"),s=n("../../node_modules/react/index.js"),l=n.n(s),c=n("../../node_modules/react-dom/index.js"),u=n.n(c),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const p=Object(a.c)(e=>({modals:o.f.modals.getModals(e)}),e=>({close:Object(r.d)(e,o.b.modals.closeModal),closeAll:Object(r.d)(e,o.b.modals.closeAllModals),update:Object(r.d)(e,o.b.modals.updateModalOptions)}));t.a=(e,t={})=>n=>p(class extends s.PureComponent{constructor(){super(...arguments),this.state={},this.handleClose=()=>{t.transition?(this.setState({userClickedOutside:!0}),setTimeout(()=>{this.props.close(),this.setState({userClickedOutside:!1})},t.transition)):this.props.close()},this.handleClick=e=>{const t=u.a.findDOMNode(this.node);t&&!this.props.disableOutsideClose&&Object(i.a)(t.children[0],e.target)&&this.handleClose()},this.onKeyPressed=e=>{27!==(e||window.event).keyCode||t.preventEscapeClose||this.handleClose()}}render(){const t=this.props,{modals:o}=t,r=__rest(t,["modals"]),a=o.filter(t=>t.type===e),setRef=e=>{e&&(this.node=e,e.focus())};return a.length?l.a.createElement("div",null,a.map((t,a)=>l.a.createElement("div",{key:`${e}:${a}`,onKeyDown:this.onKeyPressed,onMouseDown:this.handleClick,ref:setRef,tabIndex:0},l.a.createElement(n,Object.assign({ref:this.node,position:o.indexOf(t)+1,total:o.length},this.state,t.options,t.props,r))))):null}})}}]);