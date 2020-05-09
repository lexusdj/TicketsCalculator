sap.ui.define(
	[
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/MessageToast',
	],
	function(Controller, JSONModel, MessageToast) {
		'use strict';
		return Controller.extend('Calculator.App', {
			onInit: function() {
				//this.byId("Importe").setValue(100);
				this.byId('Ticket1').setValue(5);
				this.byId('Ticket2').setValue(3);
				//this.byId("Textticket").setVisible(false);
			},
			onChange: function(oEvent) {
				var bState = oEvent.getParameter('state');
				this.byId('ready').setVisible(bState);
			},

findSolution: function(target, vtick1, vtick2){
let coin = 1; //Monedas sueltas
					function find(current, qtick1, qtick2, coins) {
						if (current == target) {
							return (
								`Tickets de ${vtick1}€ :` +
								`${qtick1}, de ${vtick2}€ :` +
								qtick2 +
								`. Suelto ${coins}€`
							);
						} else if (current > target) {
							return null;
						} else {
							return (
								find(current + vtick1, qtick1 + 1, qtick2, coins) ||
								find(current + vtick2, qtick1, qtick2 + 1, coins) ||
								find(current + coin, qtick1, qtick2, coins + 1)
							);
						}
					}
					return find(0, 0, 0, 0);
				},

findSolution2: function(target, vtick1, vtick2) {
    let coin = 1; //Monedas sueltas
    function find(current, qtick1, qtick2, coins) {
        if (current == target) {
            return `Tickets de ${vtick1}€ :` + `${qtick1}, de ${vtick2}€ :` + qtick2 + `. Suelto ${coins}€`;
        } else if (current > target) {
            return null;
        } else {
            if(qtick1 > qtick2){ 
            return find(current + vtick2, qtick1, qtick2 + 1, coins) ||
                find(current + vtick1, qtick1 + 1, qtick2, coins) ||
                find(current + coin, qtick1, qtick2, coins + 1);
        }
        else{
            
            return find(current + vtick1, qtick1 + 1, qtick2, coins) ||
                find(current + vtick2, qtick1, qtick2 + 1, coins) ||
                find(current + coin, qtick1, qtick2, coins + 1);
        }
    }
}
return find(0, 0, 0, 0);
  },

			onCalculate: function(oEvent) {
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
this.byId("Textticket").setText(`Importe ${iImporte}\n${this.findSolution2(iImporte,iVticket1,iVticket2)}\n${this.findSolution(iImporte,iVticket1,iVticket2)}\n${this.findSolution(iImporte,iVticket2,iVticket1)}`)}				
				else {
					MessageToast.show('Por favor introduzca importe');
				}
			},
		});
	}
);
