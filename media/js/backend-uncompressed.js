// Ajax for field assetsbe.
(function ($) {
	$(document).ready(function () {
		var ajaxData = {
			'option' : 'com_ajax',
			'group'  : 'system',
			'plugin' : 'logfiledummy',
			'format' : 'raw'
			};
			buttoncontainer = $("#deletelogFile");
			logfilecontent = $("#deletelogFile .logfilecontent");
			// buttoncontainer.find(".logfilecontent");

			buttoncontainer.on('click', '.deletefile', function(e)
			{
				ajaxData.plugin = "DeleteLogFile";
				$.getJSON('index.php', ajaxData, function(response){
					logfilecontent.html("<pre>" + response['deleted'] + "</pre>");
				});
				
				e.preventDefault();
			});

			buttoncontainer.on('click', '.showfile', function(e)
			{
				ajaxData.plugin = "ShowLogFile";
				
				$.getJSON('index.php', ajaxData, function(response){
					logfilecontent.html("<pre>" + response['file'] + "</pre>");
				});
				
				e.preventDefault();
			});

			buttoncontainer.on('click', '.showfilepath', function(e)
			{
				ajaxData.plugin = "ShowLogFilePath";
				
				$.getJSON('index.php', ajaxData, function(response){
					logfilecontent.html("<pre>" + response['filepath'] + response['filesize'] + "</pre>");
				});
				
				e.preventDefault();
			});
	});
})(jQuery);
