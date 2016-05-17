/* jshint browser:true */
/* jshint jquery:true */
(function(){
	var resyncSubcategoriesChecker = function() {
		$("ul.categories li[component='categories/category']").each(function() {
			var cid = $(this).attr("data-cid");
			var check = $(document.createElement("input"))
				.addClass("subcategories-checker-subcategory-checkbox")
				.attr("type", "checkbox");
			$(this).prepend(check);

			check.change(function() {
				var checked = check.is(":checked");
				$("ul.topic-list li[component='category/topic']").each(function() {
					var topic = $(this);
					if(topic.attr("data-cid") === cid) {
						if(checked) {
							topic.fadeIn();
						} else {
							topic.fadeOut();
						}
					}
				});
				try {
					window.localStorage.setItem("subcatcheck_" + cid, checked? "checked": "unchecked");
				} catch(e) {
				}
			});

			var lsValue = true;
			try {
				lsValue = window.localStorage.getItem("subcatcheck_" + cid) !== "unchecked";
			} catch(e) {
				lsValue = true;
			}
			if(lsValue) {
				check.attr("checked", "checked");
			} else {
				check.change();
			}
		});

		$(document.body).addClass("subcategory-checker");
		if(!$(".subcategories-checker-container").length) {
			$("div.category").before("<div class='subcategories-checker-container'></div>");
		}
		if(!$(".subcategories-checker-container .breadcrumb").length) {
			$(".subcategories-checker-container").append($(".breadcrumb"));
		}
		if(!$(".subcategories-checker-container ul.categories").length) {
			$(".subcategories-checker-container").append($("ul.categories"));
		}
	};

	$(window).on("action:ajaxify.contentLoaded", function(evt, data){
		if(!data || data.tpl !== "category") {
			return;
		}
		resyncSubcategoriesChecker();
	});
})();

