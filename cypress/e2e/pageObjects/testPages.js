class testPages{
getTable(){
    return cy.get('summary')
}
getTextField(){
    return cy.get('#jsondata')
}
getRefreshButton(){
    return  cy.get('#refreshtable')
}
getTableData(){
    return cy.get('#dynamictable>tr')
}

}

export default testPages;