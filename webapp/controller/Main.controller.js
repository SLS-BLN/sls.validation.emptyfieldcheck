sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Core",
    "sap/ui/core/ID",
  ],
  function (BaseController, JSONModel, Core, ID) {
    "use strict";

    return BaseController.extend(
      "sls.validation.emptyfieldcheck.controller.Main",
      {
        onInit: function () {
          const oModel = new JSONModel({
            plz: "",
          });

          this.getView().setModel(oModel);
        },

        onLiveChange(oEvent) {
          let newValue = oEvent.getParameter("newValue");

          //you can also use None, or just remove this line
          this.setValueState(sap.ui.core.ValueState.Success);
          let a = 1;

          if (a === 1) this.setValueState(sap.ui.core.ValueState.Error);
        },

        // validateInputs: function (oEvent) {
        //   // this function gets the first textfield
        //   const emailTextField = this.getView().byId("email");

        //   //this function checks its value, you can insert more checks on the value
        //   if (emailTextField.getValue() === "") {
        //     alert("Please enter an email adress.");
        //   }

        //   const nameTextField = this.getView().byId("name");

        //   if (nameTextField.getValue() === "") {
        //     alert("Please enter a name.");
        //   }
        // },
      }
    );
  }
);
