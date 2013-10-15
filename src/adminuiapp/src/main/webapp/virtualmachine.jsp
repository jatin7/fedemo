<%@ page
	contentType="text/html; charset=UTF-8"
	import="java.io.*"
	import="java.util.*"
	import="javax.servlet.*"
	import="javax.servlet.http.*"
	import="javax.servlet.jsp.*"
	import="java.io.*"
	import="java.util.*"
 %>
<%
  String theme = "mapr";
  String maprHome = System.getProperty("mapr.home.dir", "/opt/mapr");
  File emcTheme = new File(maprHome + "/themes/emc");
  if ( emcTheme != null && emcTheme.exists() && emcTheme.isFile() ) {
     theme = "emc";
  }

%>
<!doctype HTML>
<html>
<head>
    <link rel='stylesheet' href='css/mapr_prod.min.css?v=_VERSION_'>
</head>
<body>

</body>
</html>
