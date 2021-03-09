// module 2
int gv;
static int sgv;
static void f1()
{
   int lv;
   static int slv;
   gv = 2;
   sgv = 3;
   lv = 4;
   slv = 5;
}
void f2()
{
   gv = 6;
   sgv = 7;
   f1();
}
