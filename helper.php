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
