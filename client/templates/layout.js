/*
 * This is an example of a customized template.
 * This layout replaces the "coreLayout" template defined in the reactioncommerce:core package.
 * https://github.com/reactioncommerce/reaction-core/blob/master/client/templates/layout/layout.html
 * To use custom template in layout.html uncomment
 *
 *     Template.layout.replaces "coreLayout"
 */


// Template.layout.replaces("coreLayout");
Template.layout.replaces("coreLayout");
Template.indieLayoutHeader.replaces("layoutHeader");
Template.indieCoreNavigationBar.replaces("CoreNavigationBar");
Template.indieProducts.replaces("products");
Template.indieHeaderBrand.replaces("headerBrand");
Template.customPDP.replaces("productDetail");
