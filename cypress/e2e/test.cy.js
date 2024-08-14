describe("test", () => {
    it("tests test", () => {
      cy.viewport(1263, 150);
      cy.visit("www.google.com");
      cy.get("ntp-app").click();
      cy.get("ntp-app").click();
      cy.visit("https://www.youtube.com/");
      cy.get("yt-chip-cloud-chip-renderer:nth-of-type(3) > yt-formatted-string").click();
    });
  });
  