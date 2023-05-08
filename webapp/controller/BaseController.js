sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
  ],
  function (Controller, UIComponent, History) {
    "use strict";

    return Controller.extend(
      "sls.validation.emptyfieldcheck.controller.BaseController",
      {
        getOwnerComponent: function () {
          return Controller.prototype.getOwnerComponent.call(this);
        },
      }
    );
  }
);
