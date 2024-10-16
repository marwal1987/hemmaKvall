describe("Test av HomePage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  context("hero sektion", () => {
    it("Ska visa herosektionen", () => {
      cy.get("h1").should("exist").contains("VAD SKA DU TITTA PÅ IKVÄLL?");
      cy.get("p")
        .should("exist")
        .contains(
          "Hitta din favoritfilm genom att söka direkt i OMDB's filmdatabas nedan"
        );
    });
  });

  context("Sökfält och knapp", () => {
    it("Ska visa sökfält och knapp", () => {
      cy.get("input").should("exist");
      cy.get("button").should("exist").contains("Sök");
    });

    it("Ska vara disabled om inget skrivits in i sökfältet", () => {
      cy.get("button").should("be.disabled");
    });

    it("Ska göra knappen klickbar när text skrivs in fältet", () => {
      cy.get("input").type("Shrek"); // Skriver text i sökfältet
      cy.get("button").should("not.be.disabled"); // Kollar om knappen är enabled
    });

    it("Ska köra sökning när knappen trycks", () => {
      cy.get("input").type("Shrek");
      cy.get("button").click(); // Klicka på knappen
      cy.wait(3000);
    });
  });
});
