import Vue from "vue";

const numberFormat = (number) => {
  const numberFormat = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  });

  return numberFormat.format(number);
};

Vue.filter("numberFormat", numberFormat);
