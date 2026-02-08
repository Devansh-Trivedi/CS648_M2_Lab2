window.addEventListener('load', () => {
  const $ = (sel) => document.querySelector(sel);
  const v = (id) => $(`#${id}`).value.trim();
  $('#empForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`ID: ${v('id')}`);
    console.log(`Name: ${v('name')}`);
    console.log(`Extension: ${v('ext')}`);
    console.log(`Email: ${v('email')}`);
    console.log(`Department: ${v('department').toLowerCase()}`);
  });
});
