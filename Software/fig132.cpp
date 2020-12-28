int mult_loop(int x, int y)
{
     int product = 0;

     while (y > 0) {
        product = product + x;
        y--;
     }
     return product;
}
