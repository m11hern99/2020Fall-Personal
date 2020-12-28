void fc(int *p)
{
   *p = 99;
}
int main()
{
   int lv;
   fc(&lv);
   return 0;
}
