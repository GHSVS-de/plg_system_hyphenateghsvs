!function(e){e(document).ready(function(){var t={option:"com_ajax",group:"system",plugin:"logfiledummy",format:"raw"};buttoncontainer=e("#deletelogFile"),logfilecontent=e("#deletelogFile .logfilecontent"),buttoncontainer.on("click",".deletefile",function(n){t.plugin="DeleteLogFile",e.getJSON("index.php",t,function(e){logfilecontent.html("<pre>"+e.deleted+"</pre>")}),n.preventDefault()}),buttoncontainer.on("click",".showfile",function(n){t.plugin="ShowLogFile",e.getJSON("index.php",t,function(e){logfilecontent.html("<pre>"+e.file+"</pre>")}),n.preventDefault()}),buttoncontainer.on("click",".showfilepath",function(n){t.plugin="ShowLogFilePath",e.getJSON("index.php",t,function(e){logfilecontent.html("<pre>"+e.filepath+e.filesize+"</pre>")}),n.preventDefault()})})}(jQuery);