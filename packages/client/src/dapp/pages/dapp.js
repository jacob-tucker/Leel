import DappLib from "@trycrypto/dappstarter-dapplib";
import DOM from "../../lib/components/shared/dom";
import "../../lib/components/shared/action-card.js";
import "../../lib/components/shared/action-button.js";
import "../../lib/components/widgets/text-widget.js";
import "../../lib/components/widgets/number-widget.js";
import "../../lib/components/widgets/account-widget.js";
import "../../lib/components/widgets/upload-widget.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { LitElement, html, customElement, property } from "lit-element";
import Logo from './leel_logo_together_new.png'

@customElement("dapp-page")
export default class DappPage extends LitElement {
  @property()
  get;
  @property()
  post;
  @property()
  title;
  @property()
  category;
  @property()
  description;

  createRenderRoot() {
    return this;
  }
  constructor(args) {
    super(args);
  }


  render() {
    let content = html`
      <div class="container m-auto">
        <div class="row fadeIn mt-3 p-2 block">
          <img .src=${Logo} alt="Logo" />
          <p class="mt-3">
            This is a preview of how Leel would function in a real-world scenario.
          </p>
          <p class="mt-3">
            Customers can set up accounts, earn FungibleTokens from retailers,
            trade NFTs with each other, and participate in a community good component
            in which they can donate NFTs to Nonprofits who are hosting campaigns.
          </p>
          <p class="mt-3">
            Retailers can set up accounts, give FungibleTokens to customers for their loyalty 
            behavior, such as advertising for their company or purchasing goods from them. They
            can also create a rewards structure in which their customers can redeem their NFTs
            for the items the retailer specifies.
          </p>
        </div>
      </div>
    `;
    return content;

  }
}
