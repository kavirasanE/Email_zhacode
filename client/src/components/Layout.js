import React from 'react'


const Layout = () => {
  return (
    <div class="">
      <img class="my-6 w-16" src="https://assets.bootstrapemail.com/logos/light/square.png" />
      <div class="space-y-4 mb-6">
        <h1 class="text-4xl fw-800">Thanks for your order, Josh</h1>
        <p>The estimated delivery time for your order is 6:10 PM - 6:20 PM. Track your order on the Hip Corp website.</p>
        <a class="btn btn-red-500 rounded-full px-6 w-full w-lg-48" href="https://app.bootstrapemail.com/templates">Track Your Order</a>
      </div>
      <div class="card rounded-3xl px-4 py-8 p-lg-10 mb-6">
        <h3 class="text-center">Receipt from HipCorp</h3>
        <p class="text-center text-muted">Receipt #ABCD-EFGH</p>
        <table class="p-2 w-full">
          <tbody>
            <tr>
              <td>Cool Sunglasses</td>
              <td class="text-right">$10.00</td>
            </tr>
            <tr>
              <td>Trucker Hat</td>
              <td class="text-right">$12.00</td>
            </tr>
            <tr>
              <td>Sunflower Seeds</td>
              <td class="text-right">$20.00</td>
            </tr>
            <tr>
              <td class="fw-700 border-top">Amount paid</td>
              <td class="fw-700 text-right border-top">$42.00</td>
            </tr>
          </tbody>
        </table>
        <hr class="my-6"/>
        <p>If you have any questions, contact us at <a href="https://bootstrapemail.com">HipCorp@example.com</a>.</p>
      </div>
    </div>
  )
}

export default Layout