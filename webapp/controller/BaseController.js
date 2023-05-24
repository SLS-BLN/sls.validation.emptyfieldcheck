sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/core/Core",
  ],
  function (Controller, UIComponent, History, Core) {
    "use strict";

    return Controller.extend(
      "sls.validation.emptyfieldcheck.controller.BaseController",
      {
        getOwnerComponent: function () {
          return Controller.prototype.getOwnerComponent.call(this);
        },

        getValue: function (id) {
          return this.getView().byId(id).getValue();
        },

        validateFieldGroup: function (fieldGroup) {
          const aElements =
            this.getView().getControlsByFieldGroupId(fieldGroup);
          console.log(aElements);

          const aControls = aElements.filter(
            (element) => element.getValueState
          );
          console.log(aControls);

          const bError = aControls.some(
            (control) => control.getValueState() === "Error"
          );
          console.log(bError);

          return bError;
        },
      }
    );
  }
);
