document.addEventListener('DOMContentLoaded', function() {

		var menuToggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
				var classes = menu.className.split(" ");
        var i = classes.indexOf("hidden-mobile");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("hidden-mobile");

        menu.className = classes.join(" ");
    });
});
