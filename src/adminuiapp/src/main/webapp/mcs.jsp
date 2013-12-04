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
	<link rel="icon" type="image/x-icon" href="images/mapr_themes/<%=theme %>/favicon.ico" />
	<title>Loading...</title>	
	<!-- we put just enough in here to show the loading dialog -->
	<style>
		/* TODO: keep this in sync with the default page style */
		body {
			font-family:				"Helvetica Neue",Tahoma,Helvetica,Arial,"Bitstream Vera Sans",sans-serif;
			font-size:					11px;
		}
		
		#loadingDialog,
		#loadingMask {
			position:					absolute;
			left:						0px; 					
			top:						0px;
			right:						0px; 					
			bottom:						0px;
		}
		
		#loadingMask {
			background-color:			black;
			opacity: 					0.7;
		}
		
		#loadingWindow {
			position:					relative;
			margin:						0 auto;
			width:						380px;
			top:						150px;
			text-align:					left;
			padding:					5px 10px;
			background-color:			#f0e5c9;
			-moz-border-radius:			8px;
			-webkit-border-radius:		8px;
			box-shadow: 				0 3px 5px rgba(0,0,0,.4);
			-moz-box-shadow: 			0 3px 5px rgba(0,0,0,.4);
			-webkit-box-shadow: 		0 3px 5px rgba(0,0,0,.4);
		}
		
		#loadingWindow .x-window-header {
			font-weight:				bold;
			font-size:					1.2em;
			padding-bottom:				5px;
			padding-left:				3px;
		}
		
		#loadingWindow .x-panel-body  {
			background-color:			white;
			border:						1px solid #D0D0D0;
			padding:					10px;
			-moz-border-radius:			5px;
			-webkit-border-radius:		5px;
		}
	</style>
	<!-- generic and mapr stylesheets -->
    <link rel='stylesheet' href='css/mapr_prod.min.css?v=_VERSION_'>
	<!--[if IE]>
	<link rel="stylesheet" href="css/v2/mapr_ie.css" />
	<link rel="stylesheet" href="css/zelda_ie.css" />
	<![endif]-->
</head>
<body>

	<!-- loading dialog -->
	<div id='loadingDialog'>
		<div id='loadingMask'></div>
		<div id="loadingWindow" class="x-window">
			<div class="x-panel-body">
				<img src='images/loaders/spinner.gif' style='position:absolute;top:18px;left:24px;'/>
				<span style='line-height:50px;margin-left:65px;font-size: 2.0em;'>Loading...</span>
			</div>
		</div>
	</div>

	<!-- Fields required for history management -->
	<form id="history-form" class="x-hidden" style='display:none'>
		<input type="hidden" id="x-history-field" />
		<iframe id="x-history-frame"></iframe>
	</form>

	<script src='js/log4js/log4javascript.js'></script>
	<!-- MapR UI script files  -->
	<script src='js/mapr_prod_core.min.js?v=_VERSION_'></script>	

	<!--[if lte IE9]>
	<div class="z_browser_warning">
		For the best MCS User Experience, please install 
		<a href="http://getfirefox.com">Firefox</a>, 
		<a href="http://google.com/chrome">Chrome</a>,
		<a href="http://apple.com/safari">Safari</a>,
		or <a href="http://windows.microsoft.com/en-us/internet-explorer/downloads/ie-10/worldwide-languages">Internet Explorer 10</a>.
	</div>
	<![endif]-->
    <noscript>
        <div id='loadingDialog'>
            <div id="loadingWindow" class="x-window" style="z-index:500;width:400px">
                <div class="x-panel-body">
                    <img src='images/default/window/icon-error.gif' style='position:absolute;top:18px;left:45px;width:18px'/>
                    <div style='font-size: 1.2em;line-height: 20px;color:#888888;margin:auto;width:320px;'>
                        <strong style="margin-left:20px;color:#d34c4c;">Javascript is disabled on this browser</strong>
                        <br/> Javascript is required to in order to view this site. <br/>Please enable in order to use this site.</div>
                </div>
            </div>
        </div>
    </noscript>

</body>
</html>
