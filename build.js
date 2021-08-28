/*const {
  //copy,
  //exists,
  //mkdir,
  //readFile,
  unlink: unl,
  // writeFile,
} = require("fs-extra");*/

const Fs = require('fs-extra');
// const Path = require('path');

const util = require("util");
const rimRaf = util.promisify(require("rimraf"));
const {
	version,
	minimumPhp,
	maximumPhp,
	minimumJoomla,
	maximumJoomla,
	allowDowngrades,
} = require("./package.json");

// const Program = require('commander');

const RootPath = process.cwd();

(async function exec()
{
	// Remove old folders.
  await rimRaf("./dist");
  await rimRaf("./package");

	const source = `${__dirname}/node_modules/hyphenopoly`;
	const target = `${__dirname}/src/media/js/hyphenopoly`;

  await Fs.copy(
		`${source}/Hyphenopoly.js`,
		`${target}/-uncompressed/Hyphenopoly.js`
	);

  await Fs.copy(
		`${source}/Hyphenopoly_Loader.js`,
		`${target}/-uncompressed/Hyphenopoly_Loader.js`
	);

  await Fs.copy(
		`${source}/Hyphenopoly.js`,
		`${target}/-uncompressed/Hyphenopoly.js`
	);

  await Fs.copy(
		`${source}/min`,
		`${target}`
	);

  await Fs.copy(
		`${source}/LICENSE`,
		`${target}/LICENSE.txt`
	);

  await Fs.copy(
		`${source}/LICENSE`,
		`${__dirname}/src/LICENSE_Hyphenopoly.txt`
	);

	const sourceInfos = JSON.parse(Fs.readFileSync(`${source}/package.json`).toString());
	Fs.writeFileSync(
		`${target}/_hyphenopoly-version/version.txt`, sourceInfos.version, { encoding: "utf8" }
	);

	// Copy and create new work dir.
  await Fs.copy("./src", "./package");
	await Fs.mkdir("./dist");

  let xml = await Fs.readFile("./package/hyphenateghsvs.xml", { encoding: "utf8" });
  xml = xml.replace(/{{version}}/g, version);
	xml = xml.replace(/{{minimumPhp}}/g, minimumPhp);
	xml = xml.replace(/{{maximumPhp}}/g, maximumPhp);
	xml = xml.replace(/{{minimumJoomla}}/g, minimumJoomla);
	xml = xml.replace(/{{maximumJoomla}}/g, maximumJoomla);
	xml = xml.replace(/{{allowDowngrades}}/g, allowDowngrades);

  Fs.writeFileSync("./package/hyphenateghsvs.xml", xml, { encoding: "utf8" });

  // Package it
  const zip = new (require("adm-zip"))();
  zip.addLocalFolder("package", false);
  zip.writeZip(`dist/plg_system_hyphenateghsvs-${version}_${sourceInfos.version}.zip`);

})();
