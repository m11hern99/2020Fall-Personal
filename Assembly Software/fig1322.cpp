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
void B::set()        // sets both x and y
{
   x = 2;            // illegal if x is private
   y = 3;
}
void B::display_y()
{
   cout << y << endl;
}
int main()
{
   A a;
   a.set();
   a.display_x();     // displays 1
// a.display_y();     // illegal--display_y not in a
   B b;
   b.set();           // invoke set from B
   b.display_x();     // displays 2
   b.display_y();     // displays 3
   b.A::set();        // explicitly invoke set in from A
   b.display_x();     // displays 1
// a.B::set();        // illegal--B-level set not in a
   return 0;
}
