(function(){dust.register("about",body_0);function body_0(chk,ctx){return chk.write("<div class=\"panel panel-primary\"><div class=\"panel-heading\"><h1 class=\"panel-title\">About Us").exists(ctx.get(["about"], false),ctx,{"block":body_1},{}).write("</h1></div><div class=\"panel-body\"><h4>This is the About Us template. Its actually a dust partial which will be replaced when we navigate away from the page. Only this partial will change while the rest of the page will not be reloaded. SPA Magic!</h4><br><p><a class=\"btn btn-lg btn-success\" href=\"http://linkedin.github.io/dustjs/\" target=\"_blank\" role=\"button\">Check out DustJS</a><a class=\"btn btn-lg btn-warning pull-right\" href=\"http://sailsjs.org\" target=\"_blank\" role=\"button\">Check out SailsJS</a></p></div></div>");}function body_1(chk,ctx){return chk.write("<kbd class=\"pull-right\">Visit Count: ").reference(ctx.get(["about"], false),ctx,"h").write("</kbd>");}return body_0;})();