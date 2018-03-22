<template>
  <div class="footer">
    <div class="label h1">Email Notifications</div>
    <div class="label">Subscribe to see all our newsletters!</div>
    <div class="form-group">
      <input class="text-field" type="text" placeholder="Email">
      <div class="button">
        <span>Subscribe</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .label {
    display: block;
    font-size: 22px;
    color: #fff;
    opacity: .8;
    text-align: center;
    font-family: "Roboto Light", sans-serif;
    margin-bottom: 20px;
  }
  .label.h1{
    font-size: 26px;
    color: #fff;
    opacity: .9;
    margin: 10px 0 5px;
  }
  .form-group {
    display: flex;
    justify-content: center;
    font-family: "Roboto Regular", sans-serif;
    margin-bottom: 40px;
  }
  .form-group .text-field {
    width: 260px;
    padding: 12px 5px 12px 12px;
    font-size: 16px;
    outline: none;
    color: #fff;
    background-color: transparent;
    border: 1px solid rgba(255,555,255, .2);
    border-right: none;
  }

  .form-group .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: rgba(41,128,185, .6);
    transition: background-color .3s;
  }
  .form-group .button:hover {
    background-color: #2980B9;
    color: #fff;
  }
</style>
