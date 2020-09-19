import "../components/page-panel.js";
import "../components/page-body.js";
import "../../../lib/components/shared/action-card.js";
import "../../../lib/components/widgets/account-widget.js";
import "../../../lib/components/widgets/account-widget-retailer.js";
import "../../../lib/components/widgets/account-widget-nonprofit.js";
import "../../../lib/components/widgets/text-widget.js";
import "../../../lib/components/widgets/number-widget.js";
import "../../../lib/components/widgets/upload-widget.js";
import DappLib from "@trycrypto/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement('nonprofit-page')
export default class BallotPage extends LitElement {
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
      <page-body
        title="${this.title}"
        category="${this.category}"
        description="${this.description}"
      >

    <action-card
      title="Setup For Non-Profit"
      description="Sets up a non-profit."
      action="setupForNonProfit"
      method="post"
      fields="nonprofit"
    >

      <account-widget-nonprofit
          field="nonprofit"
          label="Nonprofit"
          placeholder="Non-Profit address"
        ></account-widget-nonprofit>

    </action-card>

    <action-card
      title="Read NFTs"
      description="Reads NFTs at an Account"
      action="readTokens"
      method="get"
      fields="customer"
    >

      <account-widget
          field="customer"
          label="Customer"
          placeholder="Customer address"
        ></account-widget>

    </action-card>

    <action-card
      title="Read Tokens"
      description="Reads Fungible Tokens in an Account"
      action="readMappedTokens"
      method="get"
      fields="customer"
    >

      <account-widget
          field="customer"
          label="Customer"
          placeholder="Customer address"
        ></account-widget>

    </action-card>

    <action-card
      title="Read Rewards"
      description="Reads the rewards at a retailer"
      action="readRewards"
      method="get"
      fields="retailer"
    >

      <account-widget-retailer
          field="retailer"
          label="Retailer"
          placeholder="Retailer address"
        ></account-widget-retailer>

    </action-card>

    <action-card
      title="Read NonProfit Tokens"
      description="Reads the Tokens that a NonProfit holds from hosting a campaign."
      action="readNonProfitTokens"
      method="get"
      fields="nonprofit"
    >

      <account-widget-nonprofit
          field="nonprofit"
          label="Nonprofit"
          placeholder="Nonprofit address"
        ></account-widget-nonprofit>

    </action-card>

    <action-card
      title="Read ReferenceNFT"
      description="Reads the reference NFT of the user - will return UCV & CV from a specific retailer."
      action="readReferenceNFT"
      method="get"
      fields="customer retailer"
    >

      <account-widget
          field="customer"
          label="Customer"
          placeholder="Customer address"
      ></account-widget>

      <account-widget-retailer
          field="retailer"
          label="CV From Which Retailer?"
          placeholder="Retailer address"
      ></account-widget-retailer>

    </action-card>


      </page-body>
      <page-panel id="resultPanel"></page-panel>
    `;

    return content;
  }
}

