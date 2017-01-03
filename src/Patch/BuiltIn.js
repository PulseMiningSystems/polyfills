export default {
  Document_createElement: window.Document.prototype.createElement,
  Document_createElementNS: window.Document.prototype.createElementNS,
  Document_importNode: window.Document.prototype.importNode,
  Node_cloneNode: window.Node.prototype.cloneNode,
  Node_insertBefore: window.Node.prototype.insertBefore,
  Node_removeChild: window.Node.prototype.removeChild,
  Element_attachShadow: window.Element.prototype['attachShadow'],
  Element_id: Object.getOwnPropertyDescriptor(window.Element.prototype, 'id'),
  Element_classList: Object.getOwnPropertyDescriptor(window.Element.prototype, 'classList'),
  Element_className: Object.getOwnPropertyDescriptor(window.Element.prototype, 'className'),
  Element_slot: Object.getOwnPropertyDescriptor(window.Element.prototype, 'slot'),
  Element_innerHTML: Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'),
  Element_getAttribute: window.Element.prototype.getAttribute,
  Element_setAttribute: window.Element.prototype.setAttribute,
  Element_removeAttribute: window.Element.prototype.removeAttribute,
  Element_getAttributeNS: window.Element.prototype.getAttributeNS,
  Element_setAttributeNS: window.Element.prototype.setAttributeNS,
  Element_removeAttributeNS: window.Element.prototype.removeAttributeNS,
  HTMLElement: window.HTMLElement,
  DOMTokenList_add: window.DOMTokenList.prototype.add,
  DOMTokenList_remove: window.DOMTokenList.prototype.remove,
  DOMTokenList_toggle: window.DOMTokenList.prototype.toggle,
  DOMTokenList_replace: window.DOMTokenList.prototype.replace,
  DOMTokenList_value: Object.getOwnPropertyDescriptor(window.DOMTokenList.prototype, 'value'),
};
