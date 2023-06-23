import { IframePage } from '../../support/herokuapp_pageactions/Herokuapp_PageActions'

describe('Verifying Formatting in Iframe',function(){
    beforeEach(function(){
        cy.visit(Cypress.env('urlIframe'));      
    })
    it('Formatting Text to Bold and Verify',function(){             
        cy.fixture('iframeTestData').then(function(iframeTestData){
            IframePage.enterTextToIframe(iframeTestData.BOLD.text)
            IframePage.formatText(iframeTestData.BOLD.formatType)
            IframePage.verifyTextIsFormatted(iframeTestData.BOLD.formatType,iframeTestData.BOLD.text);

        })
    }) 
    it('Formatting Text to Italics and Verify',function(){             
        cy.fixture('iframeTestData').then(function(iframeTestData){
            IframePage.enterTextToIframe(iframeTestData.ITALICS.text)
            IframePage.formatText(iframeTestData.ITALICS.formatType)
            IframePage.verifyTextIsFormatted(iframeTestData.ITALICS.formatType,iframeTestData.ITALICS.text);
        })
    }) 
    
})