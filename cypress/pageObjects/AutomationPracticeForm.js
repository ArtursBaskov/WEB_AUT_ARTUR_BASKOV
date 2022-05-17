import BasePage from "./BasePage";

class AutomationPracticeForm extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get firstNameField() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get userEmail() {
        return cy.get("#userEmail");
    }

    static get genderRadio1() {
        return cy.get("#gender-radio-1");
    }

    
    static get genderRadio2() {
        return cy.get("#gender-radio-2");
    }

    
    static get genderRadio3() {
        return cy.get("#gender-radio-3");
    }

    
    static get userNumber() {
        return cy.get("#userNumber");
    }

    
    static get dateOfBirthInput() {
        return cy.get("#dateOfBirthInput");
    }

    
    static get subjectsInput() {
        return cy.get("#subjectsInput");
    }

    static get hobbiesСheckbox1() {
        return cy.get("#hobbies-checkbox-1");
    }

    static get hobbiesСheckbox2() {
        return cy.get("#hobbies-checkbox-2");
    }

    static get hobbiesСheckbox3() {
        return cy.get("#hobbies-checkbox-3");
    }

    static get uploadPictureBtn() {
        return cy.get("#uploadPicture");
    }

    static get currentAddress() {
        return cy.get("#currentAddress");
    }

    static get currentAddress() {
        return cy.get("#currentAddress");
    }
}

export default AutomationPracticeForm;