export const loginPageLocators = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
  errorMessageText: 'h3[data-test="error"]',
}

export const homePageLocators = {
  addToCartButton: {
    testId: 'add-to-cart-sauce-labs-backpack',
    role: 'button',
    name: 'Add to cart',
    label: 'Add to cart',
    placeholder: 'Add to cart',
    altText: 'Add to cart',
    css: '.btn_primary.btn_inventory',
    xpath: '//*[@data-test="add-to-cart-sauce-labs-backpack"]',
  },
  cartButton: {
    testId: 'shopping_cart_container',
    role: 'button',
    name: 'Shopping cart',
    label: 'Shopping cart',
    placeholder: 'Shopping cart',
    altText: 'Shopping cart',
    css: '.shopping_cart_link',
    xpath: '//*[@class="shopping_cart_link"]'
  }     
}