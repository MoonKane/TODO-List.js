$(function() {
	
	let $add = $(".add");
	let $list = $(".list");	
	let $text = $(".text");
	let $labl = $(".worded");

	let arr = [];

	let $remove = $(".remove");
	let $select = $(".select");
	let $delete = $(".delete");
	let $check = $(".inpcheck");

	let $del = $(".del");
	let $red = $(".red");
	
	let $nonetod = $(".nonetod");

	function checke() {
		if($check.is(":checked") != true) {
			$select.val("Select All");
			$remove.prop('disabled', true);
			$delete.prop('disabled', true);
		} else if($check.is(":checked") == true) {
			$select.val("Deselect");
			$remove.prop('disabled', false);
			$delete.prop('disabled', false);
		}

		if(arr.length == 0) {
			$nonetod.css("display", "block");
		} else {
			$nonetod.css("display", "none");
		}

		if($check.is(":checked") == true) {
			$(".worded input:checkbox").parent().parent().css("border-color", "blue");
			$(".worded input:checkbox").parent().siblings(".red").css("border-color", "blue");
			$(".worded input:checkbox:checked").parent().parent().css("border-color", "red");
			$(".worded input:checkbox:checked").parent().siblings(".red").css("border-color", "red");
		} else {
			$(".worded input:checkbox").parent().parent().css("border-color", "blue");
			$(".worded input:checkbox").parent().siblings(".red").css("border-color", "blue");

		}
	};
	

	$check.on("change", checke());


	function newElem(text) {
		if(text != false) {
			
			let ide = Math.random();
	
			for(let i = 0; i < arr.length; i++) {
				if(arr[i] == ide) {
					newElem(text);
				}
			}
	
		
			
			
			$list.append("<div class='worded'> <label class='check' for='" + ide + "'> <input type='checkbox' class='inpcheck' id='" + ide + "'>" + text + "</label> <input type='button' name='red' value='Red' class='butword red'> <input type='button' name='del' value='Del' class='butword del'> </div>");
			arr.push(ide);
			
			$check = $(".inpcheck");
			$del = $(".del");
			$red = $(".red");


			$check.off("change", checke);
			$check.on("change", checke);
			
			$del.off("click", function() {
				for(let i = 0; i < arr.length; i++) {
					if($(this).siblings(".check").children(".inpcheck").prop('id') == arr[i]) {
						$(this).siblings(".check").children(".inpcheck").prop("checked", false);		
						if(i == 0) { 
							arr.splice(0,1);
						} else {
							arr.splice(i,i); 
						}
						$(this).parent().remove();
						break;
					}
				}
				if(arr.length == 0) {
					$nonetod.css("display", "block");
				} else {
					$nonetod.css("display", "none");
				}
				checke();
				console.log(arr);
			});
			$del.on("click", function() {
				for(let i = 0; i < arr.length; i++) {
					if($(this).siblings(".check").children(".inpcheck").prop('id') == arr[i]) {
						$(this).siblings(".check").children(".inpcheck").prop("checked", false);		
						if(i == 0) { 
							arr.splice(0,1);
						} else {
							arr.splice(i,i); 
						}
						$(this).parent().remove();
						break;
					}
				}
				if(arr.length == 0) {
					$nonetod.css("display", "block");
				} else {
					$nonetod.css("display", "none");
				}
				checke();
				console.log(arr);
			});
			checke();
			console.log(arr);
		}
	
	};

	newElem("Добавь возможность изменять название задачи!");

	$add.on("click", function() {
		newElem($text.val());
		$text.val("");
	});
	
	


	


	$remove.on("click", function() {
		checke();
	});

	$select.on("click", function() {
		$check = $(".inpcheck");
	
		if($check.is(":checked")) {
			$check.prop('checked', false);
		} else {
			$check.prop('checked', true);
		}
		checke();
	});
		


	$delete.on("click", function() {

		function play() {
			$.each(arr, function(i, v) {
				$(".worded input:checkbox:checked").each(function(j, b) {
					if(b.id == v) {
						if(i == 0) {
							arr.splice(0,1); 
							play();
						} else {
							arr.splice(i,i); 
							play();
						}
					}
				});
			});
		}
		play();
		$(".worded input:checkbox:checked").parent().parent().remove();
		$check.prop("checked", false);


		if(arr.length == 0) {
			$nonetod.css("display", "block");
		} else {
			$nonetod.css("display", "none");
		}
		checke();
	});
	
	$text.on("keyup", function(e) {
		if(e.key == "Enter") {
			$add.click();
		}
	});


	$red.on("click", function() {
		
	});

});