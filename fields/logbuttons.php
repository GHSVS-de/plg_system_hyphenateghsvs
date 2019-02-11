<?php
/*
GHSVS 2019-02-01
Usage:
<field name="logbuttons" type="plgSystemHyphenateGhsvs.logbuttons" hiddenLabel="true"/>

Inserts Ajax-Buttons for Log File.	

*/
defined('JPATH_PLATFORM') or die;

use Joomla\CMS\Form\FormField;
use Joomla\CMS\HTML\HTMLHelper;

class plgSystemHyphenateGhsvsFormFieldLogButtons extends FormField
{
	protected $type = 'logbuttons';

	protected function getInput()
	{
	
		$file = 'plg_system_hyphenateghsvs/log-buttons.js';

		HTMLHelper::_('jquery.framework');
		HTMLHelper::_('script',
			$file,
			array(
				//Allow template overrides in css/plg_system_charactercounterghsvs:
				'relative' => true,
				//'pathOnly' => false,
				//'detectBrowser' => false,
				//'detectDebug' => true,
			)
		);
		return '
		<div id=deletelogFile>
			<div><button class=showfilepath>Show Log File Path and Size</button><br><br></div>
			<div><button class=showfile>Show Log File Content</button><br><br></div>
			<div class=logfilecontent></div>
			<div><button class=deletefile>Delete Log File</button></div>
		</div>';
	}
	
	protected function getLabel()
	{
		return '';
	}
}
