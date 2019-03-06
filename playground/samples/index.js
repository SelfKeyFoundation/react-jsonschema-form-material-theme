import arrays from './arrays';
import nested from './nested';
import numbers from './numbers';
import simple from './simple';
import widgets from './widgets';
import ordering from './ordering';
import references from './references';
import custom from './custom';
import errors from './errors';
import large from './large';
import date from './date';
import validation from './validation';
import files from './files';
import single from './single';
import customArray from './customArray';
import customObject from './customObject';
import alternatives from './alternatives';
import propertyDependencies from './propertyDependencies';
import schemaDependencies from './schemaDependencies';
import objectFileWidget from './objectFileWidget';
import arrayObjectFileWidget from './arrayObjectFileWidget';
import nationalId from './national-id';
import passport from './passport';
import bankStatement from './bank-statement';

export const samples = {
	'Object file widget': objectFileWidget,
	'Array object file widget': arrayObjectFileWidget,
	'National ID': nationalId,
	Passport: passport,
	'Bank Statement': bankStatement,
	Simple: simple,
	Nested: nested,
	Arrays: arrays,
	Numbers: numbers,
	Widgets: widgets,
	Ordering: ordering,
	References: references,
	Custom: custom,
	Errors: errors,
	Large: large,
	'Date & time': date,
	Validation: validation,
	Files: files,
	Single: single,
	'Custom Array': customArray,
	'Custom Object': customObject,
	Alternatives: alternatives,
	'Property dependencies': propertyDependencies,
	'Schema dependencies': schemaDependencies,
};
