import _ from "lodash";
import { Media, Products, Accounts } from "/lib/collections";
import { Template } from "meteor/templating";

/**
 * cartDrawerItems helpers
 *
 * @provides media
 * @returns default product image
 */
Template.cartDrawerItems.helpers({
  product: function () {
    return Products.findOne(this.productId);
  },
  recipient: function () {
    if (this.recipientId) {
      // TODO move this into a common location
      return _.find(Accounts.findOne({ _id: Meteor.userId() }).recipients, { 'recipientId': this.recipientId });
    }
  },
  media: function () {
    let product = Products.findOne(this.productId);
    let defaultImage = Media.findOne({
      "metadata.variantId": this.variants._id
    });

    if (defaultImage) {
      return defaultImage;
    } else if (product) {
      _.some(product.variants, function (variant) {
        defaultImage = Media.findOne({
          "metadata.variantId": variant._id
        });
        return !!defaultImage;
      });
    }
    return defaultImage;
  }
});
