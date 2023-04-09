//wrapp per mb
const wrapp = 45;
//doos per wrapp
const doos = 4;
//blister per doos
const blister = 3;

let mb = 0;
let mbshow = 0;
let wrapping = 0;

const mbketengan = () => {
  let jml_mbketengan = parseInt(document.getElementById("jml_mbketengan").value);

  if (isNaN(jml_mbketengan)) {
    wrapping = mb * wrapp;
  } else {
    wrapping = mb * wrapp + jml_mbketengan;
    mbshow = `${mb} Mb + ${jml_mbketengan} Wrapp`;
  }
};

const mbfull = () => {
  let jml_mbfull = parseInt(document.getElementById("jml_mbfull").value),
    nomb_shsblm = parseInt(document.getElementById("nomb_shsblm").value);

  if (isNaN(nomb_shsblm)) {
    mb = jml_mbfull;
    mbshow = `${mb} Mb`;
    mbketengan();
  } else {
    mb = jml_mbfull - nomb_shsblm;
    mbshow = `${mb} Mb`;
    mbketengan();
  }
};

const hitungmb = () => {
  mbfull();

  let cartoning = wrapping * doos;
  let blistering = cartoning * blister;

  const output_mb = document.querySelector(".o_mb");
  output_mb.textContent = mbshow;
  const output_wrapping = document.querySelector(".o_wrapping");
  output_wrapping.textContent = `${wrapping} Wrapp`;
  const output_cartoning = document.querySelector(".o_cartoning");
  output_cartoning.textContent = `${cartoning} Doos`;
  const output_blistering = document.querySelector(".o_blistering");
  output_blistering.textContent = `${blistering} Blister`;
};
const button = document.querySelector(".button");
button.addEventListener("click", hitungmb);
