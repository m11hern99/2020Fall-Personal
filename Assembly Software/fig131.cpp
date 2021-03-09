int mult_rec(int x, int y)
{
   if (y == 0)
      return 0;
   return mult_rec(x, y-1) + x;
}
