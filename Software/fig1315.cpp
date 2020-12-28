void f(int (*p)[4])
{
   int i = 1, j = 2;
   p[i][j] = 99;
}
int main()
{
   int d[3][4];
   f(d);
   return 0;
}
