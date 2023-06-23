import { DragAndDropPage } from '../../support/herokuapp_pageactions/Herokuapp_PageActions'
describe('Assignment',function(){ 
     it('Drag and Drop Test', function(){
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        const boxAText='A';
        const boxBText='B';
        DragAndDropPage.performAndValidateDragAndDrop(boxAText,boxBText);    
      });     
})