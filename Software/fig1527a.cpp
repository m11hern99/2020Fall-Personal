int *gpv;
void fnull()
{}
void fd(int x)
{
   gpv = &x;
   *gpv = x + 3;
   fnull();     // forces fd to save/restore
}
int main()
{
   int lv = 7;

   fd(lv);

   return 0;
}
