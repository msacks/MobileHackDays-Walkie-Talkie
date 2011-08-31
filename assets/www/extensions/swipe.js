// JavaScript Document

            $(function(){
                $('#swipeme, #0').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goTo($('#home'), 'slideleft');
					} else {
						jQT.goTo($('#0'), 'slideright');
					}
                });
				
                $('#s0').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#home'), 'slideleft');
					} else {
						jQT.goTo($('#1'), 'slideright');
					}
                });
				/*
                $('#2 .content').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#1'), 'slideleft');
					} else {
						jQT.goTo($('#3'), 'slideright');
					}
                });
                $('#3 .content').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#2'), 'slideleft');
					} else {
						jQT.goTo($('#4'), 'slideright');
					}
                });
                $('#4 .content').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#3'), 'slideleft');
					} else {
						jQT.goTo($('#5'), 'slideright');
					}
                });				
                $('#5 .content').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#4'), 'slideleft');
					} else {
						jQT.goTo($('#6'), 'slideright');
					}
                });				
                $('#6 .content').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#5'), 'slideleft');
					} else {
						jQT.goTo($('#7'), 'slideright');
					}
                });				
                $('#7 .content').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#6'), 'slideleft');
					} else {
						jQT.goTo($('#8'), 'slideright');
					}
                });	
                $('#8 .content').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#7'), 'slideleft');
					} else {
						jQT.goTo($('#9'), 'slideright');
					}
                });					
                $('#9 .content').swipe(function(evt, data) {
					if (data.direction == "right") {
						jQT.goBack($('#8'), 'slideleft');
					} else {
						jQT.goTo($('#home'), 'slideright');
					}
                });					
				*/



			});					
