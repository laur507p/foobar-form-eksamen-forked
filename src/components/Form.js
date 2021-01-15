import React from "react";
import FormField from "./FormField";

export default function Main() {
  return (
    <>
      <h2>Customer information</h2>
      <label>First Name</label>
      <FormField name="firstname" placeholder="First Name" type="text" id="firstname" />
      <label>Last name</label>
      <FormField name="lastname" placeholder="Last Name" type="text" id="lastname" />
      <label>Email</label>
      <div className="hint"> *A receipt will be sent to your email.</div>
      <FormField name="email" placeholder="Email" type="email" id="email" />
      <label>Table number </label>
      {/* <div className="hint">You can find your table number on the sign at the end of the table.</div> */}
      {/* <FormField name="tablenumber" placeholder="Table number" type="number" id="tablenumber" /> */}
      <select id="tablenumber">
        <option value="table1">1</option>
        <option value="table2">2</option>
        <option value="table3">3</option>
        <option value="table4">4</option>
        <option value="table5">5</option>
        <option value="table6">6</option>
        <option value="table7">7</option>
        <option value="table8">8</option>
        <option value="table9">9</option>
        <option value="table10">10</option>
      </select>
      <h2 className="payment-h1">Payment information</h2>
      <label>Card number</label>
      <FormField name="cardnumber" placeholder="0000 0000 0000 0000" type="text" id="cardnumber" maxLength="16" />

      <div className="form-field-container">
        <label>mm/yy</label>
        <FormField name="expiration_date" placeholder="12/20" type="text" id="expiration_date" maxLength="4" />
      </div>
      <div className="form-field-container">
        <label>cvc</label>
        <FormField name="cvc" placeholder="111" type="text" id="cvc" maxLength="3" />{" "}
      </div>
      <label className="block">Name on card</label>
      <FormField name="fullname" placeholder="Name On Card" type="text" id="fullname" />
    </>
  );
}
