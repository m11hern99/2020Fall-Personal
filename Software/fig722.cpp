void fm()
{
   int x;
   int *p;

   p = &x;     // assigning address of local variable
}
void fn()
{
   fm();
}
int main()
{
   fm();
   fn();
}
