import "../components/page-panel.js";
import "../components/page-body.js";
import "../../../lib/components/shared/action-card.js";
import "../../../lib/components/widgets/account-widget.js";
import "../../../lib/components/widgets/text-widget.js";
import "../../../lib/components/widgets/number-widget.js";
import "../../../lib/components/widgets/upload-widget.js";
import DappLib from "@trycrypto/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement('leel-page')
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
      title="Setup For Customer"
      description="Sets up a customer."
      action="setupForCustomer"
      method="post"
      fields="customer"
    >

      <account-widget
          field="customer"
          label="Customer"
          placeholder="Customer address"
        ></account-widget>

      

    </action-card>

    <action-card
      title="Setup For Retailer"
      description="Sets up a retailer."
      action="setupForRetailer"
      method="post"
      fields="retailer"
    >

      <account-widget
          field="retailer"
          label="Retailer"
          placeholder="Retailer address"
        ></account-widget>

    </action-card>

    <action-card
      title="Earning Points"
      description="A customer will earn points when buying from the retailer."
      action="earningPoints"
      method="post"
      fields="retailer customer amountToEarn"
    >

        <account-widget
          field="retailer"
          label="Retailer"
          placeholder="Retailer address"
        ></account-widget>

        <account-widget
          field="customer"
          label="Customer"
          placeholder="Customer address"
        ></account-widget>

        <text-widget
          field="amountToEarn"
          label="Amount To Earn"
          placeholder="..."
        ></text-widget>

    </action-card>

    <action-card
      title="Create Reward"
      description="A retailer can create a reward."
      action="createReward"
      method="post"
      fields="retailer rewardItem minimumTokens allowedRetailers"
    >

      <account-widget
          field="retailer"
          label="Retailer"
          placeholder="Retailer address"
        ></account-widget>

      <text-widget
        field="rewardItem"
        label="Reward Item"
        placeholder="..."
      ></text-widget>

      <text-widget
          field="minimumTokens"
          label="Minimum Required Tokens"
          placeholder="..."
      ></text-widget>

      <text-widget
        field="allowedRetailers"
        label="Other Allowed Retailers"
        placeholder="..."
      ></text-widget>

    </action-card>

    <action-card
      title="Spend Points"
      description="Spend points at a retailer."
      action="spendPoints"
      method="post"
      fields="customer retailer rewardItem booleanCheck foo otherRetailer amountFromOtherRetailer"
    >

        <account-widget
          field="customer"
          label="Customer"
          placeholder="Customer address"
        ></account-widget>

        <account-widget
          field="retailer"
          label="Retailer"
          placeholder="Retailer address"
        ></account-widget>

        <text-widget
        field="rewardItem"
        label="What reward NFT will you purchase?"
        placeholder="..."
      ></text-widget>

        <label>Use tokens from other retailer?  </label>
        <input type="checkbox" data-field="foo">

        <account-widget
          field="otherRetailer"
          label="Other Retailer (only if using other retailer, otherwise this field is N/A)"
          placeholder="Other retailer address"
        ></account-widget>

        <text-widget
          field="amountFromOtherRetailer"
          label="Amount of tokens from other retailer"
          placeholder="..."
        ></text-widget>

    </action-card>

    <action-card
      title="Remove Reward"
      description="A retailer can remove a reward."
      action="removeReward"
      method="post"
      fields="retailer rewardItem"
    >

      <account-widget
          field="retailer"
          label="Retailer"
          placeholder="Retailer address"
        ></account-widget>

      <text-widget
        field="rewardItem"
        label="Reward Item"
        placeholder="..."
      ></text-widget>

    </action-card>

    <action-card
      title="Trade"
      description="Trade an NFT for FTs from another customer."
      action="trade"
      method="post"
      fields="customer1 nftToGive customer2 ftToGive fromWhatRetailer"
    >

        <account-widget
          field="customer1"
          label="Customer1"
          placeholder="Customer address to give NFT"
        ></account-widget>

        <text-widget
          field="nftToGive"
          label="NFT To Give"
          placeholder="..."
        ></text-widget>

        <account-widget
          field="customer2"
          label="Customer2"
          placeholder="Customer address to receive NFT"
        ></account-widget>

        <text-widget
          field="ftToGive"
          label="Amount of FT to Give"
          placeholder="..."
        ></text-widget>

        <text-widget
          field="fromWhatRetailer"
          label="From What Retailer"
          placeholder="..."
        ></text-widget>
    </action-card>

    <action-card
      title="Instagram Ad"
      description="A customer will earn points when doing an instagram ad."
      action="instagramAd"
      method="post"
      fields="retailer customer"
    >

        <account-widget
          field="retailer"
          label="Retailer"
          placeholder="Retailer address"
        ></account-widget>

        <account-widget
          field="customer"
          label="Customer"
          placeholder="Customer address"
        ></account-widget>

    </action-card>

    <action-card
      title="Setup For Non-Profit"
      description="Sets up a non-profit."
      action="setupForNonProfit"
      method="post"
      fields="nonprofit"
    >

      <account-widget
          field="nonprofit"
          label="Nonprofit"
          placeholder="Non-Profit address"
        ></account-widget>

    </action-card>

    <action-card
      title="Stake Non-Profit"
      description="A customer can stake a non-profit."
      action="stakeNonProfit"
      method="post"
      fields="nonprofit customer nftToGive"
    >

        <account-widget
          field="nonprofit"
          label="Nonprofit"
          placeholder="Non-Profit address"
        ></account-widget>

        <account-widget
          field="customer"
          label="Customer"
          placeholder="Customer address"
        ></account-widget>

        <text-widget
          field="nftToGive"
          label="What NFT will you give?"
          placeholder="..."
        ></text-widget>

    </action-card>

    <action-card
      title="Read Tokens"
      description="Reads Tokens at an Account"
      action="readTokens"
      method="get"
      fields="customer"
    >

      <account-widget
          field="customer"
          label="customer"
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

      <account-widget
          field="retailer"
          label="Retailer"
          placeholder="Retailer address"
        ></account-widget>

    </action-card>

    <action-card
      title="Read NonProfit NFTs"
      description="Reads the NFTs that a NonProfit holds from hosting a campaign."
      action="readNonProfitTokens"
      method="get"
      fields="nonprofit"
    >

      <account-widget
          field="nonprofit"
          label="Nonprofit"
          placeholder="Nonprofit address"
        ></account-widget>

    </action-card>


      </page-body>
      <page-panel id="resultPanel"></page-panel>
    `;

    return content;
  }
}

