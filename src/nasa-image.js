import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

// https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd

export class NasaImage extends DDDSuper(LitElement) {
  constructor() {
    super();
    this.title = "";
    this.source = "";
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        .image {
          display: inline-block;
        }

        .image div {
          max-width: 240px;
          font-size: 16px;
          font-weight: bold;
          background-color: var(--ddd-theme-default-beaverBlue);
        }

        .image img {
          display: block;
          width: 240px;
          height: 240px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="image">
        <img src="${this.source}" />
        <div>${this.title}</div>
      </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);
