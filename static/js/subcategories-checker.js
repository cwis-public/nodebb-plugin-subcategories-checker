/* jshint browser:true */
/* jshint jquery:true */
(function(){
	window.resyncSubcategoriesChecker = function() {
		$("ul.categories li[component='categories/category']").each(function() {
			var cid = $(this).attr("data-cid");
			var check = $(document.createElement("input"))
				.addClass("subcategories-checker-subcategory-checkbox")
				.attr("type", "checkbox")
				.attr("checked", "checked");
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
			});
		});

		if(!$(".subcategories-checker-container").length) {
			$("div.container#content").before("<div class='subcategories-checker-container'></div>");
		}
		if(!$(".subcategories-checker-container .breadcrumb").length) {
			$(".subcategories-checker-container").append($(".breadcrumb"));
		}
		if(!$(".subcategories-checker-container ul.categories").length) {
			$(".subcategories-checker-container").append($("ul.categories"));
		}
	};
})();

