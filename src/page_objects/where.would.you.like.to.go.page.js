'use strict';

const WhereWouldYouLikeToGo = function() {
    
    // locators
    const studentLoanPlanningLink = element(by.linkText('Student Load Planning'));
    const admissionsLink = element(by.linkText('Admissions'));
    const tuitionFeeLink = element(by.linkText('Tuition Fee'));

    // functions
	this.goToStudentLoadPlanning = function () {

        studentLoanPlanningLink.click();

	}
	
	this.goToAdmissions = function () {

        admissionsLink.click();

    }
    
    this.goToTuitionFee = function () {

        tuitionFeeLink.click();

	}
    
};

module.exports = new WhereWouldYouLikeToGo();