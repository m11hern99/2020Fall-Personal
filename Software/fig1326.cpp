#include <iostream>
using namespace std;

class A {             // A is the base class
   public:
      void set();
      void display_x();
   protected:         // allows derived class to access x
      int x;
};
void A::set()
{
   x = 1;
}
void A::display_x()
{
   cout << x << endl;
}
class B: public A {   // B is derived from A
   public:
      void set();     // redefines set() from A
      void display_y();
   private:
      int y;
};
void B::set()         // sets both x and y
{
   x = 2;             // illegal if x is private
   y = 3;
}
void B::display_y()
{
   cout << y << endl;
}
int main()
{
   A a;
   A* aptr;
   B b;
   B* bptr;

   aptr = &a;
   aptr -> set();       // invokes set in A
   aptr -> display_x(); // invokes display_x in A--displays 1

   aptr = &b;
   aptr -> set();       // invokes set in A
   aptr -> display_x(); // invokes display_x in A--displays 1

   bptr = &b;
   bptr -> set();       // invokes set in B
   bptr -> display_x(); // invokes display_x in A--displays 2
   bptr -> display_y(); // invokes display_y in B--displays 3

   bptr ->A::set();     // invokes set in A
   bptr -> display_x(); // invokes display_x in A--displays 1

// bptr = &a;           // illegal-- bptr cannot point "up"
   return 0;
}
