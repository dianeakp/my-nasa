import { html, fixture, expect } from '@open-wc/testing';
import "../my-nasa.js";

describe("myNasa test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <my-nasa
        title="title"
      ></my-nasa>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
