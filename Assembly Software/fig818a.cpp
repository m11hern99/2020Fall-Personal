class S {
   public:
   int x;
   int y;
};
int main()
{
   S *p;            // declare a pointer p
   p = new S();     // create object and assign its address to p
   p -> x = 3;      // (*p).x = 3;
   p -> y = 4;      // (*p).y = 4;
}
