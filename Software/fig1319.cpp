#include <iostream>
using namespace std;

class  Coordinates {
   public:
      void set(int a, int b);       // function prototype
      void display();               // function prototype
   private:
      int x;
      int y;
};
void Coordinates::set(int a, int b) // function definition
{
   x = a;
   y = b;
}
void Coordinates::display()         // function definition
{
   cout << "x = " <<  x << endl;
   cout << "y = " <<  y << endl;
}
int main()
{
   Coordinates c1, c2;
   c1.set(1, 2);        // access c1 through set function
   c2.set(3, 4);        // access c2 through set function
   c1.display();        // access c1 through display function
   c2.display();        // access c2 through display function
// c1.y = 22;           // illegal--y is private
   return 0;
}
