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
<!DOCTYPE html>
<html>
<head>
    <title>MapR VirtualMachine</title>
    <link rel='stylesheet' href='css/mapr_prod.css'>
    <script src="js/mapr_vm_main.js"></script>
</head>
<body>
<div class="vm_page">
    <div class="vm_container">
        <div class="vm_title">

        </div>

        <div class="vm_developer">
            <div class="vm_icon vm_label">
                Developers and Analysts
            </div>
            <div class="vm_info">
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Duis vestibulum justo a faucibus varius.
                    </li>
                    <li>
                        Nulla gravida dui sit amet tellus cursus, nec fermentum enim imperdiet.
                    </li>
                    <li>
                        Praesent tempus dolor vel mauris porta, vehicula tincidunt velit mollis.
                    </li>
                    <li>
                        Sed at est sagittis, gravida elit vel, tempor mi.
                    </li>
                    <li>
                        Donec sit amet velit ultrices, adipiscing lacus at, laoreet nisi.
                    </li>
                    <li>
                        Nam vitae quam quis est auctor vehicula.
                    </li>
                    <li>
                        Integer cursus lacus sed faucibus rhoncus.
                    </li>
                    <li>
                        Proin eu nibh nec urna sodales pharetra id nec lorem.
                    </li>
                    <li>
                        Etiam a justo nec neque laoreet pulvinar ut sed libero.
                    </li>
                    <li>
                        Ut et neque posuere, facilisis ipsum vel, auctor erat.
                    </li>
                    <li>
                        Donec et sapien faucibus purus sodales volutpat.
                    </li>
                    <li>
                        Vestibulum rhoncus est ac volutpat commodo.
                    </li>
                    <li>
                        Donec nec neque dictum, adipiscing mauris non, mattis orci.
                    </li>
                    <li>
                        Donec in purus ut arcu consequat rutrum quis nec nunc.
                    </li>
                </ul>

            </div>
            <div class="vm_button vm_label" loc="dev">
                    Click Here
            </div>

        </div>

        <div class="vm_admin">
            <div class="vm_icon vm_label">
                Administrators
            </div>
            <div class="vm_info">
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Duis vestibulum justo a faucibus varius.
                    </li>
                    <li>
                        Nulla gravida dui sit amet tellus cursus, nec fermentum enim imperdiet.
                    </li>
                    <li>
                        Praesent tempus dolor vel mauris porta, vehicula tincidunt velit mollis.
                    </li>
                    <li>
                        Sed at est sagittis, gravida elit vel, tempor mi.
                    </li>
                    <li>
                        Donec sit amet velit ultrices, adipiscing lacus at, laoreet nisi.
                    </li>
                    <li>
                        Nam vitae quam quis est auctor vehicula.
                    </li>
                    <li>
                        Integer cursus lacus sed faucibus rhoncus.
                    </li>
                    <li>
                        Proin eu nibh nec urna sodales pharetra id nec lorem.
                    </li>
                    <li>
                        Etiam a justo nec neque laoreet pulvinar ut sed libero.
                    </li>
                    <li>
                        Ut et neque posuere, facilisis ipsum vel, auctor erat.
                    </li>
                    <li>
                        Donec et sapien faucibus purus sodales volutpat.
                    </li>
                    <li>
                        Vestibulum rhoncus est ac volutpat commodo.
                    </li>
                </ul>

            </div>
            <div class="vm_button vm_label">
                Click Here
            </div>
        </div>

    </div>
</div>

</body>
</html>
