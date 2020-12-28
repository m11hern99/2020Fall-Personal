int mult_shift_add(int multiplicand, unsigned multiplier)
{
   int product = 0;
   while (multiplier != 0) {
      if (multiplier & 1 == 1)          // rightmost bit == 1?
         product = product + multiplicand;
      multiplier = multiplier >> 1;     // logical shift right
      multiplicand = multiplicand << 1; // shift left
   }

   return product;
}
