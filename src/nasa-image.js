import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

// https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd

export class NasaImage extends DDDSuper(LitElement) {
  constructor() {
    super();
    this.title = "";
    this.source = "";
    this.altDes = "";
    this.second_creator = "";
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      altDes: { type: String, attribute: "alt-description" },
      second_creator: { type: String, attribute: "secondary-creator" },
    };
  }

  static get styles() {
    return [
      css`
        .image {
          display: inline-block;
        }

        div:hover {
          background-color: var(--ddd-theme-default-skyLight);
        }

        .image div {
          max-width: 240px;
          font-size: 16px;
          font-weight: bold;
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
        <img src="${this.source}" alt=${this.altDes} />
        <div>Title: ${this.title}</div>
        Secondary Creator: ${this.second_creator}
      </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);
