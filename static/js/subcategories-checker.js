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

		$(document.body).addClass("subcategories-checker");
		if(!$(".subcategories-checker-container").length) {
			$("div.category").before("<div class='subcategories-checker-container'></div>");
		}
		if(!$(".subcategories-checker-container .breadcrumb").length) {
			$(".subcategories-checker-container").append($(".breadcrumb"));
		}
		if(!$(".subcategories-checker-container ul.categories").length) {
			$(".subcategories-checker-container").append($("ul.categories"));
		}

		var oldPushState = history.pushState;
		history.pushState = function() {
			$(".subcategories-checker-container").remove();
			$(document.body).removeClass("subcategories-checker");
			return oldPushState.apply(this, arguments);
		};
		window.addEventListener("popstate", function() {
			$(".subcategories-checker-container").remove();
			$(document.body).removeClass("subcategories-checker");
		});

	};

/*
	document.addEventListener("DOMContentLoaded", function() {
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				for(var i = 0; i < mutation.addedNodes.length; i++) {
					var addedNode = mutation.addedNodes[i];
					if(addedNode.nodeName === "DIV" && addedNode.getAttribute("widget-area") === "header") {
						if($(".subcategories-checker-container").length) {
							$(".subcategories-checker-container").append($("div[widget-area='header']"));
						}
					}
				}
			});
		}).observe(document.body, { attributes: true, childList: true, characterData: true, subtree : true });
	});
*/
})();

