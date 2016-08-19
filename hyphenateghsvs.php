<?php
/**
 * @package plugin.system hyphenateghsvs for Joomla!
 * @version See hyphenateghsvs.xml
 * @author G@HService Berlin Neukölln, Volkmar Volli Schlothauer
 * @copyright Copyright (C) 2016, G@HService Berlin Neukölln, Volkmar Volli Schlothauer. All rights reserved.
 * @license For plugin: See License.txt. For Hyphenator.js: See LICENSE_Hyphenator.txt.
 * @authorUrl http://www.ghsvs.de
 * @authorEmail hyphenateghsvs @ ghsvs.de
 * @link https://github.com/GHSVS-de/plg_system_hyphenateghsvs
 * @link ghsvs.de/programmierer-schnipsel/joomla/191-joomla-silbentrennungs-plugin-hyphenateghsvs-fuer-doofe-browser
 */
/*
This plugin uses Hyphenator.js - client side hyphenation for webbrowsers.
https://github.com/mnater/Hyphenator
See LICENSE_Hyphenator.txt.
*/
?>
<?php
defined('JPATH_BASE') or die;

class PlgSystemhyphenateghsvs extends JPlugin
{
	protected $app;
	protected $execute = 1;
	protected static $basepath = 'plg_system_hyphenateghsvs';

	function __construct(&$subject, $config = array())
	{
		parent::__construct($subject, $config);
		if (
			JFactory::getDocument()->getType() !== 'html'
			|| $this->app->isAdmin()
			|| (!$this->params->get('robots', 0) && $this->app->client->robot)
		){
			$this->execute = 0;
			return;
		}
	}

	public function onBeforeCompileHead()
	{
		if (!$this->execute) return;

		JLoader::register('PlghyphenateghsvsHelper', __DIR__ . '/helper.php');
		$hyphenate = PlghyphenateghsvsHelper::prepareSelectors($this->params->get('hyphenate', ''));
		$donthyphenate = PlghyphenateghsvsHelper::prepareSelectors($this->params->get('donthyphenate', ''));

		if (!$hyphenate && !$donthyphenate)
		{
			return;
		}
		$uncompressed = $this->params->get('uncompressed', '');
		$vanilla = (int) $this->params->get('vanilla', 0);
		$languages = $this->params->get('languages', null);
		$collect = array();
		$collect['en'] = 'hyphenationalgorithm';
		if (is_object($languages))
		{
			foreach ($languages as $language)
			{
				$language = new Joomla\Registry\Registry($language);
				if (
					$language->get('active', 0)
					&& ($lang = trim($language->get('lang', '')))
					&& ($langtext = str_replace(' ', '', $language->get('langtext', '')))
				){
					$collect[$lang] = $langtext;
				}
			}
		}
		$collect = json_encode($collect);

		// useCSS3hyphenation : true macht keinen Sinn, wenn Hyphenate_Loader sowieso nur in Browsern
		// lädt, die gar kein CSS3hyphenation unterstützen!
		// defaultlanguage : "de", rausgenommen, da unklar.
		$config = json_encode(array(
			'useCSS3hyphenation' => false,
			'intermediatestate' => 'visible',
			// default:local (bis der Browser schließt), session (Storage pro Fenster)
			// Only for Network debug: none
			// 'storagetype' => 'none',
		));
		$path = JUri::root(true) . '/media/' . self::$basepath . '/js/Hyphenator' . $uncompressed . '.js';
		$hyphenatorLoaderInit = 'Hyphenator_Loader.init(' . $collect . ', "' . $path . '",' . $config . ');';

		$js = array();
		
		if (!$vanilla)
		{
			$js[] = ';(function($){';
			$js[] = '$(document).ready(function(){';
			if ($hyphenate)
			{
				$js[] = '$("' . $hyphenate . '").addClass("hyphenate");';
			}
			if ($donthyphenate)
			{
				$js[] = '$("' . $donthyphenate . '").addClass("donthyphenate");';
			}
			$js[] = $hyphenatorLoaderInit;
			$js[] = '});';
			$js[] = '})(jQuery);';
			JHtml::_('jquery.framework');
		}
		else
		{
			$js[] = ';document.addEventListener("DOMContentLoaded", function(){';
			if ($hyphenate)
			{
				$js[] = 'var selectors = new Hyphenateghsvs("' . $hyphenate . '");';
				$js[] = 'selectors.addClass("hyphenate");';
			}
			if ($donthyphenate)
			{
				$js[] = 'var selectors = new Hyphenateghsvs("' . $donthyphenate . '");';
				$js[] = 'selectors.addClass("donthyphenate");';
			}
			$js[] = $hyphenatorLoaderInit;
			$js[] = '});';

			$file = self::$basepath . '/hyphenateghsvsVanilla' . $uncompressed . '.js';
			$file = JHtml::_('script', $file, $mootools = false,
				$relative = true, //Nur so Template-Override möglich! 
				$path_only = false, $detect_browser = false, $detect_debug = false
			);
		}

		$js = implode('', $js);

		$file = self::$basepath . '/Hyphenator_Loader' . $uncompressed . '.js';
		JHtml::_('script', $file, $mootools = false,
			$relative = true, //Nur so Template-Override möglich! 
			$path_only = false, $detect_browser = false, $detect_debug = false
		);

		// inclusive init for already loaded Hyphenator_Loader.js.
		JFactory::getDocument()->addScriptDeclaration($js);
	}
}
