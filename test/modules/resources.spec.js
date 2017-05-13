import {describe, it, expect, beforeEach} from '../test.helper';

import moduleFactory from '../../src/modules/resources';
import {simpleMockHandlers} from "../mock-handlers.helper";


describe("'resources' Module", () => {
	
	let environment;
	beforeEach(() => { environment = moduleFactory() });
	
	it("exports the expected classes", () => {

		expect(environment.classes).to.contain.resources(
			'Resource',
			'ExternalResource'
		);
		expect(environment.classes).to.contain.relationships(
			'IsRelatedTo',
			'CorrespondsTo'
		);
		
	});
	
	it("has abstract classes", () => {
		
		const {Resource, IsRelatedTo} = environment.classes;
		
		expect(Resource)   .to.have.property('abstract', true);
		expect(IsRelatedTo).to.have.property('abstract', true);
	});
	
});
