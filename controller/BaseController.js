	sap.ui.define([
		"sap/ui/core/mvc/Controller"
		//"sap/ui/core/routing/History"
	], function (Controller) {
		"use strict";
		return Controller.extend("Calculator.controller.BaseController", {
				onInit: function () {
					
				},
			
			findSolution: function (target, vtick1, vtick2) {
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

			findSolution2: function (target, vtick1, vtick2) {
				let coin = 1; //Monedas sueltas
				function find(current, qtick1, qtick2, coins) {
					if (current == target) {
						return `Tickets de ${vtick1}€ :` + `${qtick1}, de ${vtick2}€ :` + qtick2 + `. Suelto ${coins}€`;
					} else if (current > target) {
						return null;
					} else {
						if (qtick1 > qtick2) {
							return find(current + vtick2, qtick1, qtick2 + 1, coins) ||
								find(current + vtick1, qtick1 + 1, qtick2, coins) ||
								find(current + coin, qtick1, qtick2, coins + 1);
						} else {

							return find(current + vtick1, qtick1 + 1, qtick2, coins) ||
								find(current + vtick2, qtick1, qtick2 + 1, coins) ||
								find(current + coin, qtick1, qtick2, coins + 1);
						}
					}
				}
				return find(0, 0, 0, 0);
			}
		});
	});