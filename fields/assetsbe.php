<?php
/*
GHSVS 2019-02-01
Usage:
<field name="assetsbe" type="plgSystemHyphenateGhsvs.assetsbe" hidden="true"
	loadjs="false" loadcss="true" />

If attributs loadjs or loadcss are missing their default value is TRUE => Assets will be loaded.	

*/
defined('JPATH_PLATFORM') or die;

use Joomla\CMS\Form\FormField;
use Joomla\CMS\HTML\HTMLHelper;

class plgSystemHyphenateGhsvsFormFieldAssetsBe extends FormField
{
	protected $type = 'assetsbe';

	protected function getInput()
	{
		$loadjs = isset($this->element['loadjs'])
			? (string) $this->element['loadjs'] : true;

		$loadcss = isset($this->element['loadcss'])
			? (string) $this->element['loadcss'] : true;
	
		$file = 'plg_system_hyphenateghsvs/backend';
		
		if ($loadcss !== 'false')
		{
			HTMLHelper::_('stylesheet',
				$file . '.css',
				array(
					//Allow template overrides in css/plg_system_charactercounterghsvs:
					'relative' => true,
					//'pathOnly' => false,
					//'detectBrowser' => false,
					//'detectDebug' => true,
				)
			);
		}

		if ($loadjs !== 'false')
		{
			HTMLHelper::_('jquery.framework');
			HTMLHelper::_('script',
				$file . '.js',
				array(
					//Allow template overrides in css/plg_system_charactercounterghsvs:
					'relative' => true,
					//'pathOnly' => false,
					//'detectBrowser' => false,
					//'detectDebug' => true,
				)
			);
		}
		return '';
	}
	
	protected function getLabel()
	{
		return '';
	}
}
