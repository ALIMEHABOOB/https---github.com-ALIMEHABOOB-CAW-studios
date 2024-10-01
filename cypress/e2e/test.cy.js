import testPages from "./pageObjects/testPages";

describe('Dynamic Table Data Test', () => {
  before(function () {
    // Load fixture data from data.json
    cy.fixture('data').then(function (data) {
      this.data = data;
    });
  });

  it('should insert and assert dynamic data in the table', function () {
    const testPage=new testPages();
    cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
    testPage.getTable().click();
    const jsonData = JSON.stringify(this.data);
    testPage.getTextField().clear().type(jsonData, { parseSpecialCharSequences: false });
    testPage.getRefreshButton().click();
    cy.wait(2000);
    testPage.getTableData().find("td").then($options=>{
      const Rcontain=[...$options].map(td=>td.innerText);
    expect(Rcontain).to.include.members(['Bob','20','male']);
    expect(Rcontain).to.include.members(['George','42','male']);
    expect(Rcontain).to.include.members(['Sara','42','female']);
    });
    cy.wait(2000);
  });
});
