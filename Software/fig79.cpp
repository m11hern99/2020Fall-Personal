int x;           // global, initial value = 0
void fd()
{
   static int y; // static local, initial value = 0
   int z;        // dynamic local, initial value undefined
       .
       .
       .
}
int main()
{
   fd();
}
