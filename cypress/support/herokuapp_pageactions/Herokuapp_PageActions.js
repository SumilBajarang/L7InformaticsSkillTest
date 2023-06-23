import {IframePageElements,DragAndDropPageElements} from '../herokuapp_pageElements/Herokuapp_PageElements'
export class IframePage
{
  
    static enterTextToIframe(text){
    //cy.iframe(this.IframePageElements.IFRAME).should('be.visible').clear().type(this.data.name) 
    cy.get(IframePageElements.IFRAME).then($iframe => {
      const $body = $iframe.contents().find('body')
     cy.wrap( $body).as('iFrame')   
    })
    cy.get('@iFrame').find('p').clear().should('not.exist');
    cy.get('@iFrame').type(text+'{ctrl+a}').should('have.text',text);
    }

   static formatText(formatType){  
      cy.get(IframePageElements.FORMAT).contains('Format').click();
      cy.get(IframePageElements.FORMAT_TYPE).contains(formatType).click();
   }
   static verifyTextIsFormatted(formattedType,text){
      let locator; 
      if(formattedType=="Bold"){
         locator=IframePageElements.FORMAT_BOLD;
      }
      else if(formattedType=="Italic"){
         locator=IframePageElements.FORMAT_ITALIC;
      }
      cy.get(IframePageElements.IFRAME).then($iframe => {
      const frame = $iframe.contents().find(locator)     
       cy.wrap(frame).should('be.visible').and('contain',text)
       })      
      
   }
 
}

export class DragAndDropPage{
  static performAndValidateDragAndDrop(boxAText,boxBText){
   cy.get(DragAndDropPageElements.BOX_A).should('have.text',boxAText).then(element =>{
      const containerAText=element.text();
      cy.dragAndDrop(DragAndDropPageElements.BOX_A,DragAndDropPageElements.BOX_B);
      if(containerAText==boxAText){
         cy.get(DragAndDropPageElements.BOX_A).should('have.text',boxBText)
         cy.get(DragAndDropPageElements.BOX_B).should('have.text',boxAText)
      }
      else{
         cy.get(DragAndDropPageElements.BOX_A).should('have.text',boxAText)
         cy.get(DragAndDropPageElements.BOX_B).should('have.text',boxBText)
      }   
      
   })   
   

  }
}