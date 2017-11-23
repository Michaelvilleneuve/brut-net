#!/usr/bin/env node

if (!process.argv[2]) {
  console.log('usage brut-net <brut_value> <charge_percentage>');
  process.exit(1);
} else {
  const value = parseFloat(process.argv[2]) * (1-(process.argv[3] || 23)/100) / 12;
  console.log(`You will earn approximately ${value.toFixed(2)}€ per month.`);
}
