sap.ui.define(
	[
		//'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'Calculator/controller/BaseController',
		'sap/m/MessageToast'
	],
	function (BController, MessageToast) {
		'use strict';
		return BController.extend('Calculator.controller.App', {
			onInit: function () {
				//this.byId("Importe").setValue(100);
				//this.byId('Ticket1').setValue(5);
				//this.byId('Ticket2').setValue(3);
				//this.byId("Textticket").setVisible(false);
			},
			onChange: function (oEvent) {
				var bState = oEvent.getParameter('state');
				this.byId('ready').setVisible(bState);
			},

		
 
			onCalculate: function (oEvent) {
				//tomar valores
				let iImporte = 0,
					iVticket1 = 0,
					iVticket2 = 0;
				//var oImporte = this.byId("Importe").getValue();
				//document.getElementById("Importe");
				iImporte = Number(this.byId('Importe').getValue());

				//var oVTicket1 = this.byId("Ticket1");
				iVticket1 = Number(this.byId('Ticket1').getValue());

				//var oVTicket2 = this.byId("Ticket2");
				iVticket2 = Number(this.byId('Ticket2').getValue());
				// Output text of calculation
				//var oText = this.byId("Textticket");

				if (iImporte > 0) {
					this.byId("Textticket").setText(
						`Importe ${iImporte}\n${this.findSolution2(iImporte,iVticket1,iVticket2)}\n${this.findSolution(iImporte,iVticket1,iVticket2)}\n${this.findSolution(iImporte,iVticket2,iVticket1)}`
					)
				} else {
					MessageToast.show('Por favor introduzca importe');
				}
			},
		});
	}
);