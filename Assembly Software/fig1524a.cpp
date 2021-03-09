int gv1, gv2 = 5;
int fa(int x, int y, int z)
{
   return x + y + z;
}
int main()
{
   int lv1, lv2 = 7;

   lv1 = 11;
   gv1 = fa(gv2, lv1, lv2);

   return 0;
}
