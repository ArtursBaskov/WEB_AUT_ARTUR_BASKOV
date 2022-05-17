import AutomationPracticeForm from "../../pageObjects/SAutomationPracticeForm";


context("Elements Page", () => {
    context("Form scenarious", () => {
        beforeEach(() => {
            AutomationPracticeForm.visit();
        });
//man  uzlec No tests found errors, itka nav testu, bet vienu izveidoju. Elementu faila savadiju gandriz visus elementus ar kuriem jastradaa.
        it("input necessary info", () => {
            AutomationPracticeForm.firstNameField.type("Artur");
        });
    });
  
  
});