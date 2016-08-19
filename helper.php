<?php
/**
 * @package plugin.system hyphenateghsvs.helper for Joomla!
 * @version See hyphenateghsvs.xml
 * @author G@HService Berlin Neukölln, Volkmar Volli Schlothauer
 * @copyright Copyright (C) 2016, G@HService Berlin Neukölln, Volkmar Volli Schlothauer. All rights reserved.
 * @license For plugin: See License.txt. For Hyphenator.js: See LICENSE_Hyphenator.txt.
 * @authorUrl http://www.ghsvs.de
 * @authorEmail hyphenateghsvs @ ghsvs.de
 * @link https://github.com/GHSVS-de/plg_system_hyphenateghsvs
 * @link ghsvs.de/programmierer-schnipsel/joomla/191-joomla-silbentrennungs-plugin-hyphenateghsvs-fuer-doofe-browser
 */
?>
<?php
defined('JPATH_BASE') or die;

class PlgHyphenateGhsvsHelper
{
	public static function prepareSelectors($string)
	{
		if (!$string) return '';
		
		$filter = JFilterInput::getInstance();
		$string = array_unique(preg_split("/(\n|\r)+/", $filter->clean($string, 'TRIM')));
		
		if (!$string) return '';

		foreach ($string as $key => $selector)
		{
			$string[$key] = str_replace(array('"', "'"), '', $filter->clean($selector, 'TRIM'));
			if (!$string[$key])
			{
				unset($string[$key]);
				continue;
			}
		}
		
		return implode(', ', array_unique($string));
	}
}
